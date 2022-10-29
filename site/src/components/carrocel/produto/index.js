import './index.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { Navigation, Pagination, Thumbs } from 'swiper';
import "swiper/scss/free-mode";
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
export default function Index() {
    return(
        <div className="big-mãe-produto">
            <Swiper
            className='segundacoluna'
            modules={[Navigation, Pagination, Thumbs]}
            spaceBetween={5}
            slidesPerView={4}
            navigation
            Thumbs
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className='loca'>
                    <div className='local'>
                        <img className='logo' src="../img/the-boys-1.png" alt='logo'/>
                        <h2>The Boys</h2>
                        <h1>R$99,00</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='loca'>
                    <div className='local'>
                        <img className='logo' src="../img/acronica.jpg" alt='logo'/>
                        <h2>As cronicas de Navigation</h2>
                        <h1>R$99,00</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='loca'>
                    <div className='local'>
                        <img className='logo' src="../img/aventuramike.jpg" alt='logo'/>
                        <h2>Aventura de um Traidor</h2>
                        <h1>R$99,00</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='loca'>
                    <div className='local'>
                        <img className='logo' src="../img/aventuramike.jpg" alt='logo'/>
                        <h2>Aventura de um Traidor</h2>
                        <h1>R$99,00</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='loca'>
                    <div className='local'>
                        <img className='logo' src="../img/aventuramike.jpg" alt='logo'/>
                        <h2>Aventura de um Traidor</h2>
                        <h1>R$99,00</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='loca'>
                    <div className='local'>
                        <img className='logo' src="../img/aventuramike.jpg" alt='logo'/>
                        <h2>Aventura de um Traidor</h2>
                        <h1>R$99,00</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='loca'>
                    <div className='local'>
                        <img className='logo' src="../img/aventuramike.jpg" alt='logo'/>
                        <h2>Aventura de um Traidor</h2>
                        <h1>R$99,00</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}