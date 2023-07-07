import { FaCode } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { DiResponsive } from "react-icons/di";

const Services = () => {
    return (
        <div className="w-11/12 mx-auto pb-16 text-white" id="services" data-aos="fade-up" data-aos-duration="2000">
            <h2 className="text-teal-400 w-[240px] border-b-2 border-teal-400 text-4xl font-bold py-2">My Services</h2>
            <div className="grid md:grid-cols-3 gap-6 pt-6">
                <div className="bg-slate-800 p-8 rounded-lg" >
                    <FaCode className="text-4xl my-4" />
                    <h2 className="text-2xl text-teal-400 font-bold mb-2">Web Design and Development</h2>
                    <p className="text-slate-400 font-bold text-lg text-justify">
                    As a front-end and MERN stack developer, I offer comprehensive web design and development services to help you establish a compelling online presence. With a keen eye for aesthetics and a deep understanding of user experience, I create visually stunning and engaging websites that leave a lasting impression.</p>
                </div>
                <div className="bg-slate-800 p-8 rounded-lg" >
                    <DiResponsive className="text-6xl my-2" />
                    <h2 className="text-2xl text-teal-400 font-bold mb-2">Responsive Website Development</h2>
                    <p className="text-slate-400 font-bold text-lg text-justify">
                    In today's digital landscape, it's crucial for websites to be accessible and optimized for various devices and screen sizes. As a front-end and MERN stack developer, I specialize in creating responsive websites that provide a seamless user experience across desktops, tablets, and mobile devices.</p>
                </div>
                <div className="bg-slate-800 p-8 rounded-lg" >
                    <MdSupportAgent className="text-4xl my-4 text-white" />
                    <h2 className="text-2xl text-teal-400 font-bold mb-2">Website Maintenance and Support</h2>
                    <p className="text-slate-400 font-bold text-lg text-justify">
                    With regular maintenance, I proactively monitor and manage your website to address any issues promptly. This includes performing routine updates, patching vulnerabilities, and implementing necessary security measures to protect your website from potential threats.</p>
                </div>
                
            </div>
        </div>
    );
};

export default Services;