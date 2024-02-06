import Header from "@/components/Header";

export default function RootLayout({ children }) {


  return (
    <div className="w-screen pb-4">
        <Header/>
        {children}
        
    </div>
  );
}
