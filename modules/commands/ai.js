const axios = require('axios');

module.exports.config = {
	name: 'ai',
	version: '1.0.0',
	hasPermssion: 0,
	credits: 'coffee added apis by Gwapo ako',
	description: 'AI to answer any question',
	commandCategory: 'ai',
	usages: '',
	cooldowns: 5
};

// Function to fetch data from the AI service
async function fetchFromAI(url, params) {
	try {
		const { data } = await axios.get(url, { params });
		const response = data.result || data.gpt4 || data.result?.reply || data.reply || data.response || data.answer || data.message;
		if (typeof response === 'string') {
			console.log("AI Response:", response);
			return response;
		}
		return null;
	} catch (error) {
		console.error("Error in fetchFromAI:", error.message);
		return null;
	}
}

// Function to fetch the answer from AI services
async function getAnswerFromAI(question, senderID) {
	const uid = senderID;
	const services = [
		{ url: 'https://smfahim.xyz/gemini', params: { ask: question } },
		{ url: 'https://sandipbaruwal.onrender.com/gpt', params: { prompt: question } },
		{ url: 'https://www.samirxpikachu.run.place/gpt', params: { content: question, limit: 4, fullLimit: 3, uid: uid } },
		{ url: 'https://www.samirxpikachu.run.place/ai-search', params: { q: question, uid: uid } },
		{ url: 'https://www.samirxpikachu.run.place/bing', params: { message: question, mode: 'value', uid: uid } },
		{ url: `https://sandipbaruwal.onrender.com/copilot`, params: { prompt: question, uid: uid } }
	];

	for (const service of services) {
		const data = await fetchFromAI(service.url, service.params);
		if (data) return data;
	}

	throw new Error("No valid response from any AI service");
}

module.exports.run = async ({ api, event, args }) => {
	try {
		const question = args.join(" ").trim();

		if (!question) {
			return api.sendMessage("Please provide a question to get an answer.", event.threadID, event.messageID);
		}

		// Check if the message contains "ai" or "Ai" and react to it
		if (event.body.toLowerCase().includes('ai')) {
			api.setMessageReaction('🧐', event.messageID, (err) => {}, true);
		}

		const response = await getAnswerFromAI(question, event.senderID);
		await api.sendMessage(response, event.threadID, event.messageID);

	} catch (error) {
		console.error("Error in AI command:", error.message);
		api.sendMessage("An error occurred while processing your request.", event.threadID, event.messageID);
	}
};
