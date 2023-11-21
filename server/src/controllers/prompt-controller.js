const InputPrompt = require("../models/input-prompt");

const openai = require("../config/openai");

module.exports = {
    async sendText(req, res){
        const openAPI = openai.configuration();
        const InputModel = new InputPrompt({prompt: req.body.text});

        try{
            const response = await openai.completion(InputModel);

            return res.status(200).json({
                success: true,
                status: "success",
                data: response.data.choices[0].text
            });
        } catch {
            return res.status(400).json({
                success: false,
                error: error.response ? error.response : error,
                status: "error",
                message: "Internal server error"
            });
        }
    }
}