"use client";
import { useState } from "react";

export default function GeneratorForm({ type }: { type: string }) {
  const [output, setOutput] = useState("");

  async function handleSubmit(e:any){
    e.preventDefault();
    const form = new FormData(e.target);

    const res = await fetch("/api/generate",{
      method:"POST",
      body:JSON.stringify({
        type,
        subject:form.get("subject"),
        topic:form.get("topic"),
        grade:form.get("grade"),
        difficulty:form.get("difficulty")
      })
    });

    const data = await res.json();
    setOutput(data.result);
  }

  return (
    <div className="card" style={{maxWidth:"700px"}}>
      <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"15px"}}>
        <input name="subject" placeholder="Subject" required />
        <input name="topic" placeholder="Topic" required />
        <input name="grade" placeholder="Grade Level" required />

        {type !== "lesson" && (
          <select name="difficulty">
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        )}

        <button style={{
          background:type==="quiz"?"#0EA5E9":type==="lesson"?"#10B981":"#8B5CF6",
          padding:"12px",
          borderRadius:"10px"
        }}>
          Generate
        </button>
      </form>

      <div style={{marginTop:"20px",whiteSpace:"pre-wrap"}}>
        {output}
      </div>
    </div>
  );
}
