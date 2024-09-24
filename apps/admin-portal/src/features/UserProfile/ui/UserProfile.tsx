import { MouseEvent, useState } from 'react';
import { tabs, tabsViews } from '../logic/tabs';

export const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('Classes');

  function handleTabClick(e: MouseEvent) {
    const target = e.target as HTMLButtonElement;
    const tabName = target.innerText;

    setActiveTab(tabName);
  }

  return (
    <>
      {/* user info here */}
      <div className="relative w-full max-w-3xl p-2 mt-6 mx-auto bg-neutral-800 rounded-2xl">
        <h3>User name here</h3>
        <h3>User email here</h3>
        <button className="absolute bottom-2 right-2 text-lg">Generate signup link</button>
      </div>

      <div className="relative w-full max-w-3xl p-2 mt-6 mx-auto bg-neutral-800 rounded-2xl">
        <nav
          className="after:content-center after:block after:mx-auto after:my-2 after:w-1/2 after:border-b-4"
          aria-label="user-profile-tabs"
        >
          <ul className="flex justify-center gap-4">
            {tabs.map((tab) => (
              // links to views
              <button
                onClick={handleTabClick}
                key={tab}
                className="text-lg hover:bg-neutral-700 cursor-pointer"
              >
                {tab}
              </button>
            ))}
          </ul>
        </nav>
        {tabsViews[activeTab as keyof typeof tabsViews]}
      </div>
    </>
  );
};
