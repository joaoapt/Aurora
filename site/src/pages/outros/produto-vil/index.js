import './index.scss';
import Buscar from '../../../components/outros/busca';
import Rodape from '../../../components/outros/rodape';
import Produto from '../../../components/carrocel/produto';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { buscarProdutovil } from '../../../api/produto/produto';
import { API_URL } from '../../../api/config/configAPI';
import { Link } from 'react-router-dom';
//import Storage from 'local-storage'



export default function Index () {
    const [produto, setproduto] = useState({ info: {} })
    const { id } = useParams();

    async function carregarPag() {
        const r = await buscarProdutovil(id);
        setproduto(r);
    }

    // function exibir(imagem) {
    //     if (produto.info.imagem.length){
    //     return API_URL + '/' + imagem;
    //     }
    //     else{
    //         return '/produto.png'
    //     }
    // }

    // function adicionarAoCarrinho() {
    //     let carrinho = [];
    //     if (Storage('carrinho')) {
    //         carrinho = Storage('carrinho');
    //     }


    //     if (!carrinho.find(item => item.id === id)) {
    //         carrinho.push({
    //             id: id,
    //             qtd: 1
    //         })

    //         Storage('carrinho', carrinho);
    //     }

    //     toast.dark('Produto adicionado ao carrinho!');
    // }




    // merda do caralho e no botão carrinho
    //onClick = {adicionarAoCarrinho}

    // {produto.info.imagem.map((item) =>
    //     <img className="capa" src={exibir(item)} alt=''/>    
    // )}

    useEffect(() => {
        carregarPag();
    }, [])

    return(
        <div className='pag-produto-vil'>
        <div>
            <nav><Buscar/></nav>
            <div>
                <div className='box-livro'>
                
                        <img className="capa" src='/img/produto.png' alt='aaa'/>    
                
                    <div className='informação'>
                        <div>
                            <div className='informação'>
                                <h6 className='titulo'>{produto.info.livro}</h6>
                                </div>
                            <div className='informação'>
                                <h6 className='pag/autor'>Por:</h6>
                                <p className='sinples'>{produto.info.autor}</p>
                            </div>
                            <div className='informação'> 
                                <h6 className='pag/autor'>Qtd.Páginas:</h6>
                                <p className='sinples'>{produto.info.paginas}</p>
                            </div>
                            <div className='informação-sinopce'>
                                <h6 className='si'>Sinopse:</h6>
                                <br/>
                                <p className='sinopce'>
                                {produto.info.sinopse}
                                </p>
                            </div>
                            <hr></hr>
                        </div>
                        <div className='box-botão'>
                            <div className='box-botão'>
                                <div className='preço'>R$  {produto.info.preco}</div>
                            </div>
                            <div className='box-botão'>
                                <div>
                                    <button className='carrinho'><p>Adicionar</p><img className='car' src="/img/carrinho.png" alt=''/> </button>
                                </div>
                                <Link to='/login'>
                                    <button className='compra'><p>Comprar</p><img className='sacola' src="/img/compras.png" alt=''/></button>
                                </Link>
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
                                <h6 className='autura'> {produto.info.largura} x  {produto.info.comprimento}</h6>
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