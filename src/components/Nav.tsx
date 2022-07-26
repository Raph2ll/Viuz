import React from 'react';
import Icon from './Icon';

function Nav() {
  return (
    <nav className="w-full px-32 h-12 flex items-center justify-between bg-white border-b border-gray-200">
      <header className="flex items-center">
        <div className="flex-shrink-0">
          <Icon />
        </div>
        <div className="hidden md:block">
          <div className="ml-10 mr-52 flex place-items-baseline space-x-4">
            <a href="google.com" className="text-sm text-gray-800 p-6">Cadastrar</a>
          </div>
        </div>
      </header>
    </nav>
  );
}

export default Nav;