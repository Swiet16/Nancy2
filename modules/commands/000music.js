const axios = require("axios");
const fs = require("fs-extra");
const ytdl = require("shankar-youtube-api");
const yts = require("yt-search");

module.exports.config = {
    name: "music",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Jonell Magallanes",
    description: "Play a music",
    commandCategory: "Utility",
    usages: "music (search)",
    usePrefix: false,
    cooldowns: 30,
};

module.exports.run = async function ({ api, event }) {
    const input = event.body;
    const text = input.substring(12);
    const data = input.split(" ");

    if (data.length < 2) {
        return api.sendMessage("Please put a song", event.threadID);
    }

    data.shift();
    const song = data.join(" ");

    try {
        api.sendMessage(`Finding "${song}". Please wait...`, event.threadID);

        const searchResults = await yts(song);

        if (!searchResults || !searchResults.videos || searchResults.videos.length === 0) {
            return api.sendMessage("Error: No videos found.", event.threadID, event.messageID);
        }

        const video = searchResults.videos[0];
        const videoUrl = video.url;

        const stream = ytdl(videoUrl, { filter: "audioonly" });

        const fileName = `${event.senderID}.mp3`;
        const filePath = __dirname + `/cache/${fileName}`;

        stream.pipe(fs.createWriteStream(filePath));

        stream.on('response', () => {
            console.info('[DOWNLOADER]', 'Starting download now!');
        });

        stream.on('info', (info) => {
            console.info('[DOWNLOADER]', `Downloading ${info.videoDetails.title} by ${info.videoDetails.author.name}`);
        });

        stream.on('end', () => {
            console.info('[DOWNLOADER] Downloaded');

            if (fs.statSync(filePath).size > 26214400) {
                fs.unlinkSync(filePath);
                return api.sendMessage('[ERR] The file could not be sent because it is larger than 25MB.', event.threadID);
            }

            const message = {
                body: `Here's your music, enjoy!🥰\n\nTitle: ${video.title}\nArtist: ${video.author.name}`,
                attachment: fs.createReadStream(filePath)
            };
            api.sendMessage(message, event.threadID, () => {
                fs.unlinkSync(filePath);
            });
        });
    } catch (error) {
        console.error('[ERROR]', error);
        api.sendMessage('An error occurred while processing the command.', event.threadID);
    }
};
