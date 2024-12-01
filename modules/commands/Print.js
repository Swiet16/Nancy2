module.exports = {
  config: {
    name: "print",
    version: "1.0.0",
    author: "Aziz",
    countDown: 5,
    role: 0,
    category: "fun",
    shortDescription: "Reply to a picture and add text",
    longDescription: "This command allows users to reply to an image, add custom text, and receive the modified image.",
    guide: "{pn} <your text> (reply to a picture)"
  },

  onStart: async function ({ api, event, args }) {
    const { loadImage, createCanvas, registerFont } = require("canvas");
    const fs = require("fs-extra");
    const axios = require("axios");

    const { senderID, threadID, messageID, messageReply, body } = event;
    const pathImg = `${__dirname}/${senderID}.png`;

    // Ensure the user replied to an image
    if (!messageReply || !messageReply.attachments || messageReply.attachments.length === 0) {
      return api.sendMessage("Please reply to a picture.", threadID, messageID);
    }

    const attachment = messageReply.attachments[0];
    if (attachment.type !== "photo") {
      return api.sendMessage("Please reply to a picture.", threadID, messageID);
    }

    try {
      // Download the image
      const imgBuffer = (await axios.get(attachment.url, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(pathImg, imgBuffer);

      // Load image and prepare canvas
      const baseImage = await loadImage(pathImg);
      const canvas = createCanvas(baseImage.width, baseImage.height);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);

      // Register a custom font
      registerFont(`${__dirname}/Rockybilly.ttf`, { family: "Rockybilly" });

      // Configure text
      ctx.font = "bold 75px Rockybilly";
      ctx.fillStyle = "#ffc0cb"; // Pink color for text
      ctx.strokeStyle = "#000000"; // Black border
      ctx.lineWidth = 4;
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";

      const text = args.join(" ");
      if (!text) return api.sendMessage("Please provide the text to add.", threadID, messageID);

      // Draw text on the image
      ctx.strokeText(text, canvas.width / 2, canvas.height - 50);
      ctx.fillText(text, canvas.width / 2, canvas.height - 50);

      // Save and send the edited image
      const imageBuffer = canvas.toBuffer();
      fs.writeFileSync(pathImg, imageBuffer);

      return api.sendMessage(
        { attachment: fs.createReadStream(pathImg) },
        threadID,
        () => fs.unlinkSync(pathImg),
        messageID
      );
    } catch (error) {
      console.error(error);
      return api.sendMessage("An error occurred while processing the image.", threadID, messageID);
    }
  }
};
