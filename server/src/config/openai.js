// This code is for v4 of the openai package: npmjs.com/package/openai
import OpenAI from "openai";

module.exports = class openai{
    static configuration(){
        const configuration = new OpenAI.Configuration({
            apiKey: process.env.OPENAI_API_KEY,
            engine: "davinci",
        });
        return configuration;
    }

    static async completion({prompt}){
        return await OpenAI.Completions.create({
            engine: "davinci",
            prompt: prompt,
            temperature: 0.9,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ["\n"]
        });
    }
};
