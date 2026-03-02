import { motion } from "framer-motion";
import AboutCarousel from "@/components/carousel/AboutCarousel";


export default function AboutSection() {
    return (
        <section
            id="tentang"
            className="relative  md:scroll-pt-16 bg-slate-50 pt-20 md:pt-24"
        >
            <div className="container mx-auto px-5">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-2 text-center"
                >
                    <h2 className="text-xl md:text-4xl font-extrabold text-slate-800">
                        Tentang <span className="text-cyan-400">TI A</span>
                    </h2>
                    {/* Content */}
                    <p className="mt-4 text-slate-600 text-justify leading-relaxed">
                        Teknik Informatika bukan hanya soal memperbaiki laptop atau membuat aplikasi. Ini adalah disiplin ilmu yang mengeksplorasi bagaimana data diolah, bagaimana sistem berinteraksi, dan bagaimana teknologi informasi dapat mempermudah kehidupan manusia melalui efisiensi algoritma dan keamanan sistem.
                    </p>
                    <p className="mt-4 text-slate-600 text-justify leading-relaxed">
                        Teknologi hanyalah alat, kitalah arsitek di balik setiap inovasi.
                    </p>
                    <p className="text-slate-600 mt-2 text-justify leading-relaxed">
                        Bukan tentang seberapa cepat kita mengetik, tapi seberapa tepat kita berpikir.
                    </p>
                </motion.div>
            </div>
            {/* Carousel */}
            <AboutCarousel />
        </section>
    );
}
