import React from "react";
import "./statistics.css";

const Statistics = () => {
  return (
    <center>
      <div className="stats-arrangement">
        <div className="margin-top">
          <div className="box">
            <div className="box-1">Grow</div>
            <div className="box-2">High</div>
            <div className="box-3">Reduce</div>
            <div className="box-4">Block</div>
            <div className="box-5">NS</div>
          </div>
          <h6 className="stat-header">Final Rating</h6>
        </div>
        <div className="margin-top">
          <div className="box">
            <div className="box-1">4</div>
            <div className="box-2">3</div>
            <div className="box-3">2</div>
            <div className="box-4">1</div>
            <div className="box-5">NS</div>
          </div>
          <h6 className="stat-header">Risk Rating</h6>
        </div>
        <div className="margin-top">
          <div className="box">
            <div className="box-1">4</div>
            <div className="box-2">3</div>
            <div className="box-3">2</div>
            <div className="box-4">1</div>
            <div className="box-5">NS</div>
          </div>
          <h6 className="stat-header">BM Rating</h6>
        </div>
        <div className="margin-top">
          <div className="box">
            <div className="box-1">4</div>
            <div className="box-2">3</div>
            <div className="box-3">2</div>
            <div className="box-4">1</div>
            <div className="box-5">NS</div>
          </div>
          <h6 className="stat-header">AM/Risk</h6>
        </div>
      </div>
    </center>
  );
};

export default Statistics;
