import { Context } from "../App"
import { useContext } from "react"
import EducationForm from "./Forms/EducationForm";

export default function Education(){    
    return (
        <div className="bg-purple-600 rounded-md px-8 py-4 text-white mt-4 flex flex-col">
            <EducationForm />
        </div>
        
    )
}
