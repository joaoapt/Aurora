import './index.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { Navigation, Pagination, Thumbs } from 'swiper';
import "swiper/scss/free-mode";
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { useEffect, useState } from 'react';
import { listarProdutosInicio } from '../../../api/produto/produto'
import 'swiper/scss/pagination';

import { API_URL } from '../../../api/config/configAPI';
import { useNavigate } from 'react-router-dom';

export default function Index() {


    const naviga = useNavigate();
    const [livro, setLivro] = useState([]);
    
    async function listar() {
        const resp = await listarProdutosInicio();
        setLivro(resp)
    }

    function open(id) {
        naviga('/produto/vil/' + id )
    }

    function exibir(imagem) {
            return `${API_URL}/${imagem}`;
    }

    useEffect(() => {
        listar();
    }, []);


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
            >       {livro.map(item  =>
                    <SwiperSlide className='loca'>
                        <div className='local'>
                            <img className='logo' src={exibir(item.imagem)}  alt=''/>
                            <h2>{item.livro}</h2>
                            <button className='botão' onClick={() => open(item.id)}>Comprar</button>
                            <h1>R$ {item.preco}</h1>
                        </div>
                    </SwiperSlide>
                    )}
            </Swiper>
        </div>
    )
}