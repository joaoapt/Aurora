import './index.scss';
import Menu from '../../../components/admin/menu';
import Cabecalho from '../../../components/admin/cabecalho';

export default function Index(){
    return(
        <main className='page-editar'>
            <Menu selecionado='editar'/>
            <div>
                <div className='cabecalho'>
                    <Cabecalho/>
                </div>
                <div className='base'>
                        <h3>Imagens da Parte de cima do Site</h3>
                    <div className='box1'>
                        <div className='coluna-img'>
                            <img className='img' src='../img/livro-desta.webp' alt='' />
                            <img className='img-invisivel' src='../img/lixo.png' alt='' />
                            <img className='img-invisivel' src='../img/uploud-black.png' alt='' />
                        </div>
                        <div>
                            <img className='img' src='../img/livro-desta.webp' alt='' />
                            <img className='img-invisivel' src='../img/lixo.png' alt='' />
                            <img className='img-invisivel' src='../img/uploud-black.png' alt='' />
                        </div>
                        <div>
                            <img className='img' src='../img/livro-desta.webp' alt='' />
                            <img className='img-invisivel' src='../img/lixo.png' alt='' />
                            <img className='img-invisivel' src='../img/uploud-black.png' alt='' />
                        </div>
                    </div>
                        <h3>Propaganda do Site</h3>
                    <div className='box2'>
                        <div>
                            <img className='img' src='../img/livro-desta.webp' alt='' />
                            <img className='img-invisivel' src='../img/lixo.png' alt='' />
                            <img className='img-invisivel' src='../img/uploud-black.png' alt='' />
                        </div>
                    </div>
                </div>
            </div>    
        </main>
    )
}