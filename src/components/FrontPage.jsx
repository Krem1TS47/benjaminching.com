function Circles(darkMode) {
    return (
        <div className="absolute inset-0 pointer-events-none">
            <div className={`absolute top-20 left-10 w-6 h-6 rounded-full ${darkMode ? 'bg-purple-500' : 'bg-purple-400'} animate-float1`}></div>
            <div className={`absolute top-40 right-20 w-8 h-8 rounded-full ${darkMode ? 'bg-indigo-500' : 'bg-indigo-400'} animate-float2`}></div>
            <div className={`absolute bottom-20 left-1/4 w-4 h-4 rounded-full ${darkMode ? 'bg-pink-500' : 'bg-pink-400'} animate-float3`}></div>
            <div className={`absolute bottom-40 right-1/4 w-10 h-10 rounded-full ${darkMode ? 'bg-purple-500' : 'bg-purple-400'} opacity-20 animate-float4`}></div>
        </div>
    );

}


function Photo() {
    return (
        <div className="w-32 h-32 rounded-full overflow-hidden mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 animate-spin-slow"></div>
            <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <img src="/api/placeholder/150/150" alt="Profile" className="w-28 h-28 rounded-full object-cover" />
            </div>
        </div>
    );
}


function Name() {
    return (
        <h1 className="text-4xl md:text-6xl font-bold mb-4 relative z-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600">
                Aspiring Software Engineer
            </span>
        </h1>
    );
}



function FrontPage(darkMode) {
    return (
        <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto flex flex-col items-center text-center relative overflow-hidden">
            <Circles darkMode={darkMode} />
            <Photo />
            <Name />

        </section>
    );

}

export default FrontPage