import { SocialIcon } from 'react-social-icons';



function SelfImage({ scrollPosition }) {
    return (
        <div className="w-full md:w-1/2">
            <div className="relative" style={{ transform: `translateY(${scrollPosition * 0.05}px)` }}>
                <div className="w-full aspect-square overflow-hidden rounded-lg relative">
                    <img src="/benvolleyballphoto.jpg" alt="Profile" className="w-full h-full object-cover mix-blend-overlay" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg -z-10"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-600 rounded-lg -z-10 opacity-60"></div>
            </div>
        </div>
    );
}

function AboutText() {
    return (
        <>
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
                About Me
                <div className="absolute h-1 w-full bg-gradient-to-r from-purple-500 to-indigo-600 bottom-0 left-0"></div>
            </h2>
            <p className="mb-4 opacity-80">
                Hello! I'm Ben, a passionate student majoring in Computer Science at the University of British Columbia.
                I aspire to become an expert in software development and design, with a keen interest in
                creating user-friendly applications that solve real-world problems.
            </p>
            <p className="mb-6 opacity-80">
                Outside of school, you can definitely find me doing something related to volleyball.
                Whether it is coaching, playing in a tournment, or just watching a game, I have always
                been passionate about the sport and love being involved in it.
            </p>
        </>

    );
}

function Logos({ darkMode }) {
    return (
        <div className="flex gap-4">
            <SocialIcon
                url="https://github.com"
                className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
            />

            <SocialIcon
                url="https://linkedin.com"
                className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
            />

            <SocialIcon
                url="mailto:benbenching@gmail.com"
                className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                aria-label="Gmail"
                target="_blank"
                rel="noopener noreferrer"
            />
        </div>
    );

}



function AboutSection({ darkMode, scrollPosition }) {
    return (
        <section id="about" className="px-6 md:px-12 py-20 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <SelfImage scrollPosition={scrollPosition} />
                <div className="w-full md:w-1/2" style={{ transform: `translateY(${scrollPosition * -0.03}px)` }}>
                    <AboutText />
                    <Logos darkMode={darkMode} />
                </div>
            </div>
        </section>
    );
}

export default AboutSection