import './index.scss';
import Menu from '../../../components/admin/menu';
import Cabecalho from '../../../components/admin/cabecalho';
import { buscarLivro } from '../../../api/admin/consultar-BD';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/scrollbar';
import {removerProduto} from '../../../api/admin/produto'


export default function Index(){
    const [livro, setLivro] = useState([]);

    async function listarLivro() {
        const resp = await buscarLivro();
        setLivro(resp)
    }

    async function deletarLivro(id) {
        try {
            await removerProduto(id);
            await listarLivro();
            toast('Produto Retirado');
        }
        catch(err){
            toast.dark.error(err.response.date.erro);
        }
    }

    useEffect(() => {
        listarLivro();
    }, []);
    
    
    return(
        <div className='page-pendentes'>
            <ToastContainer/>
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
                                        <img className='nossa' onClick={() => deletarLivro(item.id)} src='/img/lixo.png' alt=''/>
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