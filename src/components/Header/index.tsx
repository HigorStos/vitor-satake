import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='w-full bg-gray-800 relative'>
      <div className='max-w-7xl px-6 sm:px-12 py-4 flex justify-between items-center mx-auto sm:mx-0 font-medium text-white'>
        <h1 className='text-orange-500 text-lg sm:text-xl'>
          Vitor Satake | Portfólio
        </h1>

        {/* Botão do menu hambúrguer (mobile) */}
        <button
          className='sm:hidden text-white focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Desktop */}
        <nav className='hidden sm:flex'>
          <ul className='flex gap-6'>
            <li>
              <a href='#home'>INÍCIO</a>
            </li>
            <li>
              <a href='#about'>SOBRE</a>
            </li>
            <li>
              <a href='#works'>EXPERIÊNCIA</a>
            </li>
            <li>
              <a href='#projects'>PROJETOS</a>
            </li>
            <li>
              <a href='#skills'>HABILIDADES</a>
            </li>
            <li>
              <a href='#certifications'>CERTIFICADOS</a>
            </li>
            <li>
              <a href='#education'>EDUCAÇÃO</a>
            </li>
            <li>
              <a href='#contact'>CONTATO</a>
            </li>
          </ul>
        </nav>

        {/* Menu Mobile */}
        <div
          className={`absolute top-16 left-0 w-full bg-gray-900 p-6 flex flex-col items-center gap-4 transition-all duration-300 ease-in-out sm:hidden
            ${isOpen ? 'opacity-100 h-auto z-50' : 'opacity-0 h-0 hidden'}
          `}
        >
          <a href='#home' onClick={() => setIsOpen(false)}>
            INÍCIO
          </a>
          <a href='#about' onClick={() => setIsOpen(false)}>
            SOBRE
          </a>
          <a href='#works' onClick={() => setIsOpen(false)}>
            EXPERIÊNCIA
          </a>
          <a href='#projects' onClick={() => setIsOpen(false)}>
            PROJETOS
          </a>
          <a href='#skills' onClick={() => setIsOpen(false)}>
            HABILIDADES
          </a>
          <a href='#certifications' onClick={() => setIsOpen(false)}>
            CERTIFICADOS
          </a>
          <a href='#education' onClick={() => setIsOpen(false)}>
            EDUCAÇÃO
          </a>
          <a href='#contact' onClick={() => setIsOpen(false)}>
            CONTATO
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
