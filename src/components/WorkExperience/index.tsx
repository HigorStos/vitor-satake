import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import modalGrImage from '../../assets/modalgr.png';
import { useLanguage } from '../../contexts/LanguageContext';
import translations from '../../translations';

const WorkExperience = () => {
  const { language } = useLanguage();

  return (
    <section
      id='works'
      className='w-full mt-20 flex flex-col justify-center items-center'
    >
      <h1 className='font-bold text-2xl'>
        {translations[language].workExperience.title}
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#1F2937', color: '#fff' }}
          contentArrowStyle={{ borderRight: '10px solid  #F97316' }}
          date='2011 - present'
          iconStyle={{ background: '#1F2937', color: '#fff' }}
          icon={
            <img
              className='w-7 sm:w-9 mt-2 sm:mt-4 ms-1 sm:ms-3'
              src={modalGrImage}
              alt='ModalGR'
            />
          }
        >
          <h3 className='font-bold text-1xl text-orange-500'>
            {translations[language].workExperience.jobTitle}
          </h3>
          <h4 className='font-medium'>
            {translations[language].workExperience.date}
          </h4>
          <p>{translations[language].workExperience.description}</p>
          <ul className='mt-5 list-disc ms-4'>
            <li>{translations[language].workExperience.technologies[0]}</li>
            <li>{translations[language].workExperience.technologies[1]}</li>
            <li>{translations[language].workExperience.technologies[2]}</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default WorkExperience;
