import React, { useContext } from 'react';
import { Context } from '../App';


function StyleOne(){

    const [, , personalInfo, , , ] = useContext(Context);

    return (
        <div className='bg-white w-[55rem] min-h-full pb-4 grid-container grid-rows-5 rounded-lg shadow-2xl'>
            <div className='col-start-2 col-end-3 row-start-1 row-end-2 bg-purple-400 flex items-center relative'>
                <h1 className='text-[13rem] absolute text-purple-600 left-9'><em>{personalInfo.firstName.charAt(0)}</em></h1>
                <h1 className='text-[13rem] absolute text-purple-500 left-6'><em>{personalInfo.firstName.charAt(0)}</em></h1>

                <h1 className='text-[13rem] absolute text-purple-600 right-6'><em>{personalInfo.lastName.charAt(0)}</em></h1>
                <h1 className='text-[13rem] absolute text-purple-500 right-9'><em>{personalInfo.lastName.charAt(0)}</em></h1>
            </div>
            <div className='col-start-1 col-end-2 row-start-1 row-end-3'>

            </div>
        </div>
    )
}

function StyleTwo(){
    return (
        <div>
            jhh
        </div>
    )
}

export function Styles() {

    const [styles, setStyles] = useContext(Context);

    const handleStyleClick = (infoValue) => {
        setStyles({ ...styles, ...infoValue });
    };

    return (
        <div>
            <div className="w-full cursor-pointer py-4 text-center border border-black rounded-lg mt-8 hover:bg-black hover:text-white transition-all" onClick={() => handleStyleClick({ styleOne: true, styleTwo: false })}>Style One</div>
            <div className="w-full cursor-pointer py-4 text-center border border-black rounded-lg mt-8 hover:bg-black hover:text-white transition-all" onClick={() => handleStyleClick({ styleOne: false, styleTwo: true })}>Style Two</div>
        </div>
    );
}


export function CVStyle(){

    const [styles] = useContext(Context);

    return (
            <div>
                {
                    styles.styleOne ? (
                        <StyleOne />
                    ) : (
                        <StyleTwo />
                    )
                }
            </div>
    )
}