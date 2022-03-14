import React from "react";
import { Card } from "antd";
import "antd/dist/antd.css";

import "./card.css";

const Cardcomponent = () => {
  return (
    <div className="card-styling">
      <Card size="small" title="Particulars" style={{ width: 250 }}>
        <p style={{ paddingBottom: 0 }}># of HH</p>
        <p># of Population</p>
        <p># of MFI Present</p>
        <p># Estima ted Clients</p>
        <p>Risk Issues</p>
        <p>Distance/Geo Coord</p>
        <p>Pin Code Status</p>
        <p>Risk Approval status</p>
      </Card>
      <Card size="small" title="Data" style={{ width: 300 }}>
        <p>250</p>
        <p>1500</p>
        <p>
          <span>{`>`}</span>3
        </p>
        <p>150</p>
        <p>Yes, Ring Leader, Political Leader</p>
        <p>25 KM/ 000000/000000</p>
        <p>Matched Approved</p>
        <p>Approved</p>
      </Card>
    </div>
  );
};

export default Cardcomponent;
