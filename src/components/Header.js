import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img 
          src={`${process.env.PUBLIC_URL}/images/logo.gif`} 
          alt="角上魚類ロゴ" 
          className="logo-image"
          onError={(e) => {
            console.error(`Failed to load logo: ${e.target.src}`);
            e.target.style.display = 'none';
          }}
        />
      </div>
    </header>
  );
}

export default Header;