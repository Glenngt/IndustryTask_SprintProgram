const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.post('/api/message', (req, res) => {
//   const userMessage = req.body.message;
//   // Process the user message here
//   res.json({ response: `You said: ${userMessage}` });
// });

app.post('/api/message', async (req, res) => {
    const userMessage = req.body.message;
  
    try {
      const aiResponse = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: userMessage,
        max_tokens: 50
      }, {
        headers: {
          'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
          'Content-Type': 'application/json'
        }
      });
  
      const aiMessage = aiResponse.data.choices[0].text.trim();
      res.json({ response: aiMessage });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to get response from AI' });
    }
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


