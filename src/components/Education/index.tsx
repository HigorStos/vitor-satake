import { useLanguage } from '../../contexts/LanguageContext';
import translations from '../../translations';

const Education = () => {
  const { language } = useLanguage();

  const educationData = [
    {
      year: translations[language].education.education1.year,
      title: translations[language].education.education1.title,
      degree: translations[language].education.education1.degree,
      institute: translations[language].education.education1.institute,
      details: [
        translations[language].education.education1.details[0],
        translations[language].education.education1.details[1],
        translations[language].education.education1.details[2],
      ],
    },
    {
      year: translations[language].education.education2.year,
      title: translations[language].education.education2.title,
      degree: translations[language].education.education2.degree,
      institute: translations[language].education.education2.institute,
      details: [
        translations[language].education.education2.details[0],
        translations[language].education.education2.details[1],
        translations[language].education.education2.details[2],
      ],
    },
  ];

  return (
    <section
      id='education'
      className='max-w-4xl p-4 sm:p-0 mx-auto my-10 mt-14'
    >
      <h1 className='font-bold text-2xl text-center mb-8'>Educação</h1>
      {educationData.map((edu, index) => (
        <div
          key={index}
          className='flex flex-col sm:flex-row bg-white shadow-md rounded-lg overflow-hidden mb-6'
        >
          <div className='bg-blue-900 text-white p-6 sm:w-1/4 flex flex-col justify-center items-center'>
            <h3 className='text-lg font-semibold text-center'>{edu.title}</h3>
            <span className='text-sm'>{edu.year}</span>
          </div>
          <div className='p-6 sm:w-3/4'>
            <h3 className='text-lg font-semibold'>{edu.degree}</h3>
            <h4 className='font-bold text-gray-700'>{edu.institute}</h4>
            <ul className='list-disc list-inside mt-2 text-gray-600'>
              {edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
