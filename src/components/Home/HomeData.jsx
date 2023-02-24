import style from './Home.module.css';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import Card from '../UI/Card/Card';
import { cartSliceAction } from '../../Store/CartSlice';
import { Link } from 'react-router-dom';

const HomeData = (props) => {
    const {id, img, price, Name, desc, rating} = props;

    const dispatch = useDispatch();

    const addCartHandler = () => {
        dispatch(cartSliceAction.addCartData({img,price,Name,id}))
    };
    return(
        <Card className={style.dish_card} key={id}>
            <img src={img} alt={Name} />
            <div className={style.dish_desc}>
                <div className={style.dish_price}>
                    <span><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /><h3>{rating}</h3></span>
                    <span className={style.price}>{`$${price}`}</span>
                </div>
                    <h2>{Name}</h2>
                    <p>{desc}</p>
                </div>
                <div className={style.main_addToCart}>
                    <div className={style.item_more}>
                        <Link to={`/home-dish/${Name}`}>View more</Link>
                    </div>
                <div className={style.addToCartBtn}>
                    <button onClick={addCartHandler}>Add to Cart</button>
                </div>
            </div>
        </Card>
    )
};

export default HomeData;