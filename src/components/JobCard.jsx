
function JobCard({job}) {
   
    return (
    <div className='mycontainer rounded-xl shadow my-12 py-6 px-8 bg-white'>
        <div className='flex justify-between items-center'>
            <div className='space-y-2'>
                <h1 className='text-xl font-bold tracking-wide text-primary'>{job.client}</h1>
                <h1 className='text-xl font-bold tracking-wide'>{job.role}</h1>
                <h2 className='text-md font-bold'>Urgency - {job.urgency}</h2>
                <h2 className='text-md font-bold'>{job.skills}</h2>
            </div>
            <div>
                <div className='bg-gray-100 py-3 px-8 rounded-full uppercase font-bold'>
                    <h3 className='text-md'>Learn more</h3>
                    </div>
            </div>

        </div>

    </div>
  )
}

export default JobCard