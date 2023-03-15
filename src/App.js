// import logo from './logo.svg';
// import './App.css';
// import Counter from './Components/Counter'
// import FunctionClick from './Components/FunctionClick'
// import ClassClick from './Components/ClassClick'
// import EvenBind from './Components/EventBind'

// function App() {
//   return (
//     <div className="App">
//       {/* <h1>hello meet</h1>
//       <Counter /> */}
//       {/* <FunctionClick /> */}
//       {/* <ClassClick /> */}
//       <EvenBind />
//     </div>
//   );
// }

// export default App;

import './App.css'
import React, { useState } from 'react'
import Home from './Pages/Home'
import Counter from './Components/Counter'
import About from './Components/About'


function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [homeDescription, setHomeDescription] = useState('Home Page')
  const [aboutDescription, setAboutDescription] = useState('About Page')
  function handleButtonClick() {
    setCurrentPage(currentPage === 'home' ? 'about' : 'home')
  }
  return (
    <div className="App">
      <button onClick={handleButtonClick}>Toggle-Page</button>
      {currentPage === 'home' ? (
        <Home description={homeDescription} />
      ) : (
        <About description={aboutDescription} />
      )}

    
      <h1>------</h1>
      <Counter />
      <h1>------</h1>

    </div>
  );
} 
export default App