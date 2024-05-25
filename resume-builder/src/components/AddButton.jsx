import { useContext, useState } from "react"
import { Context } from "../App"

export default function AddButton({title = "Add", component, onClick}){

    const {education, setEducation} = useContext(Context);
    const [educationIndex, setEducationIndex] = useState(0);
    const [experienceIndex, setExperienceIndex] = useState(0);

    const handleAddButton = () => {
        if(component === "Education"){
            setEducation(education.concat([
                {
                    companyName: '', positionTitle: '', startDate: '', endDate: '', location: '', description: '', index: educationIndex
                }
            ]));
            setEducationIndex(prevEducationIndex => prevEducationIndex + 1);
        }

        onClick();
    }

    return (
        <button className="w-[50%] py-4 bg-white text-black rounded-lg" onClick={handleAddButton}>
            {title}
        </button>
    )
}