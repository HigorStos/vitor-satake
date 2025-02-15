import emailLogo from '../../assets/email.png';
import linkedinLogo from '../../assets/linkedin.png';
import githubLogo from '../../assets/github.png';

const Contact = () => {
  return (
    <section
      id='contact'
      className='w-full max-w-6xl flex flex-col justify-center items-center'
    >
      <h1 className='font-bold text-2xl text-center mb-8'>Contato</h1>
      <div className='w-full flex items-center justify-center gap-6'>
        <a className='w-16 h-16' href='mailto:vitor.lemos@modalgr.io'>
          <img src={emailLogo} alt='Ícone E-mail' />
        </a>
        <a
          className='w-16 h-16'
          href='https://www.linkedin.com/in/vitorsatake/'
        >
          <img src={linkedinLogo} alt='Ícone LinkedIn' />
        </a>
        <a className='w-16 h-16' href='https://github.com/VitorSatake'>
          <img src={githubLogo} alt='Ícone GitHub' />
        </a>
      </div>
    </section>
  );
};

export default Contact;
