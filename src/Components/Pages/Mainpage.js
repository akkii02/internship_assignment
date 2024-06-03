import classes from "./Mainpage.module.css";
import img from "../imgg/img1.png";
import img1 from "../imgg/side.png";
const Mainpage = () => {
  return (
    <div className={classes.main}>
      <div className={classes.leftside}>
        <div className={classes.txt}>
          <h2>Make the Best Financial Decisions</h2>
          <p>
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className={classes.btn}>
            <button>Get Started</button>
            <button className={classes.btns}>Watch Videos</button>
          </div>
        </div>
        <div className={classes.leftimg}>
            <img className={classes.leimg} src={img} alt="img"/>
        </div>
      </div>
      <div className={classes.rightside}>
        <img className={classes.rightimg} src={img1} alt="IMG"/>
      </div>
    </div>
  );
};
export default Mainpage;
