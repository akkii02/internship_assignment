import React from 'react';
import classes from "./FAQ.module.css";
import star from "../imgg/Star.png";

const FAQ = () => {
  return (
    <div className={classes.main}>
      <div className={classes.heading}>
        <div className={classes.headingleft}>
          <p>FAQ</p>
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className={classes.headright}>
          <img src={star} alt="STAR" />
        </div>
      </div>
      <div className={classes.maincontent}>
        <div className={classes.leftside} style={{ "backgroundColor": "rgb(255, 85, 85)", "color": "white", "padding": "20px", "borderRadius": "15px" }}>
          <h3>The best financial accounting app ever!</h3>
          <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
        </div>
        <div className={classes.rightside}>
          <h3>The best financial accounting app ever!</h3>
          <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
        </div>
      </div>
      <div className={classes.maincontent}>
        <div className={classes.leftside}>
          <h3>The best financial accounting app ever!</h3>
          <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
        </div>
        <div className={classes.rightside} style={{ "backgroundColor": "rgb(255, 85, 85)", "color": "white", "padding": "20px", "borderRadius": "15px" }}>
          <h3>The best financial accounting app ever!</h3>
          <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
        </div>
      </div>
      <div className={classes.maincontent}>
        <div className={classes.leftside} style={{ "backgroundColor": "rgb(255, 85, 85)", "color": "white", "padding": "20px", "borderRadius": "15px" }}>
          <h3>The best financial accounting app ever!</h3>
          <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
        </div>
        <div className={classes.rightside}>
          <h3>The best financial accounting app ever!</h3>
          <p>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
