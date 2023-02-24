import Card from '../UI/Card/Card';
import style from './UserCart.module.css';
import Layout from '../Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import UserCartData from './UserCartData';
import { cartSliceAction } from '../../Store/CartSlice';

const UserCart = () => {
    const dispatch = useDispatch()
    const cartData = useSelector((state) => state.cart.item );

    const allItemRemoveHandler = () => {
        dispatch(cartSliceAction.allCartDataRemove())
    }

    const totalPrice = cartData.map((item) => {
        return item.totalPrice
    })
    const finalAmount = totalPrice.reduce((pre,current) => {
        return pre+current
    },0)

    const submitHandler = () => {
        if(finalAmount === 0){
            alert("Please Select Some Food Items")
        }else{
            alert("Delivering happiness to your home")
        }
    }
    return(
        <section className={style.main_section}>
            <Layout />
            <Card className={style.user_cart}>
                <div className={style.cart}>
                    <div className={style.cart_head}>
                        <h3>Added item Cart</h3>
                        <button onClick={allItemRemoveHandler}>Remove all</button>
                    </div>
                    {cartData.map((item) => {
                        return (
                            <UserCartData
                            key={item.id}
                            items={{
                                id:item.id,
                                img:item.img,
                                Name:item.Name,
                                quantity:item.quantity,
                                price:item.price,
                                totalPrice:item.totalPrice
                            }}
                    />
                        )
                    } )}
                    <hr />
                    <div className={style.product_total_amount}>
                        <h4>Total</h4>
                        <h5>{`$${finalAmount}`}/-</h5>
                    </div>
                    <div className={style.submitBtn}>
                        <button onClick={submitHandler}>Buy Now</button>
                    </div>
                </div>
            </Card>
        </section>
    )
};
export default UserCart;

