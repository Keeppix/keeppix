import { useState } from "react";

export interface TabProps {
  tabs: string[];
}

export default function Tabs({ tabs }: TabProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const ActiveTabBorderClass =
    "border-b-2 border-purple-800 text-purple-800 font-bold";
  const InactiveTabBorderClass = "text-black hover:text-gray-700";

  return (
    <div className="tabs px-4 py-2">
      <ul className="flex space-x-4">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`cursor-pointer ${activeTab === tab ? ActiveTabBorderClass : InactiveTabBorderClass}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
}
