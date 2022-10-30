import './index.scss';

export default function Index() {
    return(
        <div className='categoria'>
            <div className='box'>
                <span>
                    <img className="img" src="./img/capacete.png" alt=""/>
                </span>
                <h6>Aventura</h6>
            </div>
            <div className='box'>
                <span>
                    <img className="img" src="./img/grego.png" alt=""/>
                </span>
                <h6>Filosofia</h6>
            </div>
            <div className='box'>
                <span>
                    <img className="img" src="./img/misterio.png" alt=""/>
                </span>
                <h6>Misterio</h6>
            </div>
            <div className='box'>
                <span>
                    <img className="img" src="./img/foguete.png" alt=""/>
                </span>
                <h6>Ficção</h6>
            </div>
            <div className='box'>
                <span>
                    <img className="img" src="./img/superhero.png" alt=""/>
                </span>
                <h6>HQ</h6>
            </div>
            <div className='box'>
                <span>
                    <img className="img" src="./img/solidao.png" alt=""/>
                </span>
                <h6>Drama</h6>
            </div>
            <div className='box'>
                <span>
                    <img className="img" src="./img/romance.png" alt=""/>
                </span>
                <h6>Romance</h6>
            </div>
        </div>
    )
}