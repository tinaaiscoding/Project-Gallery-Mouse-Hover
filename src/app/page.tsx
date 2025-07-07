'use client';

import Project from './components/Project/Project';
import './page.css';

const projects = [
  {
    title: 'C2 Montreal',
    src: 'c2montreal.png',
    color: '#000000',
  },
  {
    title: 'Office Studio',
    src: 'officestudio.png',
    color: '#8C8C8C',
  },
  {
    title: 'Locomotive',
    src: 'locomotive.png',
    color: '#EFE8D3',
  },
  {
    title: 'Silencio',
    src: 'silencio.png',
    color: '#706D63',
  },
];

export default function Home() {
  return (
    <main className='flex items-center justify-center'>
      <div className='projects_wrap'>
        {projects.map((project, i) => {
          return <Project key={i} project={project} />;
        })}
      </div>
    </main>
  );
}
