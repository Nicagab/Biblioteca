'use client'
import Input from '../../components/Input'
import ILivro from '../../interfaces/ILivro';

import { useState } from 'react';
export default function Home() {

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

  var livros = getLivros()

  var [livro, setLivro] = useState<ILivro>({titulo: '', autor: '', ano: 0, id: '', genero: ''})

  function handleChange(e: any){
    setLivro({...livro, [e.target.name]: e.target.value})
    console.log(livro)
    console.log(livros)
  }
  function cadastrar(livro: any){
    if(livro.titulo=='' || livro.ano==0 || livro.autor==''){
      alert('Livro precisa de um título, autor e ano!')
      return
    }
    if(livro.genero==''){
      livro.genero = undefined
    }

    livro.id = `${(livros.length+1)}`

    livros.push(livro)
    localStorage.setItem("livros", JSON.stringify(livros))

    setLivro({titulo: '', autor: '', ano: 0, id: '', genero: ''})
  }
  return (
    <main className='flex w-full mt-20 justify-center'>
      <section className='flex flex-col bg-gray-600 rounded-2xl p-5 gap-3'>
        <h2 className='text-2xl self-center'>Novo livro</h2>
        <section className='flex flex-col gap-5'>
          <Input name='titulo' placeholder='Título' tipo='text' onChange={handleChange} value={livro.titulo}/>
          <Input name='autor' placeholder='Autor' tipo='text' onChange={handleChange} value={livro.autor}/>
          <Input name='genero' placeholder='Gênero' tipo='text' onChange={handleChange} value={livro.genero}/>
          <Input name='ano' placeholder='Ano de publicação' tipo='number' onChange={handleChange} value={livro.ano}/>
          <button onClick={()=>cadastrar(livro)} className='flex items-center justify-center rounded-2xl cursor-pointer bg-green-400'>Salvar</button>
        </section>
      </section>
    </main>
  );
}
