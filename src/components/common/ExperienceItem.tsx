import ArrowIcon from "../ui/icons/ArrowIcon";
import Tag from "../ui/Tag";
import React from "react";

interface IExperienceItemProps {
  years: string;
  role: string;
  company: string;
  link: string;
  description: string;
  tags: string[];
}

const ExperienceItem: React.FC<IExperienceItemProps> = ({
  years,
  role,
  company,
  link,
  description,
  tags,
}) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="
          hidden lg:block group
          lg:hover:!opacity-100 lg:group-hover/list:opacity-50
          rounded-lg relative w-[calc(100%+48px)] px-6 py-4 -inset-x-6
          transition ease-in-out
          hover:bg-slate-800/50
          hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
          hover:drop-shadow-lg
        "
      >
        <div className="flex flex-col sm:flex-row">
          <div className="mb-2 sm:mb-0 sm:mr-8 max-w-[145px] w-full">
            <p className="text-sm text-grey-normal">{years}</p>
          </div>
          <div className="flex-1">
            <p
              className="
                mb-2 font-bold transition ease-in-out
                group-hover:text-teal-400
              "
            >
              {role} · {company}
              <ArrowIcon
                classNames="
                  relative bottom-0.5
                  inline-block h-4 w-4 shrink-0 transition-transform
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-focus-visible:-translate-y-0.5
                  group-focus-visible:translate-x-1
                  ml-1 translate-y-px
                "
              />
            </p>
            <p className="mb-4 text-grey-normal text-sm leading-normal">
              {description}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {tags.map((tag, index) => (
                <Tag key={`${tag}_${index}`} content={tag} />
              ))}
            </div>
          </div>
        </div>
      </a>
      <div
        className="
          block lg:hidden
          rounded-lg relative w-[calc(100%+48px)] px-6 py-4 -inset-x-6
          transition ease-in-out
        "
      >
        <div className="flex flex-col sm:flex-row">
          <div className="mb-2 sm:mb-0 sm:mr-8 max-w-[145px] w-full">
            <p className="text-sm text-grey-normal">{years}</p>
          </div>
          <div className="flex-1">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="
              group
                mb-2 inline-block font-bold transition ease-in-out
                hover:text-teal-400
              "
            >
              {role} · {company}
              <ArrowIcon
                classNames="
                  relative bottom-0.5
                  inline-block h-4 w-4 shrink-0 transition-transform
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-focus-visible:-translate-y-0.5
                  group-focus-visible:translate-x-1
                  ml-1 translate-y-px
                "
              />
            </a>
            <p className="mb-4 text-grey-normal text-sm leading-normal">
              {description}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {tags.map((tag, index) => (
                <Tag key={`${tag}_${index}`} content={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceItem;
