import { Card, Text, Row, Col } from '@nextui-org/react';

const ChatBox = ({ emails }) => {
  // Function to group emails by subject
  const groupBySubject = (emails) => {
    const grouped = {};
    emails.forEach(email => {
      const subject = email.subject || "No Subject";
      if (!grouped[subject]) grouped[subject] = [];
      grouped[subject].push(email);
    });
    return grouped;
  };

  const groupedEmails = groupBySubject(emails);

  return (
    <div>
      {Object.keys(groupedEmails).map((subject) => (
        <div key={subject}>
          <Text h3>{subject}</Text>
          {groupedEmails[subject].map((email) => (
            <Card key={email.id} css={{ marginBottom: '10px' }}>
              <Row>
                <Col span={4}><Text>{email.from_name}</Text></Col>
                <Col span={6}><Text>{email.snippet}</Text></Col>
                <Col span={2}><Text>{new Date(email.date).toLocaleString()}</Text></Col>
              </Row>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
