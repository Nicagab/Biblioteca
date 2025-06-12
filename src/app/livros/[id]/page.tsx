'use client'

import { useParams } from "next/navigation"
import Link from "next/link"
import ILivro from "../../../interfaces/ILivro"

export default function Detalhes(){
    const {id} = useParams()

    function getLivros(){
    if(typeof window !== 'undefined'){
      const storedLivros = localStorage.getItem("livros")
    if (!storedLivros){
      return []
    } else {
      return JSON.parse(storedLivros)
    }
    }
  }
  var livros: Array<ILivro> = getLivros()

// Resolvendo erro do filter:
  if(!livros){
    return(<p>Não encontrado...</p>)
  }

  var livro: ILivro = livros.filter((livro:any)=> livro.id==id)[0]
  
    return(
        <main className='flex w-full mt-20 justify-center'>
        <section className='flex flex-col bg-gray-600 rounded-2xl p-5 gap-3 justify-center items-center'>
        <h1 className='text-6xl'>Informações</h1>
        {livro && <h2 className='text-3xl'>📖Título: {livro.titulo}</h2>}
        {livro && <h2 className='text-3xl'>✍️Autor: {livro.autor}</h2>}
        {livro.genero && <h2 className='text-3xl'>🏷️Gênero: {livro.genero}</h2>}
        {livro && <h2 className='text-3xl'>📅Ano: {livro.ano}</h2>}
        <Link href='/' className='flex self-center cursor-pointer hover:text-blue-400'>[Voltar]</Link>
        </section>
        </main>
    ) 
}