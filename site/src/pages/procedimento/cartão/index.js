import './index.scss';

export default function Index() {
    return(
        <main className='page-cartao'>
        
                <div>
                    <div>
                        <div className='g'>
                            <p className='a'>Cartão de credito</p>
                            <p className='b'>Codigo do Boleto:</p>
                            <input type="" className='n'/>
                            <p className='c'>Número:</p>
                            <input type="" className='o'/>
                            <div>
                                <p className='d'>Validade:</p>
                                <input type="" className='p'/>
                                <p className='e'>CVV:</p>
                                <input type="" className='q'/>
                            </div>
                            <p className='f'>enviar</p>
                        </div>
                        <div className='h'>
                            <p className='i'>resume</p>
                            <hr className='r'/>
                            <p className='j'>Nome:                   Culio Ferraz</p>
                            <p className='k'>CPF:                 546.789.908-99</p>
                            <p className='l'>Telefone:          (11) 967890987</p>
                            <p className='m'>Total da conpra R$ 198,00</p>
                        </div>
                    </div>
                </div>
        
        </main>
    )
}