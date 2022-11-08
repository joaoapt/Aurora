import './index.css';

export default function Index() {
    return(
        <div className="pag-novo">
                <div className='l-cartao'>
                    <div>
                        <p className='a-cartao'>Novo Endereço</p>
                        <p className='b-cartao'>CEP:</p>
                        <input type="text"/>
                        <p className='c-cartao'>Logradouro:</p>
                        <input type="text"/>
                        <p className='d-cartao'>Bairro:</p>
                        <input type="text"/>
                        <p className='e-cartao'>Cidade:</p>
                        <input type="text"/>
                        <p className='f-cartao'>Estado:</p>
                        <input type="text"/>
                        <p className='g-cartao'>Número:</p>
                        <input type="text"/>
                        <p className='h-cartao'>Complemento:</p>
                        <input type="text"/>
                        <p className='i-cartao'>País:</p>
                        <input type="text"/>
                        <div>
                            <p className='j-cartao'>voltar</p>
                            <p className='k-cartao'>enviar</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}