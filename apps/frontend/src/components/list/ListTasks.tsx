import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouterWrapper } from '../layout/UIUtil';
import TaskListActions from './ListTasksActions';

interface IPathProps {
  getTasksList(): any;
}

interface IStateProps {
  payload: {
    tasks: Array<any>;
  };
}

const ListTasks = ({ getTasksList, payload }: IPathProps & IStateProps) => {

  useEffect(() => {
    getTasksList();
  }, [window.location.pathname]);

  const { tasks } = payload

  return (
    <section >
      <h3>List Tasks</h3>

      <table style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid' }}>
        <tbody>
          <tr>
            <th>Task Id</th>
            <th>Task Name</th>
            <th>Task Completed ?</th>
          </tr>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id} </td>
              <td>{task.name} </td>
              <td><input type="checkbox" checked={task.done}></input></td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to={'/'}>
        <p>Return to Main</p>
      </Link>
    </section>
  );
};

const mapStateToProps = (state: any): IStateProps => {
  return {
    payload: state.getTasksListReducer.payload,
  };
};

const mapDispatchToProps = (dispatch: any): IPathProps => {
  return {
    getTasksList: () => dispatch(TaskListActions.get())
  }
};

export default withRouterWrapper(connect<IStateProps, IPathProps>(mapStateToProps, mapDispatchToProps)(ListTasks));