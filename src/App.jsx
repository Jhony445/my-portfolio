import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Home />
    </>
  );
}