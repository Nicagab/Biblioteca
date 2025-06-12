import ILivro from '../interfaces/ILivro'
import Link from 'next/link'

export default function Livro({livro, link}: {livro: ILivro, link: string}){
    return(
        <>
        <div className='flex border flex-col justify-between'>
            <ul className='flex flex-col p-3'>
                <li>📖Título: {livro.titulo}</li>
                <li>✍️Autor: {livro.autor}</li>
                {livro.genero && <li>🏷️Gênero: {livro.genero}</li>}
                <li>📅Ano: {livro.ano}</li>
            </ul>
            <Link href={link} className='flex self-center cursor-pointer hover:text-blue-400'>[Ver detalhes]</Link>  
        </div>
        </>
    )
}