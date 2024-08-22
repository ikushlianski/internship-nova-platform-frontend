export const data = {
  decks: [
    {
      deck_id: "c4e1a2b3-5d6f-7a8b-9c0d1e2f3a4b",
      user_id: "a1b2c3d4-5e6f-7a8b-9c0d1e2f3a4b",
      deck_name: "English Grammar Basics",
      deck_description:
        "Covers fundamental grammar rules including sentence structure, tenses, and punctuation.",
      parent_id: null,
    },
    {
      deck_id: "d5e6f7a8-b9c0-1d2e-3f4a5b6c7d8e",
      user_id: "b2c3d4e5-6f7a-8b9c-0d1e2f3a4b5c",
      deck_name: "Vocabulary Building",
      deck_description:
        "Focuses on expanding vocabulary with commonly used English words and phrases.",
      parent_id: null,
    },
    {
      deck_id: "e7f8a9b0-c1d2-3e4f-5a6b7c8d9e0f",
      user_id: "c3d4e5f6-7a8b-9c0d-1e2f3a4b5c6d",
      deck_name: "Idioms and Expressions",
      deck_description:
        "Learn and understand popular English idioms and expressions for everyday use.",
      parent_id: "f4a5b6c7-d8e9-0f1a-2b3c4d5e6f7a",
    },
    {
      deck_id: "f9a0b1c2-d3e4-5f6a-7b8c9d0e1f2a",
      user_id: "d4e5f6a7-8b9c-0d1e-2f3a4b5c6d7e",
      deck_name: "Pronunciation Practice",
      deck_description:
        "A deck dedicated to improving English pronunciation through practice exercises.",
      parent_id: null,
    },
    {
      deck_id: "a1b2c3d4-e5f6-7a8b-9c0d1e2f3a4b",
      user_id: "e5f6a7b8-c9d0-1e2f-3a4b5c6d7e8f",
      deck_name: "English Reading Comprehension",
      deck_description:
        "Develops reading comprehension skills with short passages and questions.",
      parent_id: "b6c7d8e9-0f1a-2b3c4d5e6f7a",
    },
  ],
  cards: [
    {
      card_id: "1a2b3c4d-5e6f-7a8b-9c0d1e2f3a4b",
      deck_id: "c4e1a2b3-5d6f-7a8b-9c0d1e2f3a4b",
      question: "What is the past tense of 'go'?",
      answer: "Went",
      created_date: "2024-08-01",
      updated_date: "2024-08-15",
      due_date: "2024-09-01",
      lapses: "2",
    },
    {
      card_id: "2b3c4d5e-6f7a-8b9c-0d1e2f3a4b5c",
      deck_id: "d5e6f7a8-b9c0-1d2e-3f4a5b6c7d8e",
      question: "What does the idiom 'Break the ice' mean?",
      answer: "To start a conversation in a social setting.",
      created_date: "2024-07-25",
      updated_date: "2024-08-10",
      due_date: "2024-08-25",
      lapses: "1",
    },
    {
      card_id: "3c4d5e6f-7a8b-9c0d-1e2f3a4b5c6d",
      deck_id: "e7f8a9b0-c1d2-3e4f-5a6b7c8d9e0f",
      question: "Pronounce the word 'Through'.",
      answer: "Thr-ooh",
      created_date: "2024-08-05",
      updated_date: "2024-08-12",
      due_date: "2024-08-19",
      lapses: "0",
    },
    {
      card_id: "4d5e6f7a-8b9c-0d1e-2f3a4b5c6d7e",
      deck_id: "f9a0b1c2-d3e4-5f6a-7b8c9d0e1f2a",
      question: "What is the synonym for 'happy'?",
      answer: "Joyful, content, pleased",
      created_date: "2024-07-20",
      updated_date: "2024-08-01",
      due_date: "2024-08-18",
      lapses: "3",
    },
    {
      card_id: "5e6f7a8b-9c0d-1e2f-3a4b5c6d7e8f",
      deck_id: "a1b2c3d4-e5f6-7a8b-9c0d1e2f3a4b",
      question:
        "Read and comprehend: 'The quick brown fox jumps over the lazy dog.' What does this sentence demonstrate?",
      answer: "It contains all the letters of the English alphabet.",
      created_date: "2024-08-07",
      updated_date: "2024-08-14",
      due_date: "2024-08-21",
      lapses: "1",
    },
  ],
};
