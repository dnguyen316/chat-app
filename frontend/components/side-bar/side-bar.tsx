import { Menu } from "antd"
import type { MenuProps } from "antd";
import LogoIcon from "components/logo/logo";

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
    {key: '1', label: 'On Prompting...'}
]

const Brand = () => {
    return (
        <div><LogoIcon/> Chat AI</div>
    )
}

const Sidebar = () => {
    return (
        <div className="w-[240px] h-screen">
            <Brand/>
            <Menu mode="vertical"  items={items}/>
        </div>
    )
}

export default Sidebar