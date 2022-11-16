import './index.scss';
import Menu from '../../../components/admin/menu';
import Cabecalho from '../../../components/admin/cabecalho';
import { buscarLivro } from '../../../api/admin/consultar-BD';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/scrollbar';


export default function Index(){
    const [livro, setLivro] = useState([]);

    async function listarLivro() {
        const resp = await buscarLivro();
        setLivro(resp)
    }

    useEffect(() => {
        listarLivro();
    }, []);
    
    
    return(
        <div className='page-pendentes'>
            <Menu selecionado='pendentes'/>
            <div>
                <div className='cabecalho'>
                        <Cabecalho/>
                </div>
                <div className='base'>
                    <div className='caixa-busca'>
                        <input type="text" placeholder='Buscar' />
                        <img src='../img/pesquisa.png' alt='' />
                    </div>
                        <Swiper className='box'
                        modules={[Scrollbar]}
                        spaceBetween={5}
                        slidesPerView={5}
                        scrollbar={{ draggable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                                {livro.map(item =>
                                   <SwiperSlide className='quadrado' >
                                        <div className='cor'>
                                            <h2>{item.classificacao}</h2>
                                        </div>
                                        <h1>{item.livro}</h1>
                                        <p>{item.volume}</p>
                                        <p className='disponivel'>disponivel</p>
                                    </SwiperSlide>
                                )}
                        </Swiper>
                <div>
                    <Link to='/pendentesmenu' className='botão' >Voltar</Link>
                </div >
                </div>
            </div>
        </div>
    )
}