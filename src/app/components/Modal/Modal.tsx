'use client';

import Image from 'next/image';

import './Modal.css';

type Props = {
  modal: { active: boolean; index: number };
  projects: { title: string; src: string; color: string }[];
};

export default function Modal({ modal, projects }: Props) {
  const { active, index } = modal;

  return (
    <div className='modal_contain flex items-center justify-center'>
      <div className='modal_slider' style={{ top: index * -100 + '%' }}>
        {projects.map((project, index) => {
          const { title, src, color } = project;

          return (
            <div
              key={`modal_${index}`}
              className='modal_wrap flex items-center justify-center'
              style={{ backgroundColor: color }}
            >
              <Image
                src={`/images/${src}`}
                width={300}
                height={0}
                alt={title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
