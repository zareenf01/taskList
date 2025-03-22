// types.ts
export interface User {
  id: number;
  name: string;
  initial: string;
  image: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  assignee: User | null;
  tag: string | null;
  date: string | null;
  flag?: string;
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

export interface TaskFormData {
  title: string;
  description: string;
  dueDate: string;
  assigneeId: string;
  tag: string;
}

export const USERS: User[] = [
  {
    id: 1,
    name: "Alex",
    initial: "A",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Beth",
    initial: "B",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Carlos",
    initial: "C",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Diana",
    initial: "D",
    image: "https://i.pravatar.cc/150?img=4",
  },
];

// Tags
export const TAGS: string[] = [
  "Design",
  "Programming",
  "Marketing",
  "Research",
];

// Initial columns data
export const INITIAL_COLUMNS: Column[] = [
  {
    id: "todo",
    title: "To do",
    tasks: [],
  },
  {
    id: "in-progress",
    title: "In Progress",
    tasks: [
      {
        id: "task-1",
        title: "Add buttons",
        description: "",
        dueDate: "",
        assignee: USERS[0],
        tag: "Programming",
        date: "Yesterday",
      },
      {
        id: "task-2",
        title: "Logo revision",
        description: "",
        dueDate: "",
        assignee: USERS[0],
        tag: "Design",
        date: "Tomorrow",
      },
    ],
  },
  {
    id: "review-1",
    title: "Review",
    tasks: [
      {
        id: "task-3",
        title: "Empty task",
        description: "",
        dueDate: "",
        assignee: null,
        tag: null,
        date: null,
      },
      {
        id: "task-4",
        title: "UI-Kit",
        description: "",
        dueDate: "",
        assignee: USERS[1],
        tag: "Design",
        date: "Tomorrow",
        flag: "yellow",
      },
      {
        id: "task-5",
        title: "Managing",
        description: "",
        dueDate: "",
        assignee: null,
        tag: null,
        date: null,
      },
      {
        id: "task-6",
        title: "Fixing bugs",
        description: "",
        dueDate: "",
        assignee: USERS[2],
        tag: "Design",
        date: "Today",
        flag: "yellow",
      },
      {
        id: "task-7",
        title: "Design Concept 2",
        description: "",
        dueDate: "",
        assignee: USERS[3],
        tag: "Design",
        date: "Today",
      },
    ],
  },
];

// Default new task form
export const DEFAULT_TASK_FORM: TaskFormData = {
  title: "",
  description: "",
  dueDate: "",
  assigneeId: "",
  tag: "",
};
