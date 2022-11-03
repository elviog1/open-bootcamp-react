import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'


const TaskComponent = ({task}) => {
  return (
    <div>
        <h2>Nombre: {task.name}</h2>
        <h2>Description: {task.description}</h2>
        <h2>Level: {task.level}</h2>
        <h2>This task is: {task.completed ? "COMPLETED" : "PENDING"}</h2>
    </div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent