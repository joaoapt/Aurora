import { BrowserRouter, Routes, Route } from "react-router-dom";

import Editar from './pages/admin/editar-site'
import Pendentes from './pages/admin/pendentes'
import Home from './pages/outros/home';
import Login from './pages/usuario/login';
import LoginAdmin from './pages/admin/login-admin';
import CadastrarUsuario from './pages/outros/cadastrar';
import MenuAdmin from './pages/admin/menu';
import Carrinho from './pages/usuario/carrinho';
//import Cadastralivro from './pages/admin/cadastrar-livro-admin';
import PendentesMenu from './pages/admin/pedentes-menu';
import PendentesPessoas from './pages/admin/pessoas';

export default function Index() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/pendentespessoas" element={<PendentesPessoas/>}/>
                <Route path="/pendentesmenu" element={<PendentesMenu/>}/>
                <Route path="/pendentes" element={<Pendentes/>}/>
                <Route path="/Editar-site" element={<Editar/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/menu" element={<MenuAdmin/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/login-admin" element={<LoginAdmin/>}/>
                <Route path="/cadastrar" element={<CadastrarUsuario/>}/>
                <Route path="/carrinho" element={<Carrinho/>}/>
            </Routes>
        </BrowserRouter>
    )
}