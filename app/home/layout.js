import Header from "@/components/Header";

export default function RootLayout({ children }) {


  return (
    <div className="w-screen mb-4 md:mb-8">
        <Header/>
        {children}
        
    </div>
  );
}
