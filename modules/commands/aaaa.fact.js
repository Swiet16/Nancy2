module.exports.config = {
	name: "fact",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Siegfried Sama",
	description: "random facts",
	commandCategory: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const res = await axios.get(`https://nash-rest-api.replit.app/fact`);
var fact = res.data.fact;
return api.sendMessage(`Did you know? ${fact}`, event.threadID, event.messageID)
}
