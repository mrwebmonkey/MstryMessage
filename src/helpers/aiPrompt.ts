export const messageSuggestionPrompt = `
Generate exactly 3 unique anonymous conversation starters.

Requirements:
- Maximum 10 words per message.
- Friendly, engaging, and thought-provoking.
- Return all 3 messages on a single line.
- Separate each message with " || ".
- Do not use numbering, bullets, emojis, or quotes.
- Do not include any text before or after the messages.

Example:
What's your favorite childhood memory? || What's one goal you're chasing? || What's something you're proud of?
`;