import './index.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { Navigation, Pagination, Autoplay} from 'swiper';
import "swiper/scss/free-mode";
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
export default function Index() {
    return(
        <div className="big-mãe">
            <Swiper
            className='segundacoluna'
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            autoplay
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img className='logo' src="../img/artistic.jpg" alt='logo'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='logo' src="../img/wallhaven.jpg" alt='logo'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='logo' src="../img/montanha.jpg" alt='logo'/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}