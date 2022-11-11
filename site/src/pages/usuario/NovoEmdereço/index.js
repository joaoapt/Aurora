import './index.css';

export default function Index() {
    return(
        <div className="pag-novo">
                <div className='l-novo'>
                    <p className='a-novo'>Novo Endereço</p>
                    <p className='b-novo'>CEP:</p>
                    <input type="text" className='o-novo'/>
                    <p className='c-novo'>Logradouro:</p>
                    <input type="text" className='p-novo'/>
                    <p className='d-novo'>Bairro:</p>
                    <input type="text" className='q-novo'/>
                    <p className='e-novo'>Cidade:</p>
                    <input type="text" className='r-novo'/>
                    <p className='f-novo'>Estado:</p>
                    <input type="text" className='s-novo'/>
                    <p className='g-novo'>Número:</p>
                    <input type="text" className='t-novo'/>
                    <p className='h-novo'>Complemento:</p>
                    <input type="text" className='u-novo'/>
                    <p className='i-novo'>País:</p>
                    <input type="text" className='v-novo'/>
                    <div>
                        <p className='j-novo'>voltar</p>
                        <p className='k-novo'>enviar</p>
                    </div>
                </div>
        </div>
    )
}