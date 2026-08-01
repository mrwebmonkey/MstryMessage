import { messageSuggestionPrompt } from "@/helpers/aiPrompt";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export async function POST() {
    try {
        const { text } = await generateText({
            model: google("gemini-3.6-flash"),
            prompt: messageSuggestionPrompt,
        });

        // console.log(text);

        return Response.json({
            success: true,
            messages: text,
        });

    } catch (error) {
        console.error(error);

        return Response.json(
            {
                success: false,
                message: "Failed to generate messages.",
            },
            { status: 500 }
        );
    }
}
