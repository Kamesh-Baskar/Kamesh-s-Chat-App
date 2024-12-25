import { useState, useEffect } from 'react';
import { Text, Container, Row, Col, Card, Button } from '@nextui-org/react';
import ChatBox from '../components/ChatBox';

const Home = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    // Fetch email data from API
    const fetchEmails = async () => {
      const res = await fetch('/api/email');
      const data = await res.json();
      setEmails(data);
    };
    fetchEmails();
  }, []);

  return (
    <Container>
      <Row justify="center">
        <Col span={12}>
          <Text h2>Email Conversation</Text>
          <ChatBox emails={emails} />
          <Button href="/compose" color="primary" auto>
            Compose New Email
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
