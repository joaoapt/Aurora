import './index.scss';

import Menu from '../../../components/admin/menu';
import Cabecalho from '../../../components/admin/cabecalho';

import { useState } from 'react';

import { cadastrar, enviarImagem } from '../../../api/admin/produto';

import storage from 'local-storage';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Index(){ 
    const [categoria, setCategoria] = useState ('');
    const [classificacao, setClassificacao] = useState ('');
    const [livro, setLivro] = useState ('');
    const [autor, setAutor] = useState ('');
    const [editora, setEditora] = useState ('');
    const [idioma, setIdimoma] = useState ('');
    const [isbn13, setIsbn13] = useState ();
    const [isbn10, setIsbn10] = useState ();
    const [preco, setPreco] = useState ();
    const [original, setOriginal] = useState ('');
    const [sinopse, setSinopse] = useState ('');
    const [versao, setVersao] = useState ('');
    const [pagina, setPagina] = useState ();
    const [volume, setVolume] = useState ();
    const [largura, setLargura] = useState ();
    const [comprimento, setComprimento] = useState ();
    const [imagem, setImagem] = useState();


    async function  salvarClick() {
        try {
            const usuario = storage ('usuario-logado').id;

            const r = await cadastrar(categoria,classificacao, livro, autor, editora, idioma, isbn13, isbn10, preco, original, sinopse, versao, pagina, volume, largura, comprimento, usuario);
            const img = await enviarImagem(r.id, imagem); 
            //12:44

            toast('Livro cadastrado com sucesso!');
        } catch (err) {
            toast.error(err.response.data.erro);
        }
    }

    function escolherCapa() {
        document.getElementById('imagemCapa').click();
    }

    function mostrarImagem() {
        return URL.createObjectURL(imagem);
    }

    return(
        <main className='page-cadastrar-livro'>
            <ToastContainer/>
             <Menu selecionado='cadastrar'/>
            <div className='posição'>
                    <div className='cabecalho'>
                        <Cabecalho/>
                    </div>
                <div className='conteudo'>
                        <section>
                            <div className='form-colums'>
                                <div className='coluna1'>
                                        <div className='form-row'>
                                            <label>Titúlo:</label>
                                            <input type='text' value={livro} onChange={e => setLivro(e.target.value)} />
                                        </div>
                                        <div className='form-row'>
                                            <label>Autor:</label> 
                                            <input type='text' value={autor} onChange={e => setAutor(e.target.value)} />
                                        </div>
                                        <div className='form-row'>
                                            <label>Classificação Indicativa:</label>
                                            <select type='text'  value={classificacao} onChange={e => setClassificacao(e.target.value)} >
                                                <option selected hidden >Selecione</option>
                                                <option>L</option>
                                                <option>10</option>
                                                <option>14</option>
                                                <option>18</option>
                                            </select>
                                        </div>
                                        <div className='form-row'>
                                            <label>Titúlo Original:</label>
                                            <input type='text' value={original} onChange={e => setOriginal(e.target.value)} />
                                        </div>
                                        <div className='form-row'>
                                            <label>Versao:</label>
                                            <input type='text' value={versao} onChange={e => setVersao(e.target.value)} />
                                        </div>
                                        <div className='form-row'>
                                            <label>ISBN-10:</label>
                                            <input type='number' value={isbn10} onChange={e => setIsbn10(e.target.value)} />
                                        </div>
                                        <div className='form-row'>
                                            <label>Qtd. Páginas:</label>
                                            <input className='menor' type='number' value={pagina} onChange={e => setPagina(e.target.value)} />
                                        </div>
                                        <div className='form-row'>
                                            <label>Preço:</label>
                                            <input type='number' value={preco} onChange={e => setPreco(e.target.value)} />
                                        </div>
                                        <div className='form-row'>
                                            <label>Volume:</label>
                                            <input type='number'  value={volume} onChange={e => setVolume(e.target.value)} />
                                        </div>
                                        <br />
                                </div>
                                <div className='coluna2'>
                                    <div className='coluna-2'>
                                            <label>Editora:</label>
                                            <input type='text'  value={editora} onChange={e => setEditora(e.target.value)}  />
                                        </div>
                                        <div className='form-row'>
                                            <label>idioma:</label>
                                            <input type='text'  value={idioma} onChange={e => setIdimoma(e.target.value)} />
                                        </div>
                                        <div className='coluna-2'>
                                            <label>Categoria:</label>
                                            <select type='text'  value={categoria} onChange={e => setCategoria(e.target.value)} >
                                                <option selected hidden >Selecione</option>
                                                <option>Filosofia</option>
                                                <option>Ficção científica</option>
                                                <option>Aventura</option>
                                                <option>Aventura</option>
                                                <option>Aventura</option>
                                                <option>Distopia</option>
                                                <option>Misterio</option>
                                                <option>HQs</option>
                                                <option>Horror</option>
                                                <option>Romance</option>
                                                <option>LGBTQ+</option>
                                                <option>Biografia</option>
                                                <option>Gastronomia</option>
                                                <option>Autoajuda</option>
                                                <option>História</option>
                                                <option>Conto</option>
                                                <option>Humor</option>
                                                <option>Religião</option>
                                                <option>Tecnologia</option>
                                            </select>
                                        </div>
                                        <div className='coluna-2'>
                                            <label>ISBN-13:</label>
                                            <input type='number' value={isbn13} onChange={e => setIsbn13(e.target.value)}  />
                                        </div>
                                        <div className='form-row'>
                                            <label>Largura:</label>
                                            <input type='number' value={largura} onChange={e => setLargura(e.target.value)} />
                                        </div>
                                        <div className='coluna-2'>
                                            <label>Comprimento:</label>
                                            <input className='menor' type='number' value={comprimento} onChange={e => setComprimento(e.target.value)} />
                                        </div>
                                        <div className='coluna-2'>
                                            <label className='box-sinopse'>Sinopse:</label>
                                            <textarea  value={sinopse} onChange={e => setSinopse(e.target.value)} />
                                        </div>
                                        <br /> <br />
                                </div>
                                <div>
                                        <div className='coluna-3'>
                                            <div>
                                            <div className='upload-capa' onClick={escolherCapa}>

                                                {!imagem &&
                                                     <img className='img' src="../img/upload.png" alt="upload" />
                                                }

                                                {imagem &&
                                                 <img className='img1' src={mostrarImagem()} alt=''/>
                                                }
                                               
                                                <input type='file' className='input-capa' onChange={e => setImagem(e.target.files[0])}/>
                                            </div>
                                            </div>
                                            <div className='box-botão'>
                                                <button  className='botão' onClick={salvarClick}>Enviar</button>    
                                            </div>
                                        </div>
                                </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}