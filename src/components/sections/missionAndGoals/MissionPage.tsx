// pages/index.js
import "@/styles/sectionStyles/m&g.css";

import MissionAndGoalsTabs from "./MissionAndGoalsTabs";

export default function MissionPage() {
  return (
    <div className="mt-20">
      <h1 className="text-center text-2xl font-bold mb-6">
        Next.js Custom Tabs
      </h1>
      <MissionAndGoalsTabs />
    </div>
  );
}
