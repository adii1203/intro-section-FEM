import Header from './components/header/Header'
import Hero from './components/main/Hero'
import { useState } from 'react';

function App() {

  const [showNav, setShowNav] = useState(false)
  const [showFeatures, setShowFeatures] = useState(false)
  const [showCompany, setShowCompany] = useState(false)


  return (
    <div className="App">
      <Header 
        showNav={showNav}
        setShowNav={setShowNav}
        showFeatures={showFeatures}
        setShowFeatures={setShowFeatures}
        showCompany={showCompany}
        setShowCompany={setShowCompany}
        // click={click}
      />
      <Hero />
    </div>
  );
}

export default App;
