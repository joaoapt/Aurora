import randomString from 'randomstring'

export function criarNovoPedidoCartao(idUsuario, info) {

    return {
        idUsuario: idUsuario,
        idEndereco: info.idEndereco,
        status: 'Pagamento Confirmado',
        tipoPagamento: 'Cartão'
    }
}

export function criarBoleto() {
    return randomString.generate(11);
}

export function criarNovoPedidoBoleto(idUsuario, info) {

    return {
        idUsuario: idUsuario,
        idEndereco: info.idEndereco,
        status: 'Pagamento Confirmado',
        tipoPagamento: 'Boleto'
    }
}

