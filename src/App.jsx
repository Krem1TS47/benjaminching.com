import './App.css'
import Blur from './components/Blur.jsx'
import FrontPage from './components/FrontPage.jsx';
import Header from './components/Header.jsx'



import { useState } from 'react';


function App() {


    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    const toggleDarkMode = () => setDarkMode(!darkMode);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const bgColor = darkMode ? 'bg-gray-900' : 'bg-gray-50';
    const textColor = darkMode ? 'text-gray-100' : 'text-gray-800';
    return (
        <div className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-300`}>
            <Blur darkMode={darkMode} />
            <Header
                bgColor={bgColor}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                toggleMenu={toggleMenu}
            />
            <FrontPage darkMode={darkMode} />
        </div>
    )
}

export default App
