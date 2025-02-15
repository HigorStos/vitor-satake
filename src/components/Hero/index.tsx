import vitorImage from '../../assets/vitor-satake.jpg';
import devOpsHeroImage from '../../assets/devops-hero.jpg';

const Hero = () => {
  return (
    <section
      id='home'
      className='w-full max-w-7xl flex flex-col items-center p-20 relative'
      style={{
        backgroundImage: `url(${devOpsHeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='absolute inset-0 bg-black opacity-65'></div>
      <img
        className='w-40 rounded-full z-10 border-4 border-white'
        src={vitorImage}
        alt='Foto do Vitor Satake'
      />
      <h1 className='text-white font-bold text-4xl mt-8 z-10'>Vitor Satake</h1>
      <p className='text-white font-bold text-sm mt-2 uppercase z-10'>
        Engenheiro DevOps
      </p>
      <div className='flex gap-6 mt-6 z-10'>
        <button className='w-36 bg-gray-800 text-orange-500 font-medium text-md py-2 px-4 rounded-md shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:bg-orange-500 hover:text-white'>
          Contate-me
        </button>
        <button className='w-36 bg-gray-800 text-orange-500 font-medium text-md py-2 px-4 rounded-md shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:bg-orange-500 hover:text-white'>
          Ver Currículo
        </button>
      </div>
    </section>
  );
};

export default Hero;
