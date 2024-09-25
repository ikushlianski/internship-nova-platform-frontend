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
      <div className="relative w-full min-h-52 max-w-3xl p-4 mt-6 mx-auto bg-neutral-800 rounded-2xl">
        <h3>User name here</h3>
        <h3>User email here</h3>
        <div className="flex justify-end">
          <button className="text-lg  hover:bg-neutral-600 px-4 py-2">Generate signup link</button>
        </div>
      </div>

      <div className="relative w-full min-h-52 max-w-3xl p-4 mt-6 mx-auto bg-neutral-800 rounded-2xl">
        <nav
          className="after:content-center after:block after:mx-auto after:my-2 after:w-full after:border-b-2"
          aria-label="user-profile-tabs"
        >
          <ul className="flex justify-center gap-4">
            {tabs.map((tab) => (
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
