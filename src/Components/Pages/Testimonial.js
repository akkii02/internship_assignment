import classes from "./Testimonial.module.css";
import img from "../imgg/imgg5.png";
import img1 from "../imgg/Intersect.png";
import img2 from "../imgg/groupimg.png";
const Testimonial = () => {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.testheading}>
          <p>TESTIMONIAL</p>
          <h1>What Our Users Say About Us?</h1>
        </div>
      </div>
      <div className={classes.testmain}>
        <div className={classes.leftside}>
          <img src={img} alt="img" />
        </div>
        <div className={classes.rightside}>
          <div className={classes.heading}>
            <h1>The Best financial Accounting App Ever!</h1>
          </div>
          <div className={classes.maincontent}>
            <p>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.”
            </p>
          </div>
          <div className={classes.imgg}>
            <img src={img1} />
            <img src={img2}/>
          </div>
          <h4>Nick Jonas</h4>
        </div>
      </div>
    </>
  );
};
export default Testimonial;
