import React, { useState, useEffect } from "react";
import { TransactionPeople } from "../Assets/JSON/TransactionPeople.json";
export default function NewTransaction() {
  const [amount, setAmount] = useState("");
  // useEffect(() => {
  //   setAmount(amount.toLocaleString())
  // }, [amount])
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
          <div className="flex-column transaction-person add">
            <span className="bg-yellow flex-row goals-plus primary pointer">
              <i className="fas fa-plus"></i>
            </span>
            <span className="suprema transaction-person-name primary">
              Add New
            </span>
          </div>
        </div>
        <br />
        <div className="flex-row transfer-container">
          <div className="flex-row new-transaction-amount-container bg-white">
            <input
              type="text"
              className="suprema new-transaction-amount"
              placeholder={0}
              value={amount}
              onChange={(e) => {
                let value = e.target.value;
                if (typeof value === Number) {
                  // Amount is a number
                  setAmount(value.toLocaleString());
                } else if (value.length === 0) {
                  //Amount is empty
                } else {
                  // Amount is a string
                  let temp = value.split(",");
                  temp = parseInt(temp.join(""));
                  setAmount(temp.toLocaleString());
                }
              }}
            />
            <span className="lato new-transaction-amount-placeholder flex-row">
              $
            </span>
          </div>
          <span className="bg-yellow send-transfer primary quicksand flex-row pointer">
            Send the transfer&nbsp;
            <i className="far fa-angle-right" style={{ fontSize: "18px" }}></i>
          </span>
        </div>
      </div>
      <div className="get-loan flex-row">
        <span className="white suprema get-loan-header">
          Get great <br /> loans
        </span>
      </div>
    </div>
  );
}
