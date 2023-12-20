import Header from "./_components/Header";
import { Sidebar } from "./_components/Sidebar";

export default function DashboardLayout({ children }) {
    return (
        <>
        <div className="flex min-h-screen ">
            <Sidebar />
            <div className="flex flex-col">  
            <Header />  
            {children}
            </div>
        </div>
        </>
    );
}
