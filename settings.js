/*

  !- Credits By Mamix
  https://wa.me/62895359670059
  
*/

const chalk = require("chalk");
const fs = require("fs");
const { version } = require("./package.json")
//============< Settings Bot >============//
global.usePairingCode = true
global.owner = '6288226579576'
global.versi = version
global.namaOwner = "ᴍᴀᴍɪx"
global.packname = "Bot WhatsApp"
global.botname = "ᴍᴀᴍɪx sɪᴍᴘʟᴇ"
global.botname2 = "ᴍᴀᴍɪx sɪᴍᴘʟᴇ"

//============< Settings Link >============//
global.idChannel = "120363411804377677@newsletter"
global.namaChannel = "!- Skyzopedia Testimoni"
global.linkChannel = "https://whatsapp.com/channel/0029Vb8cgMEH5JLqiOEdbH1t"
global.idChannel2 = [
  "120363419495456788@newsletter",
  "120363355241958923@newsletter"
]; // Ini Buat Case Req Fitur

//============< Settings Delay >============//
global.delayJpm = 3500
global.delayPushkontak = 6000

//============< Settings Api Create Panel >============//
global.egg = "15" // Isi id egg
global.nestid = "5" // Isi id nest
global.loc = "1" // Isi id location
global.domain = "-"
global.apikey = "-" // Isi api ptla
global.capikey = "-" // Isi api ptlc

//============< Settings Image >============//
global.image = {
menu: "https://img102.pixhost.to/images/154/557707527_skyzopedia.jpg", 
reply: "https://img102.pixhost.to/images/154/557707527_skyzopedia.jpg", 
logo: "https://img102.pixhost.to/images/154/557707527_skyzopedia.jpg", 
qris: "https://img0.pixhost.to/images/915/557749762_skyzopedia.jpg"
}

//============< Settings Api Subdomain >============//
global.subdomain = {
  "vipserver.web.id": {
    "zone": "e305b750127749c9b80f41a9cf4a3a53",
    "apitoken": "miYhd-eMAiUmp9MniS6EsKFXnJ8D4Rofp9-GYHZw"
  },
  "mypanelstore.web.id": {
    "zone": "c61c442d70392500611499c5af816532",
    "apitoken": "gqg5B6_1UQhb72wg4zS1U7AGNbofMYRXT8zFiKZC"
  },
  "privatserver.my.id": {
    "zone": "699bb9eb65046a886399c91daacb1968",
    "apitoken": "KBkS9zIPdG0blhqtPMUjG8z8x8xumauCRuXvY_E1"
  },
  "serverku.biz.id": {
    "zone": "4e4feaba70b41ed78295d2dcc090dd3a",
    "apitoken": "b4YP7XhbliFuqgiXnz3gBvrmXfzgxuKQIkXEJjM7"
  },
  "skyzopedia.xyz": {
    "zone": "4252a8c37f07d26c533683405e22cd3e",
    "apitoken": "OgRcjkpZ0ESvWKHJTmpO7OuNgPSw0H8Et44MIu2Y"
  }
}

//============< Settings Message >============//
global.mess = {
	owner: "*[ Akses Ditolak ]*\nFitur ini hanya untuk owner bot!",
	admin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk admin grup!",
	botAdmin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam grup!",
	private: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam private chat!",
	prem: "*[ Akses Ditolak ]*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blue(">> Update File :"), chalk.black.bgWhite(`${__filename}`))
delete require.cache[file]
require(file)
})