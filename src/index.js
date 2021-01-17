import React, {useState, useRef, useEffect} from 'react';
import './style.scss'


export default function Tabs({activeTab, children, className, ulClassName, activityClassName, onClick}) {
    const [activeItem, setActiveItem] = useState(activeTab ? Number(activeTab) : 1);
    const [activeBorder, setActiveBorder] = useState({width: 0, left: '0'});
    const tabItemRefs = [];

    for (let i = 0; i < children.length; i++) {
        tabItemRefs.push(useRef(''));
    }

    const handleClickOnTab = (event, index) => {
        setActiveItem(index + 1);
        if (typeof onClick !== "undefined") {
            onClick(event, index + 1);
        }
    };

    const handleTabItems = (children) => {
        return (
            children.map((tab, key) =>
                <li ref={tabItemRefs[key]} key={key} onClick={(e) => handleClickOnTab(e, key)} className={'rb-tabs-item ' +(tab.props.className ? tab.props.className : '') + ((activeItem === key + 1) ? ' active' : '')}>{tab.props.title}</li>
            )
        )
    };

    const updateActiveBorder = (index = activeItem - 1) => {
        if (tabItemRefs[index] && tabItemRefs[index].current) {
            setActiveBorder({
                width: tabItemRefs[index].current.clientWidth,
                left: tabItemRefs[index].current.offsetLeft + 'px'
            })
        }
    };

    useEffect(() => {
        updateActiveBorder();

        function handleResize() {
            updateActiveBorder();
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [activeItem]);

    return (
        <div className={'rb-tabs ' + (className ? className : '')}>
            <div className="rb-tabs-header">
                <ul className={'rb-tabs-items ' + (ulClassName ? ulClassName : '')}>
                    {handleTabItems(children)}
                </ul>

                <div style={{
                    width: activeBorder.width + 'px',
                    left: activeBorder.left
                }} className={'rb-tabs-active-item ' + (activityClassName ? activityClassName : '')}/>
            </div>

            <div className="rb-tabs-content">
                {
                    children.map((item, key) =>
                        <div className={"rb-tabs-content-item " + ((activeItem === key + 1) ? 'show' : '')} key={key}>{item.props.children}</div>
                    )
                }
            </div>
        </div>
    )
}

export function Tab({children, title, className}) {
    return (
        <li>{title}</li>
    )
}
