import React, { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { Task as TaskType } from "../constant";

interface TaskProps {
  task: TaskType;
  columnId: string;
  onDeleteTask: (columnId: string, taskId: string) => void;
  onDragStart: (e: React.DragEvent, columnId: string, taskId: string) => void;
}

const Task: React.FC<TaskProps> = ({
  task,
  columnId,
  onDeleteTask,
  onDragStart,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<boolean>(false);

  // date color
  const renderDate = (date: string | null) => {
    if (!date) return null;

    let className = "text-xs";
    if (date === "Yesterday") {
      className += " text-red-500";
    } else if (date === "Tomorrow") {
      className += " text-blue-500";
    } else {
      className += " text-gray-500";
    }

    return <span className={className}>{date}</span>;
  };

  const handleDeleteClick = () => {
    onDeleteTask(columnId, task.id);
    setActiveDropdown(false);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-sm mb-2 p-3 relative cursor-move"
      draggable
      onDragStart={(e) => onDragStart(e, columnId, task.id)}
    >
      {task.flag && (
        <div className="absolute right-3 top-3 w-2 h-2 rounded-full bg-yellow-400" />
      )}
      <div className="relative">
        <h3 className="text-sm font-medium mb-1 pr-6">{task.title}</h3>
        <div className="absolute top-0 right-0 dropdown-container">
          <button
            className="p-1 rounded hover:bg-gray-100"
            onClick={(e) => {
              e.stopPropagation();
              setActiveDropdown(!activeDropdown);
            }}
          >
            <MoreHorizontal size={16} />
          </button>

          {/* Dropdown menu */}
          {activeDropdown && (
            <div className="absolute right-0 mt-1 w-36 bg-white rounded-md shadow-lg z-10 border dropdown-container">
              <button
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                onClick={handleDeleteClick}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {task.description && (
        <p className="text-xs text-gray-600 mb-2">{task.description}</p>
      )}

      {(task.assignee || task.date || task.tag) && (
        <div className="flex items-center justify-between mt-2">
          {task.assignee && (
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                {task.assignee.image ? (
                  <img
                    src={task.assignee.image || "/placeholder.svg"}
                    alt={task.assignee.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-xs font-medium">
                    {task.assignee.initial}
                  </span>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center gap-2">
            {task.date && renderDate(task.date)}
            {task.tag && (
              <span className="text-xs text-gray-500">{task.tag}</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
