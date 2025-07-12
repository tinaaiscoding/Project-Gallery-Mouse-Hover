'use client';

import { Variants, motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import './Modal.css';

type Props = {
  modal: { active: boolean; index: number };
  projects: { title: string; src: string; color: string }[];
};

const scaleAnimation: Variants = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  open: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Modal({ modal, projects }: Props) {
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  const { active, index } = modal;

  useEffect(() => {
    const moveContainerX = gsap.quickTo(modalContainer.current, 'left', {
      duration: 1,
      ease: 'power3',
    });
    const moveContainerY = gsap.quickTo(modalContainer.current, 'top', {
      duration: 1,
      ease: 'power3',
    });

    const moveCursorX = gsap.quickTo(cursor.current, 'left', {
      duration: 0.5,
      ease: 'power3',
    });
    const moveCursorY = gsap.quickTo(cursor.current, 'top', {
      duration: 0.5,
      ease: 'power3',
    });

    const moveCursorLabelX = gsap.quickTo(cursorLabel.current, 'left', {
      duration: 0.45,
      ease: 'power3',
    });
    const moveCursorLabelY = gsap.quickTo(cursorLabel.current, 'top', {
      duration: 0.45,
      ease: 'power3',
    });

    window.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;
      moveContainerX(clientX);
      moveContainerY(clientY);
      moveCursorX(clientX);
      moveCursorY(clientY);
      moveCursorLabelX(clientX);
      moveCursorLabelY(clientY);
    });
  }, []);

  return (
    <>
      <motion.div
        className='modal_contain flex items-center justify-center'
        variants={scaleAnimation}
        initial='initial'
        animate={active ? 'open' : 'close'}
        ref={modalContainer}
      >
        <div className='modal_slider' style={{ top: index * -100 + '%' }}>
          {projects.map((project, index) => {
            const { title, src, color } = project;

            return (
              <div
                key={`modal_${index}`}
                style={{ backgroundColor: color }}
                className='modal_wrap flex items-center justify-center'
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
      </motion.div>

      <motion.div
        className='cursor'
        ref={cursor}
        variants={scaleAnimation}
        initial='initial'
        animate={active ? 'open' : 'close'}
      ></motion.div>
      <motion.div
        className='cursor_label'
        ref={cursorLabel}
        variants={scaleAnimation}
        initial='initial'
        animate={active ? 'open' : 'close'}
      >
        View
      </motion.div>
    </>
  );
}
