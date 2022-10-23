import './index.scss';
import Menu from '../../../components/admin/menu';
import Cabecalho from '../../../components/admin/cabecalho';
import { buscarLivro } from '../../../api/admin/consultar-BD'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Index(){
    const [livro, setLivro] = useState([]);

    async function listarLivro() {
        const resp = await buscarLivro();
        console.log(resp);
        setLivro(resp);
    }

    useEffect(() => {
        listarLivro();
    })
    
    
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
                        <div className='box'>
                            <div className='quadrado' >
                                <div className='cor'>
                                    <h2>18</h2>
                                </div>
                                <h1>The Boys o Nome do Jogo</h1>
                                <p>Livro</p>
                                <p className='disponivel'>disponivel</p>
                            </div>   
                            <div className='quadrado' >
                                <div className='cor'>
                                    <h2>18</h2>
                                </div>
                                <h1>The Boys o Nome do Jogo</h1>
                                <p>Livro</p>
                                <p className='disponivel'>disponivel</p>
                            </div>
                            <div className='quadrado' >
                                <div className='cor'>
                                    <h2>18</h2>
                                </div>
                                <h1>The Boys o Nome do Jogo</h1>
                                <p>Livro</p>
                                <p className='disponivel'>disponivel</p>
                            </div>
                            <div className='quadrado' >
                                <div className='cor'>
                                    <h2>18</h2>
                                </div>
                                <h1>The Boys o Nome do Jogo</h1>
                                <p>Livro</p>
                                <p className='disponivel'>disponivel</p>
                            </div>
                            
                        </div>
                <div>
                    <Link to='/pendentesmenu' className='botão' >Voltar</Link>
                </div >
                </div>
            </div>
        </div>
    )
}