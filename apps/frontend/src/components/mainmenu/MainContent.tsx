import React from 'react';
import { Link } from 'react-router-dom';

export const MainMenu = () => {
  return (
    <section >
      <h3>Tasks Management</h3>
      <Link to={'/list'}>
        <p>List Tasks</p>
      </Link>
      <Link to={'/generate'}>
        <p>Generate New Task</p>
      </Link>
    </section>
  );
};