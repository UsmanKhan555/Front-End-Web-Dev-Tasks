import { createContext,use,useContext, useEffect,useState } from "react";

const JobContext = createContext();

export const useJobs = () => useContext(JobContext);

export const JobProvider = ({ children }) => {
    const [jobs, setJobs] = useState(() => {
        const stored = localStorage.getItem("jobs");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("jobs", JSON.stringify(jobs));
    }, [jobs]);

    // Function to add a new job
     const addJob = (job) => {
    setJobs([...jobs, { ...job, id: Date.now().toString() }]);
    };

    // Edit job
  const updateJob = (id, updatedJob) => {
    setJobs(jobs.map((job) => (job.id === id ? { ...job, ...updatedJob } : job)));
  };

  // Delete job
  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

   return (
    <JobContext.Provider value={{ jobs, addJob, updateJob, deleteJob }}>
      {children}
    </JobContext.Provider>
  );
};