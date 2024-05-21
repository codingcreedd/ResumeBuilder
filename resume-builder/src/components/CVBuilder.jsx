import { useState } from "react"
import Styles from "./Styles";

function Education({callback}){
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

function PersonalInformation({callback}){

    const [personalInfo, setPersonalInfo]= useState({firstName: 'Marwan', lastName: 'Moubayed',
        email: "resumebuilder@gmail.com", phoneNumber: '+961 00 00 00 00', address: "Lebanon, Tripoli"
    });

    const handleInputChange = (e) => {
        const name = e.target.getAttribute("name");
        const value = e.target.value;
    
        if (name === "firstName") {
            setPersonalInfo({...personalInfo, firstName: value});
        } else if (name === "lastName") {
            setPersonalInfo({...personalInfo, lastName: value});
        } else if (name === "email") {
            setPersonalInfo({...personalInfo, email: value});
        } else if (name === "phone") {
            setPersonalInfo({...personalInfo, phoneNumber: value});
        } else if (name === "address") {
            setPersonalInfo({...personalInfo, address: value});
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
                <input type="text" placeholder="Enter last name" name="lastName" className="pl-4 py-2 rounded-md text-black outline-none mb-4"/>

                <h2 className="mb-2">Email <span className="text-black text-sm ml-2">required</span></h2>
                <input type="email" placeholder="Enter Email" name="email" className="pl-4 py-2 rounded-md text-black outline-none mb-4" required/>

                <h2 className="mb-2">Phone Number <span className="text-black text-sm ml-2">required</span></h2>
                <input type="text" placeholder="Enter phone number" name="phone" className="pl-4 py-2 rounded-md text-black outline-none mb-4" required/>

                <h2 className="mb-2">Address<span className="text-black text-sm ml-2">required</span></h2>
                <input type="text" placeholder="Enter address" name="address" className="pl-4 py-2 rounded-md text-black outline-none mb-4" required/>

            </form>
        </div>
    );
}

function Experience({callback}){

}

function LeftSide({callback, homeCallBack}){

    const [isStyle, setIsStyles] = useState(false);

    const handleStyleClick = (infoValue) => {
        setIsStyles(!isStyle && infoValue);
    }

    return (
        <div className="flex flex-col gap-4 px-10 w-[40%]">
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
                        <PersonalInformation callback={callback} />
                        <Education callback={callback} />
                        <Experience callback={callback} />
                    </div>
                )
            }

        </div>
    )
}

function CV(){
    return (
        <Styles />
    )
}


export default function CVBuilder({callback}){

    const [personalInformation, setPersonalInformation] = useState([]); //array of objects
    const [education, setEducation] = useState([]); //array of objects
    const [experience, setExperience] = useState([]); //array of objects

    const callbackFun = () => {

    }

    return (
        <div className="w-full Home bg-purple-400 px-40 py-10">
            <div className="w-full bg-white flex gap-20 py-10 px-4 rounded-lg shadow-2xl items-center">
                <LeftSide callback={callbackFun} homeCallBack={callback}/>
                <CV personalInfo={personalInformation} education={education} experience={experience}/>
            </div>
        </div>
    )
}