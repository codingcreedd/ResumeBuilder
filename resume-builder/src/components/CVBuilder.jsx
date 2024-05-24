import React, {  useContext, useState } from 'react';
import {Styles, CVStyle} from "./Styles";
import { Context } from '../App';


function Education(){
    return (
        <div className="bg-purple-600 rounded-md px-8 py-4 text-white mt-4 flex justify-between">
            <div className="flex items-center gap-4">
                <i class='bx bxs-graduation' ></i>
                <p className="font-bold text-xl">Education</p>
            </div>
            <i class='bx bx-chevron-down'></i>
        </div>
    )
}

function PersonalInformation(){

    const [, , , setPersonalInfo, , ] = useContext(Context);

    const handleInputChange = e => {
        let name = e.target.getAttribute("name");
        let value = e.target.value;
    
        if (name === "firstName") {
            setPersonalInfo(prevPersonalInfo => ({...prevPersonalInfo, firstName: value}));
        } else if (name === "lastName") {
            setPersonalInfo(prevPersonalInfo => ({...prevPersonalInfo, lastName: value}));
        } else if (name === "email") {
            setPersonalInfo(prevPersonalInfo => ({...prevPersonalInfo, email: value}));
        } else if (name === "phone") {
            setPersonalInfo(prevPersonalInfo => ({...prevPersonalInfo, phoneNumber: value}));
        } else if (name === "address") {
            setPersonalInfo(prevPersonalInfo => ({...prevPersonalInfo, address: value}));
        }
    }
    

    return (
        <div className="bg-purple-600 rounded-md px-8 py-4 text-white mt-4">
            <form action="" className="flex flex-col">
                <h1 className="font-bold text-xl mb-2">Personal Details</h1>
                <h2 className="mb-2">First Name</h2>
                <input onChange={handleInputChange}
                type="text" placeholder="Enter first name" name="firstName" className="pl-4 py-2 rounded-md text-black outline-none mb-4"/>

                <h2 className="mb-2">Last Name</h2>
                <input
                onChange={handleInputChange}
                type="text" placeholder="Enter last name" name="lastName" className="pl-4 py-2 rounded-md text-black outline-none mb-4"/>

                <h2 className="mb-2">Email <span className="text-black text-sm ml-2">required</span></h2>
                <input
                onChange={handleInputChange}
                type="email" placeholder="Enter Email" name="email" className="pl-4 py-2 rounded-md text-black outline-none mb-4" required/>

                <h2 className="mb-2">Phone Number <span className="text-black text-sm ml-2">required</span></h2>
                <input
                onChange={handleInputChange}
                type="text" placeholder="Enter phone number" name="phone" className="pl-4 py-2 rounded-md text-black outline-none mb-4" required/>

                <h2 className="mb-2">Address<span className="text-black text-sm ml-2">required</span></h2>
                <input
                onChange={handleInputChange}
                type="text" placeholder="Enter address" name="address" className="pl-4 py-2 rounded-md text-black outline-none mb-4" required/>

            </form>
        </div>
    );
}

function Experience(){

    const [experience, setExperience] = useContext(Context);

    const [opened, setOpened] = useState(false);
    const [addExperience, setAddExperience] = useState(false);

    const handleExperienceForm = () => {
        setOpened(!opened);
    }

    const handleInputChange = (e) => {
        const name = e.target.getAttribute("name");
        const value = e.target.value;
    
        if (name === "companyName") {
            setExperience({...experience, companyName: value});
        } else if (name === "positionTitle") {
            setExperience({...experience, positionTitle: value});
        } else if (name === "startDate") {
            setExperience({...experience, startDate: value});
        } else if (name === "endDate") {
            setExperience({...experience, endDate: value});
        } else if (name === "location") {
            setExperience({...experience, location: value});
        }
        else if(name === "description") {
            setExperience({...experience, description: value});
        }
    }

    const handleAddExperience = () => {
        setAddExperience(!addExperience);
    }
    
    return (
        <div className="bg-purple-600 rounded-md px-8 py-4 text-white mt-4 flex flex-col">
            <div className="flex justify-between" onClick={handleExperienceForm}>
                <div className="flex items-center gap-4">
                    <i class='bx bxs-briefcase' ></i>
                    <p className="font-bold text-xl">Experience</p>
                </div>
                <i class='bx bx-chevron-down'></i>
            </div>
            {
                opened ? (
                    
                    <div className="mt-8">
                         {
                            addExperience ? (
                                <form action="" className="flex flex-col">
                                    <h1 className="font-bold text-xl mb-2">Personal Details</h1>
                                    <h2 className="mb-2">Company Name</h2>
                                    <input onChange={handleInputChange}
                                    type="text" placeholder="Enter company Name" name="companyName" className="pl-4 py-2 rounded-md text-black outline-none mb-4"/>

                                    <h2 className="mb-2">Position Title</h2>
                                    <input type="text" placeholder="Enter position title" name="postionTitle" className="pl-4 py-2 rounded-md text-black outline-none mb-4"/>

                                    <div className="flex gap-4 justify-between">
                                        <div className="flex flex-col gap-1 flex-1">
                                            <h2 className="mb-2">Start Date <span className="text-black text-sm ml-2">required</span></h2>
                                            <input type="date" placeholder="Enter start date" name="startDate" className="pl-4 py-2 rounded-md text-black outline-none mb-4" required/>
                                        </div>
                                        <div className="flex flex-col gap-1 flex-1">
                                            <h2 className="mb-2">End Date <span className="text-black text-sm ml-2">required</span></h2>
                                            <input type="date" placeholder="Enter Email" name="endDate" className="pl-4 py-2 rounded-md text-black outline-none mb-4" required/>
                                        </div>
                                    </div>

                                    <h2 className="mb-2">Location <span className="text-black text-sm ml-2">required</span></h2>
                                    <input type="text" placeholder="Enter location" name="location" className="pl-4 py-2 rounded-md text-black outline-none mb-4" required/>

                                    <h2 className="mb-2">Description<span className="text-black text-sm ml-2">required</span></h2>
                                    <textarea type="text" placeholder="Enter Description" name="description" className="pl-4 py-2 rounded-md text-black outline-none mb-4" required/>

                                </form>
                            ) : (
                                null
                            )
                         }
                        {
                            (!addExperience || opened) ? (
                                <button onClick={handleAddExperience} className="w-[50%] py-4 bg-white text-black rounded-lg">Add Experience</button>
                            )  : (
                                null
                            )
                        }
                    </div>
                ) : (
                    null
                )
            }
        </div>
        
    )
}

function LeftSide({homeCallBack}){

    const [isStyle, setIsStyles] = useState(false);

    const handleStyleClick = (infoValue) => {
        setIsStyles(!isStyle && infoValue);
    }

    return (
        <div className="flex flex-col gap-4 px-10">
            <nav className="flex gap-10 items-center justify-center">
                <p className="cursor-pointer"><button onClick={() => {homeCallBack(true)}}
                className="navBtn flex-1">Home</button></p>
                
                <button className="navBtn flex-1" onClick={() => {handleStyleClick(false)}}>Info</button>

                <button className="navBtn flex-1"
                onClick={() => {handleStyleClick(true)}}>Styles</button>
                
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
            <div className=" bg-white flex gap-20 py-10 px-4 rounded-lg shadow-2xl items-center w-max">
                <LeftSide homeCallBack={callback}/>
            </div>
            <CV />
        </div>
    )
}