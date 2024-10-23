const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
 
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "write a script to generate 30 seconds video on topic: interesting historical story along with AI image prompt in realistic format for each scene and give me result in JSON format with imagePrompt and ContentText as field\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"imagePrompt\": \"A bustling medieval marketplace, filled with people bartering for goods. The sun shines brightly, casting long shadows. There's a colorful assortment of fruits, vegetables, and crafts on display.\",\n    \"ContentText\": \"In the heart of 14th century Florence, a young artist named Leonardo da Vinci was making a name for himself. He was known for his meticulous drawings and innovative ideas, but he also had a rebellious spirit.\"\n  },\n  {\n    \"imagePrompt\": \"Leonardo da Vinci, a young man with a thoughtful expression, sketching in a notebook. He is surrounded by tools and materials for art and engineering.\",\n    \"ContentText\": \"One day, while sketching in the bustling marketplace, Leonardo noticed a group of people gathered around a street performer. The performer was a blind man, known for his uncanny ability to predict the future.\"\n  },\n  {\n    \"imagePrompt\": \"A blind street performer, holding a staff, surrounded by a curious crowd. He has a solemn expression, as if lost in thought.\",\n    \"ContentText\": \"Leonardo was intrigued. He approached the performer, asking him to read his future. The performer's prediction was unexpected: 'You will be remembered, Leonardo, but not for your art. Your greatest achievements will be in the realm of science.'\"\n  },\n  {\n    \"imagePrompt\": \"Leonardo, looking surprised and skeptical, as the blind performer continues his prediction. The marketplace background is blurred, emphasizing the interaction.\",\n    \"ContentText\": \"Leonardo was skeptical. He couldn't imagine a life outside of art. But the performer's words stuck with him. As the years passed, Leonardo's fascination with science grew, eventually eclipsing his passion for painting.\"\n  },\n  {\n    \"imagePrompt\": \"Leonardo da Vinci, older and more mature, examining a human anatomy model. The background shows a workshop filled with tools and scientific instruments.\",\n    \"ContentText\": \"He dissected bodies, explored the mechanics of flight, and even designed innovative machines. His legacy as a scientist would indeed surpass his fame as an artist.\"\n  },\n  {\n    \"imagePrompt\": \"A close-up of a sketch of a flying machine, resembling a modern helicopter, on a sheet of paper. Leonardo's hand hovers over it, as if about to add more details.\",\n    \"ContentText\": \"The blind performer's prediction may have been a coincidence, but it inspired Leonardo to pursue his true potential. He became a true Renaissance man, leaving behind a legacy that continues to inspire us centuries later.\"\n  }\n]\n```\n\n**Explanation:**\n\n* **Each JSON object represents a scene** within the 30-second video.\n* **`imagePrompt`:** Provides a detailed description of the scene for the AI image generator.\n* **`ContentText`:** Contains the narration or dialogue for that scene, driving the historical narrative.\n\n**Using this JSON:**\n\n1. **AI Image Generation:** Use an AI image generator (like DALL-E 2, Midjourney, or Stable Diffusion) to create images based on each `imagePrompt`.\n2. **Video Editing:**  Combine the generated images with the corresponding `ContentText` to create a video. You can use software like Adobe Premiere Pro, Final Cut Pro, or DaVinci Resolve for editing.\n\n**Additional Notes:**\n\n* The number of scenes and the content of each scene can be adjusted based on your desired video length and pacing.\n* The `imagePrompt` can be further refined to control the style, composition, and specific elements of the images.\n* The `ContentText` can be adapted to your voiceover style, including adding sound effects, background music, or dialogue.\n"},
          ],
        },
      ],
    });
  
