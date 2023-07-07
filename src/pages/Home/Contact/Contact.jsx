import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { ImLocation2 } from "react-icons/im";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s1o4h7g', 'template_xoxd4bf', form.current, 'Peh7GFin4HeDLQ49G')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
                if (result.text === 'OK') {
                    toast.success('Message sent successfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="w-11/12 mx-auto py-10" id="contact"  data-aos="fade-up" data-aos-duration="2000">
            <div>
                <h2 className="text-teal-400 w-[250px] border-b-2 border-teal-400 text-4xl font-bold py-2">Get in Touch</h2>

            </div>
            <div className="grid md:grid-cols-2 gap-10" >
                <div>
                    <p className="text-slate-400 font-bold pt-2 text-justify">Thank you for visiting my portfolio website. I'm eager to connect with you! Whether you have a project idea or just want to chat, I'm all ears. Feel free to reach out using the contact form, email, or social media. Let's create something amazing together!</p>
                    <div className="bg-teal-950 mt-4 flex p-4 gap-8 items-center rounded-sm ">
                        <div>
                            <BsFillTelephoneInboundFill className="text-teal-400 text-2xl" />
                        </div>
                        <div className="text-white">
                            <p className="text-2xl font-bold ">Phone</p>
                            <p className="font-bold">+880-1637073096</p>
                        </div>
                    </div>
                    <div className="bg-teal-950 mt-4 flex p-4 gap-8 items-center rounded-sm ">
                        <div>
                            <HiOutlineMailOpen className="text-teal-400 text-2xl" />
                        </div>
                        <div className="text-white">
                            <p className="text-2xl font-bold ">Email</p>
                            <p className="font-bold">learnicmind@gmail.com</p>
                        </div>
                    </div>
                    <div className="bg-teal-950 mt-4 flex p-4 gap-8 items-center rounded-sm ">
                        <div>
                            <ImLocation2 className="text-teal-400 text-2xl" />
                        </div>
                        <div className="text-white">
                            <p className="text-2xl font-bold ">Location</p>
                            <p className="font-bold">Noakhali, Chattogram, Bangladesh</p>
                        </div>
                    </div>
                </div>

                <div>

                    <form ref={form} onSubmit={sendEmail} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-white">Your Name</span>
                            </label>
                            <input type="text" name="user_name" placeholder="Your Name" className="input bg-teal-950 border-2 border-teal-400 text-white" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-white">Your Email</span>
                            </label>
                            <input type="email" name="user_email" placeholder="Your Email" className="input bg-teal-950 border-2 border-teal-400 text-white" />
                        </div>
                        <label className="label">
                            <span className="label-text font-bold text-white">Your Message</span>
                        </label>
                        <textarea name="message" className="textarea textarea-accent font-bold bg-teal-950 border-2 border-teal-400 text-white" ></textarea>
                        <input className='btn border-0 border-[#48a5af] border-r-4 border-b-4 hover:bg-[#111827] hover:border-[#59dae9] text-teal-400 hover:text-[#59dae9] bg-slate-900 mt-4' type="submit" value="Send" />
                        <ToastContainer />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;