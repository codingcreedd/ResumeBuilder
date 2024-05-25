import { useContext } from "react";
import { Context } from "../App";

export default function PersonalInformation(){

    const {personalInfo, setPersonalInfo} = useContext(Context);

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
                type="text" value={personalInfo.firstName} placeholder="Enter first name" name="firstName" className="pl-4 py-2 rounded-md text-black outline-none mb-4"/>

                <h2 className="mb-2">Last Name</h2>
                <input
                onChange={handleInputChange}
                type="text" value={personalInfo.lastName} placeholder="Enter last name" name="lastName" className="pl-4 py-2 rounded-md text-black outline-none mb-4"/>

                <h2 className="mb-2">Email <span className="text-black text-sm ml-2">required</span></h2>
                <input
                onChange={handleInputChange}
                type="email" value={personalInfo.email} placeholder="Enter Email" name="email" className="pl-4 py-2 rounded-md text-black outline-none mb-4" required/>

                <h2 className="mb-2">Phone Number <span className="text-black text-sm ml-2">required</span></h2>
                <input
                onChange={handleInputChange}
                type="text" value={personalInfo.phoneNumber} placeholder="Enter phone number" name="phone" className="pl-4 py-2 rounded-md text-black outline-none mb-4" required/>

                <h2 className="mb-2">Address<span className="text-black text-sm ml-2">required</span></h2>
                <input
                onChange={handleInputChange}
                type="text" value={personalInfo.address} placeholder="Enter address" name="address" className="pl-4 py-2 rounded-md text-black outline-none mb-4" required/>

            </form>
        </div>
    );
}