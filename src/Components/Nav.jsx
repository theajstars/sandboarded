import React, { useState, useEffect } from "react";

import NavBottomImage from "../Assets/IMG/nav-img.png";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
export default function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showMenuSpace, setShowMenuSpace] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setShowMenuSpace(true);
    } else {
      setShowMenuSpace(false);
    }
  }, [isMenuOpen]);
  return (
    <>
      <span className="menu-icon" onClick={() => setMenuOpen(!isMenuOpen)}>
        {isMenuOpen && <i className="fad fa-angle-double-left"></i>}
        {!isMenuOpen && <i className="fad fa-angle-double-right"></i>}
      </span>
      <motion.div
        initial={{
          x: -250,
        }}
        animate={{
          x: isMenuOpen ? 0 : -250,
        }}
        transition={{
          duration: 0.4,
          x: {
            type: "tween",
            stiffness: 120,
          },
        }}
        className={`side-nav flex-column ${isMenuOpen ? "" : "none"}`}
      >
        <div className="side-nav-content flex-column">
          <Link to="/" className="top-icon">
            <i className="fas fa-satellite-dish light-blue"></i>
            <span className="quicksand dark-blue"> &nbsp; Sandboarded</span>
          </Link>

          <div className="side-nav-2 flex-column">
            <div className="side-nav-items flex-column">
              <Link to="/" className="side-nav-item lato light-white">
                <i className="far fa-chart-line"></i> &nbsp; Overview
              </Link>
              <Link to="/" className="side-nav-item lato light-white">
                <i class="fal fa-fax"></i> &nbsp; Transactions
              </Link>
              <Link to="/" className="side-nav-item lato light-white">
                <i class="fal fa-credit-card"></i> &nbsp; Cards
              </Link>
              <Link to="/" className="side-nav-item lato light-white">
                <i class="fal fa-mail-bulk"></i> &nbsp; Invoices
              </Link>
              <Link to="/" className="side-nav-item lato light-white">
                <i class="fal fa-crown"></i> &nbsp; Goals
              </Link>
              <Link to="/" className="side-nav-item lato light-white">
                <i class="fal fa-cogs"></i> &nbsp; Settings
              </Link>
            </div>

            <div className="nav-bottom flex-column">
              <img src={NavBottomImage} alt="" />
              <small className="nav-bottom-text suprema primary">
                Give your money <br /> an awesome space in the cloud
              </small>
              <button className="premium-upgrade bg-yellow primary quicksand">
                Upgrade to Premium &nbsp;{" "}
                <i class="fas fa-long-arrow-alt-up"></i>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
