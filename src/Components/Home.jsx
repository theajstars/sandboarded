import React, { useState } from "react";
import { Container } from "@mui/material";
import AvatarImage from "../Assets/IMG/avatar.png";
import { motion } from "framer-motion";
import CardSection from "./CardSection";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import TransactionHistory from "./TransactionHistory";
export default function Home() {
  return (
    <>
      <div className="app-container flex-row">
        <Nav />
        <motion.div className="app-main">
          <div className="flex-row top-nav">
            <div className="flex-column">
              <span className="primary suprema app-main-header">
                Weekly Sumup
              </span>
              <span className="app-main-small suprema faint">
                Get a summary of your weekly online transactions here
              </span>
            </div>
            <div className="flex-row top-nav-content">
              <span className="nav-icon">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="nav-icon">
                <i className="fas fa-bell"></i>
              </span>
              <div className="flex-row profile-nav">
                <img
                  src={AvatarImage}
                  alt="avatar_aang"
                  className="profile-image"
                />
                <div className="flex-column">
                  <span className="profile-name suprema primary">Andrew</span>
                  <span className="suprema profile profile-type">
                    Admin account
                  </span>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <CardSection />
          <TransactionHistory />
        </motion.div>
      </div>
    </>
  );
}
