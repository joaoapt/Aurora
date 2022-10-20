import randomString from 'randomstring'

export function criarNovoPedido(idUsuario, info) {
    
    let agora = new Date();
    let notaFiscal = criarNotaFiscal();

    return {
        idUsuario: idUsuario,
        idEndereco: info.idEndereco,
        data: agora,
        notaFiscal: notaFiscal,
        valorFrete: valorFrete,
        status: 'Confirmando Pagamento',
        tipoPagamento: 'Cartão'
    }
}

export function criarNotaFiscal() {
    return randomString.generate(11);
}