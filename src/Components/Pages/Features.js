import classes from "./Features.module.css";
import img from "../imgg/img2.png";
import staricon from "../imgg/staricon.png";
import starc from "../imgg/cube-02.png";
import stari from "../imgg/cube-04.png";
const Features = () => {
return (
      <div className={classes.main}>
            <div className={classes.leftside}>
                  <img src={img} alt="img"/>
            </div>
            <div className={classes.rightside}>
                  <div className={classes.heading}>
                        <p>Features</p>
                        <h1>Uifry Premium</h1>
                  </div>
                  <div className={classes.maincontent}>
                        <div className={classes.iconblock}>
                        <img className={classes.icons} src={staricon} alt="ICON"/><h5>Budgeting Intervals</h5>
                        </div>
                        <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                  </div>
                  <div className={classes.maincontent}>
                        <div className={classes.iconblock}>
                        <img className={classes.icons} src={starc} alt="ICON"/><h5>budgeting intervals</h5>
                        </div>
                        <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                  </div>
                  <div className={classes.maincontent}>
                        <div className={classes.iconblock}>
                        <img className={classes.icons} src={stari} alt="ICON"/><h5>Budgeting Intervals</h5>
                        </div>
                        <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                  </div>
            </div>
      </div>
);
}
export default Features;