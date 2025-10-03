import Js from "../../../../assets/javascript.webp";
import React from "../../../../assets/react-original.svg";
import Nextjs from "../../../../assets/nextjs-original.svg";
import Gsap from "../../../../assets/Gsap.png";
import ShadCn from "../../../../assets/ShadCn.png";
import Firebase from "../../../../assets/firebase.png";
import Typescript from "../../../../assets/Typescript.png";
import NodeJs from "../../../../assets/nodejs-original.svg";
import Express from "../../../../assets/express-original.svg";
import Jwt from "../../../../assets/jwt.webp";
import PassportJs from "../../../../assets/passport-js.png";
import NextAuth from "../../../../assets/NextAuth-js.png";
import WebSocket from "../../../../assets/WebSocket.png";
import Mongoose from "../../../../assets/mongoose-original.svg";
import Prisma from "../../../../assets/prisma.png";
import Mongodb from "../../../../assets/mongodb-original.svg";
import Postgresql from "../../../../assets/postgresql.png";
import Redis from "../../../../assets/redis.png";
import GitHub from "../../../../assets/GitHub.png";
import Figma from "../../../../assets/Figma.png";
import Git from "../../../../assets/git-original.svg";
import postman from "../../../../assets/postman.png";
import SectionHeading from "@/components/shared/SectionHeading";
import Image from "next/image";
import Container from "@/components/Container";


const Skills = () => {
    return (
        <section id="skills">
            <Container>
            <SectionHeading bgHeading="Skill" Heading="Skills I have honed"></SectionHeading>

            <div className="space-y-20">
                <div className="flex">
                    <div>
                        <h3 className="font-semibold text-primaryColor border-b border-primaryColor border-dashed">FRONTEND</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 flex-1">
                        <div className="flex items-center flex-col">
                            <Image src={React} width={40} height={40} alt="banner image" className="mx-auto" />
                            <h4>React</h4>
                        </div>{/* React */}
                        <div className="flex items-center flex-col">
                            <Image src={Nextjs} width={40} height={40} alt="banner image" className="mx-auto" />
                            <h4>Next Js</h4>
                        </div>{/* Next Js */}
                        <div className="flex items-center flex-col">
                            <Image src={Firebase} width={40} height={40} alt="banner image" className="mx-auto" />
                            <h4>Firebase</h4>
                        </div>{/* Firebase */}
                        <div className="flex items-center flex-col">
                            <Image src={NextAuth} width={40} height={40} alt="banner image" className="mx-auto" />
                            <h4>Next Auth</h4>
                        </div>{/* Next Auth */}
                        <div className="flex items-center flex-col">
                            <Image src={ShadCn} width={40} height={40} alt="banner image" className="mx-auto" />
                            <h4>ShadCn</h4>
                        </div>{/* ShadCn */}
                        <div className="flex items-center flex-col">
                            <Image src={Gsap} width={40} height={40} alt="banner image" className="mx-auto" />
                            <h4>Gsap</h4>
                        </div>{/* Gsap */}
                        <div className="flex items-center flex-col">
                            <Image src={Js} width={40} height={40} alt="banner image" className="mx-auto" />
                            <h4>JavaScript</h4>
                        </div>{/* Js */}
                        <div className="flex items-center flex-col">
                            <Image src={Typescript} width={40} height={40} alt="banner image" className="mx-auto" />
                            <h4>Typescript</h4>
                        </div>{/* Typescript */}
                    </div>
                </div>{/* FRONTEND */}

                <div className="flex">
                    <div>
                        <h3 className="font-semibold text-primaryColor border-b border-primaryColor border-dashed">BACKEND</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 flex-1">
                        <div className="flex items-center flex-col">
                            <Image src={NodeJs} width={40} height={40} alt="banner image" className="mx-auto" />
                            <h4>NodeJs</h4>
                        </div>{/* NodeJs */}
                        <div className="flex items-center flex-col">
                            <Image src={Express} width={40} height={40} alt="banner image" className="mx-auto" />
                            <h4>Express</h4>
                        </div>{/* Express */}
                        <div className="flex items-center flex-col">
                            <Image src={Mongoose} width={40} height={40} alt="banner image" className="mx-auto" />
                            <h4>Mongoose</h4>
                        </div>{/* Mongoose */}
                        <div className="flex items-center flex-col">
                            <Image src={Prisma} width={40} height={40} alt="banner image" className="mx-auto" />
                            <h4>Prisma</h4>
                        </div>{/* Prisma */}
                        <div className="flex items-center flex-col">
                            <Image src={Jwt} width={40} height={40} alt="banner image" className="mx-auto" />
                            <h4>JWT</h4>
                        </div>{/* JWT */}
                        <div className="flex items-center flex-col">
                            <Image src={PassportJs} width={40} height={40} alt="banner image" className="mx-auto" />
                            <h4>Passport Js</h4>
                        </div>{/* PassportJs */}
                        <div className="flex items-center flex-col">
                            <Image src={WebSocket} width={40} height={40} alt="banner image" className="mx-auto" />
                            <h4>WebSocket</h4>
                        </div>{/* Js */}
                    </div>
                </div>{/* BACKEND */}
                <div className="flex">
                    <div>
                        <h3 className="font-semibold text-primaryColor border-b border-primaryColor border-dashed">DATABASE</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 flex-1">
                        <div className="flex items-center flex-col">
                            <Image src={Mongodb} width={40} height={40} alt="banner image" className="mx-auto" />
                            <h4>MongoDB</h4>
                        </div>{/* Mongodb */}

                        <div className="flex items-center flex-col">
                            <Image src={Postgresql} width={40} height={40} alt="banner image" className="mx-auto" />
                            <h4>PostgreSQL</h4>
                        </div>{/* Postgresql */}
                        <div className="flex items-center flex-col">
                            <Image src={Redis} width={40} height={40} alt="banner image" className="mx-auto" />
                            <h4>Redis</h4>
                        </div>{/* Postgresql */}
                    </div>
                </div>{/* Database */}
                <div className="flex">
                    <div>
                        <h3 className="font-semibold text-primaryColor border-b border-primaryColor border-dashed">TOOLS</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 flex-1">
                        <div className="flex items-center flex-col">
                            <Image src={Git} width={40} height={40} alt="banner image" className="mx-auto" />
                            <h4>Git</h4>
                        </div>{/* Git */}
                        <div className="flex items-center flex-col">
                            <Image src={Figma} width={40} height={40} alt="banner image" className="mx-auto" />
                            <h4>Figma</h4>
                        </div>{/* Figma */}
                        <div className="flex items-center flex-col">
                            <Image src={postman} width={40} height={40} alt="banner image" className="mx-auto" />
                            <h4>Postman</h4>
                        </div>{/* postman */}
                        <div className="flex items-center flex-col">
                            <Image src={GitHub} width={40} height={40} alt="banner image" className="mx-auto" />
                            <h4>GitHub</h4>
                        </div>{/* GitHub */}
                    </div>
                </div>{/* Tools */}
            </div>
            </Container>
        </section>
    );
};

export default Skills;