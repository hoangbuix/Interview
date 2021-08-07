import React from "react";


interface Props {
    active: any;
    icon: any;
    title: any;
}
const SideBarItem: React.FC<Props> = (props: Props) => {
    const active = props.active ? 'active' : ''
    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
};
export default SideBarItem;