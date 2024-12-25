import { useState } from 'react';
import MessageInput from '../components/MessageInput';

const Compose = () => {
  const [emailData, setEmailData] = useState(null);

  const handleSubmit = async (emailData) => {
    const res = await fetch('/api/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(emailData),
    });

    if (res.ok) {
      setEmailData(await res.json());
    } else {
      console.error('Failed to send email');
    }
  };

  return (
    <div>
      <h2>Compose New Email</h2>
      <MessageInput onSubmit={handleSubmit} />
    </div>
  );
};

export default Compose;
