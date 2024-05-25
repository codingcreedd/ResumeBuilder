export default function ExperienceDisplay({experience}){
    return (
        <>
            <div className="col-start-2 col-end-3 row-start-2 row-end-4 px-8 py-4 bg-gray-400">
                <h1 className="font-bold text-3xl text-black">Experience</h1>
                <h2 className="font-bold text-2xl mt-4">Company</h2>
                <p className="text-black">{experience.companyName}</p>
                <h2 className="font-bold text-2xl mt-4">Position</h2>
                <p className="text-black">{experience.positionTitle}</p>
                <div className="flex gap-8">
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-2xl mt-2">Start Date</h2>
                        <p className="text-black">{experience.startDate}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-2xl mt-2">End Date</h2>
                        <p className="text-black">{experience.endDate}</p>
                    </div>
                </div>
                <h2 className="font-bold text-2xl mt-4">Location</h2>
                <p className="text-black">{experience.location}</p>

                <div className="">
                    {experience.description}
                </div>
            </div>
        </>
    )
}