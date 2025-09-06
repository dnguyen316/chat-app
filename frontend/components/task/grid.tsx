const TaskGrid = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid grid-cols-4 mt-[80px]">{children}</div>;
};

export default TaskGrid;
