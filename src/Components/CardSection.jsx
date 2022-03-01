import { Switch } from "@mui/material";
import React from "react";

export default function CardSection() {
  return (
    <div className="card-section-container flex-column">
      <span className="suprema card-section-header">Cards</span>
      <br />
      <div className="flex-row" style={{ height: "100%" }}>
        <div className="flex-column" style={{ height: "100%" }}>
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
          <span>
            <div className="payment-limit-container">
              <div className="payment-limit bg-light-blue"></div>
            </div>
            <div className="flex-row limit-description">
              <span className="faint suprema">Weekly payment limit</span>
              <span className="lato primary limit-payment-amount">
                $350.60 / $4000
              </span>
            </div>
          </span>
        </div>

        <hr className="card-rule" />

        <div className="card-figures flex-column">
          <div className="flex-column card-figure-row">
            <span className="lato light-blue card-balance">
              <span style={{ fontSize: "13px" }}>$</span> 2850.75
            </span>
            <span className="suprema card-figure-caption faint">
              Current balance
            </span>
          </div>
          <div className="flex-column card-figure-row">
            <span className="lato light-green card-income">$ 2850.75</span>
            <span className="suprema card-figure-caption faint">Income</span>
          </div>
          <div className="flex-column card-figure-row">
            <span className="lato light-red card-outcome">$ 2850.75</span>
            <span className="suprema card-figure-caption faint">Outcome</span>
          </div>
          <Switch />
          <span className="suprema faint deactivate-card">Deactivate card</span>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
