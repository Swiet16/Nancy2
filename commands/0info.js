module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/karachi").format("『D/MMM/YYYY』 【hh:mm:ss】");
var link =["https://i.imgur.com/ncjaklz.jpeg", 
            
            "https://i.imgur.com/ncjaklz.jpeg", 
            
            "https://i.imgur.com/ncjaklz.jpeg",

            "https://i.imgur.com/ncjaklz.jpeg",
       
              "https://i.imgur.com/ncjaklz.jpeg",

                    "https://i.imgur.com/ncjaklz.jpeg"];
  
var callback = () => api.sendMessage({body:` 

𓆩────ೋღ😜ღೋ──𓆪
   𓆩🅜𝐘巛𝐈͠𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍
🍂🍂 ....... ...👑... ....... 🍂🍂
        𝐒𝐞𝐥𝐟​ ᭄𝐍𝐚𝐦𝐞𓆪 
      𓆩😘🅟𝗶𝗸𝗮巛🅟𝗶𝗶😍𓆪
𝐌𝐲 𝐒𝐭𝐚𝐫𝐭𝐞𝐫  ​｟  ${global.config.PREFIX}  ｠ 👈 
 ♡ ______ ❤👑❤______♡                          
  ╭┳≛✿≛╤╤ ────────►
  ✿≛ ᯓ​𝐎𝐰𝐧𝐞𝐫  🅐𝘇𝗶𝘇 ≛巛❥► 
  ╰┻≛✿≛╧╧═𝐒𝘄𝗶𝗲𝘁𝟭𝟲─►
         𝐁𝐞𝐢𝐧𝐠  𝐈𝐦𝐦𝐚 𝐊𝐢𝐧𝐠
         ⁱᵐᵐᵃ ᵏⁱˡˡⁱⁿᵍ ᵖᵉʳˢᵒⁿ ʷʰᵒ
            ʲᵘˢᵗ ᵐᵃᵏⁱⁿᵍ  ʷʳᵒⁿᵍ 
 ᯓ  𝐈ᴍ ᴀ 𝐑ᴀᴘᴘᴇʀ,巛😜
         ᯓ   𝐘ᴏᴜᴛᴜʙᴇʀ巛🥰
                    ᯓ   𝐄ᴅɪᴛᴏʀ巛😍
  ᯓ ᵛⁱˢⁱᵗ 𝐖𝐞𝐛𝐬𝐢𝐭𝐞巛
https://𝐬𝐰𝐢𝐞𝐭𝟏𝟔.𝐟𝐚𝐬𝐡𝐢𝐨𝐧.𝐛𝐥𝐨𝐠

 𝐀𝐝𝐦𝐢𝐧 : ♡​᭄  𓆩♥︎🅐z͜͡izིྀི𓆪

────ೋღ😜ღೋ───── 

➩𝗧𝗼𝗱𝗮𝘆 𝗗𝗮𝘁𝗲   &    𝗧𝗶𝗺𝗲 
${juswa} 
       𝗜𝗺 𝘄𝗮𝗸𝗲 𝗨𝗽 𝗧𝗶𝗹𝗹
    ☞   ${hours}:${minutes}:${seconds}   ☜
────ೋღ😜ღೋ─────
 
   𝗶𝗳 𝘆𝗼𝘂 𝗕𝗼𝗿𝗲𝗱 𝗝𝘂𝘀𝘁 𝗧𝘆𝗽𝗲 
          ≫巛🅑🅞🅣 


‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎`,attachment: fs.createReadStream(__dirname + "/cache/1j.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1j.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1j.jpg")).on("close",() => callback());
   };