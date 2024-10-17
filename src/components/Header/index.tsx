const Header = () => {
  return (
    <header className='w-screen bg-gray-800'>
      <div className='max-w-7xl px-12 py-8 flex justify-between items-center mx-auto font-medium text-white'>
        <h1 className='text-orange-500'>VITOR SATAKE PORTFÓLIO</h1>
        <nav>
          <ul className='flex gap-6 w-7xl'>
            <li>
              <a href='/'>INÍCIO</a>
            </li>
            <li>
              <a href='/about'>SOBRE</a>
            </li>
            <li>
              <a href='/works'>EXPERIÊNCIA</a>
            </li>
            <li>
              <a href='/contact'>PROJETOS</a>
            </li>
            <li>
              <a href='/contact'>HABILIDADES</a>
            </li>
            <li>
              <a href='/contact'>EDUCAÇÃO</a>
            </li>
            <li>
              <a href='/contact'>CONTATO</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
