// components/CustomTabs.js
"use client";
import { useState } from "react";
import MissionComponent from "./MissionComponent";
import GoalsComponent from "./GoalsComponent";

export default function MissionAndGoalsTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "Tab 1", content: <MissionComponent /> },
    { id: 1, label: "Tab 2", content: <GoalsComponent /> },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 p-4">
      {/* Tabs Header */}
      <div className="flex justify-around border-b-2 border-gray-200 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 font-semibold focus:outline-none ${
              activeTab === tab.id
                ? "border-b-4 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="text-center bg-gray-100 rounded-lg my-8 md:my-12">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}
