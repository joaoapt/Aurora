import randomString from 'randomstring'

export function criarNotaFiscal() {
    return randomString.generate(11);
}

export function criarNovoPedidoCartao(idUsuarioLogin, info) {

    let agora = new Date();
    let Notafiscal = criarNotaFiscal();

    return {
        idUsuarioLogin: idUsuarioLogin,
        idUsuarioEndereco: info.idUsuarioEndereco,
        Notafiscal:Notafiscal,
        data: agora,
        status: 'Pagamento Confirmado',
        tipoPagamento: 'Cartão'
    }
}