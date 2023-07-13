import openaiClient from "./api.js";

const generate = async (queryDescription) => {
    const message = [
      { role: "system", content: `You are a translator from plain English to SQL.` },
      { role: "user", content: `Convert the following natural language description into a SQL query:\n\n${queryDescription}` },
    ];
    const response = await openaiClient.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: message,
    });

    return response.data.choices[0].message.content;
  }


export default generate;