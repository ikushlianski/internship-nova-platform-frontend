import React from 'react';

interface NavContainerProps {
  children: React.ReactNode;
}

const NavContainer: React.FC<NavContainerProps> = ({ children }) => {
  return (
    <div className="bg-white rounded-lg shadow-[0_6px_12.5px_rgba(72,123,255,0.2)] w-full max-w-[768px]">
      {children}
    </div>
  );
};

export default NavContainer;
