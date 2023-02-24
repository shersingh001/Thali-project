import style from './MainHeader.module.css';
import logo from '../../Assets/images/thali-logo.jpg';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from 'react-icons/ai';
import { AiFillCustomerService } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MainHeader = () => {
    const Count = useSelector((state) =>  state.cart.quantityCount )
    return(
        <header className={style.Main_header}>
            <div className={style.logo}>
                <Link to={"/home"}><img src={logo} alt="Thali" /></Link>
            </div>
            <nav className={style.bar}>
                <ul>
                    <li><NavLink to={"/home"} activeClassName={style.activeBar}><AiOutlineHome /> Home</NavLink></li>
                    <li><NavLink to={"/user-cart"} activeClassName={style.activeBar}><AiOutlineUser /> {`User Cart ${Count}`}</NavLink></li>
                    <li><NavLink to={"/services"} activeClassName={style.activeBar}><AiFillCustomerService /> Services</NavLink></li>
                    <li><NavLink to={"/contact-us"} activeClassName={style.activeBar}><AiOutlinePhone /> Contact us</NavLink></li>
                </ul>
            </nav>
        </header>
    )
};

export default MainHeader;