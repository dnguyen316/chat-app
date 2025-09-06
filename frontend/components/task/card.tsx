import { Card } from "antd";
import { Mail, MessageSquare, Pencil, SquareChartGantt } from "lucide-react";

interface ITaskCardProps {
  icon: {
    color: string;
    name: string;
    backgroundColor: string;
  };
  title: string;
  desc: string;
}

const icons = {
  mail: ({ color }: { color: string }) => <Mail color={color} />,
  pencil: ({ color }: { color: string }) => <Pencil color={color} />,
  timeline: ({ color }: { color: string }) => (
    <SquareChartGantt color={color} />
  ),
  chat: ({ color }: { color: string }) => <MessageSquare color={color} />,
};

const TaskIcon = ({
  name,
  color,
  backgroundColor,
}: {
  name: string;
  backgroundColor: string;
  color: string;
}) => {
  const Icon = icons[name as keyof typeof icons];

  return (
    <div
      className={`${backgroundColor} w-[40px] h-[40px] flex items-center justify-center rounded-lg`}
    >
      <Icon color={color} />
    </div>
  );
};

const TaskCard = ({ icon, title, desc }: ITaskCardProps) => {
  return (
    <Card
      styles={{
        body: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        },
      }}
      hoverable={true}
      className="[&>.ant-card-body]:p-[16px]! w-[166px] h-[156px]"
    >
      <TaskIcon {...icon} />
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-xs text-neutral-600">{desc}</p>
    </Card>
  );
};

export default TaskCard;
