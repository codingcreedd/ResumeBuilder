export default function PersonalInfoDisplay({personalInfo}) {
    return (
        <>
            <div className='col-start-2 col-end-3 row-start-1 row-end-2 bg-purple-400 flex items-center relative'>
                <h1 className='text-[12rem] absolute text-purple-600 left-9 translate-x-28'><em>{personalInfo.firstName.charAt(0)}</em></h1>
                <h1 className='text-[12rem] absolute text-purple-500 left-6 translate-x-28'><em>{personalInfo.firstName.charAt(0)}</em></h1>

                <h1 className='text-[12rem] absolute text-purple-600 right-6 -translate-x-28'><em>{personalInfo.lastName.charAt(0)}</em></h1>
                <h1 className='text-[12rem] absolute text-purple-500 right-9 -translate-x-28'><em>{personalInfo.lastName.charAt(0)}</em></h1>
            </div>
            <div className='col-start-1 col-end-2 row-start-1 row-end-3 px-8 py-8 bg-purple-900 flex flex-col gap-6'>
                <div>
                    <h2 className='font-bold text-4xl'>{personalInfo.firstName}</h2>
                    <h2 className='font-bold text-3xl'>{personalInfo.lastName}</h2>
                </div>
                <div>
                    <h1 className='text-2xl'>Email</h1>
                    <p>{personalInfo.email}</p>
                </div>
                <div>
                    <h1 className='text-2xl'>Phone Number</h1>
                    <p>{personalInfo.phoneNumber}</p>
                </div>
                <div>
                    <h1 className='text-2xl'>Address</h1>
                    <p>{personalInfo.address}</p>
                </div>
            </div>
        </>
    )
}