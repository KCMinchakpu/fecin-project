import React from 'react';

import { Blog, Footer, Features, Header, Translations, Whatwedo} from './containers';
import { Article, CTA, Feature, Navbar } from './components';


const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <About Us />
        <What We Do />
        <Features />
        <Translations />

    </div>
  )
}

export default App