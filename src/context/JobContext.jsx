import {createContext,useState, useEffect} from 'react'

export const JobContext = createContext();

export const JobProvider = ({children}) =>{

    const [jobs, setJobs] = useState([])
    const [filterJobs, setFilterJobs] = useState([])
    const [message, setMessage] = useState("")

    useEffect(() =>{
        fetch(process.env.REACT_APP_BACKEND_SERVER)
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
