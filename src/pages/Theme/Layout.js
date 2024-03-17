import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <div>
 
    
            <Header />
            
            <Sidebar />

            <div class="main">
            <Outlet/>
    </div>
           

            <Footer />


        </div>
    );

}
export default Layout;