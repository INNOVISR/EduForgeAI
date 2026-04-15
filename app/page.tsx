export default function Page() {
  return (
    <div>
      <h1 style={{fontSize:"40px", marginBottom:"10px"}}>
        Welcome to EduForge AI
      </h1>
      <p style={{color:"#94A3B8"}}>
        Generate professional teaching materials in seconds.
      </p>

      <div style={{display:"flex", gap:"20px", marginTop:"40px"}}>
        <div className="card">Worksheet Generator</div>
        <div className="card">Quiz Generator</div>
        <div className="card">Lesson Builder</div>
      </div>
    </div>
  );
}
