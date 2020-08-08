import React, {useState} from 'react'
import Tabs, {Tab} from 'react-best-tabs'

export default function Example3() {
    const [tabs, setTabs] = useState({
        tabs: [
            {title: 'Tab 1', content: 'Tab 1 content', loading: false, load: true},
            {title: 'Tab 2', content: 'Tab 2 content', loading: false, load: false},
            {title: 'Tab 3', content: 'Tab 3 content', loading: false, load: false},
        ]
    });


    const handleClick = (event, tab) => {
        let new_tabs = tabs.tabs;
        if (!new_tabs[tab - 1]['load']) {
            new_tabs[tab - 1]['loading'] = true;
            setTabs({tabs: new_tabs});


            setTimeout(() => {
                new_tabs[tab - 1]['loading'] = false;
                new_tabs[tab - 1]['load'] = true;
                setTabs({tabs: new_tabs});
            }, 2000)
        }
    };

    return (
        <div>
            <h4 className="mb-3">Example 3 (async)</h4>

            <Tabs activeTab="1" className="" ulClassName="" activityClassName="bg-success" onClick={(event, tab) => handleClick(event, tab)}>
                {
                    (typeof tabs.tabs.length !== "undefined") ?
                        tabs.tabs.map((tab, key) =>
                            <Tab key={key} title={tab.title} className="mr-3">
                                <div className="mt-3">
                                    {
                                        (tab.loading) ?
                                            <img src="loading.gif" width="80" height="80" alt="loading"/>
                                            :
                                            tab.content
                                    }
                                </div>
                            </Tab>
                        )
                        : ''
                }
            </Tabs>
        </div>
    )
}