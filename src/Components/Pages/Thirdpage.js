import classes from "./Thirdpage.module.css";
import img from "../imgg/imgg4.png";
import star from "../imgg/star-05.png";
const Thirdpage = () => {
  return (
    <div className={classes.main}>
      <div className={classes.leftside}>
        <img src={img} alt="img" />
      </div>
      <div className={classes.rightside}>
        <div className={classes.heading}>
        <div className={classes.iconblock}>
                        <img className={classes.icons} src={star} alt="ICON"/>
          <h1>Fully Customizable</h1>
          </div>
        </div>
        <div className={classes.maincontent}>
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
export default Thirdpage;
