import './index.scss';
import { Link } from 'react-router-dom';

export default function Index() {
    return(
        <div className='page-pix'>
                <img className='pix' src='/img/pix.jpeg' alt='' />
                <Link className='botão' to='/aprovado'>Ok</Link>
        </div>
    )
}