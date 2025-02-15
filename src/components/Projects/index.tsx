import terraformImage from '../../assets/terraform.png'; // Importar imagens nesse formato
import { useLanguage } from '../../contexts/LanguageContext';
import translations from '../../translations';

const Projects = () => {
  const { language } = useLanguage();

  return (
    <section
      id='projects'
      className='w-full max-w-6xl mt-14 flex flex-col justify-center items-center'
    >
      <h1 className='font-bold text-2xl'>
        {translations[language].projects.title}
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-14 mt-8'>
        <div className='max-w-sm rounded overflow-hidden border border-gray-200 shadow-lg bg-white pb-4'>
          <img className='w-full' src={terraformImage} alt='Terraform' />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>Terraform + AWS</div>
            <p className='text-gray-700 text-base'>
              {translations[language].projects.project1.description}
            </p>
          </div>
          <div className='px-6 pt-4 pb-2 flex items-center justify-center'>
            <button className='bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>
              {translations[language].projects.buttonText}
            </button>
          </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden border border-gray-200 shadow-lg bg-white pb-4'>
          <img className='w-full' src={terraformImage} alt='Terraform' />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>Terraform + AWS</div>
            <p className='text-gray-700 text-base'>
              {translations[language].projects.project2.description}
            </p>
          </div>
          <div className='px-6 pt-4 pb-2 flex items-center justify-center'>
            <button className='bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>
              {translations[language].projects.buttonText}
            </button>
          </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden border border-gray-200 shadow-lg bg-white pb-4'>
          <img className='w-full' src={terraformImage} alt='Terraform' />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>Terraform + AWS</div>
            <p className='text-gray-700 text-base'>
              {translations[language].projects.project3.description}
            </p>
          </div>
          <div className='px-6 pt-4 pb-2 flex items-center justify-center'>
            <button className='bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>
              {translations[language].projects.buttonText}
            </button>
          </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden border border-gray-200 shadow-lg bg-white pb-4'>
          <img className='w-full' src={terraformImage} alt='Terraform' />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>Terraform + AWS</div>
            <p className='text-gray-700 text-base'>
              {translations[language].projects.project4.description}
            </p>
          </div>
          <div className='px-6 pt-4 pb-2 flex items-center justify-center'>
            <button className='bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>
              {translations[language].projects.buttonText}
            </button>
          </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden border border-gray-200 shadow-lg bg-white pb-4'>
          <img className='w-full' src={terraformImage} alt='Terraform' />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>Terraform + AWS</div>
            <p className='text-gray-700 text-base'>
              {translations[language].projects.project5.description}
            </p>
          </div>
          <div className='px-6 pt-4 pb-2 flex items-center justify-center'>
            <button className='bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>
              {translations[language].projects.buttonText}
            </button>
          </div>
        </div>
        <div className='max-w-sm rounded overflow-hidden border border-gray-200 shadow-lg bg-white pb-4'>
          <img className='w-full' src={terraformImage} alt='Terraform' />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>Terraform + AWS</div>
            <p className='text-gray-700 text-base'>
              {translations[language].projects.project6.description}
            </p>
          </div>
          <div className='px-6 pt-4 pb-2 flex items-center justify-center'>
            <button className='bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>
              {translations[language].projects.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
