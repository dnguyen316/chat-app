import Task from "components/task";

const tasks = [
  {
    icon: {
      color: "#4338CA",
      name: "mail",
      backgroundColor: "bg-indigo-50",
    },
    title: "Draft email",
    desc: "Generate email for any occasion you need.",
  },
  {
    icon: {
      color: "#15803D",
      name: "pencil",
      backgroundColor: "bg-green-50",
    },
    title: "Write an Essay",
    desc: "Generate essay for any occasion you need.",
  },
  {
    icon: {
      color: "#C026D3",
      name: "timeline",
      backgroundColor: "bg-funcsia-50",
    },
    title: "Planning",
    desc: "Plan for any occasion, from holiday to family.",
  },
  {
    icon: {
      color: "#F97316",
      name: "chat",
      backgroundColor: "bg-amber-50",
    },
    title: "Assistant",
    desc: "Become your personal assistant. Helping you.",
  },
];

const ChatContent = () => {
  return (
    <div className="">
      <p className="text-3xl text-neutral-600">
        <strong className="text-neutral-900">Hey, I’m Chat AI.</strong> Your AI
        assistant and companion for any occasion.
      </p>
      <Task.TaskGrid>
        {tasks.map((task) => (
          <Task.TaskCard key={task.title} {...task} />
        ))}
      </Task.TaskGrid>
    </div>
  );
};

export default ChatContent;
