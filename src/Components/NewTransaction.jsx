import React from "react";
import { TransactionPeople } from "../Assets/JSON/TransactionPeople.json";
export default function NewTransaction() {
  return (
    <div className="flex-row new-transaction-container">
      <div className="new-transaction-left bg-white">
        <span className="suprema card-section-header">New Transaction</span>
        <br />
        <br />
        <div className="flex-row transaction-people">
          {TransactionPeople.map((person, personIndex) => {
            return (
              <div className="flex-column transaction-person">
                <img className={`tp-image tp-image-${personIndex + 1}`} />
                <span className="suprema transaction-person-name primary">
                  {person}
                </span>
              </div>
            );
          })}
          <div className="add-transaction-person bg-yellow flex-row goals-plus primary pointer">
            <i className="fas fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
}