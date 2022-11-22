import { BrowserRouter, Routes, Route } from "react-router-dom";

//Aceso apenas para administradores do site
import Cadastralivro from './pages/admin/cadastrar-livro-admin';
import Pendentes from './pages/admin/pendentes'
import LoginAdmin from './pages/admin/login-admin';
import MenuAdmin from './pages/admin/menu';
import PendentesMenu from './pages/admin/pedentes-menu';
import PendentesPessoas from './pages/admin/pessoas';

//Páginas sem acesso necessário
import Home from './pages/outros/home';
import CadastrarUsuario from './pages/outros/cadastrar';
import ProdutoVil from './pages/outros/produto-vil'

//Aceso exclusivo do usuário
import Novo from './pages/usuario/NovoEmdereço';
import Tela1 from './pages/usuario/TelaUsuario1';
import Login from './pages/usuario/login';
import LoginPro from './pages/procedimento/login-pro';

//Procedimento de compra
import Aprovado from './pages/procedimento/aprovado';
import Cartão from './pages/procedimento/cartão';
import Pix from './pages/procedimento/pix';


export default function Index() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/tela1/:id" element={<Tela1/>}/>
                <Route path="/pix" element={<Pix/>} />
                <Route path="/loginp" element={<LoginPro/>}/>
                <Route path="/endereco" element={<Novo/>}/>
                <Route path="/aprovado" element={<Aprovado/>}/>
                <Route path="/cartao" element={<Cartão/>}/>
                <Route path="/cadastrar/livro" element={<Cadastralivro/>}/>
                <Route path="/pendentespessoas" element={<PendentesPessoas/>}/>
                <Route path="/pendentesmenu" element={<PendentesMenu/>}/>
                <Route path="/pendentes" element={<Pendentes/>}/>               
                <Route path="/menu" element={<MenuAdmin/>}/>
                <Route path="/produto/vil/:id" element={<ProdutoVil/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/login-admin" element={<LoginAdmin/>}/>
                <Route path="/cadastrar" element={<CadastrarUsuario/>}/>
            </Routes>
        </BrowserRouter>
    )
}