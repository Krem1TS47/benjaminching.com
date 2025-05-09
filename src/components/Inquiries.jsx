


function TopText() {
    return (
        <>
            <h2 className="text-3xl font-bold mb-4 text-center relative inline-block mx-auto">
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute h-1 w-full bg-gradient-to-r from-purple-500 to-indigo-600 bottom-0 left-0"></div>
            </h2>
            <p className="text-center opacity-80 mb-12 max-w-2xl mx-auto">
                Want to collaborate? Feel free to reach out!
            </p>
        </>

    );
}





function Inquiries({ darkMode }) {
    return (
        <section id="contact" className={`px-6 md:px-12 py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} relative`}>

            {/* Decorative background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 opacity-5 blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <TextTitle />


            </div>

        </section>
    );
}

export default Inquiries