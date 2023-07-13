import { Configuration, OpenAIApi } from "openai";
import 'dotenv/config';


const openaiApiKey = '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';
console.log(openaiApiKey)

if (!openaiApiKey) {
  console.error('OPENAI_API_KEY is not set.');
  process.exit(1);
}

const configuration = new Configuration({
  apiKey: openaiApiKey,
});
const openai = new OpenAIApi(configuration);

export default openai;