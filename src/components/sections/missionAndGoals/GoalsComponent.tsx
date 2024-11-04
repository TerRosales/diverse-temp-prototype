import React from "react";

type Props = {};

const GoalsComponent = (props: Props) => {
  return (
    <div id="goals" className="goals h-[100vh]">
      <h3>Goals</h3>
      <ul>
        <li>To create a diverse and inclusive work environment</li>
        <li>To promote a culture of empathy and understanding</li>
        <li>To facilitate collaboration and cooperation</li>
        <li>
          To provide a safe and supportive work environment for all employees
        </li>
      </ul>
    </div>
  );
};

export default GoalsComponent;
