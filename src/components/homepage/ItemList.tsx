import ExperienceItem from "@/components/common/ExperienceItem";
import ProjectItem from "@/components/common/ProjectItem";
import { Experience, Project } from "@/types";

interface IGenericProps<T> {
  type: 'experience' | 'projects';
  title: string;
  items: T[];
}

type ItemListProps = IGenericProps<Experience> | IGenericProps<Project>;

const ItemList: React.FC<ItemListProps> = ({ type, title, items }) => {
  const renderExperienceItems = (items: Experience[]) => (
    <div className="flex flex-col gap-4 group/list">
      {items.map((item) => (
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
  );

  const renderProjectItems = (items: Project[]) => (
    <div className="flex flex-col gap-4 group/list">
      {items.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );

  return (
    <div className="scroll-mt-24 mt-10 lg:mt-24" id={type}>
      <h3
        className="
          z-10
          text-md sm:text-xl mb-6 sm:mb-10 uppercase font-bold lg:font-normal capitalize
          sticky lg:static top-0 -mx-6 sm:-mx-12 lg:mx-0 w-screen lg:w-auto bg-slate-900 lg:bg-transparent px-6 sm:px-12 lg:px-0 py-3 lg:py-0 backdrop-blur lg:backdrop-blur-none bg-opacity-60 lg:bg-opacity-0
        "
      >
        {title || type}
      </h3>
      {type === 'experience' 
        ? renderExperienceItems(items as Experience[])
        : renderProjectItems(items as Project[])
      }
    </div>
  );
};

export default ItemList;
