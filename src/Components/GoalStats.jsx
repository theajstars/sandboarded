import React from "react";
import { UserGoals } from "../Assets/JSON/Goals.json";
export default function GoalStats() {
  return (
    <>
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
        <br />
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
                  <span
                    className={`goal-card-icon goal-card-icon-${index + 1}`}
                  >
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
      <div className="statistics-section">
        <span className="card-section-header suprema">Outcome Statistics</span>
        <br />
        <br />
        <div className="flex-column statistics">
          <div className="flex-row statistic">
            <div className="statistic-icon flex-row statistic-icon-1">
              <i className="far fa-shopping-cart"></i>
            </div>

            <div className="statistic-progress-container flex-column">
              <div className="statistic-progress-bar">
                <div className="statistic-progress-bar-color statistic-progress-bar-color-1"></div>
              </div>
              <span className="faint suprema statistic-name">Shopping</span>
            </div>

            <span className="lato statistic-value grey">52%</span>
          </div>
          <div className="flex-row statistic">
            <div className="statistic-icon flex-row statistic-icon-2">
              <i className="far fa-shuttle-van"></i>
            </div>

            <div className="statistic-progress-container flex-column">
              <div className="statistic-progress-bar">
                <div className="statistic-progress-bar-color statistic-progress-bar-color-2"></div>
              </div>
              <span className="faint suprema statistic-name">Electronics</span>
            </div>

            <span className="lato statistic-value grey">21%</span>
          </div>
          <div className="flex-row statistic">
            <div className="statistic-icon flex-row statistic-icon-3">
              <i className="far fa-plane-alt"></i>
            </div>

            <div className="statistic-progress-container flex-column">
              <div className="statistic-progress-bar">
                <div className="statistic-progress-bar-color statistic-progress-bar-color-3"></div>
              </div>
              <span className="faint suprema statistic-name">Travels</span>
            </div>

            <span className="lato statistic-value grey">52%</span>
          </div>
        </div>
      </div>
    </>
  );
}
