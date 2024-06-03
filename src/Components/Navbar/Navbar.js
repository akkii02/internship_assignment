import classes from "./Navbar.module.css";
import logo from "../imgg/Group.png"
const Navbar = () => {
      return (
            <div className={classes.navbar}>
            <div className={classes.nav}>
                  <div className={classes.logo}>
                        <img src={logo} alt="LOGO"/>
                  </div>
                  <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Pricing</li>
                        <li>Features</li>
                  </ul>
            </div>
            <button className={classes.btn}>Download</button>
            </div>
      );
}
export default Navbar;