import { useJobs } from "../context/JobContext";
import { Link } from "react-router-dom";
import { FiDownload, FiUpload } from 'react-icons/fi';


function Dashboard() {
    const { jobs, addJob } = useJobs();

    const exportJobs = () => {
        const dataStr = JSON.stringify(jobs, null, 2);
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = 'job-applications.json';
        link.click();

        URL.revokeObjectURL(url);
    };

    const importJobs = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const text = await file.text();
        try {
        const importedJobs = JSON.parse(text);
        if (!Array.isArray(importedJobs)) throw new Error();

        importedJobs.forEach((job) => {
            if (job.company && job.title && job.status) {
            addJob(job);
            }
        });
        alert('Jobs imported successfully!');
        } catch {
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