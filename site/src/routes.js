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
import ProdutoVil from './pages/outros/produto-vil'
import PendentesMenu from './pages/admin/pedentes-menu';
import PendentesPessoas from './pages/admin/pessoas';
import Erro from './pages/erro';
import Novo from './pages/usuario/NovoEmdereço';
import Aprovado from './pages/procedimento/aprovado';
import Boleto from './pages/procedimento/boleto';
import Cartão from './pages/procedimento/cartão';
import EscolhaPag from './pages/procedimento/escolha pagamento';
import Tela1 from './pages/usuario/TelaUsuario1';
import Tela2 from './pages/usuario/TelaUsuario2';
import Tela3 from './pages/usuario/TelaUsuario3';


export default function Index() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/erro404" element={<Erro/>}/>
                <Route path="/novo" element={<Novo/>}/>
                <Route path="/aprovado" element={<Aprovado/>}/>
                <Route path="/boleto" element={<Boleto/>}/>
                <Route path="/cartao" element={<Cartão/>}/>
                <Route path="/escolhapag" element={<EscolhaPag/>}/>
                <Route path="tela1" element={<Tela1/>}/>
                <Route path="tela2" element={<Tela2/>}/>
                <Route path="tela3" element={<Tela3/>}/>
                <Route path="/produto/vil" element={<ProdutoVil/>}/>
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