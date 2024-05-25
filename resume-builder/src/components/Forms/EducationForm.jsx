import { useContext } from "react";
import { Context } from "../../App";

export default function EducationForm(){

    const {education, setEducation} = useContext(Context);

    const handleInputChange = (e) => {
        const name = e.target.getAttribute("name");
        const value = e.target.value;
    
        if (name === "universityName") {
            setEducation({...education, uni: value});
        } else if (name === "degree") {
            setEducation({...education, degree: value});
        } else if (name === "startDate") {
            setEducation({...education, startDate: value});
        } else if (name === "endDate") {
            setEducation({...education, endDate: value});
        } else if (name === "location") {
            setEducation({...education, location: value});
        }
    }

    return (
        <form action="" className="flex flex-col">
            <h1 className="font-bold text-xl mb-2">Personal Details</h1>
            <h2 className="mb-2">University</h2>
            <input onChange={handleInputChange}
            type="text" placeholder="Enter University Name" name="universityName" className="pl-4 py-2 rounded-md text-black outline-none mb-4"/>

            <h2 className="mb-2">Degree</h2>
            <input onChange={handleInputChange} type="text" placeholder="Enter Degree" name="degree" className="pl-4 py-2 rounded-md text-black outline-none mb-4"/>

            <div className="flex gap-4 justify-between">
                <div className="flex flex-col gap-1 flex-1">
                    <h2 className="mb-2">Start Date <span className="text-black text-sm ml-2">required</span></h2>
                    <input onChange={handleInputChange} type="date" placeholder="Enter start date" name="startDate" className="pl-4 py-2 rounded-md text-black outline-none mb-4" required/>
                </div>
                <div className="flex flex-col gap-1 flex-1">
                    <h2 className="mb-2">End Date <span className="text-black text-sm ml-2">required</span></h2>
                    <input onChange={handleInputChange} type="date" placeholder="Enter Email" name="endDate" className="pl-4 py-2 rounded-md text-black outline-none mb-4" required/>
                </div>
            </div>

            <h2 className="mb-2">Location <span className="text-black text-sm ml-2">required</span></h2>
            <input onChange={handleInputChange} type="text" placeholder="Enter location" name="location" className="pl-4 py-2 rounded-md text-black outline-none mb-4" required/>
        </form>
    )
}