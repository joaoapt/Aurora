import './index.css';
import { useState } from 'react';
import { salvarEndereco } from '../../../api/endereco/listar-endereco';
import Storage from 'local-storage'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';


export default function Index() {
    const [cep,setCep] = useState('');
    const [complemento,setComplemento] = useState('');
    const [pais,setPais] = useState('');
    const [bairro,setBairro] = useState('');
    const [estado,setestado] = useState('');
    const [cidade,setCidade] = useState('');

    async function salvar(){
        try{
            const id = Storage('cliente-logado').id;
            await salvarEndereco(id,cep,complemento,pais,bairro,estado,cidade);
            toast('Endereço Cadastrado com sucesso!')
        }
        catch (err) {
                toast.dark.console.error(err.response.data.erro);
        }
    }


    return(
        <div className="pag-novo">
            <ToastContainer/>
                <div className='l-novo'>
                    <p className='a-novo'>Novo Endereço</p>
                    <p className='b-novo'>CEP:</p>
                    <input value={cep} className='o-novo'  onChange={e => setCep(e.target.value)} type="text" />
        
                    <p className='d-novo'>Bairro:</p>
                    
                    <input value={bairro} className='p-novo' onChange={e => setBairro(e.target.value)} type="text"/>

                    <p className='e-novo'>Cidade:</p>
                    <input value={cidade} className='q-novo' onChange={e => setCidade(e.target.value)} type="text" />

                    <p className='f-novo'>Estado:</p>
                    <input value={estado} className='r-novo' onChange={e => setestado(e.target.value)} type="text" />

                    <p className='h-novo'>Complemento:</p>
                    <input value={complemento} className='s-novo'  onChange={e => setComplemento(e.target.value)} type="text" />

                    <p className='i-novo'>País:</p>
                    <input value={pais} className='t-novo' onChange={e => setPais(e.target.value)}  type="text" />
                    <div>
                        <Link className='w-novo' to='/pix'>pagar</Link>
                        <p className='j-novo'>voltar</p>
                        <button className='k-novo' onClick={salvar}>enviar</button>
                    </div>
                </div>
        </div>
    )
}