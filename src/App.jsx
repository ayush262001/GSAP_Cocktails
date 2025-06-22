import React from 'react'
import gsap from 'gsap'
import {ScrollTrigger, SplitText} from 'gsap/all';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Cocktails from './Components/Cocktails';
import About from './Components/About';
import Art from './Components/Art';

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <main className='overflow-y-hidden app'>
        <NavBar/>
        <Hero/>
        <Cocktails />
        <About />
        <Art />
    </main>
  )
}

export default App
