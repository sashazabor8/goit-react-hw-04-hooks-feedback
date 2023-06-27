import React from 'react';
import s from './Section.module.css';

function Section({ title, children }) {
  return (
    <section className={s.section}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

export default Section;
