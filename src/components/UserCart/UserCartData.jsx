import style from './UserCart.module.css';
import { useDispatch } from 'react-redux';
import { cartSliceAction } from '../../Store/CartSlice';

const UserCartData = (props) => {
    const {id, img, Name, quantity, price, totalPrice} = props.items;
    const dispatch = useDispatch();

    const incressment = () => {
        dispatch(cartSliceAction.addCartData({id,quantity,price}))
    };
    const decressment = () => {
        dispatch(cartSliceAction.removeCartData(id))
    };
    return(
        <div className={style.cart_product}>
                        <div className={style.product_img}>
                            <img src={img} alt={Name} />
                        </div>
                        <div className={style.product_name}>
                            <h2>{Name}</h2>
                            <h6>{`($${price} /Full plate)`}</h6>
                        </div>
                        <div className={style.product_btn}>
                            <button onClick={incressment}>+</button>
                            <span>{quantity}</span>
                            <button onClick={decressment}>-</button>
                        </div>
                        <div className={style.product_price}>
                            <span>{`$${totalPrice}`}</span>
                        </div>
                    </div>
    )
};

export default UserCartData