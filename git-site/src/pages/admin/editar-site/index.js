import './index.scss';
import Menu from '../../../components/admin/menu';
import Cabecalho from '../../../components/admin/cabecalho';

export default function Index(){
    return(
        <div className='page-editar'>
            <Menu selecionado='editar'/>
            
            <div className='cabecalho'>
                <Cabecalho/>
            </div>
        </div>
    )
}