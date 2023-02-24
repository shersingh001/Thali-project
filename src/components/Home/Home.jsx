import style from './Home.module.css';
import { useSelector } from 'react-redux';
import HomeData from './HomeData';

const Home = () => {
    const foodData = useSelector((state) => {
        return state.foodItem.foodData
    });

    return(
        <section className={style.main_home}>
            <div className={style.home_heading}>
                <h2>Popular Food</h2>
            </div>
            <div className={style.main_card}>
            {foodData.map((item) => {
                return (
                    <HomeData
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        price={item.price}
                        Name={item.Name}
                        desc={item.desc}
                        rating={item.rating}
                    />
                )
            })}
            </div>
        </section>
    )
};

export default Home;