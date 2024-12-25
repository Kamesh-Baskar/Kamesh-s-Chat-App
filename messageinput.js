import { useState } from 'react';
import { Input, Textarea, Button } from '@nextui-org/react';

const MessageInput = ({ onSubmit }) => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [to, setTo] = useState('');

  const handleSend = () => {
    onSubmit({ subject, message, to });
  };

  return (
    <div>
      <Input
        clearable
        label="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <Input
        clearable
        label="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <Textarea
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={6}
      />
      <Button onClick={handleSend}>Send</Button>
    </div>
  );
};

export default MessageInput;
