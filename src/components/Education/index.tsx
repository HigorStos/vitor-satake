const Education = () => {
  const educationData = [
    {
      year: '2022 - 2024',
      title: 'Graduação',
      degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      institute: 'Fatec Rubens Lara',
      details: [
        'Affiliated with Kurukshetra University, Kurukshetra',
        'Completed B.Tech in Computer Science Engineering with 79%.',
        'Maintained approx. 70% in every semester of college academic.',
      ],
    },
    {
      year: '2015 - 2018',
      title: 'Diploma',
      degree: 'Diploma',
      institute: 'Instituição',
      details: [
        'Affiliated with Haryana Technical Education Board (HTEB), Haryana',
        'The college was mainly focused on the basics of 10+2 and the engineering subjects',
        'There was also a good base in Mathematics and Data Structures.',
        'Completed my Diploma with 70%.',
      ],
    },
  ];

  return (
    <div className='max-w-4xl mx-auto my-10 mt-14'>
      <h1 className='font-bold text-2xl text-center mb-8'>Educação</h1>
      {educationData.map((edu, index) => (
        <div
          key={index}
          className='flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden mb-6'
        >
          <div className='bg-blue-900 text-white p-6 md:w-1/4 flex flex-col justify-center items-center'>
            <h3 className='text-lg font-semibold text-center'>{edu.title}</h3>
            <span className='text-sm'>{edu.year}</span>
          </div>
          <div className='p-6 md:w-3/4'>
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
    </div>
  );
};

export default Education;
