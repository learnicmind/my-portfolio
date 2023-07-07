import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            <div >
            <Header></Header>
            </div>
            <div className="pt-20">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;