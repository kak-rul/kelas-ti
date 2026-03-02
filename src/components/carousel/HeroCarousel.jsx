import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, scale } from "framer-motion";

import { slides } from "@/data/slides";


const variants = {
    enter: (dir) => ({
        x: dir > 0 ? -150 : 150,
        opacity: 0,
        scale: 1.05
    }),
    center: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeInOut" },
        scale: 1
    },
    exit: (dir) => ({
        x: dir > 0 ? 150 : -150,
        opacity: 0,
    }),
};

const fadeIn = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};



export default function HeroCarousel() {
    const [[index, direction], setIndex] = useState([0, 0]);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef(null);

    const paginate = (dir) => {
        setIndex(([prev]) => [
            (prev + dir + slides.length) % slides.length,
            dir,
        ]);
    };

    // autoplay + pause on hover
    useEffect(() => {
        if (isHovered) return;

        intervalRef.current = setInterval(() => paginate(1), 5000);
        return () => clearInterval(intervalRef.current);
    }, [isHovered, index]);

    const slide = slides[index];

    return (
        <motion.div
            className="relative w-full h-65 md:h-screen overflow-hidden scroll-mt-16"
            variants={fadeIn}
            initial="hidden"
            animate="show"
            whileInView="show"
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence custom={direction} mode="wait">
                <motion.div
                    key={index}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={undefined}
                    className="absolute inset-0 md:h-screen  w-full flex items-center justify-between px-20"
                >
                    <div className="absolute inset-0 -z-10">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="h-full w-full object-fill md:object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-slate-900/0" />
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* NAV BUTTONS */}
            <button
                onClick={() => paginate(-1)}
                className="absolute md:text-xl py-2 px-4 left-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-tranparent text-white  hover:bg-white/40 transition"
            >
                &#10094;
            </button>

            <button
                onClick={() => paginate(1)}
                className="absolute  md:text-xl py-2 px-4 right-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-transparent text-white hover:bg-white/40 transition"
            >
                &#10095;
            </button>
        </motion.div>
    );
}
