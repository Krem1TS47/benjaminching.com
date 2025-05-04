import { Menu, Moon, Sun } from 'lucide-react';

function Title() {
    return (
        <h1 className="text-2xl font-bold relative group">
            <span className="relative z-10">Benjamin Ching</span>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
        </h1>
    );
}

function ModeButton({ darkMode, toggleDarkMode }) {
    return (
        <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}

function MenuButton({ toggleMenu }) {
    return (
        <button
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
        >
            <Menu size={20} />
        </button>
    );
}








function Header({ bgColor, darkMode, toggleDarkMode, toggleMenu }) {
    return(
        <header className={`py-6 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 ${bgColor} bg-opacity-90 backdrop-blur-sm`}>
        <div>{Title()}</div>
        <div className="flex items-center gap-4">

            <div>{ModeButton(darkMode, toggleDarkMode)}</div>
            <div>{MenuButton(toggleMenu)}</div>
        </div>

    {/* Add Desktop Navigation Later  */}
    </header>
    );
}

export default Header