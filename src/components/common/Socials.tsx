import * as Icons from "../ui/icons";
import LINKS from "@/constants/socialLinks";

const Socials = () => {
    return (
        <ul className="flex gap-8 mt-8 lg:mt-20">
            <li>
                <a href={LINKS.email} className="text-primary-grey transition-colors hover:text-teal-400">
                    <Icons.EmailIcon/>
                </a>
            </li>
            <li>
                <a href={LINKS.linkedin} target="_blank"
                   className="text-primary-grey transition-colors hover:text-teal-400">
                    <Icons.LinkedinIcon/>
                </a>
            </li>
            <li>
                <a href={LINKS.github} target="_blank"
                   className="text-primary-grey transition-colors hover:text-teal-400">
                    <Icons.GithubIcon/>
                </a>
            </li>
        </ul>
    );
};

export default Socials;
