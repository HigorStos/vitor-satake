// src/contexts/LanguageContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type LanguageContextType = {
  language: 'pt' | 'en';
  changeLanguage: (newLanguage: 'pt' | 'en') => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Tipando o children como ReactNode para aceitar qualquer conteúdo que o React possa renderizar
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<'pt' | 'en'>(
    (localStorage.getItem('language') as 'pt' | 'en') ?? 'pt'
  );

  useEffect(() => {
    // Verifica o idioma no localStorage e aplica
    const storedLanguage = localStorage.getItem('language') as 'pt' | 'en';
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: 'pt' | 'en') => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
