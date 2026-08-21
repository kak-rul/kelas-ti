import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-gray-300 py-10 border-t border-blue-900/50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    {/* Kolom 1: Branding */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-blue-400 font-mono text-xl font-bold">
                            <FontAwesomeIcon icon={faTerminal} />
                            <span>Dept. IT / 2026</span>
                        </div>
                        <p className="text-sm leading-relaxed opacity-80 italic">
                            "Logic is the beginning of wisdom, not the end. Kami mengodekan solusi, bukan sekadar janji."
                        </p>
                    </div>

                    {/* Kolom 2: Tautan Cepat */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold uppercase tracking-wider text-sm">Main Stack</h4>
                        <ul className="grid grid-cols-2 gap-2 text-sm font-mono opacity-70">
                            <li className="hover:text-blue-400 cursor-default"># React.js</li>
                            <li className="hover:text-blue-400 cursor-default"># Tailwind</li>
                            <li className="hover:text-blue-400 cursor-default"># Node.js</li>
                            <li className="hover:text-blue-400 cursor-default"># Git_Flow</li>
                        </ul>
                    </div>

                    {/* Kolom 3: Social & Connect */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold uppercase tracking-wider text-sm">Connect</h4>
                        <div className="flex gap-6">
                            <a href="/" className="p-2 md:text-xl bg-gray-800  rounded-full hover:bg-green-400 transition-colors">
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </a>
                            <a href="https://www.instagram.com/informatix.x?igsi=MXUzdWhmYXRndGtwbw==" target="_blank" className="p-2 md:text-xl bg-gray-800 rounded-full hover:bg-pink-500 transition-colors">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="/" className="p-2 md:text-xl bg-gray-800 rounded-full hover:bg-blue-400 transition-colors">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="/" className="p-2 md:text-xl bg-gray-800 rounded-full hover:bg-slate-900 transition-colors">
                                <FontAwesomeIcon icon={faTiktok} />
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-800 my-8" />

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs font-mono opacity-60 space-y-4 md:space-y-0">
                    <div className="text-center md:text-left">
                        &copy; {currentYear} Informatics Engineering Class. All rights reserved.
                    </div>
                    <div className="flex items-center gap-2">
                        <span>Powered by</span>
                        <FontAwesomeIcon icon={faCoffee} className="text-amber-700" />
                        <span>& caffeine</span>
                        <span className="ml-4 text-green-500 font-bold">Status: 200 OK</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
