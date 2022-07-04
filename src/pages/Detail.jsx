import React, {useState,useEffect} from 'react'
import Header from '../components/Header'
import {useParams} from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io"
import {Link} from "react-router-dom"

function Detail() {

    let {id}= useParams();
    const [job, setJob] = useState();

    useEffect(() =>{
        fetch(`http://localhost:8000/jobs/${id}`)
            .then(res => res.json())
            .then(data => {
                setJob(data)
            })
    },[id])
;
  

  return (
    <>
    <Header text={"Job Details"}  hidden={"hidden"} />
    <div className="px-6 mt-10">
        <div className="mycontainer shadow-lg py-6 space-y-4">
            <Link to='/'>
                <div className="flex items-center -scroll-mb-10 cursor-pointer hover:text-primary">
                    <IoIosArrowBack size={20} />
                    <p>Current Opening</p>   
                </div>
            </Link>
            <h1 className="text-2xl font-bold" >{job?.role}</h1>
            <hr className="divide-solid border-4" />
            <h2 className="text-xl">Client Name: {job?.client}</h2>
            <h2 className="text-xl">Point of Contact: {job?.poc}</h2>
            <h2 className="text-xl">POC Email: {job?.poc_email}</h2>
            <h2 className="text-xl">Urgency: {job?.urgency}</h2>
            <h2 className="text-xl">Quantity: {job?.quantity}</h2>
            <h2 className="text-xl">Skills: {job?.skills}</h2>
           

        </div>

    </div>
   </>
  )
}

export default Detail