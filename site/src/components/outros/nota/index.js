import './index.scss'

export default function Index(){
    return(
        <div className='nota-pagamento'>
            <div className='conteudo'>
                <div className='titulo'>
                    <h8>Resumo</h8>
                </div>
                <div className='resultado'>
                    <p>Total </p>
                    <p> R$ {calcularValorTotal}</p>
                </div>
                <div className='centralizar'>
                    <button className='botão' onClick={irPedido}>Finalizar Compra</button>
                </div>
            </div>
        </div>
    )
}
