export default function EducationDisplay({education}) {

    return (
        <>
            <div className="col-start-2 col-end-3 row-start-4 row-end-5 px-8 py-4 bg-gray-400">
                <h1 className="font-bold text-3xl text-black">Education</h1>
                <h2 className="font-bold text-2xl mt-4">University</h2>
                <p className="text-black">{education.uni}</p>
                <h2 className="font-bold text-2xl mt-4">Degree</h2>
                <p className="text-black">{education.degree}</p>
                <div className="flex gap-8">
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-2xl mt-2">Start Date</h2>
                        <p className="text-black">{education.startDate}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-2xl mt-2">End Date</h2>
                        <p className="text-black">{education.endDate}</p>
                    </div>
                </div>
                <h2 className="font-bold text-2xl mt-4">Location</h2>
                <p className="text-black">{education.location}</p>
            </div>
        </>
    )
}