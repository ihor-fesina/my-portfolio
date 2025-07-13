import workExperienceDoc from "@/constants/workExperience.json";
import ExperienceItem from "@/components/common/ExperienceItem";

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
    </div>
  );
};

export default ExperienceList;
