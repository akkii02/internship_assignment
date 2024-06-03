import classes from "./Advantages.module.css";
import img from "../imgg/imgg3.png";
import bell from "../imgg/bell-02.png";
const Advantages = () => {
  return (
    <div className={classes.main}>
      <div className={classes.leftside}>
        <img src={img} alt="img" />
      </div>
      <div className={classes.rightside}>
        <div className={classes.heading}>
          <p>Advantages</p>
          <h1>Why Choose Uifry?</h1>
        </div>
        <div className={classes.maincontent}>
        <div className={classes.iconblock}>
                        <img className={classes.icons} src={bell}/><h5>Clever Notifications</h5>
       </div>
          <p>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Advantages;
