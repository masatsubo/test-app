import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Paper, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1),
}));

const StyledSubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

const StyledErrorMessage = styled(Typography)(({ theme }) => ({
  color: 'red',
  marginTop: theme.spacing(2),
}));

function AIAssistant() {
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: `魚屋の店員: ${input}\n客:`,
        max_tokens: 150,
        temperature: 0.7,
        n: 1,
        stop: ["\n", "魚屋の店員:"],
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      const aiResponse = response.data.choices[0].text.trim();
      setConversation([...conversation, { user: input, ai: aiResponse }]);
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      setError('AIアシスタントとの通信中にエラーが発生しました。しばらくしてからもう一度お試しください。');
    }

    setIsLoading(false);
    setInput('');
  };

  return (
    <StyledContainer>
      <Typography component="h1" variant="h5">
        AIアシスタント
      </Typography>
      <div>
        {conversation.map((item, index) => (
          <StyledPaper key={index}>
            <Typography><strong>あなた:</strong> {item.user}</Typography>
            <Typography><strong>AI:</strong> {item.ai}</Typography>
          </StyledPaper>
        ))}
      </div>
      <StyledForm onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="question"
          label="質問を入力してください"
          name="question"
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
        />
        <StyledSubmitButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={isLoading}
        >
          {isLoading ? <CircularProgress size={24} /> : '送信'}
        </StyledSubmitButton>
      </StyledForm>
      {error && (
        <StyledErrorMessage>
          {error}
        </StyledErrorMessage>
      )}
    </StyledContainer>
  );
}

export default AIAssistant;