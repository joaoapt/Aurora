import './index.scss';
import Menu from '../../../components/admin/menu';
import Cabecalho from '../../../components/admin/cabecalho';

import { Gif } from '../../../components/animação/GifAnimatons';

export default function Index() {
    return(
        <main className='page-home'>
            <Menu selecionado='home'/>
            <div className='posição'>
                <div className='cabecalho'>
                    <Cabecalho/>
                </div>
                <div className='gif'>
                   <Gif />
                </div>
            </div>
        </main>
    )
}