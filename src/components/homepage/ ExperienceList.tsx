import workExperienceDoc from "@/constants/workExperience.json";
import ExperienceItem from "@/components/common/ExperienceItem";
import projects from "@/constants/projects.json";
import { GithubIcon } from "@/components/ui/icons";

const ExperienceList = () => {
  return (
    <div className="scroll-mt-24 mt-10 lg:mt-24" id="experience">
      <h3
        className="
          z-10
          text-md sm:text-xl mb-6 sm:mb-10 uppercase font-bold lg:font-normal
          sticky lg:static top-0 -mx-6 sm:-mx-12 lg:mx-0 w-screen lg:w-auto bg-primary-darkBlue lg:bg-transparent px-6 sm:px-12 lg:px-0 py-3 lg:py-0 backdrop-blur lg:backdrop-blur-none bg-opacity-60 lg:bg-opacity-0
        "
      >
        Work experience
      </h3>
      <div className="flex flex-col gap-4 group/list">
        {workExperienceDoc.map((item) => (
          <ExperienceItem
            key={item.id}
            years={item.years}
            role={item.role}
            company={item.company}
            link={item.link}
            description={item.description}
            tags={item.tags}
          />
        ))}
      </div>
      {/* Projects Section */}
      <h3 className="text-md sm:text-xl mt-12 mb-6 sm:mb-10 uppercase font-bold lg:font-normal">Projects</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-lg overflow-hidden shadow-lg bg-slate-900 border border-slate-800 flex flex-col hover:shadow-xl transition group"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="w-full aspect-[16/9] bg-slate-800 flex items-center justify-center overflow-hidden">
                <img
                  src={project.previewImage}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:opacity-90 transition"
                  loading="lazy"
                />
              </div>
            </a>
            <div className="p-3 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold hover:text-teal-400 transition"
                >
                  {project.name}
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-grey-normal hover:text-teal-400 transition-colors"
                    title="View on GitHub"
                  >
                    <GithubIcon />
                  </a>
                )}
              </div>
              <p className="text-xs text-grey-normal mb-2 flex-1 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-1 mt-auto">
                {project.tags.map((tag: string, idx: number) => (
                  <span
                    key={tag + idx}
                    className="text-[10px] bg-slate-800 text-slate-300 rounded px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;
