import './Project.css';

type Project = {
  title: string;
  src: string;
  color: string;
};

type Props = {
  project: Project;
};

export default function Project({ project }: Props) {
  return (
    <div className='project_wrap flex flex-row items-center justify-between px-12 py-6'>
      <h2 className='project_title'>{project.title}</h2>
      <p className='project_subtitle'>Design & Development</p>
    </div>
  );
}
