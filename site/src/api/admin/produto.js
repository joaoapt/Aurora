import { API_URL } from '../config/configAPI';
import axios from 'axios'
 const api = axios.create({
     baseURL: API_URL
 })

 export async function cadastrar(categoria,classificacao, livro, autor, editora, idioma, isbn13, isbn10, preco, original, sinopse, versao, pagina, volume, largura, comprimento) {
     const resposta = await api.post('/cadastrar/livro', {
        categoria:categoria,
        classificacao:classificacao,
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

 export async function alterarProduto(id, nome, preco, destaque, idDepartamento, categorias) {
     await api.put('/admin/livro/' + id, { nome, preco, destaque, idDepartamento, categorias });
 }

 export async function editar(categoria,classificacao, livro, autor, editora, idioma, isbn13, isbn10, preco, original, sinopse, versao, pagina, volume, largura, comprimento) {
     const resposta = await api.post('/cadastrar/livro', {
        categoria:categoria,
        classificacao:classificacao,
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



 export async function buscarProdutos() {
     const r = await api.get('/admin/livro');
     return r.data;
 }


 export async function salvarImagem(id, imagem) {
    
     let formData = new FormData();
     formData.append('capa', imagem);

     const resp = await api.put(`/livro/${id}/capa`, formData, {
         headers: {
             "Content-Type": "multipart/form-data"
         }
     });

     return resp.status;
 }



 export async function removerProduto(id) {
     const r = await api.delete('/admin/livro/' + id);
     return r.data;
 }



 export async function buscarProdutoPorId(id) {
     const r = await api.get('/admin/livro/' + id);
     return r.data;
 }

//imagem capa do livro
export async function enviarImagem(id, imagem) {
    const formData = new FormData();
    formData.append('capa', imagem);

      const resposta = await api.put(`/livro/${id}/capa`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return resposta.status;
}