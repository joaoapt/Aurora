import './index.scss';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useState } from 'react';
import Lottie from "react-lottie";
import animationData from '../../../animacao/menu.json';


export default function Index (){
    
    const [menu, setMenu] = useState(false);
    const [animationState, setAnimationState] = useState({
        isStopped: false, isPaused: false,
        direction: 1,
      });
    
      const defaultOptions = {
        loop: false,
        autoplay: false, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    

    function simOUnão() {
        if(menu === false){setMenu(true)
        }
        else if(menu === true){
            setMenu(false)
        }
    }


    return(
        <nav className='buscar'>
            <nav ClassName='local'>
                <div className='cont-logo'>
                    <Link to='/'>
                        <img className='logo' src="/img/logo.png" alt='logo'/>
                    </Link>
                    <Link to='/'>
                        <p className='barra'> | </p>
                    </Link>
                    <Link to='/'className='titulo'>
                        <h1>Aurora</h1> <h1 className='sas'>Books</h1>
                    </Link>
                    <div className='caixa-busca'>
                        <input type="text" placeholder='Buscar' />
                        <img className='img-pesquisa' src='/img/pesquisa.png' alt='' />
                    </div>
                    <Link className='botão-login' to='/login'>Login</Link>
                    <div onClick={simOUnão}>
                    <div className= 'nave'
                    onClick={() => {
                            const reverseAnimation = -1;
                            const normalAnimation = 1;
                         setAnimationState({
                            ...animationState,
                            isStopped: true,
                            direction: animationState.direction === normalAnimation 
                              ? reverseAnimation
                              : normalAnimation,
                          })
                         }}>
                        <Lottie
                        options={defaultOptions}
                        width={60}
                        direction={animationState.direction}
                        isStopped={animationState.isStopped}
                        isPaused={animationState.isPaused}
                        />
                        {menu === true && 
                        <nav className='menu-page'>
                        <div className='exit'></div>
                        <Scrollbars className="scroll"></Scrollbars>
                        <div className='navbar-nav'>
                            <div className='nav-item'><Link to='/'>Home</Link></div>
                            <div className='nav-item'><Link to='/login'>Seu Login</Link></div>
                            <div className='nav-item'><Link to='/login-admin'>Login Administrativo</Link></div>
                        </div>
                        </nav>
                        }
                    </div>
                    </div>
                </div>
            </nav>
            <div className='linha'></div>
        </nav>
    )
}