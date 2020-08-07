import React from 'react';

export default function ParentProps() {
    return (
        <div className="table-responsive">
            <table className="table table-striped ">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>activeTab</td>
                    <td>1</td>
                    <td>Specifies which tab is enabled by default.</td>
                </tr>

                <tr>
                    <td>className</td>
                    <td>null</td>
                    <td>Can Apply a css class name</td>
                </tr>

                <tr>
                    <td>ulClassName</td>
                    <td>null</td>
                    <td>Can Apply a css class name to tabs list parent (ul)</td>
                </tr>

                <tr>
                    <td>activityClassName</td>
                    <td>null</td>
                    <td>Can Apply a css class name to interaction (in example 2 className has "bg-danger").</td>
                </tr>

                <tr>
                    <td>onClick</td>
                    <td>null</td>
                    <td>Callback function fired when a tab item is clicked.<br/> <strong>Signature:</strong><br/> onClick={'{(event, tab) => console.log(event, tab)}'}</td>
                </tr>
                </tbody>
            </table>
        </div>
)
}