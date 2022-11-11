import './index.css';

export default function Index() {
    return(
        <div className='page-cartao'>
                <div>
                    <div>
                        <div className='g-cartao'>
                            <p className='a-cartao'>Cartão de credito</p>
                            <p className='b-cartao'>Codigo do Boleto:</p>
                            <input type="" className='n-cartao'/>
                            <p className='c-cartao'>Número:</p>
                            <input type="" className='o-cartao'/>
                            <div>
                                <p className='d-cartao'>Validade:</p>
                                <input type="" className='p-cartao'/>
                                <p className='e-cartao'>CVV:</p>
                                <input type="" className='q-cartao'/>
                            </div>
                            <p className='f-cartao'>enviar</p>
                        </div>
                        <div className='h-cartao'>
                            <p className='i-cartao'>resume</p>
                            <hr className='r-cartao'/>
                            <p className='j-cartao'>Nome:                   Culio Ferraz</p>
                            <p className='k-cartao'>CPF:                 546.789.908-99</p>
                            <p className='l-cartao'>Telefone:          (11) 967890987</p>
                            <p className='m-cartao'>Total da conpra R$ 198,00</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}