import './index.scss';

export default function Index() {
    return(
        <main className='page-home'>
        
                <div className='l'>
                    <div>
                        <p className='a'>Novo Endereço</p>
                        <p className='b'>CEP:</p>
                        <input type="text"/>
                        <p className='c'>Logradouro:</p>
                        <input type="text"/>
                        <p className='d'>Bairro:</p>
                        <input type="text"/>
                        <p className='e'>Cidade:</p>
                        <input type="text"/>
                        <p className='f'>Estado:</p>
                        <input type="text"/>
                        <p className='g'>Número:</p>
                        <input type="text"/>
                        <p className='h'>Complemento:</p>
                        <input type="text"/>
                        <p className='i'>País:</p>
                        <input type="text"/>
                        <div>
                            <p className='j'>voltar</p>
                            <p className='k'>enviar</p>
                        </div>
                    </div>
                </div>
        
        </main>
    )
}