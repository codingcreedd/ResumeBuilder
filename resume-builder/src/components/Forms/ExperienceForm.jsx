import { useContext } from "react";
import { Context } from "../../App";

export default function ExperienceForm(){

    const {experience, setExperience} = useContext(Context);

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

    return (
        <form action="" className="flex flex-col">
            <h1 className="font-bold text-xl mb-2">Personal Details</h1>
            <h2 className="mb-2">Company Name</h2>
            <input onChange={handleInputChange}
            type="text" placeholder="Enter company Name" name="companyName" className="pl-4 py-2 rounded-md text-black outline-none mb-4"/>

            <h2 className="mb-2">Position Title</h2>
            <input onChange={handleInputChange} type="text" placeholder="Enter position title" name="positionTitle" className="pl-4 py-2 rounded-md text-black outline-none mb-4"/>

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

            <h2 className="mb-2">Description<span className="text-black text-sm ml-2">required</span></h2>
            <textarea onChange={handleInputChange} type="text" placeholder="Enter Description" name="description" className="pl-4 py-2 rounded-md text-black outline-none mb-4" required/>

        </form>
    )
}