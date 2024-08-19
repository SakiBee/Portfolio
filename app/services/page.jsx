"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {BsArrowDownRight } from "react-icons/bs";


const services = [
  {
    num: "01",
    title: "Your CP Trainer",
    description: "Looking for personalized training to boost your competitive programming skills? I provide tailored training sessions that focus on your individual needs, helping you master the concepts and techniques required to succeed in the competitive programming world.",
    href: ""
  },
  {
    num: "02",
    title: "Competitive Programmer",
    description: "As a seasoned competitive programmer, I offer my expertise to help you excel in coding competitions. With a deep understanding of algorithms and data structures, I can help you improve your problem-solving skills and achieve higher rankings.",
    href: ""
  },
  {
    num: "03",
    title: "Web Development",
    description: "I specialize in creating stunning and responsive websites that provide an exceptional user experience. From front-end design to back-end development, I ensure that every aspect of your website is crafted with care and attention to detail.",
    href: ""
  },
  {
    num: "04",
    title: "Teaching",
    description: "As a seasoned competitive programmer, I offer my expertise to help you excel in coding competitions. With a deep understanding of algorithms and data structures, I can help you improve your problem-solving skills and achieve higher rankings.",
    href: ""
  },
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: {delay: 1, duration: 0.4, ease: "easeInOut"},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex flex-1 flex-col justify-center gap-6 group">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                  <Link href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  > <BsArrowDownRight className="text-primary text-3xl"/> </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <divc className="border-b border-white/20 w-full"></divc>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services