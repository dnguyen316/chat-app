import { Menu } from "antd";
import type { MenuProps } from "antd";
import LogoIcon from "components/logo/logo";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [{ key: "1", label: "On Prompting..." }];

const Brand = () => {
  return (
    <div className="flex gap-2">
      <LogoIcon />
      <span className="select-none font-bold">Chat AI</span>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-[240px] h-screen px-4 py-5 border-r-[1px] border-neutral-100">
      <Brand />
      <Menu mode="vertical" items={items} />
    </div>
  );
};

export default Sidebar;
