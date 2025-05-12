import { ExternalLink } from 'lucide-react';




function Title() {
    return (
        <h2 className="text-3xl font-bold mb-12 text-center relative inline-block mx-auto">
            <span className="relative z-10">Featured Projects</span>
            <div className="absolute h-1 w-full bg-gradient-to-r from-purple-500 to-indigo-600 bottom-0 left-0"></div>
        </h2>
    );
}

function CreateProject({ darkMode }) {

    const projects = [
        {
            title: "Quizio",
            description: "A gamified web application for learning and testing knowledge through self-created quizzes. Made for BCS Hacks 2025.",
            technologies: ["React", "Tailwind CSS", "JavaScript"],
            image: "/quizioapp.png",
            link: "https://github.com/Krem1TS47/Quizio"
        },
        {
            title: "VBStat210",
            description: "A basic statistics application for volleyball coaches to visualize team performance. Made for CPSC 210.",
            technologies: ["Java", "OOP", "GUI", "UML"],
            image: "/VBStat210.png",
            link: "https://github.com/Krem1TS47/VBStat210"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
            <div
                key={index}
                className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2`}
            >
                <div className="h-48 overflow-hidden relative">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 group-hover:text-purple-500 transition-colors">{project.title}</h3>
                    <p className="opacity-80 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, i) => (
                            <span
                                key={i}
                                className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <a
                        href={project.link}
                        className="flex items-center gap-1 text-purple-500 hover:text-purple-600 transition-colors"
                    >
                        View Project <ExternalLink size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        ))}
    </div>
    );
    
}


function Projects({ darkMode }) {
    return (
        <section id="projects" className={`px-6 md:px-12 py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} relative`}>
            <div className="max-w-6xl mx-auto relative z-10">
                <Title />
                <CreateProject darkMode={darkMode} />
            </div>

        </section>
    );
}

export default Projects