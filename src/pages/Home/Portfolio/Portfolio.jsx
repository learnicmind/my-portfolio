import rythmic from '../../../assets/images/rythmic.png'
import toyWheelz from '../../../assets/images/toyWheelz.png'
import chefHunter from '../../../assets/images/chefHunter.png'
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className="w-11/12 mx-auto" id='portfolio'  data-aos="fade-up" data-aos-duration="2000">
            <div className="py-10">
                <h2 className="md:text-4xl text-2xl text-teal-400 font-bold w-[350px] border-b-2 border-teal-400 py-2">My Latest Projects</h2>
                <div>
                    <div className="flex pt-10 items-center justify-center ">
                        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                                    <div className="h-96 w-72">
                                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded" src={toyWheelz} alt="" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-teal-300 group-hover:from-teal-200 group-hover:via-black/60 group-hover:to-black/70"></div>
                                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-1 text-center transition-all duration-500 group-hover:translate-y-0">
                                        <h1 className="font-dmserif text-3xl font-bold text-black">Toy Wheelz</h1>
                                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">--Toy Wheelz is a full stack web application.</p>
                                        <p  className="mb-2 font-bold text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><span className='text-teal-400'>Used Technologies</span> : Tailwind, Fireabase,  MongoDb, Express.js, React.js, Node.js</p>
                                        <Link target='_blank' to='https://toy-wheelz-client.web.app/'><button className='btn border-0 border-[#48a5af] border-r-4 border-b-4 hover:bg-[#111827] hover:border-[#59dae9] text-teal-400 hover:text-[#59dae9] bg-[#111827] mt-4'>Live Site</button></Link>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-between mt-2'>
                                        <Link target='_blank' to=''>
                                            <h2 className='font-bold text-slate-400 text-xl underline'>Client</h2>
                                        </Link>
                                        <Link to='https://github.com/learnicmind/toy-wheelz-server'>
                                            <h2 className='font-bold text-slate-400 text-xl underline'>Server</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                                    <div className="h-96 w-72">
                                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded" src={rythmic} alt="" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-teal-300 group-hover:from-teal-200 group-hover:via-black/60 group-hover:to-black/70"></div>
                                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-2 text-center transition-all duration-500 group-hover:translate-y-0">
                                        <h1 className="font-dmserif text-3xl font-bold text-black">RyThmic</h1>
                                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">--RyThmic is a full Stack web application with an admin, instructor and student dashbord.</p>
                                        <p  className="mb-2 font-bold text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><span className='text-teal-400'>Used Technologies</span> : Tailwind, Fireabase,  MongoDb, Express.js, React.js, Node.js</p>
                                        <Link to='https://rythmic-client.web.app/'>
                                            <button className='btn border-0 border-[#48a5af] border-r-4 border-b-4 hover:bg-[#111827] hover:border-[#59dae9] text-teal-400 hover:text-[#59dae9] bg-[#111827] mt-4'>Live Site</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className='flex justify-between mt-2'>
                                    <Link target='_blank' to='https://github.com/learnicmind/rythmic'>
                                        <h2 className='font-bold text-slate-400 text-xl underline'>Client</h2>
                                    </Link>
                                    <Link to='https://github.com/learnicmind/rythmic-server'>
                                        <h2 className='font-bold text-slate-400 text-xl underline'>Server</h2>
                                    </Link>
                                </div>
                            </div>
                            <div >
                                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                                    <div className="h-96 w-72">
                                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded" src={chefHunter} alt="" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-teal-300 group-hover:from-teal-200 group-hover:via-black/60 group-hover:to-black/70"></div>
                                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-2 text-center transition-all duration-500 group-hover:translate-y-0">
                                        <h1 className="font-dmserif text-3xl font-bold text-black">Chef Hunter</h1>
                                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">--Cookz Corner is a full stack web application.
                                        </p>
                                        <p  className="mb-2 font-bold text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><span className='text-teal-400'>Used Technologies</span> : Tailwind, Fireabase,  MongoDb, Express.js, React.js, Node.js</p>
                                        <Link to='https://chef-hunter-client-3bd8b.web.app/'>
                                            <button className='btn border-0 border-[#48a5af] border-r-4 border-b-4 hover:bg-[#111827] hover:border-[#59dae9] text-teal-400 hover:text-[#59dae9] bg-[#111827] mt-4'>Live Site</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className='flex justify-between mt-2'>
                                    <Link target='_blank' to='https://github.com/learnicmind/chef-hunter'>
                                        <h2 className='font-bold text-slate-400 text-xl underline'>Client</h2>
                                    </Link>
                                    <Link to='https://github.com/learnicmind/chef-hunter-server'>
                                        <h2 className='font-bold text-slate-400 text-xl underline'>Server</h2>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Portfolio;