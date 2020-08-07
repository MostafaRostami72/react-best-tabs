import React from 'react';

export default function TabProps() {
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
                    <td>title</td>
                    <td>required</td>
                    <td>Add title for tab.</td>
                </tr>

                <tr>
                    <td>className</td>
                    <td>null</td>
                    <td>Can Apply a css class name</td>
                </tr>

                </tbody>
            </table>
        </div>
    )
}