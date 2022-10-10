import './index.scss';

import Menu from '../../../components/admin/menu';
import Cabecalho from '../../../components/admin/cabecalho';


export default function Index(){ 

    return(
        <main className='page-cadastrar-livro'>
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
                                            <input type='text'  />
                                        </div>
                                        <div className='form-row'>
                                            <label>Autor:</label>
                                            <input type='number'/>
                                        </div>
                                        <div className='form-row'>
                                            <label>idioma:</label>
                                            <input type='number'/>
                                        </div>
                                        <div className='form-row'>
                                            <label>Titúlo Original:</label>
                                            <input type='number'/>
                                        </div>
                                        <div className='form-row'>
                                            <label>Idioma:</label>
                                            <input type='number'/>
                                        </div>
                                        <div className='form-row'>
                                            <label>ISBN-10:</label>
                                            <input type='number'/>
                                        </div>
                                        <div className='form-row'>
                                            <label>Qtd. Páginas:</label>
                                            <input className='menor' type='number'/>
                                        </div>
                                        <div className='form-row'>
                                            <label>Preço:</label>
                                            <input type='number'/>
                                        </div>
                                        <div className='form-row'>
                                            <label>Volume:</label>
                                            <input type='number'/>
                                        </div>
                                        <div className='form-row'>
                                            <label>Largura:</label>
                                            <input type='number'/>
                                        </div>
                                        <br />
                                </div>
                                <div className='coluna2'>
                                    <div className='coluna-2'>
                                            <label>Editora:</label>
                                            <input type='text'  />
                                        </div>
                                        <div className='coluna-2'>
                                            <label>Edição:</label>
                                            <input type='text'  />
                                        </div>
                                        <div className='coluna-2'>
                                            <label>Publicação:</label>
                                            <input type='text'  />
                                        </div>
                                    
                                        <div className='coluna-2'>
                                            <label>Classificação Indicativa:</label>
                                            <select type='text'  >
                                                <option selected disabled hidden>Selecione</option>
                                            </select>
                                        </div>
                                        <div className='coluna-2'>
                                            <label>Categoria:</label>
                                            <select type='text'  >
                                                <option selected disabled hidden>Selecione</option>
                                            </select>
                                        </div>
                                        <div className='coluna-2'>
                                            <label>ISBN-13:</label>
                                            <input type='number'/>
                                        </div>
                                        <div className='coluna-2'>
                                            <label>Comprimento:</label>
                                            <input className='menor' type='number'/>
                                        </div>
                                        <div className='coluna-2'>
                                            <label className='box-sinopse'>Sinopse:</label>
                                            <textarea placeholder='Sinopse do Livro' />
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
                                                <button  className='botão'>Enviar</button>    
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