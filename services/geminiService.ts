import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key is missing");
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey });

  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: AI_SYSTEM_INSTRUCTION,
    },
  });

  return chatSession;
};

export const sendMessageStream = async (
  message: string,
  onChunk: (text: string) => void
): Promise<void> => {
  try {
    const chat = initializeChat();
    const result = await chat.sendMessageStream({ message });

    for await (const chunk of result) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        onChunk(c.text);
      }
    }
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    onChunk("I apologize, but I'm having trouble connecting to the neural network right now. Please try again later.");
  }
};