
import axios from 'axios'
import { LoginAdmin } from './login-admin'
const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function cadastrar(categoria, livro, autor, editora, idioma, isbn13, isbn10, preco, original, sinopse, versao, pagina, volume, largura, comprimento) {
    const resposta = await api.post('/admin/cadastrar/livro', {
        categoria:categoria,
        livro:livro,
        autor:autor,
        editora:editora,
        idioma:idioma,
        isbn13:isbn13,
        isbn10:isbn10,
        preco:preco,
        original:original,
        sinopse:sinopse,
        versao:versao,
        pagina:pagina,
        volume:volume,
        largura:largura,
        comprimento:comprimento
    })
    return resposta.data;
}


////imagem capa do livro
//export async function enviarImagem(id, imagem) {
//    const formData = new FormData();
//    formData.append('capa-livro', imagem);
//
//      const resposta = await api.put(`/img/${id}/capa/livro`, formData, {
//        headers: {
//            "Content-Type": "multipart/form-data"
//        };
//    });
//    return resposta.status;
//}