//UDAH GUA KASIH NO ENC NI;)
//KEBANGETAN KALO BELUM SUBSCRIBE
//HAYO LAH KAWAN MANA HATI KALIAN;)
//Subscribe "Zea Official"
//Hargai Bang;(
const { WAConnection, Browsers } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
baterai = 'unknown'
charging = 'unknown'

//nocache
require('./Zea.js')
nocache('../Zea.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

const starts = async (Zea = new WAConnection()) => {
	Zea.logger.level = 'warn'
	console.log(color(figlet.textSync('ZEA BOT, Cuma Hasil Recode akeowkwowkeokek', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 50,
		whitespaceBreak: true
	}), 'cyan')),
	console.log(color('Jangan Lupa Subscribe Channel ', 'cyan'), color('\nZeaBot Official', 'red'))
	Zea.browserDescription = ["Zea Bot", "Chrome", "3.0.0"];

	// Menunggu QR
	Zea.on('qr', () => {
		console.log(color('[', 'pink'), color('!', 'red'), color(']', 'pink'), color('SCAN COK'))
	})

	// Menghubungkan
	fs.existsSync(`./${setting.sessionName}.json`) && Zea.loadAuthInfo(`./${setting.sessionName}.json`)
	Zea.on('connecting', () => {
		console.log(color('[ Zea Bot ]', 'yellow'), color('Lagi Nyambung Bentar...'));
	})
const spinner = { 
  "interval": 120,
  "frames": [
    "P",
    "OY",
    "TOD",
    "UDAH",
    "SUBSS",
    "BELOM?",
    "KLOBLOM",
    "MOGA LU T",
    "MOGA LU TA",
    "MOGA LU TAI",
    "AWOKOAKWOK"
  ]}

	//connect
	//Zea.sendMessage(`${set.owner}`, `ππΌπ πππππ ${set.owner}!!\nπ½ππ πππΏπΌπ πππΎπΎππ πΎπππππΎπ\nππΌπππΌπ ππππΌ πππ½ππΎπππ½π ππππ½ππΌπ ππΎππππ πππ\n\n\nπΎπππΏππ\nπππ’π : πππ\nππ€π’π€π§ : π¬π.π’π/6281238142144\nππ© : πππππ¨π­ ππππ’ππ’ππ₯\nπππ£πππ£ ππͺπ₯π ππ¨π\nUdh Itu Aja`, MessageType.text)+
	Zea.on('open', () => {
		console.log(color('[HC]', 'white'), color('Bot Dah Connect'));
		console.log(color('π --------------------[PesanMasuk]--------------------', 'white'), color ('π'));
	})
	

	// session
	await Zea.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(Zea.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	Zea.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	Zea.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// welcome
	Zea.on('group-participants-update', async (anu) => {
		await welcome(Zea, anu)
	})

	Zea.on('chat-update', async (message) => {
		require('./Zea.js')(Zea, message)
	})
}

starts()