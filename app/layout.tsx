import "./globals.css";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body style={{display:"flex"}}>
        <Sidebar />
        <main style={{flex:1, padding:"30px"}}>{children}</main>
      </body>
    </html>
  );
}
