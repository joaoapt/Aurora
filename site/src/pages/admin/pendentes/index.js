import './index.scss';
import Menu from '../../../components/admin/menu';
import { buscarLivro } from '../../../api/admin/consultar-BD'
import { useEffect, useState } from 'react';

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
            <div className='base' >
                {livro.map(item =>
                    <div>
                        <p>{livro.livro}</p>
                        <p>livro</p>
                    </div>    
                )}
            </div>
        </div>
    )
}