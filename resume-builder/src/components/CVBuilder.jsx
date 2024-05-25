import React, { useContext, useState } from 'react';
import {Styles, CVStyle} from "./Styles";
import Experience from './Experience';
import PersonalInformation from './PersonalInformation';
import Education from './Education';
import { Context } from '../App';

function LeftSide({homeCallBack}){

    const [isStyle, setIsStyles] = useState(false);
    const {download, setDownload} = useContext(Context);

    const handleStyleClick = (infoValue) => {
        setIsStyles(!isStyle && infoValue);
    }

    const downloadPDF = () => {
        setDownload(true);
    }

    return (
        <div className="flex flex-col gap-4 px-10 max-h-max">
            <nav className="flex gap-10 items-center justify-center">
                <p className="cursor-pointer"><button onClick={() => {homeCallBack(true)}}
                className="navBtn flex-1">Home</button></p>
                
                <button className="navBtn flex-1" onClick={() => {handleStyleClick(false)}}>Info</button>

                <button className="navBtn flex-1"
                onClick={() => {handleStyleClick(true)}}>Styles</button>

                <button className='navBtn flex-1 text-xl' onClick={downloadPDF}>
                    <i class='bx bx-download'></i>
                </button>
                
            </nav>

            {
                isStyle ? (
                    <Styles />
                ) : (
                    <div className="flex flex-col gap-4">
                        <PersonalInformation />
                        <Education />
                        <Experience />
                    </div>
                )
            }

        </div>
    )
}

function CV(){
    return (
        <CVStyle/>
    )
}


export default function CVBuilder({callback}){
    return (
        <div className="w-full Home bg-gray-300 px-40 py-10 flex justify-center gap-8">
            <div className=" bg-white flex gap-20 py-10 px-4 rounded-lg shadow-2xl w-max">
                <LeftSide homeCallBack={callback}/>
            </div>
            <CV />
        </div>
    )
}