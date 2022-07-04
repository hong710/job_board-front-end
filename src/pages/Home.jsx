import {useContext} from 'react'
import Header from '../components/Header'
import JobCard from '../components/JobCard'
import SearchBar from '../components/SearchBar';
import { JobContext } from '../context/JobContext'

function Home() {

  const {filterJobs} = useContext(JobContext);
  return (
   <>
    <Header />
    <SearchBar />
    <div className="px-6">

      <h1 className="text-center mt-4">{filterJobs?.length} jobs openings.</h1>

      {filterJobs?.map(job => <JobCard key={job.id} job = {job} />)}
    </div>
  
   </>
  )
}

export default Home