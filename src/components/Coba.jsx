import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
    { title: "Slide 1", img: "/img/1.jpg" },
    { title: "Slide 2", img: "/img/2.jpg" },
    { title: "Slide 3", img: "/img/3.jpg" },
]

export default function Carousel() {
    const [index, setIndex] = useState(0)

    const next = () => setIndex((index + 1) % slides.length)
    const prev = () => setIndex((index - 1 + slides.length) % slides.length)

    return (
        <div className="relative w-full max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -80 }}
                    transition={{ duration: 0.4 }}
                >
                    <Card className="overflow-hidden rounded-2xl shadow-lg">
                        <CardContent className="p-0">
                            <img
                                src={slides[index].img}
                                className="w-full h-87.5 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold">
                                    {slides[index].title}
                                </h3>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute inset-y-0 left-0 flex items-center">
                <Button size="icon" variant="ghost" onClick={prev}>
                    <ChevronLeft />
                </Button>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center">
                <Button size="icon" variant="ghost" onClick={next}>
                    <ChevronRight />
                </Button>
            </div>
        </div>
    )
}
