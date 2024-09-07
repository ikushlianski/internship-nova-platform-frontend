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
      question: "Our app implements two-factor authentication",
      answer: "В нашем приложении реализована двухфакторная аутентификация",
      example:
        "Two-factor authentication adds an extra layer of security to identity and access management programs.",
      createdDate: "2024-09-03",
      updatedDate: "2024-09-09",
      lapses: 0,
    },
    {
      card_id: "2b3c4d5e-6f7a-8b9c-0d1e2f3a4b5c",
      deck_id: "a5b6c7d8-9e0f-1g2h-3i4j5k6l7m8n",
      question: "We need to configure the firewall settings",
      answer: "Нам нужно настроить параметры межсетевого экрана",
      example:
        "A firewall helps protect your network by filtering traffic according to security rules.",
      createdDate: "2024-08-10",
      updatedDate: "2024-08-15",
      lapses: 1,
    },
    {
      card_id: "3c4d5e6f-7a8b-9c0d-1e2f3a4b5c6d",
      deck_id: "b7c8d9e0-1f2g-3h4i-5j6k7l8m9n0o",
      question: "This database uses SQL for data management",
      answer: "Эта база данных использует SQL для управления данными",
      example: "SQL allows querying and managing data in relational databases.",
      createdDate: "2024-07-25",
      updatedDate: "2024-07-30",
      lapses: 2,
    },
    {
      card_id: "4d5e6f7g-8h9i-0j1k-2l3m4n5o6p7q",
      deck_id: "c8d9e0f1-2g3h-4i5j-6k7l8m9n0o1p",
      question: "The API provides access to the server's resources",
      answer: "API предоставляет доступ к ресурсам сервера",
      example:
        "An API (Application Programming Interface) allows software to communicate with each other.",
      createdDate: "2024-06-12",
      updatedDate: "2024-06-20",
      lapses: 0,
    },
    {
      card_id: "5e6f7g8h-9i0j-1k2l-3m4n5o6p7q8r",
      deck_id: "d9e0f1g2-3h4i-5j6k-7l8m9n0o1p2q",
      question: "The app uses encryption to protect data",
      answer: "Приложение использует шифрование для защиты данных",
      example:
        "Encryption converts data into a secure format, ensuring only authorized access.",
      createdDate: "2024-05-15",
      updatedDate: "2024-05-22",
      lapses: 3,
    },
    {
      card_id: "6f7g8h9i-0j1k-2l3m-4n5o6p7q8r9s",
      deck_id: "e0f1g2h3-4i5j-6k7l-8m9n0o1p2q3r",
      question: "We are building a responsive website using HTML and CSS",
      answer: "Мы создаем адаптивный веб-сайт с использованием HTML и CSS",
      example:
        "HTML defines the structure, while CSS controls the layout and style of web pages.",
      createdDate: "2024-04-05",
      updatedDate: "2024-04-12",
      lapses: 1,
    },
    {
      card_id: "7g8h9i0j-1k2l-3m4n-5o6p7q8r9s0t",
      deck_id: "f1g2h3i4-5j6k-7l8m-9n0o1p2q3r4s",
      question: "The server is down for maintenance",
      answer: "Сервер отключен для технического обслуживания",
      example:
        "A server may be temporarily unavailable while updates or repairs are being applied.",
      createdDate: "2024-03-18",
      updatedDate: "2024-03-22",
      lapses: 0,
    },
    {
      card_id: "8h9i0j1k-2l3m-4n5o-6p7q8r9s0t1u",
      deck_id: "g2h3i4j5-6k7l-8m9n-0o1p2q3r4s5t",
      question: "Our company is migrating to cloud storage",
      answer: "Наша компания переходит на облачное хранилище",
      example:
        "Cloud storage allows data to be stored remotely and accessed over the internet.",
      createdDate: "2024-02-11",
      updatedDate: "2024-02-16",
      lapses: 1,
    },
    {
      card_id: "9i0j1k2l-3m4n-5o6p-7q8r9s0t1u2v",
      deck_id: "h3i4j5k6-7l8m-9n0o-1p2q3r4s5t6u",
      question: "We are deploying a virtual machine for testing",
      answer: "Мы разворачиваем виртуальную машину для тестирования",
      example:
        "A virtual machine allows running an operating system within another OS environment.",
      createdDate: "2024-01-25",
      updatedDate: "2024-01-30",
      lapses: 0,
    },
    {
      card_id: "0j1k2l3m-4n5o-6p7q-8r9s0t1u2v3w",
      deck_id: "i4j5k6l7-8m9n-0o1p-2q3r4s5t6u7v",
      question: "We need to back up the database regularly",
      answer: "Нам нужно регулярно делать резервное копирование базы данных",
      example:
        "Regular backups help prevent data loss in case of system failure or corruption.",
      createdDate: "2024-01-10",
      updatedDate: "2024-01-15",
      lapses: 2,
    },
  ],
  settings: {
    user_id: "546ee45a-2da0-4cc9-9d87-0b9d633057ae",
    option_id: "af9c050e-2195-473b-96e1-5cb222f4ecdf",
    deck_id: "d4711d96-a17b-450a-8096-12fc586e9588",
  },
};
