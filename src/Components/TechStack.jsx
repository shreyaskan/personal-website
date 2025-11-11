import React from 'react'
import typescriptLogo from '../assets/typescript_logo.png'
import reactLogo from '../assets/react_logo.png'
import reactRouterLogo from '../assets/rr7_logo.svg'
import sqlLogo from '../assets/sql_logo.png'
import supabaseLogo from '../assets/supabase_logo.png'
import pythonLogo from '../assets/python_logo.png'
import nodeJs from '../assets/node_logo.png'
import drizzle_logo from '../assets/drizzle_logo.png'
import expressJsLogo from '../assets/expressjs_logo.png'

const languages = [
    { name: "TypeScript", logo: typescriptLogo },
    { name: "React.js", logo: reactLogo },
    { name: "React Router", logo: reactRouterLogo },
    { name: "Express.js", logo: expressJsLogo },
    { name: "Node.js", logo: nodeJs },
    { name: "Supabase ORM", logo: supabaseLogo },
    { name: "Drizzle ORM", logo: drizzle_logo },
    { name: "SQL", logo: sqlLogo },
    { name: "Python", logo: pythonLogo },
]

export default function TechStack() {
    return (
        <div className="bg-[#03001C] text-[#B6EADA] mt-8 px-3 py-2 rounded-xl flex flex-col justify-around scale-90 sm:scale-95 md:scale-100 lg:scale-100 xl:scale-100 transition-transform duration-300">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl flex justify-center items-center mb-3">
                Tech Stack
            </h2>

            <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-2">
                {languages.map((language, index) => (
                    <div key={index} className="flex items-center">
                        <img
                            src={language.logo}
                            alt={language.name}
                            className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain rounded-md"
                        />
                        <p className="pl-4 text-xs sm:text-sm md:text-base lg:text-lg">
                            {language.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
