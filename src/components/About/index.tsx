const About = () => {
  return (
    <section className='w-full max-w-6xl flex gap-10 mt-14 p-10 bg-white rounded-md shadow-2xl'>
      <div className='w-6/12'>
        <h1 className='font-bold text-2xl'>Sobre</h1>
        <ul className='flex flex-col gap-2 mt-4 ms-5 list-disc'>
          <li>Engenheiro DevOps com 1+ ano de experiência</li>
          <li>Trabalhou com Azure DevOps, Terraform e Kubernetes</li>
          <li>Experiência com Arquitetura de Software e metodologias ágeis.</li>
          <li>Conhecimento em padrões de design de software.</li>
          <li>
            Utilizou várias ferramentas como Docker, GitHub, Jenkins, etc.
          </li>
        </ul>
        <p className='mt-4'>
          Engenheiro DevOps orientado a resultados com 3 anos de experiência em
          suporte, automação e otimização de implantações críticas em AWS.
          Profundo conhecimento em gerenciamento de configuração avançada,
          práticas de CI/CD e Terraform, com sólida compreensão das metodologias
          DevOps. Estou em busca de uma posição desafiadora onde posso
          contribuir com minha expertise, impulsionar a inovação e me adaptar às
          tecnologias em evolução, promovendo o crescimento profissional.
        </p>
      </div>
      <div className='w-6/12'>
        <h1 className='font-bold text-2xl'>Informações Básicas</h1>
        <ul className='flex flex-col gap-3 mt-4'>
          <li className='w-full flex'>
            <p className='w-11/12 text-sm font-bold uppercase'>
              Data de Aniversário:
            </p>
            <p className='w-full'>17 de Novembro de 1991</p>
          </li>
          <li className='w-full flex'>
            <p className='w-11/12 text-sm font-bold uppercase'>E-mail:</p>
            <p className='w-full'>vitorsatake.devops@gmail.com</p>
          </li>
          <li className='w-full flex'>
            <p className='w-11/12 text-sm font-bold uppercase'>Telefone:</p>
            <p className='w-full'>(11) 99167-4939</p>
          </li>
          <li className='w-full flex'>
            <p className='w-11/12 text-sm font-bold uppercase'>Endereço:</p>
            <p className='w-full'>São Vicente, São Paulo, Brasil</p>
          </li>
          <li className='w-full flex'>
            <p className='w-11/12 text-sm font-bold uppercase'>Idiomas:</p>
            <p className='w-full'>Português, Inglês e Italiano</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
