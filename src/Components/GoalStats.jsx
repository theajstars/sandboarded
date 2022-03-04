import React from "react";
import { UserGoals } from "../Assets/JSON/Goals.json";
export default function GoalStats() {
  return (
    <div className="goals-section flex-column">
      <span
        className="suprema card-section-header flex-row"
        style={{ alignItems: "center" }}
      >
        Goals&nbsp;
        <span className="bg-yellow flex-row goals-plus primary pointer">
          <i className="fas fa-plus"></i>
        </span>
      </span>
      <div className="flex-row goal-cards">
        {UserGoals.map((goal, index) => {
          return (
            <div className="goal-card bg-white flex-column">
              <div className="goal-card-top flex-column">
                <span className="lato grey goal-card-amount">
                  {goal.amount}
                </span>
                <span className="suprema faint grey goal-card-date">
                  {goal.date}
                </span>
              </div>
              <div className="goal-card-bottom flex-column">
                <span className={`goal-card-icon goal-card-icon-${index + 1}`}>
                  <i className={`${goal.icon}`}></i>
                </span>
                <span className="suprema primary goal-card-name">
                  {goal.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
