import Link from "next/link"

export default function Navbar(){
    return(
        <header className='flex w-vdw bg-blue-950'>
            <nav className='flex-row flex items-center justify-between w-full p-3'>
                <Link href='/'><h1 className='font-black text-3xl cursor-pointer'>Biblioteca</h1></Link>
                <ul className='flex flex-row cursor-pointer gap-10 px-5'>
                    <Link href='/cadastro'><li>Cadastrar +</li></Link>
                    <Link href='/'><li>Livros</li></Link>
                </ul>
            </nav>
        </header>
    )
}