import { FaFileDownload } from "react-icons/fa";
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const Banner = () => {

    const [text] = useTypewriter({
        words: ['Jr. Frontend Developer', 'Jr. Web Developer', 'Jr. MERN Stack Developer'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 100
    })

    
    const downloadResume = () => {
        const fileId = '14lJtdFPolEEFs_cOEEYGyRHfANf2iDX4';
        const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}&response-content-disposition=attachment`;
        window.location.href = downloadLink;
    };

    return (
        <div className="md:w-11/12 md:mx-auto py-10" id="hero" data-aos="fade-up" data-aos-duration="2000">
            <div className="grid md:grid-cols-2 font-bold ">
                <div className='text-center md:text-left md:mt-24 py-6' >
                    <span className="flex">
                        <h2 className="text-4xl text-teal-400">{text}</h2>
                        <span className='text-teal-400 text-4xl'><Cursor /></span>
                    </span>
                    <h2 className="text-4xl text-slate-400">Hi, i'm <span className="text-2xl text-slate-400">Ariful Islam Razu</span> <br /> From Bangladesh</h2>
                    <h3 className='btn border-0 border-[#48a5af] border-r-4 border-b-4 hover:bg-[#111827] hover:border-[#59dae9] text-teal-400 hover:text-[#59dae9] bg-transparent mt-4' onClick={downloadResume}>Download CV<FaFileDownload /></h3>
                </div>
                <div className='md:ml-20 ' data-aos="fade-up" data-aos-duration="2000">
                    <img className="rounded" src="https://i.ibb.co/Yp4vxSb/banner.gif" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;