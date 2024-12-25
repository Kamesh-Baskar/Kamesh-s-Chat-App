import { InstantDB } from './instantdb';

// Initialize the InstantDB instance
const db = new InstantDB({
  apiKey: '3ea4bffd-de29-440a-9548-dc812c5ea62e', // Replace with your InstantDB API key
  collection: 'emails',    // Collection name
});

// Function to retrieve emails
export const getEmails = async () => {
  const emails = await db.query().fetch();
  return emails;
};

// Function to add a new email
export const addEmail = async (emailData) => {
  const newEmail = await db.insert(emailData);
  return newEmail;
};
