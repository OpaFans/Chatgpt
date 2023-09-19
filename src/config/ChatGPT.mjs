import dotenv from "dotenv";
dotenv.config();

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.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,
});

export const openai = new OpenAIApi(configuration);
