import { useLanguage } from '../../contexts/LanguageContext';
import translations from '../../translations'; // Suas traduções

const About = () => {
  const { language } = useLanguage(); // Usando o contexto para obter o idioma atual

  return (
    <section
      id='about'
      className='w-full max-w-6xl flex flex-col sm:flex-row gap-10 mt-14 p-6 sm:p-10 bg-white rounded-md shadow-2xl'
    >
      {/* Coluna 1 - Sobre Mim */}
      <div className='w-full sm:w-6/12'>
        <h1 className='font-bold text-2xl sm:text-3xl'>
          {translations[language].about.aboutTitle}{' '}
          {/* Usando tradução dinâmica */}
        </h1>
        <ul className='flex flex-col gap-2 mt-4 ms-5 list-disc text-base sm:text-lg'>
          <li>{translations[language].about.aboutListItem1}</li>
          <li>{translations[language].about.aboutListItem2}</li>
          <li>{translations[language].about.aboutListItem3}</li>
          <li>{translations[language].about.aboutListItem4}</li>
          <li>{translations[language].about.aboutListItem5}</li>
        </ul>
        <p className='mt-4 text-base sm:text-lg'>
          {translations[language].about.aboutDescription}{' '}
          {/* Usando tradução dinâmica */}
        </p>
      </div>

      {/* Coluna 2 - Informações Básicas */}
      <div className='w-full sm:w-6/12'>
        <h1 className='font-bold text-2xl sm:text-3xl'>
          {translations[language].about.basicInfoTitle}{' '}
          {/* Usando tradução dinâmica */}
        </h1>
        <ul className='flex flex-col gap-3 mt-4 text-base sm:text-lg'>
          <li className='flex flex-col sm:flex-row'>
            <p className='font-bold uppercase'>
              {translations[language].about.birthdayLabel}:
            </p>
            <p className='sm:ml-2'>{translations[language].about.birthday}</p>
          </li>
          <li className='flex flex-col sm:flex-row'>
            <p className='font-bold uppercase'>
              {translations[language].about.emailLabel}:
            </p>
            <p className='sm:ml-2'>vitorsatake.devops@gmail.com</p>
          </li>
          <li className='flex flex-col sm:flex-row'>
            <p className='font-bold uppercase'>
              {translations[language].about.phoneLabel}:
            </p>
            <p className='sm:ml-2'>(11) 99167-4939</p>
          </li>
          <li className='flex flex-col sm:flex-row'>
            <p className='font-bold uppercase'>
              {translations[language].about.addressLabel}:
            </p>
            <p className='sm:ml-2'>São Vicente, São Paulo, Brasil</p>
          </li>
          <li className='flex flex-col sm:flex-row'>
            <p className='font-bold uppercase'>
              {translations[language].about.languagesLabel}:
            </p>
            <p className='sm:ml-2'>{translations[language].about.languages}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
