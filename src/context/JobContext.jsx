import {createContext,useState, useEffect} from 'react'


export const JobContext = createContext();

export const JobProvider = ({children}) =>{

    const [jobs, setJobs] = useState([])
    const [filterJobs, setFilterJobs] = useState([])
    const [message, setMessage] = useState("")

    useEffect(() =>{
        fetch('http://45.33.17.193:8000/jobs')
            .then(res => res.json())
            .then(data => {
                setFilterJobs(data)
                setJobs(data)
            })
    },[])

    return(
        <JobContext.Provider value= {{jobs,setJobs,filterJobs, setFilterJobs,message,setMessage}}>
            {children}
        </JobContext.Provider> 
    )

}
