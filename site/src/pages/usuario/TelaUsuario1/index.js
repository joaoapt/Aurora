import './index.css';
import Menu from '../../../components/admin/menu';
import Cabecalho from '../../../components/admin/cabecalho';

export default function Index() {
    return(
        <main className='page-usu1'>
                <div>
                    <div className='k-usu1'>

                        <p className='a-usu1'>Nome:</p>
                        <p className='b-usu1'>João</p>
                        <p className='c-usu1'>Senha: *</p>
                        <p className='d-usu1'>Email:</p> 
                        <p className='e-usu1'>melo@gmail.com</p>
                        <p className='f-usu1'>CPF:</p>
                        <p className='g-usu1'>12345678900</p>
                        <p className='h-usu1'>Endereço:</p> 
                        <p className='i-usu1'>Travessa Agenor José Rodrigues Pereira, 546, Rocinha Rio de Janeiro, RJ, Brasil, 22451-545</p>
                        <p className='j-usu1'>Alterar Endereço</p>
                    </div>
                </div>
        
        </main>
    )
}