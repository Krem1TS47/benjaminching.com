


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

function ContactForm(darkMode) {
    return (
        <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block mb-2">Name</label>
                    <input
                        type="text"
                        className={`w-full px-4 py-3 rounded-md border ${darkMode ? 'bg-gray-800 border-gray-700 focus:border-purple-500' : 'bg-white border-gray-300 focus:border-purple-500'
                            } focus:outline-none transition-colors`}
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        className={`w-full px-4 py-3 rounded-md border ${darkMode ? 'bg-gray-800 border-gray-700 focus:border-purple-500' : 'bg-white border-gray-300 focus:border-purple-500'
                            } focus:outline-none transition-colors`}
                        placeholder="your@email.com"
                    />
                </div>
            </div>

            <div className="mb-6">
                <label className="block mb-2">Subject</label>
                <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-md border ${darkMode ? 'bg-gray-800 border-gray-700 focus:border-purple-500' : 'bg-white border-gray-300 focus:border-purple-500'
                        } focus:outline-none transition-colors`}
                    placeholder="Project inquiry"
                />
            </div>

            <div className="mb-6">
                <label className="block mb-2">Message</label>
                <textarea
                    className={`w-full px-4 py-3 rounded-md border ${darkMode ? 'bg-gray-800 border-gray-700 focus:border-purple-500' : 'bg-white border-gray-300 focus:border-purple-500'
                        } focus:outline-none transition-colors`}
                    rows="5"
                    placeholder="Tell me about your project..."
                />
            </div>

            <div className="text-center">
                <button
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg shadow-purple-500/20"
                >
                    Send Message
                </button>
            </div>
        </div>
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
                <TopText />
                <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-xl relative overflow-hidden`}>
                    <ContactForm darkMOde={darkMode} />
                </div>
            </div>
        </section>
    );
}

export default Inquiries