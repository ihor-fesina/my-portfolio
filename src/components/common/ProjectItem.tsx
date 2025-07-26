import React from "react";
import { GithubIcon } from "../ui/icons";
import ArrowIcon from "../ui/icons/ArrowIcon";
import Tag from "../ui/Tag";
import { Project } from "@/types";
import { replaceSpaces } from "@/utils/formatTags";

interface IProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<IProjectItemProps> = ({ project }) => {
  return (
    <div
      className="
        group
        lg:hover:!opacity-100 lg:group-hover/list:opacity-50
        rounded-lg relative w-[calc(100%+48px)] px-6 py-4 -inset-x-6
        transition ease-in-out
        hover:bg-slate-800/50
        hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
        hover:drop-shadow-lg
      "
    >
      <div className="flex flex-col sm:flex-row">
        <div className="mt-4 sm:mt-0 sm:mr-8 w-full sm:w-48 flex-shrink-0">
          <div className="aspect-[16/9] bg-slate-800 rounded-lg overflow-hidden">
            <img
              src={project.previewImage}
              alt={project.name}
              className="w-full h-full object-cover group-hover:opacity-90 transition"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="
                group/title font-bold transition ease-in-out
                hover:text-teal-400
              "
            >
              {project.name}
              <ArrowIcon
                classNames="
                  relative bottom-0.5
                  inline-block h-4 w-4 shrink-0 transition-transform
                  group-hover/title:-translate-y-0.5
                  group-hover/title:translate-x-0.5
                  group-focus-visible:-translate-y-0.5
                  group-focus-visible:translate-x-1
                  ml-1 translate-y-px
                "
              />
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey-normal hover:text-teal-400 transition-colors"
                title="View on GitHub"
              >
                <GithubIcon />
              </a>
            )}
          </div>
          <p className="mb-4 text-grey-normal text-sm leading-normal">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {project.tags.map((tag, index) => (
              <Tag key={replaceSpaces(tag)} content={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
