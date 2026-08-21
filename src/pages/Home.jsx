import { fotoBeranda } from "@/data/slides";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
    return (
        <section id="home" className="relative h-65 w-full md:h-screen scroll-mt-16 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-between px-5">
                {/* text deskripsi */}
                <div className="relative z-10 -top-5 md:top-0 max-w-xl text-white">
                    <h1 className="text-xl md:text-4xl font-extrabold leading-tight mb-4">
                        Selamat Datang di prodi TI A 2025
                    </h1>
                    <p className="mt-6 text-sm md:text-lg text-white">
                        Di sini, logika bukan sekadar aturan, melainkan bahasa untuk menciptakan masa depan.
                    </p>
                    <div className="flex gap-2">
                        <a href="/" className="p-2 md:text-xl  rounded-full hover:bg-green-400 transition-colors">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                        <a href="https://www.instagram.com/informatix.x?igsi=MXUzdWhmYXRndGtwbw==" target="_blank" className="p-2 md:text-xl  rounded-full hover:bg-pink-500 transition-colors">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="/" className="p-2 md:text-xl 0 rounded-full hover:bg-blue-400 transition-colors">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="/" className="p-2 md:text-xl 0 rounded-full hover:bg-slate-900 transition-colors">
                            <FontAwesomeIcon icon={faTiktok} />
                        </a>
                    </div>
                    <button>
                        < a href="#tentang" className="mt-2 md:mt-10 text-sm md:text-lg inline-block rounded-md bg-cyan-400 px-4 py-2 font-medium text-white hover:bg-primary/60">
                            selengkapnya
                        </a>
                    </button>
                </div>
                {/* foto */}
                <div className="absolute inset-0 -z-10">
                    <figure className="h-full w-full">
                        <img
                            src={fotoBeranda.image}
                            alt={fotoBeranda.alt}
                            className="h-full w-full object-fill md:object-cover object-center"
                        />
                    </figure>
                    {/* overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                </div>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-slate-50 to-slate-50/0" />
        </section>
    )
}
