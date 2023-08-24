"use client";

import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { BiCodeAlt, BiLaptop } from "react-icons/bi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { TfiThumbUp } from "react-icons/tfi";
import Image from "next/image";
import portfolio from "@/public/img/portfolio.png";
import healthyfoods from "@/public/img/healthyfoods.png";
import tictactoe from "@/public/img/tictactoe.png";
import udemyclone from "@/public/img/udemyclone.png";
import amazonclone from "@/public/img/amazonclone.png";
import dropdown from "@/public/img/dropdown.png";
import money from "@/public/img/money.png";
import githubclone from "@/public/img/githubclone.png";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-3xl font-bold text-red-500">Welcome</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://github.com/Cesare10-dev"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10 space-y-5">
            <h2 className="text-5xl text-teal-600 font-semibold dark:text-teal-400 md:text-6xl">
              Hi I'm Cesare
            </h2>
            <h3 className="text-2xl font-semibold dark:text-white md:text-3xl">
              React.js Developer.
            </h3>
            <p className="text-md font-semibold leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Frontend studying to become a FullStack. <br /> I am looking for a
              new adventure to continue my path of personal and professional
              growth.
            </p>
            <div className="text-5xl flex justify-center py-2 gap-16 text-gray-600 dark:text-gray-400">
              <Link href="https://github.com/Cesare10-dev" target="_blank">
                <AiFillGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/cesaredev/"
                target="_blank"
              >
                <AiFillLinkedin color="#0966C2" />
              </Link>
              <Link href="https://github.com/Cesare10-dev" target="_blank">
                <AiFillYoutube color="#FF0100" />
              </Link>
            </div>
            {/* <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={img} layout="fill" objectFit="cover" />
            </div> */}
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl font-semibold py-1 dark:text-white ">
              Who I am
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10 font-medium">
            <div className="h-[530px] flex flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <BiCodeAlt fontSize={80} color="orange" />
              <h3 className="pt-8 pb-2 text-lg">The Basics</h3>
              <p className="py-2 text-center">
                I learned how important is to learn the basics
              </p>
              <h4 className="py-4 text-teal-600">Frontend Skills</h4>
              <p className="text-gray-800 py-1">Html</p>
              <p className="text-gray-800 py-1">Css</p>
              <p className="text-gray-800 py-1">JavaScript</p>
            </div>
            <div className="h-[530px] flex flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <BiLaptop fontSize={80} color="#5585b5" />
              <h3 className="text-lg pt-8 pb-2 ">Coding</h3>
              <p className="py-2 text-center">
                I'm improving with Next.js and others to become a Fullstack
              </p>
              <h4 className="py-4 text-teal-600">My tech stack</h4>
              <p className="text-gray-800 py-1">React.js</p>
              <p className="text-gray-800 py-1">Tailwind Css</p>
              <p className="text-gray-800 py-1">Next.js</p>
              <p className="text-gray-800 py-1">TypeScript</p>
            </div>
            <div className="h-[530px] flex flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <TfiThumbUp fontSize={80} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2 text-center">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={portfolio}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={healthyfoods}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={udemyclone}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={tictactoe}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={dropdown}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                src={money}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
