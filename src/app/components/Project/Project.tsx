import './Project.css';

type Project = {
  title: string;
  src: string;
  color: string;
};

type Props = {
  project: Project;
  index: number;
  setModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
};

export default function Project({ project, index, setModal }: Props) {
  const handleMouseEnter = () => {
    setModal({ active: true, index });
  };

  const handleMouseLeave = () => {
    setModal({ active: false, index });
  };

  return (
    <div
      className='project_wrap flex flex-row items-center justify-between px-20 py-8'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className='project_title'>{project.title}</h2>
      <p className='project_subtitle'>Design & Development</p>
    </div>
  );
}
