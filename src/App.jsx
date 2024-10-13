import './App.css';
import React from 'react';
import About from './Componet/About';
import ContactForm from './Componet/ContactForm';
import Faq from './Componet/Faq';
import Footer from './Componet/Footer';
import Header from './Componet/Header';
import Herosection from './Componet/Herosection';
import Info from './Componet/Info';
import Promotion from './Componet/Promotion';
import Services from './Componet/Services';
import AOS from "aos";
import  "aos/dist/aos.css"

function App() {

  React.useEffect(()=> {
    AOS.init({
      offset :100,
      duration:800,
      easing :"ease-in-state",
      delay :100
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <Herosection />
      <About />
      <Services />
      <Info />
      <Promotion />
      <Faq />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
