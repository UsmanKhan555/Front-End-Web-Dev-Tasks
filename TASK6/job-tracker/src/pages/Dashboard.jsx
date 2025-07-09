import { useJobs } from "../context/JobContext";
import { Link } from "react-router-dom";
import { FiDownload, FiUpload } from 'react-icons/fi';


function Dashboard() {
    const { jobs, addJob } = useJobs();

    /**
     * Export jobs data as a JSON file
     * Creates a downloadable JSON file containing all job applications
     */
    const exportJobs = () => {
        // Convert jobs array to formatted JSON string with 2-space indentation
        const dataStr = JSON.stringify(jobs, null, 2);
        
        // Create a blob object with the JSON data and specify MIME type
        const blob = new Blob([dataStr], { type: "application/json" });
        
        // Create a temporary URL for the blob
        const url = URL.createObjectURL(blob);

        // Create a temporary anchor element for triggering download
        const link = document.createElement("a");
        link.href = url;
        link.download = 'job-applications.json'; // Set the filename for download
        link.click(); // Programmatically trigger the download

        // Clean up by revoking the temporary URL to free memory
        URL.revokeObjectURL(url);
    };

    const importJobs = async (e) => {
        // Get the first selected file from the input
        const file = e.target.files[0];
        if (!file) return; // Exit if no file was selected

        // Read the file content as text
        const text = await file.text();
        
        try {
            // Parse the JSON content
            const importedJobs = JSON.parse(text);
            
            // Validate that the parsed data is an array
            if (!Array.isArray(importedJobs)) throw new Error();

            // Iterate through each job in the imported data
            importedJobs.forEach((job) => {
                // Validate that each job has required fields before adding
                if (job.company && job.title && job.status) {
                    addJob(job);
                }
            });
            
            // Show success message to user
            alert('Jobs imported successfully!');
            
        } catch {
            // Show error message if JSON parsing fails or data is invalid
            alert('Invalid JSON file.');
        }
    };


    return (
        <div>
      <h1 className="text-2xl font-bold mb-4">Job Applications</h1>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <button
          onClick={exportJobs}
          className="bg-green-600 text-white px-4 py-2 rounded w-full sm:w-auto"
        ><FiDownload /> Export Jobs
          Export Jobs
        </button>

        <label className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto cursor-pointer"><FiUpload />
          Import Jobs
          <input
            type="file"
            accept="application/json"
            onChange={importJobs}
            className="hidden"
          />
        </label>
      </div>

      {jobs.length === 0 ? (
        <p className="text-gray-600">No jobs added yet. Click “Add Job” to start.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <Link
              to={`/job/${job.id}`}
              key={job.id}
              className="block border rounded p-4 shadow hover:bg-gray-50 transition"
            >
              <h2 className="font-semibold text-lg">{job.title}</h2>
              <p className="text-gray-700">{job.company}</p>
              <p className="text-sm text-gray-500">
                Status: <span className="font-medium">{job.status}</span>
              </p>
              {job.date && (
                <p className="text-sm text-gray-500">Applied: {job.date}</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;