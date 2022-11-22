import './index.scss';
import { Link } from 'react-router-dom';

export default function Index() {
    return(
        <main className='page-aprovado'>

                <div>
                    <div className='f'>
                        <div className='e'>
                            <p className='a'>Sua Compra foi efetuada com sucesso</p>
                        </div>
                        <div className='g'>
                            <p className='y'>Número do pedido: 34567</p>
                        </div>
                    </div>             
                </div>
                <div>
                    <Link to='/' className='botão1'>Voltar</Link>
                </div>
        </main>
    )
}