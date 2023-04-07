import CartIcon from "../Cart/CartIcon";
import Classess from "./HeaderCartButton.module.css";
const HeaderCartButton =props=>{
    return(
        <button className={Classess.button}>
            <span className={Classess.icon}>
                <CartIcon/>
            </span>
            <span>YourCart</span>
            <span className={Classess.badge}>0</span>

        </button>
    )

}
export default HeaderCartButton;