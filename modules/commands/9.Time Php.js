module.exports.config = {
	name: "phil",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "See what time in Phil",
	commandCategory: "Other", 
	usages: "time", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args, Currencies, utils, Users }) {
	const moment = require("moment");
	var time= moment.tz("Asia/Manila").format("LLL"); 
	let data = await api.getUserInfo(event.senderID);
    let name = await data[event.senderID].name
    return api.sendMessage(`ㅤ\nㅤㅤ       ٭CLOCK INFOᯤᯱᯱᯱᯱᯱᯱ ᯤᯱᯱᯱ\n    ♥︎𝐓𝐈𝐌𝐄 𝐈𝐍 𝐏𝐇𝐋𝐈𝐏𝐇𝐈𝐍𝐄\n╭──────────────♥︎╮\n➩  𝐃𝐀𝐓𝐄 & 𝐓𝐈𝐌𝐄  \n➥${time}\n╰♥︎──────────────╯  ★\n                                 ❤❤❤\n➢${name}࿐\n   ❍⌇─➭ENJOY ALL MOMENTS\n😘😘😘\n★\nㅤ`, event.threadID, event.messageID)
}