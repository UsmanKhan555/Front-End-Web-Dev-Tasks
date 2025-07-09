import { useParams, useNavigate } from 'react-router-dom';
import { useJobs } from '../context/JobContext';
import { useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';


function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { jobs, updateJob , deleteJob } = useJobs();    

  const job = jobs.find((job) => job.id === id);

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ ...job });

  if (!job) {
    return <p className="text-red-600">Job not found.</p>;
  }

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleUpdate = (e) => {
    e.preventDefault();
    updateJob(id, formData);
    setEditing(false);
  };

  
  const handleDelete = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure you want to delete this job?')) {
      deleteJob(id);
      navigate('/');
    }
  };

return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Job Details</h1>

      {!editing ? (
        <>
          <div className="mb-4 space-y-2">
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Title:</strong> {job.title}</p>
            <p><strong>Status:</strong> {job.status}</p>
            <p><strong>Applied Date:</strong> {job.date || '-'}</p>
            <p><strong>Notes:</strong> {job.notes || 'None'}</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setEditing(true)}
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            ><FiEdit />
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-4 py-2 rounded"
            ><FiTrash2 />
              Delete
            </button>
          </div>
        </>
      ) : (
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block mb-1">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
            >
              <option>Applied</option>
              <option>Interviewing</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1">Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
              rows={4}
            ></textarea>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
export default JobDetails;
