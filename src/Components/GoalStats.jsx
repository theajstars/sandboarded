import React from "react";

export default function GoalStats() {
  return (
    <div className="goals-section">
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
      <div className="flex-row goals-outline"></div>
    </div>
  );
}
