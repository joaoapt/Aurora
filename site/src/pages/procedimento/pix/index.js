import './index.css';
import { Link } from 'react-router-dom';

export default function Index() {
    return(
        <div className='page-cartao'>
                <img className='img_img-pix' src='' alt='' />
                <Link className='botão-ok-ok' to='/aprovado'>Ok</Link>
        </div>
    )
}