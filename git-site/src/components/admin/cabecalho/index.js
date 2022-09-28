import './index.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage'

export default function Index() {
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!storage ('usuario-logado')){
            navigate('/login-admin');
        }
    }, [])

    return(
        <header className='base-cabeçalho'>
            <b className='aprecentação'>Olá admin bem vindo ao Aurora Production </b>
        </header>
    )
}