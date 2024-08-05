import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { linksHeader } from "@/lib/constants";
import { MdMenu } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import clsx from "clsx";

const Navbar = () => {
    const [dropdownMenu, setDropdownMenu] = useState(false);
    const [currentHash, setCurrentHash] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentHash(window.location.hash);
        };

        handleHashChange();
        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    const isActive = (href: string) => {
        return `${href}` === currentHash;
    };

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        event.preventDefault();
        const hash = `${href}`;

        if (window.location.pathname !== '/') {
            navigate('/');
        }

        setTimeout(() => {
            if (window.location.hash !== hash) {
                window.history.pushState(null, '', hash);
            }
            document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
            setCurrentHash(hash);
        }, 300);

        setDropdownMenu(false);
    };

    return (
        <div className="sticky top-0 z-10 flex mx-auto gap-4 justify-between items-center bg-black max-sm:px-2 w-full">
            <div className="py-4 px-10 flex mx-auto gap-4 justify-between items-center bg-black max-sm:px-2 w-full max-w-[1280px]">
                <a href="/" className="w-[300px]">
                    <img src="/assets/logoCMSVG.svg" alt="logo" width={250} height={100} />
                </a>

                <div className="w-full flex justify-center mx-auto gap-4 text-base-bold max-lg:hidden text-white text-sm">
                    {
                        linksHeader.map((link) => (
                            <a
                                key={link.text}
                                href={`#${link.href}`}
                                onClick={(e) => handleClick(e, link.href)}
                                className={clsx(
                                    "relative px-2 py-3 transition-all",
                                    {
                                        "bg-zinc-700 bg-opacity-50 text-white": isActive(link.href),
                                        "hover:bg-zinc-700 hover:bg-opacity-50": !isActive(link.href),
                                    }
                                )}
                            >
                                <span className="text-white">{link.text}</span>
                                {isActive(link.href) && (
                                    <span className="line-bt absolute left-1/2 transform -translate-x-1/2 bg-white w-3 h-0.5"></span>
                                )}
                            </a>
                        ))
                    }
                </div>

                <div className="ml-auto">
                    <MdMenu
                        size={30}
                        color="white"
                        className="cursor-pointer lg:hidden"
                        onClick={() => setDropdownMenu(!dropdownMenu)}
                    />
                    {dropdownMenu && (
                        <div className="absolute top-16 p-1 right-0 w-full flex flex-col justify-center items-center gap-4 border bg-black lg:hidden">
                            {
                                linksHeader.map((link) => (
                                    <a
                                        key={link.text}
                                        href={`#${link.href}`}
                                        onClick={(e) => handleClick(e, link.href)}
                                        className={clsx(
                                            "relative p-2 transition-all text-white text-sm",
                                            {
                                                "bg-zinc-700": isActive(link.href),
                                                "hover:bg-zinc-700": !isActive(link.href),
                                            }
                                        )}
                                    >
                                        {link.text}
                                        {isActive(link.href) && (
                                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white w-3 h-0.5"></span>
                                        )}
                                    </a>
                                ))
                            }
                        </div>
                    )}
                </div>

                <div className="w-auto flex justify-end items-center gap-1 p-2 border border-white">
                    <h1 className="text-white">PT</h1>
                    <FaChevronDown color="white" size={15} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;