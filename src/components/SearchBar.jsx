import React,{useState,useContext} from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import { JobContext } from '../context/JobContext'
function SearchBar() {

    const [search, setSeach] = useState("");
    const [option, setOption] = useState("All");
    const {jobs, setFilterJobs, message, setMessage} = useContext(JobContext);
    
    function handleSearch(jobs){
        if (search.trim() !==""){
            if (option==="All"){
                return jobs.filter(obj =>{
                    const searchStr= obj['client']+obj['role']+[obj['skills']];
                    console.log(searchStr);
                    return searchStr.toLowerCase().includes(search.toLowerCase())
               })
            }else if (option==="Role"){
                return jobs.filter(job => {
                    const jobRole = job.role.toLowerCase();
                    return jobRole.includes(search.toLowerCase())
                })
            }else if (option==="Client"){
                return jobs.filter(job => {
                    const jobClient = job.client.toLowerCase();
                    return jobClient.includes(search.toLowerCase())
                })
            }
        }else if (search.trim()==="")
            setMessage("Search box cannot be empty!");
        else
            return jobs;
    }

    function handleSubmit (event) {
        event.preventDefault();
        setFilterJobs(handleSearch(jobs));
    }

  return (
    <div className="mycontainer flex justify-center items-center">
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center bg-white rounded-xl shadow-md">
                <select name="category" className='p-2 bg-transparent focus:outline-none'
                        value = {option}
                        onChange={(e) =>setOption(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Role" >Role</option>
                    <option value="Client" >Client</option>
                </select>
                <input type="text" 
                        className="p-2 bg-transparent w-96 focus:outline-none" 
                        placeholder='Search..' 
                        value = {search}
                        onChange = {(e)=>setSeach(e.target.value)}
                        />
                <button className="p-2 border-l bg-custom rounded-r-xl" 
                        type='submit' 
                >
                    <AiOutlineSearch className='p-0 text-white text-3xl'/>
                </button>
            </div>
            {message.length > 0 ? <p className="text-rose-600 italic text-center">{message}</p>:null}
        </form>
         
    </div>
  )
}

export default SearchBar