import React from 'react';

import { Blog, Footer, Features, Header, Translations, Whatwedo} from './containers';
import { Aboutus, CTA, Navbar } from './components';
import './App.css';


const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Aboutus />
        <Whatwedo />
        <Features />
        <Translations />
        <CTA />
        <Blog />
        <Footer />

    </div>
  )
}

export default App