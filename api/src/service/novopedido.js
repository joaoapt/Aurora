//import randomString from 'randomstring'

export function criarNovoPedidoCartao(idUsuarioLogin, info) {

    let agora = new Date();

    return {
        idUsuarioLogin: idUsuarioLogin,
        idUsuarioEndereco: info.idUsuarioEndereco,
        data: agora,
        status: 'Pagamento Confirmado',
        tipoPagamento: 'Cartão'
    }
}
