/* eslint-disable react/no-unescaped-entities */
"use client"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
// react icons
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import SectionHeading from '@/components/shared/SectionHeading';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;

        emailjs
            .sendForm('service_z2rovd3', 'template_an7ggib', form.current, {
                publicKey: 'blblvPu2wyHVCqciu',
            })
            .then(
                () => {
                    console.log('Message Send Successfully!');
                    form.current?.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section className="container mx-auto px-5" id="contact">
            <SectionHeading bgHeading="Contact" Heading="Let's have a few words"></SectionHeading>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-9">

                {/* form area */}
                <form className="w-full" ref={form} onSubmit={sendEmail}>
                    <div className="flex flex-col gap-1 w-full">
                        <label className="relative">
                            <input type="email"
                                name="from_email"
                                className="peer border-secondary border outline-none pl-36 pr-4 py-3 w-full focus:border-primary transition-s duration-300"
                            />
                            <span
                                className="absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-primary text-gray-400 peer-focus:px-1 transition-all duration-300 ">
                                Email Address
                            </span>
                        </label>
                    </div>
                    <div className="flex flex-col gap-1 w-full mt-[20px]">
                        <label className="relative w-full">
                            <textarea
                                name="message"
                                className="peer min-h-[200px] border-secondary border outline-none pl-36 pr-4 py-3 w-full focus:border-primary transition-s duration-300"
                            ></textarea>
                            <span
                                className="absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-primary text-gray-400 peer-focus:px-1 transition-all duration-300 ">
                                Write Message
                            </span>
                        </label>
                    </div>
                    <button type="submit" className={`py-3 px-4 text-white text-lg font-semibold bg-primary border  outline-none mt-3 w-full hover:drop-shadow-lg hover:bg-secondary duration-500`}>Submit</button>
                </form>

                {/*  informations  */}
                <aside className="w-full bg-primary flex flex-col justify-between p-6">

                    <div>
                        <h1 className="text-4xl font-semibold font-monts leading-relaxed text-secondary">Contact
                            Information</h1>
                        <p className="mt-1 mb-8 text-white leading-relaxed">Let's start a conversation! Reach out for any questions or to discuss how we can collaborate. I'm here to help and eager to connect. Feel free to chat anytime!</p>
                    </div>

                    <div className="flex flex-col gap-4 text-secondary font-semibold">
                        <p className="flex items-center gap-2">
                            <IoLocationOutline size={18} color="#fff" />
                            East Alipur, Faridpur, Bangladesh
                        </p>
                        <p className="flex items-center gap-2">
                            <MdOutlineEmail size={18} color="#fff" />
                            sharifshehabuzzaman@gmail.com
                        </p>
                        <p className="flex items-center gap-2">
                            <MdOutlineCall size={18} color="#fff" />
                            +8801709370961
                        </p>
                        <p className="flex items-center break-all gap-2">
                            <FaWhatsapp size={18} color="#fff" />
                            +8801709370961
                        </p>
                    </div>
                </aside>

            </div>

        </section>
    );
};

export default Contact;