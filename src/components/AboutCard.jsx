import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cards } from "@/data/cards";

const ITEMS_PER_PAGE = 4; // Ubah jumlah kartu per halaman di sini

export default function AboutCard() {
    const [currentPage, setCurrentPage] = useState(1);

    // Kalkulasi data pagination
    const totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentCards = cards.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full px-5 bg-slate-50 py-6"
        >
            {/* Title */}
            <h2 className="text-primary md:text-xl font-semibold tracking-widest">
                Member <span className="text-cyan-400">TI A</span>
            </h2>

            {/* Grid Container */}
            <div className="relative w-full min-h-125">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-4 py-8 md:py-6 gap-4"
                    >
                        {currentCards.map((card, i) => (
                            <motion.div
                                key={card.id || i}
                                whileHover={{ y: -12, scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative min-w-35 md:min-w-70 h-65 md:h-100 rounded-2xl overflow-hidden border border-cyan-500/40 bg-black group"
                            >
                                {/* Image */}
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

                                {/* Glow Border */}
                                <div className="absolute inset-0 rounded-2xl border border-cyan-400 opacity-0 group-hover:opacity-100 transition shadow-[0_0_25px_rgba(34,211,238,0.7)]" />

                                {/* Content */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-white font-bold tracking-widest">
                                        {card.title}
                                    </h3>
                                    <div className="mt-2 h-0.5 w-12 bg-cyan-400" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation / Pagination */}
            {totalPages > 1 && (
                <div className="mt-4 flex items-center md:justify-end justify-center gap-2">
                    {/* Tombol Prev */}
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 text-xs md:text-sm font-medium rounded-lg border border-cyan-500/30 text-slate-700 hover:bg-cyan-500/10 disabled:opacity-40 disabled:cursor-not-allowed transition"
                    >
                        Prev
                    </button>

                    {/* Angka Halaman */}
                    <div className="flex gap-1">
                        {Array.from({ length: totalPages }, (_, index) => {
                            const pageNumber = index + 1;
                            const isActive = currentPage === pageNumber;
                            return (
                                <button
                                    key={pageNumber}
                                    onClick={() => handlePageChange(pageNumber)}
                                    className={`w-8 h-8 text-xs  md:text-sm font-medium rounded-lg transition ${isActive
                                        ? "bg-cyan-400 text-black font-bold shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                                        : "text-slate-600 hover:bg-slate-200"
                                        }`}
                                >
                                    {pageNumber}
                                </button>
                            );
                        })}
                    </div>

                    {/* Tombol Next */}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 text-xs  md:text-sm font-medium rounded-lg border border-cyan-500/30 text-slate-700 hover:bg-cyan-500/10 disabled:opacity-40 disabled:cursor-not-allowed transition"
                    >
                        Next
                    </button>
                </div>
            )}
        </motion.div>
    );
}