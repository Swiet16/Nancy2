const axios = require("axios");
const request = require("request");
const fs = require("fs");

module.exports.config = {
  name: "shoti",
  version: "1.0.0",
  credits: "libyzxy0",
  description: "Generate random tiktok girl videos",
  hasPermssion: 0,
  commandCategory: "other",
  usage: "[shoti]",
  cooldowns: 5,
  dependencies: [],
  usePrefix: true
};

module.exports.run = async function({ api, event }) {
  try {
    const response = await axios.get('https://betadash-shoti-yazky.vercel.app/shotizxx?apikey=shipazu');
    const videoData = response.data;

    // Extract video file extension and set file path
    const ext = videoData.shotiurl.split('.').pop();
    const filePath = __dirname + `/cache/shoti.${ext}`;

    // Define the callback function to send the video and clean up the file
    const callback = () => {
      api.sendMessage({
        body: `🎥 | Here's a random Shoti Video: ${videoData.title || 'No title'}\n\n📍 Region: ${videoData.region}\n⏳ Duration: ${videoData.duration} seconds\n👤 User: ${videoData.nickname} (@${videoData.username})\n\n📹 Watch it here: ${videoData.shotiurl}`,
        attachment: fs.createReadStream(filePath)
      }, event.threadID, () => fs.unlinkSync(filePath), event.messageID);
    };

    // Ensure the cache folder exists
    if (!fs.existsSync(__dirname + '/cache')) {
      fs.mkdirSync(__dirname + '/cache');
    }

    // Download the video and save it to the cache
    request(videoData.shotiurl)
      .pipe(fs.createWriteStream(filePath))
      .on('close', callback)
      .on('error', (err) => {
        console.error('Error downloading video:', err);
        api.sendMessage("🚨 | Error fetching video. Please try again later.", event.threadID, event.messageID);
        api.setMessageReaction("😢", event.messageID, (err) => {}, true);
      });

  } catch (err) {
    console.error('API error:', err);
    api.sendMessage("🚨 | Error fetching video. Please try again later.", event.threadID, event.messageID);
    api.setMessageReaction("😢", event.messageID, (err) => {}, true);
  }
};
