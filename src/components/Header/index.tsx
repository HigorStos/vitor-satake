// src/components/Header.tsx
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import translations from '../../translations.ts';
import brFlag from '../../assets/br-flag.png';
import usFlag from '../../assets/us-flag.png';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();

  return (
    <header className='w-full bg-gray-800 relative'>
      <div className='max-w-7xl px-6 sm:px-12 py-4 flex justify-between items-center mx-auto sm:mx-0 font-medium text-white'>
        <h1 className='text-orange-500 text-lg sm:text-xl'>
          {language === 'pt' ? translations.pt.title : translations.en.title}
        </h1>

        <button
          className='sm:hidden text-white focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className='hidden sm:flex items-center gap-4'>
          <ul className='flex gap-6'>
            {Object.entries(translations[language].headerLinks).map(
              ([key, value]) => (
                <li key={key}>
                  <a href={`#${key}`}>{value}</a>
                </li>
              )
            )}
          </ul>

          <button
            onClick={() => changeLanguage(language === 'pt' ? 'en' : 'pt')}
            className='flex items-center gap-2 border border-gray-500 rounded-md px-2 py-1 hover:bg-gray-700 transition'
          >
            <img
              src={language === 'pt' ? brFlag : usFlag}
              alt='Language'
              className='w-6 h-4'
            />
            {language === 'pt' ? 'PT' : 'EN'}
          </button>
        </nav>

        <div
          className={`absolute top-16 left-0 w-full bg-gray-900 p-6 flex flex-col items-center gap-4 transition-all duration-300 ease-in-out sm:hidden
            ${isOpen ? 'opacity-100 h-auto z-50' : 'opacity-0 h-0 hidden'}`}
        >
          {Object.entries(translations[language].headerLinks).map(
            ([key, value]) => (
              <a key={key} href={`#${key}`} onClick={() => setIsOpen(false)}>
                {value}
              </a>
            )
          )}

          <button
            onClick={() => changeLanguage(language === 'pt' ? 'en' : 'pt')}
            className='flex items-center gap-2 border border-gray-500 rounded-md px-2 py-1 hover:bg-gray-700 transition mt-4'
          >
            <img
              src={language === 'pt' ? brFlag : usFlag}
              alt='Language'
              className='w-6 h-4'
            />
            {language === 'pt' ? 'PT' : 'EN'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
