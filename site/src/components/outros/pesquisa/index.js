import './index.scss'
import { Link } from 'react-router-dom';

export default function Index (){
    return(
        <main ClassName='pesquisa'>
            <nav ClassName='logo'>
                <div className='cont-logo'>
                    <Link to='/'>
                        <img className='logo' src="../img/logo.png" alt='logo'/>
                    </Link>
                    <div>   <p className='barra'> | </p></div>
                    <div className='titulo'>
                        <h1>Aurora</h1>
                        <h1>Books</h1>
                    </div>
                </div>
            </nav>
            <div className='linha'></div>
        </main>
    )
}