"use client";
import { useState, useEffect } from "react";

interface MessageArrayT {
  time: string;
  message?: string;
  MessageVariant?: MessageVariantT[];
}

interface MessageVariantT {
  message: string;
}

const MessageArrayVariant: MessageArrayT[] = [
  {
    time: "6",
    MessageVariant: [
      { message: "Good morning! Start your day with learning English." },
      {
        message:
          "Nothing refreshes more in the morning than a new dose of English!",
      },
      {
        message:
          "Make your breakfast not just delicious but also useful — add some English!",
      },
      { message: "It's a great day to learn something new in English!" },
    ],
  },
  {
    time: "12",
    MessageVariant: [
      {
        message:
          "Lunchtime is English time! Combine the pleasant with the useful.",
      },
      {
        message:
          "Don't forget about English during your break! A few minutes make a difference.",
      },
      { message: "Afternoon is the best time to improve your English!" },
    ],
  },
  {
    time: "15",
    MessageVariant: [
      {
        message:
          "Nothing relaxes more than learning a few new English words after work.",
      },
      {
        message:
          "After a long day, it's the perfect time to switch to English.",
      },
      {
        message:
          "Refresh your English knowledge before dinner — it's easy and fun!",
      },
    ],
  },
  {
    time: "18",
    MessageVariant: [
      { message: "It's not time to be sad ... , it's time to learn English" },
      { message: "After a good dinner, it's a sin not to learn English" },
      { message: "Don't spoil your evening motivation, let's learn English" },
      { message: "Op op op op op time to learn English" },
    ],
  },
  {
    time: "20",
    MessageVariant: [
      { message: "It's not time to be sad ... , it's time to learn English" },
      { message: "After a good dinner, it's a sin not to learn English" },
      { message: "Don't spoil your evening motivation, let's learn English" },
      { message: "Op op op op op time to learn English" },
    ],
  },
  {
    time: "22",
    MessageVariant: [
      { message: "Good night." },
      { message: "May you dream the American Dream" },
      { message: "Let your sleep be as sweet as cotton candy" },
      { message: "Decided to take a late-night English class. Way to go," },
    ],
  },
];

export default function Message() {
  const [defaultMessage, setDefaultMessage] = useState<string>("Hello");

  useEffect(() => {
    const currentTimeUser = new Date().getHours();

    MessageArrayVariant.map((item: MessageArrayT) => {
      if (item.time === String(currentTimeUser)) {
        if (item.message) {
          setDefaultMessage(item.message);
        } else if (item.MessageVariant) {
          const randomIndex = Math.floor(
            Math.random() * item.MessageVariant.length,
          );
          setDefaultMessage(item.MessageVariant[randomIndex].message);
        }
      }
    });
  }, []);

  return (
    <div className="border-solid border-black border-[1px] rounded-md w-[410px] h-[90px]">
      <p>{defaultMessage}</p>
    </div>
  );
}
