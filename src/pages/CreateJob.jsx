import React from 'react'
import SubmitForm from '../components/SubmitForm'
import Header from '../components/Header'
function CreateJob() {
  return (
    <>
    <Header text={"Create New Job"}  hidden={"hidden"} />
    <div className="my-12">
        <div className='max-w-[1000px] mx-auto'>
            <SubmitForm />
        </div>
    </div>
    </>
  )
}

export default CreateJob