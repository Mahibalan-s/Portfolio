import "../styles/Skills.css";

function Skills() {
  return (
    <section className="skills fade-in" id="skills">

      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Frontend</h3>
          <p>HTML, CSS, JavaScript, React</p>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <p>Node.js, Express.js, MongoDB</p>
        </div>

        <div className="skill-card">
          <h3>Programming</h3>
          <p>C, Data Structures, Java</p>
        </div>

        <div className="skill-card">
          <h3>Core & Systems</h3>
          <p>Linux, Kernel Basics, OS Concepts</p>
        </div>

        <div className="skill-card">
          <h3>Embedded & IoT</h3>
          <p>Embedded C, Sensors, Microcontrollers</p>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <p>Git, GitHub, VS Code, Postman</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
