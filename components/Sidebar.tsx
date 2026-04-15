"use client";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Sidebar() {
  return (
    <div style={{
      width:"250px",
      height:"100vh",
      background:"#070B14",
      borderRight:"1px solid #1E293B",
      padding:"20px",
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between"
    }}>
      <div>
        <h2 style={{marginBottom:"30px"}}>⚡ EduForge</h2>

        <div style={{display:"flex",flexDirection:"column",gap:"15px"}}>
          <Link href="/">Dashboard</Link>
          <Link href="/worksheet">Worksheet Generator</Link>
          <Link href="/quiz">Quiz Generator</Link>
          <Link href="/lesson">Lesson Builder</Link>
        </div>
      </div>

      <button
        onClick={() => supabase.auth.signInWithOAuth({ provider: "google" })}
        style={{
          background:"linear-gradient(90deg,#7C3AED,#9333EA)",
          padding:"12px",
          borderRadius:"10px"
        }}
      >
        Sign In
      </button>
    </div>
  );
}
