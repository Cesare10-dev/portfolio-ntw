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
  const [darkMode, setDarkMode] = useState(true);

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
          <div className="space-y-6">
            <h3 className="text-teal-600 text-3xl font-semibold dark:text-teal-400 ">
              About Me
            </h3>
            <p className="text-lg font-medium leading-8 text-gray-800 dark:text-gray-200">
              I am a Frontend Developer, I started my path learning Html, Css
              and JavaScript and then React.js.
              <br />
              To continue my growth path I chose
              <span className="text-teal-500 dark:text-teal-400">
                {" "}
                Next.js{" "}
              </span>
              because one of my goals is to become a Fullstack Developer then
              create and manage all the features of a complete website. <br />I
              chose React.js also because for
              <span className="text-teal-500 dark:text-teal-400">
                {" "}
                React Native
              </span>
              , therefore a language not much different with which to create
              apps for Android and iOS.
            </p>
            <p className="text-lg font-semibold leading-8 text-gray-800 dark:text-gray-200">
              Now I am looking for a new challenge to continue my professional
              and personal growth. I am looking for a company that works on a
              big project, in the employees and always looking to improve. I
              love working in teams, one of the best ways to grow and learn.
            </p>
          </div>
          <div className="lg:flex gap-10 font-medium text-white dark:text-gray-800">
            <div className="h-[530px] bg-gray-900 flex flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <BiCodeAlt fontSize={80} color="orange" />
              <h3 className="pt-8 pb-2 text-lg">The Basics</h3>
              <p className="py-2 text-center">
                I learned how important it is to learn the basics well and then
                to improve.
              </p>
              <h4 className="py-4 text-teal-600 text-lg mt-4">
                Frontend Skills
              </h4>
              <p className="py-1">Html</p>
              <p className="py-1">Css</p>
              <p className="py-1">JavaScript</p>
            </div>
            <div className="h-[530px] bg-gray-900 flex flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <BiLaptop fontSize={80} color="#5585b5" />
              <h3 className="text-lg pt-8 pb-2">Coding</h3>
              <p className="py-2 text-center">
                I'm improving with Next.js and others to become a Fullstack
              </p>
              <h4 className="py-4 text-teal-600 text-lg mt-4">My Tech Stack</h4>
              <p className="py-1">React.js</p>
              <p className="py-1">Tailwind Css</p>
              <p className="py-1">Next.js</p>
              <p className="py-1">TypeScript</p>
            </div>
            <div className="h-[530px] bg-gray-800 flex flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <TfiThumbUp fontSize={80} />
              <h3 className="text-lg font-medium pt-8 pb-2">More Skills</h3>
              <p className="py-2 text-center">
                There are many useful tools for a Developer and I try to be
                always updated
              </p>
              <h4 className="py-4 text-teal-600 text-lg mt-4">Tools I Use</h4>
              <p className="py-1">Firebase</p>
              <p className="py-1">MongoDB</p>
              <p className="py-1">Figma</p>
              <p className="py-1">VsCode</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="space-y-6">
            <h3 className="text-teal-600 text-3xl font-semibold dark:text-white ">
              Portfolio
            </h3>
            <p className="text-lg font-medium leading-8 text-gray-800 dark:text-gray-200">
              List of my<span className="text-teal-500"> Skills </span>:
              <br /> Html, Css, JavaScript, React.js, Sass, Tailwind Css, Styled
              Component, Next.js, React Native, TypeScript, Firebase, MongoDB...
              <br />
              <br />
              Here are some of my projects, with the languages and tools used.
            </p>
            <p className="text-lg font-semibold leading-8 text-gray-800 dark:text-gray-200">
              I am currently working on new projects so I will update my
              portfolio.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 group/{item}">
              <Link href="https://github-clone-rt.vercel.app/" target="_blank">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={githubclone}
                />
                <h2 className="invisible group-hover/{item}:visible p-1 text-xl text-teal-500 font-medium">
                  Built with React.js, Sass and ReactRouterDOM
                </h2>
              </Link>
            </div>

            <div className="basis-1/3 flex-1 group/{item}">
              <Link
                href="https://portfolio-htmlcssyt.vercel.app/"
                target="_blank"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={portfolio}
                />
                <h2 className="invisible group-hover/{item}:visible p-1 text-xl text-teal-500 font-medium">
                  Built with Html and Css
                </h2>
              </Link>
            </div>
            <div className="basis-1/3 flex-1 group/{item}">
              <Link
                href="https://healthyfoods-htmlcssjs.vercel.app"
                target="_blank"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={healthyfoods}
                />
                <h2 className="invisible group-hover/{item}:visible p-1 text-xl text-teal-500 font-medium">
                  Built with Html, Css and JavaScript
                </h2>
              </Link>
            </div>
            <div className="basis-1/3 flex-1 group/{item}">
              <Link href="https://udmclone-rtw.vercel.app/" target="_blank">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={udemyclone}
                />
                <h2 className="invisible group-hover/{item}:visible p-1 text-xl text-teal-500 font-medium">
                  Built with React.js and Tailwind Css
                </h2>
              </Link>
            </div>
            <div className="basis-1/3 flex-1 group/{item}">
              <Link
                href="https://github.com/Cesare10-dev/tictactoe-react"
                target="_blank"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={tictactoe}
                />
                <h2 className="invisible group-hover/{item}:visible p-1 text-xl text-teal-500 font-medium">
                  Built with Html, Css and JavaScript
                </h2>
              </Link>
            </div>
            <div className="basis-1/3 flex-1 group/{item}">
              <Link href="https://dropdown-rtw.vercel.app" target="_blank">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={dropdown}
                />
                <h2 className="invisible group-hover/{item}:visible p-1 text-xl text-teal-500 font-medium">
                  Built with React.js and Tailwind Css
                </h2>
              </Link>
            </div>
            <div className="basis-1/3 flex-1 group/{item}">
              <Link href="https://money-ochre.vercel.app" target="_blank">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  src={money}
                />
                <h2 className="invisible group-hover/{item}:visible p-2 text-teal-500 text-xl font-medium">
                  Built with Next.js and Tailwind Css
                </h2>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
