import React from 'react'
import Tabs, {Tab} from 'react-best-tabs'

export default function Example2() {
    return (
        <div>
            <h4 className="mb-3">Example 2</h4>

            <Tabs activeTab="2" className="" ulClassName="" activityClassName="bg-danger">
                <Tab title="tab 1" className="mr-3">
                    <div className="mt-3">
                        Tab 1 content
                    </div>
                </Tab>
                <Tab title="tab 2" className="mr-3">
                    <div className="mt-3">
                        Tab 2 content
                    </div>
                </Tab>
                <Tab title="tab 3" className="mr-3">
                    <div className="mt-3">
                        Tab 3 content
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}