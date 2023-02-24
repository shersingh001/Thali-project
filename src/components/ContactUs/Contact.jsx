import Layout from "../Layout/Layout";
import { CiLocationOn } from 'react-icons/ci';
import { RiMessage2Line } from 'react-icons/ri';
import {FiPhoneCall} from 'react-icons/fi';
import {HiOutlineDevicePhoneMobile} from 'react-icons/hi2';
import style from './Contact.module.css';

const Contact = () => {
    const submitHandler = (event) => {
        event.preventDefault();
        alert("Your Message Successfully Sent!")
    }
    return(
        <section>
            <Layout />
            <div className={style.main}>
                <div className={style.contact_section}>
                    <h2>Contact Us</h2>
                    <div className={style.contact_text}>
                        <span><CiLocationOn /></span>
                        <p>xyz, Avenue ve Newyork 321994 NewYork</p>
                    </div>
                    <div lassName={style.contact_text}>
                        <span><RiMessage2Line /></span>
                        <p>hello@loremipsum.com</p>
                    </div>
                    <div lassName={style.contact_text}>
                        <span><FiPhoneCall /></span>
                        <p>+3356 1085 2005</p>
                    </div>
                    <div lassName={style.contact_text}>
                        <span><HiOutlineDevicePhoneMobile /></span>
                        <p>+5585 0001 0001</p>
                    </div>
                </div>
                <form className={style.form_section} onSubmit={submitHandler}>
                    <h2>Get in Touch</h2>
                    <p>Feel free to drop us a line below!</p>
                    <div className={style.form_input}>
                        <input type="text" name="name" placeholder="Your Name"/>
                        <input type="email" name="email" placeholder="Your Email"/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Typing your massage here..."></textarea>
                    </div>
                    <div className={style.submitBtn}>
                        <button>SEND</button>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Contact;