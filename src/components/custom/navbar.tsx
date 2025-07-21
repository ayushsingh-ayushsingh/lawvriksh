import { Search, Bell, Menu } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
    const navLinks = [
        { label: "Home", url: "https://www.github.com/ayushsingh-ayushsingh" },
        { label: "About Us", url: "https://www.github.com/ayushsingh-ayushsingh" },
        { label: "Contact Us", url: "https://www.github.com/ayushsingh-ayushsingh" },
    ];

    return (
        <nav className="w-full px-4 py-2 md:px-6 md:py-4 bg-[#FFFAEA]">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between relative">
                    <div className="flex-shrink-0 z-10 cursor-pointer">
                        <img
                            src="/logo.png"
                            alt="LawVriksh Logo"
                            className="h-10 md:h-12"
                        />
                    </div>
                    <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 text-base md:text-xl">
                        {navLinks.map(({ label, url }) => (
                            <li key={label}>
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[url('/overlay.jpg')] bg-cover bg-center bg-clip-text text-transparent cursor-pointer"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-3 md:gap-4 z-10">
                        <div className="md:hidden">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className="h-10 w-10 rounded-full flex items-center justify-center relative overflow-hidden">
                                        <img
                                            src="/overlay.jpg"
                                            className="absolute inset-0 w-full h-full object-cover"
                                            alt="shimmer"
                                        />
                                        <Menu className="w-5 h-5 text-black relative z-10" />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align="center"
                                    className="w-full bg-[#FFFAEA] m-2 rounded-2xl shadow-none"
                                >
                                    {navLinks.map(({ label, url }) => (
                                        <DropdownMenuItem key={label}>
                                            <a
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full"
                                            >
                                                {label}
                                            </a>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        {[Search, Bell].map((Icon, index) => (
                            <div
                                key={index}
                                className="h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center relative overflow-hidden cursor-pointer"
                            >
                                <img
                                    src="/overlay.jpg"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    alt="shimmer"
                                />
                                <Icon className="w-5 h-5 md:w-6 md:h-6 text-black relative z-10" />
                            </div>
                        ))}
                        <img
                            src="/avatar.png"
                            alt="Avatar Navbar"
                            className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
