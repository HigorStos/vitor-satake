import { SkillBar } from 'react-skillbars';

const skills = [
  { type: 'Terraform', level: 90 },
  { type: 'Python', level: 70 },
  { type: 'Docker', level: 85 },
  { type: 'Jenkins', level: 70 },
  { type: 'Render', level: 80 },
  { type: 'AWS', level: 80 },
  { type: 'PostgreSQL', level: 75 },
  { type: 'Kubernetes', level: 70 },
];

const colors = {
  bar: '#0d3b66',
  title: {
    text: 'rgb(249 115 22)',
    fontSize: '15px',
    background: '#083D77',
  },
};

const Skills = () => {
  return (
    <section className='w-full mt-14 flex flex-col justify-center items-center'>
      <h1 className='font-bold text-2xl'>Habilidades</h1>
      <div style={{ width: '90%', margin: 'auto', padding: '20px' }}>
        <SkillBar
          skills={skills}
          colors={colors}
          animationDelay={500}
          animationDuration={1500}
        />
      </div>
    </section>
  );
};

export default Skills;
