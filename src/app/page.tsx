'use client';

import { useState } from 'react';

import Modal from './components/Modal/Modal';
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
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className='projects_wrap flex items-center justify-center'>
      <div className='projects_list_wrap flex flex-col items-center justify-center'>
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              project={project}
              index={index}
              setModal={setModal}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
}
