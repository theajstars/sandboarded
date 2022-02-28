import React from "react";

export default function CardSection() {
  return (
    <div className="card-section-container flex-column">
      <span className="suprema card-section-header">Cards</span>
      <div className="card card-blue flex-column">
        <div className="card-top">
          <span className="quicksand white card-brand">Sandboarded</span>
          <br />
          <small className="card-account-type">PREMIUM ACCOUNT</small>
        </div>
        <span className="card-number flex-row">
          <span className="card-number-set quicksand white">5793</span>
          <span className="card-number-set quicksand white">****</span>
          <span className="card-number-set quicksand white">****</span>
          <span className="card-number-set quicksand white">9322</span>
        </span>
        <div className="card-bottom flex-row white lato">
          <div className="card-bottom-item flex-column">
            <span className="card-bottom-head">Cardholder</span>
            <span className="card-bottom-value">His Majesty</span>
          </div>
          <div className="card-bottom-item flex-column">
            <span className="card-bottom-head">Expiry Date</span>
            <span className="card-bottom-value">09/24</span>
          </div>
        </div>
      </div>
    </div>
  );
}
