import About from "@/components/homepage/About";
import ItemList from "@/components/homepage/ItemList";
import workExperienceDoc from "@/constants/workExperience.json";
import projects from "@/constants/projects.json";

export default function Home() {
    return (
        <>
            <About/>
            <ItemList 
                type="experience" 
                title="Work Experience" 
                items={workExperienceDoc} 
            />
            <ItemList 
                type="projects"
                title="Projects" 
                items={projects} 
            />
        </>
    )
}
