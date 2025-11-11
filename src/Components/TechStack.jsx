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
    {
        name: "TypeScript",
        logo: <img src={typescriptLogo} width="30px" />
    },
    {
        name: "React.js",
        logo: <img src={reactLogo} width="30px" />
    },
    {
        name: "React Router",
        logo: <img src={reactRouterLogo} width="30px" />
    },
    {
        name: "Express.js",
        logo: <img src={expressJsLogo} width="30px" className='rounded-xs' />
    },
    {
        name: "Node.js",
        logo: <img src={nodeJs} width="30px" className='rounded-xs' />
    },
    {
        name: "Supabase ORM",
        logo: <img src={supabaseLogo} width="30px" className='rounded-xs' />
    },
    {
        name: "Drizzle ORM",
        logo: <img src={drizzle_logo} width="30px" className='rounded-xs' />
    },
    {
        name: "SQL",
        logo: <img src={sqlLogo} width="50rem" />
    },
    {
        name: "Python",
        logo: <img src={pythonLogo} width="30px" className='rounded-xs' />
    },
]

export default function TechStack() {
    return (
        <div>
            <div className="bg-[#03001C] text-[#B6EADA] min-w-[content] mt-8 px-4 py-3 rounded-xl flex flex-col justify-around">
                <h2 className='text-[1.5rem] flex flex-col justify-center items-center'>
                    Tech Stack
                </h2>
                <div className='grid grid-cols-2 gap-12 mt-4'>
                    {languages.map((language) => {
                        return (
                            <div className='flex'>
                                {language.logo}
                                <p className='pl-8'>
                                    {language.name}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}