import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='w-full max-w-7xl min-h-screen flex flex-col items-center justify-center mx-auto'>
      {children}
    </div>
  );
};

export default Container;
