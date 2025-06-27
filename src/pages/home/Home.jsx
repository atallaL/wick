import './Home.css'
import herobg from '../../assets/candlebg.png'
import productimg from '../../assets/candleproduct.jpg'

//carousel using Swiper.js
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



function Home() {
    return(
        <div className="homeContainer">
            <div className="heroSection">
                <div className="heroContent">
                    <h1>wick.</h1>
                    <p>Beautiful candles, beautiful fragrances.</p>
                    <button>SHOP NOW</button>
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
                    {['Lush Forest', 'Sweet Treat', 'Lush thingy', 'Lush Foresdfsdfsfsdfsd', 'Lush Fordsff'].map((title, i) => (
                        <SwiperSlide key={i}>
                            <div className="homeCarouselItem">
                                <img src={productimg} alt={title} />
                                <div className="homeCarouselText">
                                    <p>{title}</p>
                                    <p>$29.99</p>
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