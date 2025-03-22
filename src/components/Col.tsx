import React from "react";
import { Plus, MoreHorizontal } from "lucide-react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { Column as ColumnType, TaskFormData } from "../constant";

interface ColumnProps {
  column: ColumnType;
  onAddTask: (columnId: string) => void;
  onCancelAddTask: () => void;
  addingTaskInColumn: string | null;
  newTaskForm: TaskFormData;
  onInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onDeleteTask: (columnId: string, taskId: string) => void;
  onDragStart: (e: React.DragEvent, columnId: string, taskId: string) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent, columnId: string) => void;
}

const Column: React.FC<ColumnProps> = ({
  column,
  onAddTask,
  onCancelAddTask,
  addingTaskInColumn,
  newTaskForm,
  onInputChange,
  onDeleteTask,
  onDragStart,
  onDragOver,
  onDrop,
}) => {
  return (
    <div
      className="flex flex-col w-72 min-h-full"
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, column.id)}
    >
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-medium">{column.title}</h2>
        <div className="flex items-center gap-1">
          <button
            className="p-1 rounded hover:bg-gray-100"
            onClick={() => onAddTask(column.id)}
          >
            <Plus size={16} />
          </button>
          <button className="p-1 rounded hover:bg-gray-100">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>
      <div className="flex-1 bg-gray-50 rounded-lg p-2">
        {/* Task form */}
        {addingTaskInColumn === column.id && (
          <TaskForm
            form={newTaskForm}
            onChange={onInputChange}
            onCancel={onCancelAddTask}
            onSubmit={() => onAddTask(column.id)}
          />
        )}

        {/* Tasks */}
        {column.tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            columnId={column.id}
            onDeleteTask={onDeleteTask}
            onDragStart={onDragStart}
          />
        ))}

        {/* Add task button */}
        {column.tasks.length === 0 && addingTaskInColumn !== column.id ? (
          <button
            onClick={() => onAddTask(column.id)}
            className="w-full flex items-center justify-center text-gray-500 py-2 px-3 hover:bg-gray-100 rounded-md"
          >
            <Plus className="w-4 h-4 mr-2" size={16} />
            Add task
          </button>
        ) : (
          column.tasks.length > 0 &&
          addingTaskInColumn !== column.id && (
            <button
              onClick={() => onAddTask(column.id)}
              className="w-full flex items-center justify-center text-gray-500 py-2 px-3 hover:bg-gray-100 rounded-md mt-2"
            >
              <Plus className="w-4 h-4 mr-2" size={16} />
              Add task
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Column;
