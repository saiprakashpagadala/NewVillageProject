import React from "react";
import "./tags.css";
import { Tag } from 'antd';
import 'antd/dist/antd.css';

const Tags = () => {
  return (
    <div className="text-fields-styling">
      <Tag style={{height: 40, width: 110, paddingTop:10}}>Village : {"village"}</Tag>
      <Tag style={{height: 40, width: 110, paddingTop:10}}>Branch : {"branch"}</Tag>
      <Tag style={{height: 40, width: 110, paddingTop:10}}>Block : {"block"}</Tag>
      <Tag style={{height: 40, width: 110, paddingTop:10}}>District : {"district"}</Tag>
      <Tag style={{height: 40, width: 110, paddingTop:10}}>State : {"state"}</Tag>
      <Tag style={{height: 40, width: 110, paddingTop:10}}>Pincode : {"pincode"}</Tag>
    </div>
  ); 
}; 

export default Tags;
