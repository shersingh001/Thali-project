import { Link, useParams } from 'react-router-dom';
import style from './AllProducts.module.css';
import { BiArrowBack } from "react-icons/bi";
import { useSelector } from 'react-redux';

const AllProduct = () => {
    const { name } = useParams();
    const productData = useSelector((state) => {
        return state.foodItem.foodData;
    })
    return(
        <section className={style.main}>
            <header className={style.main_header}>
                <div className={style.header_arrow}>
                    <Link to={"/home"}><BiArrowBack /></Link>
                </div>
            </header>
            {productData.filter(data => data.Name === name).map((list) => {
                return (
                <div className={style.main_img} key={list.id}>
                        <img src={list.img} alt={list.Name} />
                    <div className={style.dish_name}>
                        <h3>{list.Name}</h3>
                        <span>{list.price}</span>
                    </div>
                    <div className={style.dish_desc}>
                        <p>{list.desc2}</p>
                    </div>
                </div>
                )
            })}
        </section>
    )
};

export default AllProduct;