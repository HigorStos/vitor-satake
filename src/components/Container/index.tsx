import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='w-full max-w-7xl h-full pb-16 flex flex-col items-center mx-auto'>
      {children}
    </div>
  );
};

export default Container;
