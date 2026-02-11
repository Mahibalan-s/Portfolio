import { useState } from "react";
import axios from "axios";

function AdminProjects() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    tech: "",
    github: "",
    demo: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/projects", form);
    alert("Project Added 🚀");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Add Project</h2>

      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <input name="description" placeholder="Description" onChange={handleChange} />
        <input name="tech" placeholder="Tech" onChange={handleChange} />
        <input name="github" placeholder="GitHub" onChange={handleChange} />
        <input name="demo" placeholder="Demo" onChange={handleChange} />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AdminProjects;
