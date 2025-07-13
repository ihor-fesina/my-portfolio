"use client";

import {useEffect, useState} from "react";

const SECTIONS = ["about", "experience"] as const;
type SectionType = typeof SECTIONS[number];
const Navigation = () => {
        const [active, setActive] = useState<SectionType>(SECTIONS[0]);

        useEffect(() => {
            const handleScroll = () => {
                const halfOfScreen = window.innerHeight / 2;
                let newActiveSection = active;

                SECTIONS.forEach((section) => {
                    const element = document.getElementById(section);
                    if (!element) return;
                    const {top} = element.getBoundingClientRect();

                    if (top >= 0 && top < halfOfScreen) {
                        newActiveSection = section;
                    }
                });

                setActive(newActiveSection);
            };

            window.addEventListener("scroll", handleScroll);
            handleScroll();

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }, [active]);

    const handleClick = (section: SectionType): void => {
        setActive(section);
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    };
        return (
            <ul className="flex mt-10 lg:mt-20 flex-col items-start gap-2 lg:gap-6">
                {SECTIONS.map((section) => (
                    <li
                        key={section}
                        className="relative text-sm uppercase cursor-pointer transition ease-in-out"
                        onClick={() => handleClick(section)}
                    >
                        <a
                            href={`#${section}`}
                            className={`group/link flex items-center transition-transform ease-in-out hover:!text-teal-400 ${
                                active === section ? "text-grey-light" : "text-grey-normal"
                            }`}
                        >
            <span
                className={`group-hover/link:!bg-teal-400 absolute left-0 top-1/2 transform -translate-y-1/2 h-[2px] transition-all ease-in-out  ${
                    active === section
                        ? "w-12 bg-grey-light"
                        : "w-6 bg-grey-normal"
                }`}
            />
                            <p
                                className={`ml-8 transition-all ease-in-out font-bold ${
                                    active === section ? "translate-x-6" : ""
                                }`}
                            >
                                {section}
                            </p>
                        </a>
                    </li>
                ))}
            </ul>
        );
    };

export default Navigation;
