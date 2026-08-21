import { motion } from "framer-motion";
import HeroCarousel from "@/components/carousel/HeroCarousel";


export default function Gallery() {
    return (
        <section id="galeri" translate="no" className="relative pt-20 md:pt-24 md:scroll-pt-16 w-full h-full flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-5 text-center w-full px-5"
            >
                <h2 className="text-xl md:text-4xl font-extrabold text-slate-800">
                    Galeri
                </h2>
                <p className="mt-4 text-sm md:text-lg text-gray-600">
                    Menyelami momen berharga melalui lensa kami.
                </p>
            </motion.div>

            <HeroCarousel />
        </section>
    )
}
