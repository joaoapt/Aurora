import './index.scss'

export default function Index (){
    return(
        <main ClassName='pesquisa'>
            <nav ClassName='logo'>
                <div className='cont-logo'>
                    <div>
                        <img className='logo' src="../img/logo.png" alt='logo'/>

                    </div>
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