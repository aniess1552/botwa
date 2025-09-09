/*

  !- Credits By Mamix
  https://wa.me/62895359670059
  
*/

process.on("uncaughtException", (err) => {
console.error("Caught exception:", err);
});

require("./settings.js")
require("./Control/Function.js")
const {
	default: makeWASocket,
	makeCacheableSignalKeyStore,
	useMultiFileAuthState,
	DisconnectReason,
	fetchLatestBaileysVersion,
	generateForwardMessageContent,
	prepareWAMessageMedia,
	generateWAMessageFromContent,
	generateMessageID,
	downloadContentFromMessage,
	makeInMemoryStore,
	getContentType,
	jidDecode,
    MessageRetryMap,
	proto,
	delay
} = require("@whiskeysockets/baileys")

const Pino = require('pino');
const { Boom } = require('@hapi/boom');
const fs = require('fs');
const readline = require("readline")
const chalk = require("chalk");
const qrcode = require("qrcode-terminal");
const FileType = require('file-type');
const ConfigBaileys = require("./Control/Config.js");

async function InputNumber(promptText) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(promptText, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

const DataBase = require('./Control/database');
const database = new DataBase();
(async () => {
const loadData = await database.read()
if (loadData && Object.keys(loadData).length === 0) {
global.db = {
users: {},
groups: {},
database: {},
settings : {}, 
...(loadData || {}),
}
await database.write(global.db)
} else {
global.db = loadData
}
setInterval(async () => {
if (global.db) await database.write(global.db)
}, 3500)
})()

const { MessagesUpsert, Solving } = require('./Control/message')
const { isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, generateToken } = require('./Control/Function');
const { welcomeBanner, promoteBanner } = require("./Control/welcome.js")

async function startingBot() {
    const store = await makeInMemoryStore({ logger: Pino().child({ level: 'silent', stream: 'store' }) })
    const { state, saveCreds } = await useMultiFileAuthState('sessions');
    const pairingCode = true
    const baileysVersion = await fetch(
            "https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json"
        ).then((res) => res.json()).then((data) => data.version);

    const sock = makeWASocket({
        version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
        browser: ['Ubuntu', 'Safari', '18.1'],
        generateHighQualityLinkPreview: true,
        printQRInTerminal: !pairingCode,
        auth: state,        
        logger: Pino({ level: "silent" })
    });
    
    if (pairingCode && !sock.authState.creds.registered) {
    let phoneNumber = await InputNumber(chalk.blue.bold('Masukan Nomor WhatsApp :\n'));
    phoneNumber = phoneNumber.replace(/[^0-9]/g, "")
        setTimeout(async () => {
        const code = await sock.requestPairingCode(phoneNumber, "aaaaaaaa")
        await console.log(`${chalk.blue.bold('Kode Pairing')} : ${chalk.white.bold(code)}`)
        }, 4000)
    }

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on("connection.update", async ({ receivedPendingNotifications, connection, lastDisconnect, qr }) => {
            if (!connection) return;
            if (connection === "connecting") {
            if (qr && !pairingCode) {
            console.log("Scan QR ini di WhatsApp:");
            qrcode.generate(qr, { small: true }); 
            }
            }
            if (connection === "close") {
                const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
                console.error(lastDisconnect.error);

                switch (reason) {
                    case DisconnectReason.badSession:
                        console.log("Bad Session File, Please Delete Session and Scan Again");
                        process.exit();
                    case DisconnectReason.connectionClosed:
                        console.log("[SYSTEM] Connection closed, reconnecting...");
                        process.exit();
                    case DisconnectReason.connectionLost:
                        console.log("[SYSTEM] Connection lost, trying to reconnect...");
                        process.exit();
                    case DisconnectReason.connectionReplaced:
                        console.log("Connection Replaced, Another New Session Opened. Please Close Current Session First.");
                        await sock.logout();
                        break;
                    case DisconnectReason.restartRequired:
                        console.log("Restart Required...");
                        return startingBot();
                    case DisconnectReason.loggedOut:
                        console.log("Device Logged Out, Please Scan Again And Run.");
                        await sock.logout();
                        break;
                    case DisconnectReason.timedOut:
                        console.log("Connection TimedOut, Reconnecting...");
                        return startingBot();
                    default:
                        if (lastDisconnect.error === "Error: Stream Errored (unknown)") {
                            process.exit();
                        }
                }
            } else if (connection === "open") {
                sock.sendMessage(sock.user.id.split(":")[0] + "@s.whatsapp.net", {text: `${`Berhasil Terhubung ✅`.toString()}`})
                console.log(chalk.blue.bold(`Mamix-Simple Connected ✓\n\n`))
generateToken(sock)
} else if (receivedPendingNotifications == 'true') {
console.log('Please wait About 1 Minute...')
}})

await store.bind(sock.ev)	
await Solving(sock, store)
	
sock.ev.on('messages.upsert', async (message) => {
await MessagesUpsert(sock, message, store);
})

sock.ev.on('contacts.update', (update) => {
for (let contact of update) {
let id = 
sock.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}})
	
sock.ev.on('group-participants.update', async (update) => {
const { id, author, participants, action } = update
try {
const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: { "extendedTextMessage": {"text": "[ 𝗚𝗿𝗼𝘂𝗽 𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 ]"}}}

if (global.db.groups[id] && global.db.groups[id].welcome == true) {
const metadata = await sock.groupMetadata(id)
let teks
for(let n of participants) {
let profile;
try {
profile = await sock.profilePictureUrl(n, 'image');
} catch {
profile = 'https://telegra.ph/file/95670d63378f7f4210f03.png';
}
if (action == 'add') {
teks = author.split("").length < 1 ? `@${n.split('@')[0]} join via *link group*` : author !== n ? `@${author.split("@")[0]} telah *menambahkan* @${n.split('@')[0]} kedalam grup` : ``
let img = await welcomeBanner(profile, n.split("@")[0], metadata.subject, "welcome")
await sock.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "W E L C O M E 👋", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'remove') {
teks = author == n ? `@${n.split('@')[0]} telah *keluar* dari grup` : author !== n ? `@${author.split("@")[0]} telah *mengeluarkan* @${n.split('@')[0]} dari grup` : ""
let img = await welcomeBanner(profile, n.split("@")[0], metadata.subject, "remove")
await sock.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "G O O D B Y E 👋", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'promote') {
teks = author == n ? `@${n.split('@')[0]} telah *menjadi admin* grup ` : author !== n ? `@${author.split("@")[0]} telah *menjadikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
let img = await promoteBanner(profile, n.split("@")[0], "promote")
await sock.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "P R O M O T E 📍", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'demote') {
teks = author == n ? `@${n.split('@')[0]} telah *berhenti* menjadi *admin*` : author !== n ? `@${author.split("@")[0]} telah *menghentikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
let img = await promoteBanner(profile, n.split("@")[0], "demote")
await sock.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: img, 
title: "D E M O T E 📍", 
body: "", 
sourceUrl: global.linkGrup, 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
}}}
} catch (e) {
}
})

return sock

}


startingBot()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});