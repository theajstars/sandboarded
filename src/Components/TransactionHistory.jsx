import React from "react";

export default function TransactionHistory() {
  return (
    <div className="transaction-history-container bg-white">
      <span className="suprema card-section-header">Transaction History</span>
      <table className="transactions-table" border="0">
        <thead>
          <tr>
            <td className="suprema faint">Receiver</td>
            <td className="suprema faint">Type</td>
            <td className="suprema faint">Date</td>
            <td className="suprema faint">Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="suprema primary transaction-receiver flex-row">
              <span className="transaction-icon primary flex-column">
                <i className="far fa-shopping-cart"></i>
              </span>
              TeesTheCutest
            </td>
            <td className="suprema faint ">Shopping</td>
            <td className="suprema faint ">31 Aug 2021</td>
            <td className="lato transaction-amount">$750.67</td>
          </tr>
          <tr>
            <td className="suprema primary transaction-receiver flex-row">
              <span className="transaction-icon primary flex-column">
                <i className="far fa-shuttle-van"></i>
              </span>
              Mel's Market
            </td>
            <td className="suprema faint ">Shopping</td>
            <td className="suprema faint ">13 Dec 2021</td>
            <td className="lato transaction-amount">$95.67</td>
          </tr>
          <tr>
            <td className="suprema primary transaction-receiver flex-row">
              <span className="transaction-icon primary flex-column">
                <i className="far fa-leaf-oak"></i>
              </span>
              Bravoosi's Orchard
            </td>
            <td className="suprema faint ">Food</td>
            <td className="suprema faint ">20 Oct 2022</td>
            <td className="lato transaction-amount">$275.67</td>
          </tr>
          <tr>
            <td className="suprema primary transaction-receiver flex-row">
              <span className="transaction-icon primary flex-column">
                <i className="fal fa-sun"></i>
              </span>
              Dorne's rainfall
            </td>
            <td className="suprema faint ">Fiction</td>
            <td className="suprema faint ">19 Dec 2022</td>
            <td className="lato transaction-amount">$1075.67</td>
          </tr>
          <tr>
            <td className="suprema primary transaction-receiver flex-row">
              <span className="transaction-icon primary flex-column">
                <i className="far fa-crown"></i>
              </span>
              King Solomon's Mines
            </td>
            <td className="suprema faint ">Minenation</td>
            <td className="suprema faint ">31 Dec 2022</td>
            <td className="lato transaction-amount">$75.67</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
