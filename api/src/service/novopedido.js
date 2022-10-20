import randomString from 'randomstring'

export function criarNovoPedido(idUsuario, info) {
    
    let agora = new Date();
    let criarBoleto = criarBoleto();

    return {
        idUsuario: idUsuario,
        idEndereco: info.idEndereco,
        data: agora,
        status: 'Confirmando Pagamento',
        tipoPagamento: 'Cartão'
    }
}

export function criarBoleto() {
    return randomString.generate(11);
}