import Layout from "../Layout/Layout";
import Card from "../UI/Card/Card";
import svg1 from '../../Assets/svg file/100-natural-icon.svg';
import svg2 from '../../Assets/svg file/cake-icon.svg';
import svg3 from '../../Assets/svg file/chips-icon.svg';
import svg4 from '../../Assets/svg file/chips-icon.svg';
import svg5 from '../../Assets/svg file/food-cart-icon.svg';
import svg6 from '../../Assets/svg file/food-delivery-icon.svg';
import svg7 from '../../Assets/svg file/hot-tea-icon.svg';
import svg8 from '../../Assets/svg file/ice-cream-color-icon.svg';
import svg9 from '../../Assets/svg file/vegetarian-icon.svg';
import style from './Services.module.css';


const Services = () => {
    return(
        <section>
            <Layout />
            <div className={style.main}>
            <h2>Our Services</h2>
            <p>Consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
            <div className={style.main_card}>
                <Card className={style.card}>
                    <img src={svg1} alt="100%-natural" />
                    <h4>100% Natural</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id facilis quos voluptatibus cupiditate delectus quo?</p>
                </Card>
                <Card className={style.card}>
                    <img src={svg2} alt="100%-natural" />
                    <h4>Cake</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id facilis quos voluptatibus cupiditate delectus quo?</p>
                </Card>
                <Card className={style.card}>
                    <img src={svg3} alt="100%-natural" />
                    <h4>Chips</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id facilis quos voluptatibus cupiditate delectus quo?</p>
                </Card>
                <Card className={style.card}>
                    <img src={svg4} alt="100%-natural" />
                    <h4>Lays</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id facilis quos voluptatibus cupiditate delectus quo?</p>
                </Card>
                <Card className={style.card}>
                    <img src={svg5} alt="100%-natural" />
                    <h4>Street Food</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id facilis quos voluptatibus cupiditate delectus quo?</p>
                </Card>
                <Card className={style.card}>
                    <img src={svg6} alt="100%-natural" />
                    <h4>Free Delivery</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id facilis quos voluptatibus cupiditate delectus quo?</p>
                </Card>
                <Card className={style.card}>
                    <img src={svg7} alt="100%-natural" />
                    <h4>Hot Tea</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id facilis quos voluptatibus cupiditate delectus quo?</p>
                </Card>
                <Card className={style.card}>
                    <img src={svg8} alt="100%-natural" />
                    <h4>Ice Cream</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id facilis quos voluptatibus cupiditate delectus quo?</p>
                </Card>
                <Card className={style.card}>
                    <img src={svg9} alt="100%-natural" />
                    <h4>Vegetarian</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id facilis quos voluptatibus cupiditate delectus quo?</p>
                </Card>
            </div>
            </div>
        </section>
    )
};

export default Services;