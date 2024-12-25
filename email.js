import { getEmails, addEmail } from '../../utils/instantDb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const emails = await getEmails();
      res.status(200).json(emails);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch emails' });
    }
  } else if (req.method === 'POST') {
    try {
      const emailData = req.body;
      const newEmail = await addEmail(emailData);
      res.status(201).json(newEmail);
    } catch (error) {
      res.status(500).json({ message: 'Failed to add email' });
    }
  }
}
