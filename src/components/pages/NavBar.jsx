import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { navLinks } from "@/data/navLingks";

export default function NavBar() {
    const [active, setActive] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6,
            }
        );

        navLinks.forEach((item) => {
            const section = document.getElementById(item.id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const linkClass = (id) =>
        `py-2 px-3 rounded-md text-sm font-medium transition
        ${active === id
            ? "bg-slate-300 text-primary"
            : "hover:bg-slate-200 hover:text-primary"
        }`;

    return (
        <nav className={`sticky top-0 z-50 w-full  bg-background ${scrolled ? "bg-transparent backdrop-blur-sm transition-all duration-300 shadow-md" : ""}`}>
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <h1 className="text-lg font-bold">TI A 2025</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6">
                    {navLinks.map((item) => (
                        <li key={item.id}>
                            <a href={`#${item.id}`} className={linkClass(item.id)}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right Actions */}
                <div className="flex items-center gap-2">
                    <Button size="sm">Login</Button>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end">
                                {navLinks.map((item) => (
                                    <DropdownMenuItem key={item.id} asChild>
                                        <a
                                            href={`#${item.id}`}
                                            className={`w-full ${active === item.id
                                                ? "font-semibold text-primary"
                                                : ""
                                                }`}
                                        >
                                            {item.label}
                                        </a>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </nav>
    );
}
