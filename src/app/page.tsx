'use client'
import Image from "next/image";
import ILivro from "../interfaces/ILivro";
import Livro from '../components/Livro'
import { useEffect, useState } from "react";

export default function Home() {

  var [filtro,setFiltro] = useState<string>('titulo')
  var [livros, setLivros] = useState<Array<ILivro>>([])
  
  function getLivros(): Array<ILivro>{
    if(typeof window !== 'undefined'){
      const storedLivros = localStorage.getItem("livros")
    if (!storedLivros){
      return []
    } else {
      return JSON.parse(storedLivros)
    }
    }
    return []
  }

  function handleChange(e: any){
    setFiltro(e.target.value)
  }

  useEffect(()=>{
    const livros = getLivros()
    setLivros(livros)
  }, [])

  useEffect(() => {
    const livros = getLivros();
    const livrosOrdenados = [...livros].sort((a: any, b: any) => {
      if (filtro === 'titulo') return a.titulo.localeCompare(b.titulo);
      if (filtro === 'autor') return a.autor.localeCompare(b.autor);
      return a.ano - b.ano;
    });
    setLivros(livrosOrdenados);
}, [filtro]);
  return (
    <main className='flex w-full mt-20 justify-center'>
      <section className='flex flex-col bg-gray-600 rounded-2xl p-5 gap-3 max-w-5xl'>
        <h2 className='text-2xl self-center'>Livros cadastrados</h2>
        <div className='flex flex-row gap-2'>
          <label htmlFor="filtro">Filtrar por:</label>
          <select onChange={handleChange}>
              <option value="titulo">Título</option>
              <option value="autor">Autor</option>
              <option value="ano">Ano</option>
          </select>
        </div>
        <div className='flex flex-wrap flex-row gap-2 h-fit'>
          {livros.length > 0 ? (
            livros.map((livro) => (
              <Livro key={livro.id} livro={livro} link={`/livros/${livro.id}`} />
            ))
          ) : (
            <h3>Não há livros cadastrados...</h3>
          )}
          </div>
      </section>
    </main>
  );
}
