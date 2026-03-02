import { motion } from "framer-motion";
import { cards } from "@/data/cards";

export default function AboutCarousel() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full px-5 bg-slate-50"
        >
            {/* title */}
            <h2 className=" text-primary md:text-xl font-semibold tracking-widest">
                KELAS <span className="text-cyan-400">TI A</span>
            </h2>

            {/* carousel */}
            <div className="relative w-full flex py-8 md:py-6 gap-5 md:gap-2 overflow-x-auto scrollbar-hiden">
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -12, scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative mx-3 md:mx-5 min-w-35 md:min-w-70 h-65 md:h-100 rounded-2xl overflow-hidden border border-cyan-500/40 bg-black group"
                    >
                        {/* image */}
                        <img
                            src={card.image}
                            alt={card.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* gradient overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

                        {/* glow border */}
                        <div className="absolute inset-0 rounded-2xl border border-cyan-400 opacity-0 group-hover:opacity-100 transition shadow-[0_0_25px_rgba(34,211,238,0.7)]" />

                        {/* content */}
                        <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-white font-bold tracking-widest">
                                {card.title}
                            </h3>
                            <div className="mt-2 h-0.5 w-12 bg-cyan-400" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
