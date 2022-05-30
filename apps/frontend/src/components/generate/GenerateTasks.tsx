import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouterWrapper } from '../layout/UIUtil';
import TaskGenerateActions from './GenerateTasksActions';

interface IPathProps {
  generateTasks(tasksToGenerate: number): any;
}

const GenerateTasks = ({ generateTasks }: IPathProps) => {

  const [tasksToGenerate, setTasksToGenerate] = useState(0);

  const onChangeProp = (setProperty: any, event: any) => {
    setProperty(event.target.value);
  };

  const onClick = () => {
    generateTasks(tasksToGenerate);
  };

  return (
    <section >
      <h3>Generate Tasks</h3>
      <input value={tasksToGenerate} onChange={(event) => onChangeProp(setTasksToGenerate, event)} ></input>
      <button onClick={onClick}>Generate</button>
      <Link to={'/'}>
        <p>Return to Main</p>
      </Link>
    </section>
  );
};

const mapDispatchToProps = (dispatch: any): IPathProps => {
  return {
    generateTasks: (taskToGenerate: number) => dispatch(TaskGenerateActions.post(taskToGenerate))
  }
};

export default withRouterWrapper(connect<null, IPathProps>(null, mapDispatchToProps)(GenerateTasks));