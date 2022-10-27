import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <Link to="/"> Home </Link>
      <Link to="/"> About Us </Link>
      <Link to="/Contact"> Contact </Link>
    </>
  );
}
