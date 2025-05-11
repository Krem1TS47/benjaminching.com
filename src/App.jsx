import Blur from './components/Blur.jsx'
import Typing from './components/Typing.jsx';
import Header from './components/Header.jsx'
import AboutSection from './components/AboutSection.jsx';
import Projects from './components/Projects.jsx';
import Inquiries from './components/Inquiries.jsx';



import { useState, useEffect } from 'react';



function App() {


    const [darkMode, setDarkMode] = useState(false);



    const toggleDarkMode = () => setDarkMode(!darkMode);


    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const bgColor = darkMode ? 'bg-gray-900' : 'bg-gray-50';
    const textColor = darkMode ? 'text-gray-100' : 'text-gray-800';
    return (
        <div className={`min-h-screen min-w-screen ${bgColor} ${textColor} transition-colors duration-300`}>
            <Blur darkMode={darkMode} />
            <Header
                bgColor={bgColor}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <Typing />
            <AboutSection darkMode={darkMode} scrollPosition={scrollPosition} />
            <Projects darkMode={darkMode} />
            <Inquiries darkMode={darkMode} />
        </div>
    )
}

export default App
