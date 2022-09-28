import './index.scss';

import Menu from '../../../components/admin/menu';
import Cabecalho from '../../../components/admin/cabecalho';

import { useState } from 'react';

import { cadastrar } from '../../../api/cadastrar-livro'

import storage from 'local-storage';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Index(){ 
    const [categoria, setCategoria] = useState ('');
    const [livro, setLivro] = useState ('');
    const [autor, setAutor] = useState ('');
    const [editora, setEditora] = useState ('');
    const [idioma, setIdimoma] = useState ('');
    const [isbn13, setIsbn13] = useState (0);
    const [isbn10, setIsbn10] = useState (0);
    const [preco, setPreco] = useState (0);
    const [original, setOriginal] = useState ('');
    const [sinopse, setSinopse] = useState ('');
    const [versao, setVersao] = useState ('');
    const [pagina, setPagina] = useState (0);
    const [volume, setVolume] = useState (0);
    const [largura, setLargura] = useState (0);
    const [comprimento, setComprimento] = useState (0);


    async function  salvarClick() {
        try {
            const usuario = storage ('usuario-logado').id;

            const resposta = await cadastrar(categoria, livro, autor, editora, idioma, isbn13, isbn10, preco, original, sinopse, versao, pagina, volume, largura, comprimento, usuario);

            toast('Livro cadastrado com sucesso!');
        } catch (err) {
            toast.error(err.response.data.erro);
        }
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
                                                <option selected disabled hidden>Selecione</option>
                                                <option>Filosofia</option>
                                                <option>Sociologia</option>
                                                <option>Aventura</option>
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
                                            <div className='upload-capa'>
                                                <img className='img' src="../img/upload.png" alt="upload" />
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