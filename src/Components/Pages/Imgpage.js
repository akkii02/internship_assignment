import classes from "./Imgpage.module.css";
import frame from "../imgg/Frame.png";

const Imgpage = () => {
  return (
    <div className={classes.main}>
      <img src={frame} alt="Frame" />
    </div>
  );
};

export default Imgpage;
