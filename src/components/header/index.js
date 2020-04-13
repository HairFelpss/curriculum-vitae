import React, { useState, useEffect, useRef } from 'react';
import { Nav, Title, Icons } from './styles';

const Header = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 670;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Nav background={navBackground}>
      <Title>VERSÃO 0.5.0
      </Title>
      <Icons>
        <h3>EN-US</h3>
      </Icons>
    </Nav>
  );
};

export default Header;
