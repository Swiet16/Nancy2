const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);


module.exports = {
	config: {
		name: "v",
		version: "1.1",
		author: "NIB",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "",
			en: ""
		},
		longDescription: {
			vi: "",
			en: ""
		},
		category: "",
		guide: "",
		
	},

onStart: async function ({ event, message, getLang, usersData, api, args}) {

let completion = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: args.join(" "),
  temperature: 0.7,
  max_tokens: 974,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
   })
  //console.log(completion.data)
message.reply(completion.data.choices[0].text);
  
}
    }