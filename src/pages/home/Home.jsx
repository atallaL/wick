import './Home.css'
import herobg from '../../assets/candlebg.png'
import productimg from '../../assets/candleproduct.jpg'

import {useNavigate} from 'react-router-dom'

//carousel using Swiper.js
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



function Home() {

    //nav
    const nav = useNavigate();

    return(
        <div className="homeContainer">
            <div className="heroSection">
                <div className="heroContent">
                    <h1>wick.</h1>
                    <p>Beautiful candles, beautiful fragrances.</p>
                    <button onClick={() => nav('/shop')}>SHOP NOW</button>
                </div>
            </div>
            <div className="homeCarouselContainer">
                <h2>Our essentials:</h2>

                {/* swiper element to responsive, accessible carousel, config */}
                <Swiper 
                    className="homeCarousel"
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={2.5}
                    navigation
                    pagination={{clickable: true}}
                    speed={400}
                >
                    {/* actual elements */}
                    {[{title: 'Lush Forest', price: 29.99}, {title: 'Spiced Amber', price: 24.99}, {title: 'Citrus Bloom', price: 24.99}, {title: 'Lavendar Dream', price: 24.99}, {title: 'Ocean Breeze', price: 24.99}].map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="homeCarouselItem" onClick={() => nav(`/shop/product${i}`)}>
                                <img src={productimg} alt={item.title} />
                                <div className="homeCarouselText">
                                    <p>{item.title}</p>
                                    <p>${item.price}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    )
}

export default Home;