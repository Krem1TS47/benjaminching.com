import {ReactTyped} from 'react-typed'




function Letters() {
    return (

        <div className="text-4xl md:text-6xl font-bold text-center font-mono">
            <ReactTyped
                strings={[
                    "Software Development",
                    "Data Analytics",
                    "Web Design",
                    "Backend Engineering",
                ]}
                typeSpeed={90}
                backSpeed={125}
                loop
            />
        </div>
    );
}



function Typing() {
    return (
        <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto flex flex-col items-center text-center relative overflow-hidden">
            <Letters />
        </section>
    );

}

export default Typing