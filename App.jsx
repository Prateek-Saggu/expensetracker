import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Herosection from './components/Herosection/Herosection'
import Expensetracker from './components/Expensetracker/Expensetracker'
function App() {
  return (
    <div className='App'>
    <Navbar />
    <Herosection />
    <Expensetracker />
    </div>
  );
}

export default App
