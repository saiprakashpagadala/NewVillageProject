import React from "react";
import { Carousel } from "antd";
import "./charousel.css";
import "antd/dist/antd.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Charousel = () => {
  const contentStyle = {
    height: "200px",
    // background: "#364d79",
  };

  return (
    <div className="background">
      <center>
        <div>
          <Carousel autoplay>
            <div>
              <img
                src="https://3.bp.blogspot.com/-O7UftGtjAJg/WxlUEtR7dWI/AAAAAAAAAIw/SjWJbkUYvHQZ6FWvemAZlLoCaOBCPk55wCLcBGAs/s1600/92328034.jpg"
                style={contentStyle}
                alt="img"
              />
            </div>
            <div>
              <img
                src="https://images.edexlive.com/uploads/user/imagelibrary/2020/8/20/original/IMG-20200820-WA0014.jpg?w=700&dpr=1.0 "
                style={contentStyle}
                alt="img"
              />
            </div>
            <div>
              <img
                src="https://5.imimg.com/data5/UR/VY/HN/SELLER-18400183/kilometer-stones-500x500.jpg"
                style={contentStyle}
                alt="img"
              />
            </div>
            <div>
              <img
                src="https://images.newindianexpress.com/uploads/user/imagelibrary/2016/8/22/2/original/How.jpg?w=900&dpr=1.0"
                style={contentStyle}
                alt="img"
              />
            </div>
          </Carousel>
          <LeftOutlined />
          <RightOutlined />
        </div>
      </center>
    </div>
  );
};

export default Charousel;
