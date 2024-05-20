import { useState } from "react"

function Nav(){
    return (
        <nav className="flex items-center justify-between px-80 py-10">
            <div className="flex items-center gap-4">
                <p className="font-bold  text-2xl mr-8 cursor-pointer">ResumeTOP</p>
                <p className="text-gray-800 cursor-pointer">Resume Templates</p>
                <p className="text-gray-800 cursor-pointer">Pricing</p>
            </div>

            <div className="flex items-center gap-8">
                <button className="text-gray-800 font-semibold cursor-pointer">Sign in</button>
                <button className="px-4 py-2 cursor-pointer bg-purple-600 rounded-md text-white font-bold">Sign Up</button>
            </div>
        </nav>
    )
}

function Hero(){
    return (
        <div className="mt-32 w-full flex flex-col items-center gap-8 px-80">
            <h1 className="text-6xl font-extrabold text-purple-600">Resume Builder #1 By Marwan</h1>
            <p className="text-3xl flex flex-col items-center gap-2">
                <span>Create a modern resume <u>seemlessly</u> that gets you ahead of <b> 95% of pepole </b> that are</span> <span>trying to get hired. Try out your resume build today!</span>
            </p>
            <button className="mt-8 px-8 py-4 cursor-pointer bg-purple-600 text-white font-bold rounded-xl
            hover:bg-white hover:border hover:border-purple-600 hover:text-purple-600 transition-all">Build My Resume</button>
            <img src="/Professional-Elite-Resume-1-1.jpg" alt="TEMPLATE" 
            className="w-[70%] shadow-2xl mt-8"/>
        </div>
    )
}

function Footer(){
    return (
        <footer className="bg-purple-600 p-7 mt-24 flex items-center justify-center text-white font-semibold">
            <p>Made with Love By Marwan</p>
        </footer>
    )
}

export default function Home(){

    const [position, setPosition] = useState({
        x: 0, y: 0
    })

    const handlePostitionChange = (e) => {
        setPosition({
            x: e.clientX, y: e.clientY
        })
    }

    return (
        <div className="overflow-hidden  bg-slate-100 Home relative" onPointerMove={handlePostitionChange}>
            <div className={`rounded-full w-4 h-4 bg-purple-800 absolute hidden lg:block xl:block pointer-events-none`}
            style={{ left: `${position.x - 10}px`, top: `${position.y - 10}px` }}
            ></div>

            <Nav />
            <Hero />
            <Footer />
        </div>
    )
}