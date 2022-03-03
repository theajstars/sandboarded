import React, { useState } from "react";
import { Container } from "@mui/material";
import { motion } from "framer-motion";
import CardSection from "./CardSection";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import TransactionHistory from "./TransactionHistory";
import TopNav from "./TopNav";
import GoalStats from "./GoalStats";
export default function Home() {
  return (
    <>
      <div className="app-container flex-row">
        <Nav />
        <motion.div className="app-main">
          <TopNav />
          <br />
          <br />
          <div className="flex-row app-main-div">
            <div className="flex-column">
              <CardSection />
              <TransactionHistory />
            </div>
            <div className="flex-column app-main-right">
              <GoalStats />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
