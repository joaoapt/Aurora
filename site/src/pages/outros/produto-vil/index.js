import './index.scss';
import Buscar from '../../../components/outros/busca';
import Rodape from '../../../components/outros/rodape';
import Produto from '../../../components/carrocel/produto';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { buscarProdutovil } from '../../../api/produto/produto';
import { API_URL } from '../../../api/config/configAPI';
import Storage from 'local-storage'

import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



export default function Index () {
    const naviga = useNavigate();
    const [produto, setproduto] = useState({ info: {} })
    const { id } = useParams();

    async function carregarPag() {
        const r = await buscarProdutovil(id);
        setproduto(r);
    }

    function exibir(imagem) {
        return API_URL + '/' + imagem;
    }

    function adicionarAoCarrinho() {
        let carrinho = [];
        if (Storage('carrinho')) {
            carrinho = Storage('carrinho');
            return  naviga('/endereco')
        }
        if (!carrinho.find(item => item.id === id)) {
            carrinho.push({
                id: id
            })

            Storage('carrinho', carrinho);
        }
    }
    



    useEffect(() => {
        carregarPag();
    }, )

    return(
    
        <div className='pag-produto-vil'>

        <div>
            <nav><Buscar/></nav>
            <div>
                <div className='box-livro'>
                
                        <img className="capa" src={exibir(produto.info.imagem)} alt='aaa'/>    
                
                    <div className='informação'>
                        <div className='nono'>
                            <div>
                                <h6 className='titulo'>{produto.info.livro}</h6>
                                </div>
                            <div className='sub'>
                                <h6 className='pag/autor'>Autor:</h6>
                                <p className='sinples'>{produto.info.autor}</p>
                            </div>
                            <div className='sub'> 
                                <h6 className='pag/autor'>Qtd.Páginas:</h6>
                                <p className='sinples'>{produto.info.paginas}</p>
                            </div>
                            <div className='informação-sinopce'>
                                <h6 className='siss'>Sinopse:</h6>
                                <br/>
                                <p className='sinopce'>
                                {produto.info.sinopse}
                                </p>
                            </div>
                            <hr></hr>
                        </div>
                        <div className='box-lala'>
                            <div>
                                <div className='box-botão'>
                                    <div className='preço'>R$  {produto.info.preco}</div>
                                </div>
                                <div onClick = {adicionarAoCarrinho}>
                                    <div>
                                        <button className='compra'>Comprar<img  src="/img/compras.png" alt=''/></button>
                                    </div>
                                    <div className='local-classi'>
                                        <div className='classi'>
                                            {produto.info.classificacao}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                        <div className='sobre-livro'>
                            <div className='box'>
                                <h6 className='acima'>Categoria</h6>
                                <div className='local-img'>
                                    <img src="/img/abra-o-livro.png" alt="logo"/>
                                </div>
                                <h6 className='paginas'>{produto.info.categoria}</h6>
                            </div>
                            <div className='box'>
                                <h6 className='acima'>Idioma</h6>
                                <div className='local-img'>
                                    <img src="/img/linguas.png" alt="logo"/>
                                </div>
                                <h6 className='cod'> {produto.info.idioma}</h6>
                            </div>
                            <div className='box'>
                                <h6  className='acima'>Dimensões</h6>
                                <div className='local-img'>
                                    <img src="/img/area.png" alt="logo"/>
                                </div>
                                <h6 className='autura'> {produto.info.largura}X <br/>  {produto.info.comprimento}X cm</h6>
                            </div>
                            <div className='bo'>
                                <h6  className='acima'>Editora</h6>
                                <div className='local-img'>
                                    <img src="/img/predio.png" alt=""/>
                                </div>
                                <h6 className='editora'> {produto.info.editora}</h6>
                            </div>
                            <div className='box'>
                                <h6 className='acima'>ISBN-13</h6>
                                <div className='local-img'>
                                    <img src="/img/codigo.png" alt=""/>
                                </div>
                                <h6 className='cod'>{produto.info.isbn13}</h6>
                            </div>
                            <div className='box'>
                                <h6 className='acima'>ISBN-10</h6>
                                <div className='local-img'>
                                    <img src="/img/codigo.png" alt=""/>
                                </div>
                                <h6 className='cod'> {produto.info.isbn10}</h6>
                            </div>
                        </div>
                <div>
                    <h4>Recomendado</h4>
                    <div className='aaa'>
                        <Produto/>
                    </div>
                </div>
            </div>
            <footer><Rodape/></footer>
        </div>
    </div>
    )
}