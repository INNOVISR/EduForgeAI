import {generateAI} from "@/lib/groq";
import {NextResponse} from "next/server";
export async function POST(req:Request){
const body=await req.json();
return NextResponse.json({result:await generateAI(body.type,body)});
}
