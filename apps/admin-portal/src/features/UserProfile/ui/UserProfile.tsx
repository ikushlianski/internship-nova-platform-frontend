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
      <div className="relative w-full min-h-52 max-w-3xl p-4 mt-6 mx-auto rounded-2xl border-2">
        <h3>User name here</h3>
        <h3>User email here</h3>
        <div className="flex justify-end align-bottom">
          <button className="absolute bottom-2 right-4 text-lg  px-4 py-2">
            Generate signup link
          </button>
        </div>
      </div>

      <div className="relative w-full min-h-52 max-w-3xl p-4 mt-6 mx-auto rounded-2xl border-2">
        <nav
          className="after:content-center after:block after:mx-auto after:my-2 after:w-full after:border-b-2"
          aria-label="user-profile-tabs"
        >
          <ul className="flex justify-center gap-4">
            {tabs.map((tab) => (
              <button
                onClick={handleTabClick}
                key={tab}
                className={`text-lg  cursor-pointer px-4 border-2 border-transparent transition-all ${activeTab === tab ? 'font-bold' : ''}`}
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
