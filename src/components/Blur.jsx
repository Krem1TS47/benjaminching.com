

function Blur(darkMode) {
    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <div className={`absolute top-0 right-0 w-64 h-64 rounded-full ${darkMode ? 'bg-purple-900' : 'bg-purple-200'} opacity-10 blur-3xl`}></div>
            <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full ${darkMode ? 'bg-indigo-900' : 'bg-indigo-200'} opacity-10 blur-3xl`}></div>
            <div className={`absolute top-1/2 left-1/3 w-72 h-72 rounded-full ${darkMode ? 'bg-pink-900' : 'bg-pink-200'} opacity-10 blur-3xl`}></div>
        </div>
    );
}

export default Blur;