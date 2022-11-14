import './index.scss';
import Buscar from '../../../components/outros/busca';
import Rodape from '../../../components/outros/rodape';
import Produto from '../../../components/carrocel/produto';
import Storage from 'local-storage'



export default function Index () {

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



    // useEffect(() => {
    //     carregarPagina(); 
    // }, [])

    // merda do caralho e no botão carrinho
    //onClick = {adicionarAoCarrinho}


    return(
        <div className='pag-produto-vil'>
        <div>
            <nav><Buscar/></nav>
            <div>
                <div className='box-livro'>
                    <img className="capa" src="../img/nascida.jpg" alt="logo"/>
                    <div className='informação'>
                        <div>
                            <div className='informação'>
                                <h6 className='titulo'>Nacida do Fogo</h6>
                                </div>
                            <div className='informação'>
                                <h6 className='pag/autor'>Por:</h6>
                                <p className='sinples'>C. S. Lewis</p>
                            </div>
                            <div className='informação'> 
                                <h6 className='pag/autor'>Qtd.Páginas:</h6>
                                <p className='sinples'>300</p>
                            </div>
                            <div className='informação-sinopce'>
                                <h6 className='si'>Sinopse:</h6>
                                <br/>
                                <p className='sinopce'>
                                Conheça Doze. Seu clã mudou seu nome. Ela mudará o mundo.
                                Ember, a terra fantástica que guarda os sete clãs, está cheia de monstros.
                                E Doze desistiu de sua identidade para aprender 
                                a arte de caçá-los ― ou, ao menos, é o que diz. A verdade é muito 
                                mais mortal: ela treina para se vingar daqueles que mataram sua família.
                                Quando seu clã é atacado e uma colega é raptada, Doze é a única que se mostra 
                                disposta a resgatá-la. Um universo fantástico inesquecível.
                                </p>
                            </div>
                            <hr></hr>
                        </div>
                        <div className='box-botão'>
                            <div className='box-botão'>
                                <div className='preço'>R$ 99,00</div>
                            </div>
                            <div className='box-botão'>
                                <div>
                                    <button className='carrinho'><p>Adicionar</p><img className='car' src="../img/carrinho.png" alt=''/> </button>
                                </div>
                                <div>
                                    <button className='compra'><p>Comprar</p><img className='sacola' src="../img/compras.png" alt=''/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                        <div className='sobre-livro'>
                            <div className='box'>
                                <h6 className='acima'>Categoria</h6>
                                <div className='local-img'>
                                    <img src="../img/abra-o-livro.png" alt="logo"/>
                                </div>
                                <h6 className='paginas'>Aventura</h6>
                            </div>
                            <div className='box'>
                                <h6 className='acima'>Idioma</h6>
                                <div className='local-img'>
                                    <img src="../img/linguas.png" alt="logo"/>
                                </div>
                                <h6 className='cod'>Português</h6>
                            </div>
                            <div className='box-oll'>
                                <h6  className='acima'>Dimensões</h6>
                                <div className='local-img'>
                                    <img src="../img/area.png" alt="logo"/>
                                </div>
                                <h6 className='autura'>15.5 x 1.7 x 23 cm</h6>
                            </div>
                            <div className='box-oll'>
                                <h6  className='acima'>Editora</h6>
                                <div className='local-img'>
                                    <img src="../img/predio.png" alt=""/>
                                </div>
                                <h6 className='editora'>HarperCollins Brasil</h6>
                            </div>
                            <div className='box'>
                                <h6 className='acima'>ISBN-13</h6>
                                <div className='local-img'>
                                    <img src="../img/codigo.png" alt=""/>
                                </div>
                                <h6 className='cod'>6555112131</h6>
                            </div>
                            <div className='box'>
                                <h6 className='acima'>ISBN-13</h6>
                                <div className='local-img'>
                                    <img src="../img/codigo.png" alt=""/>
                                </div>
                                <h6 className='cod'>6555112131</h6>
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