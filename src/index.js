import React, {useState, useRef, useEffect} from 'react';
import styled from "styled-components";


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
                <CardItem ref={tabItemRefs[key]} key={key} onClick={(e) => handleClickOnTab(e, key)} className={(tab.props.className ? tab.props.className : '') + ((activeItem === key + 1) ? ' active' : '')}>{tab.props.title}</CardItem>
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
        <Container className={(className ? className : '')}>
            <Header>
                <Card className={(ulClassName ? ulClassName : '')}>
                    {handleTabItems(children)}
                </Card>

                <ActiveBorder style={{
                    width: activeBorder.width + 'px',
                    left: activeBorder.left
                }} className={(activityClassName ? activityClassName : '')}/>
            </Header>

            <Content>
                {
                    children.map((item, key) =>
                        <ContentItem show={(activeItem === key + 1)} key={key}>{item.props.children}</ContentItem>
                    )
                }
            </Content>
        </Container>
    )
}

export function Tab({children, title, className}) {
    return (
        <li>{title}</li>
    )
}

// styles
const Container = styled.div`
    position: relative;
`;

const Header = styled.div`
    position: relative;
`;

const ActiveBorder = styled.div`
    height: 2px;
    background-color: #222222;
    position: absolute;
    bottom: 0;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    will-change: left, width;
`;

const Card = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    border-bottom: 1px solid #ebebeb;
    
    @media (max-width: 768px) {
        justify-content: space-between;
    }
`;

const CardItem = styled.li`
    padding: 8px 16px;
    cursor: pointer;
    
    &.active {
        font-weight: 500;
    }
    
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const Content = styled.div``;

const ContentItem = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
`;
