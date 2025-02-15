import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import modalGrImage from '../../assets/modalgr.png';

const WorkExperience = () => {
  return (
    <section
      id='works'
      className='w-full mt-20 flex flex-col justify-center items-center'
    >
      <h1 className='font-bold text-2xl'>Experiência de Trabalho</h1>
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
            Engenheiro DevOps - ModalGR
          </h3>
          <h4 className='font-medium'>Jan 2024 - Atual</h4>
          <ul className='mt-5 list-disc ms-4'>
            <li>Azure DevOps</li>
            <li>Amazon Web Services</li>
            <li>Google Cloud</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default WorkExperience;
