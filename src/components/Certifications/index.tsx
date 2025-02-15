import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useLanguage } from '../../contexts/LanguageContext';
import translations from '../../translations';

const certifications = [
  {
    title: 'HashiCorp Certified: Terraform Associate (002)',
    date: '2025',
    link: 'https://www.google.com.br',
  },
  {
    title: 'Google Cloud Certified Digital Leader',
    date: '2024',
    link: 'https://www.google.com.br',
  },
  {
    title: 'AZ-400 Designing and Implementing DevOps Solutions',
    date: '2024',
    link: 'https://www.google.com.br',
  },
  {
    title: 'AZ-104 Azure Administrator Associate',
    date: '2024',
    link: 'https://www.google.com.br',
  },
  {
    title: 'Google Cloud Certified Professional Cloud Architect',
    date: '2023',
    link: 'https://www.google.com.br',
  },
  {
    title: 'Google Cloud Certified Professional Cloud Architect',
    date: '2023',
    link: 'https://www.google.com.br',
  },
];

const Certifications = () => {
  const { language } = useLanguage();

  return (
    <section
      id='certifications'
      className='w-full mt-14 p-4 sm:p-0 flex flex-col justify-center items-center'
    >
      <h1 className='font-bold text-2xl mb-8'>
        {translations[language].certifications.title}
      </h1>
      <VerticalTimeline>
        {certifications.map((cert, index) => (
          <VerticalTimelineElement
            key={index}
            date={cert.date}
            iconStyle={{ background: '#f97316', color: '#fff' }}
          >
            <h3 className='font-semibold'>
              {cert.title}
              <br />
              <a
                href={cert.link}
                className='text-sm text-blue-900'
                target='_blank'
              >
                {translations[language].certifications.buttonText}
              </a>{' '}
            </h3>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Certifications;
