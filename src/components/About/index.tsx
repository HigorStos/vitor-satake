const About = () => {
  return (
    <section
      id='about'
      className='w-full max-w-6xl flex flex-col sm:flex-row gap-10 mt-14 p-6 sm:p-10 bg-white rounded-md shadow-2xl'
    >
      {/* Coluna 1 - Sobre Mim */}
      <div className='w-full sm:w-6/12'>
        <h1 className='font-bold text-2xl sm:text-3xl'>Sobre</h1>
        <ul className='flex flex-col gap-2 mt-4 ms-5 list-disc text-base sm:text-lg'>
          <li>Engenheiro DevOps com 1+ ano de experiência</li>
          <li>Trabalhou com Azure DevOps, Terraform e Kubernetes</li>
          <li>Experiência com Arquitetura de Software e metodologias ágeis.</li>
          <li>Conhecimento em padrões de design de software.</li>
          <li>
            Utilizou várias ferramentas como Docker, GitHub, Jenkins, etc.
          </li>
        </ul>
        <p className='mt-4 text-base sm:text-lg'>
          Engenheiro DevOps orientado a resultados com 3 anos de experiência em
          suporte, automação e otimização de implantações críticas em AWS.
          Profundo conhecimento em gerenciamento de configuração avançada,
          práticas de CI/CD e Terraform, com sólida compreensão das metodologias
          DevOps. Estou em busca de uma posição desafiadora onde posso
          contribuir com minha expertise, impulsionar a inovação e me adaptar às
          tecnologias em evolução, promovendo o crescimento profissional.
        </p>
      </div>

      {/* Coluna 2 - Informações Básicas */}
      <div className='w-full sm:w-6/12'>
        <h1 className='font-bold text-2xl sm:text-3xl'>Informações Básicas</h1>
        <ul className='flex flex-col gap-3 mt-4 text-base sm:text-lg'>
          <li className='flex flex-col sm:flex-row'>
            <p className='font-bold uppercase'>Data de Aniversário:</p>
            <p className='sm:ml-2'>17 de Novembro de 1991</p>
          </li>
          <li className='flex flex-col sm:flex-row'>
            <p className='font-bold uppercase'>E-mail:</p>
            <p className='sm:ml-2'>vitorsatake.devops@gmail.com</p>
          </li>
          <li className='flex flex-col sm:flex-row'>
            <p className='font-bold uppercase'>Telefone:</p>
            <p className='sm:ml-2'>(11) 99167-4939</p>
          </li>
          <li className='flex flex-col sm:flex-row'>
            <p className='font-bold uppercase'>Endereço:</p>
            <p className='sm:ml-2'>São Vicente, São Paulo, Brasil</p>
          </li>
          <li className='flex flex-col sm:flex-row'>
            <p className='font-bold uppercase'>Idiomas:</p>
            <p className='sm:ml-2'>Português, Inglês e Italiano</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
