import img from '../../../assets/images/myimghd.png'

const About = () => {
    return (
        <div className='grid md:grid-cols-2 w-11/12 mx-auto py-10' id='about' data-aos="fade-up" data-aos-duration="2000">
            <div className='bg-slate-800 h-[500px] md:w-[500px] w-full rounded-lg'>
                <img className='md:h-[500px] h-full md:w-[500px] w-full rounded-lg pl-4' src={img} alt="" />
            </div>
            <div className=' text-slate-400'>
                <h2 className='text-left w-[200px] border-b-2 border-teal-400 text-4xl font-bold text-teal-400 py-2'>About Me</h2>
                <p className='text-lg font-semibold text-justify'>
                    Welcome to my portfolio website! I'm Ariful Islam Razu, a passionate and dedicated front-end developer with a love for creating captivating and user-friendly web experiences. With expertise in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React.js, and the MERN stack, I have honed my skills to craft dynamic and responsive websites. My goal is to merge creativity and technical proficiency to bring ideas to life and deliver seamless digital solutions. With a keen eye for detail and a commitment to delivering high-quality work, I strive to exceed expectations and make a lasting impact. I invite you to explore my projects and get a glimpse of my commitment to excellence in web development. Let's collaborate and create something extraordinary together!</p>
            </div>
        </div>
    );
};

export default About;