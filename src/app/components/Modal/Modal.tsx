'use client';

import './Modal.css';

type Props = {
  modal: { active: boolean; index: number };
  index: number;
};

export default function Modal({ modal, index }: Props) {
  return (
    <div
      className='absolute h-30 w-30 bg-amber-500'
      style={{
        display: modal.active && modal.index === index ? 'block' : 'none',
      }}
    >
      box {index}
    </div>
  );
}
