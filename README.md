# react-best-tabs

> A great package to easily create beautiful tabs in React Js

[![NPM](https://img.shields.io/npm/v/react-best-tabs.svg)](https://www.npmjs.com/package/react-best-tabs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Full Document
-   [Document](https://mostafarostami72.github.io/react-best-tabs/)
## Demo
-   [Demo](https://mostafarostami72.github.io/react-best-tabs/)


## Install

```bash
npm install --save react-best-tabs
```

## Usage

```jsx
import React, { Component } from 'react'
import Tabs, {Tab} from 'react-best-tabs';
import 'react-best-tabs/dist/index.css';


class Example extends Component {
  render() {
    return (
        <Tabs activeTab="1" className="" ulClassName="" activityClassName="bg-success" onClick={(event, tab) => console.log(event, tab)}>
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
    )
  }
}
```
## Support
We are glad you choose this package. If this package is useful for you, please give us a star.

## License

MIT © [MostafaRostami72](https://github.com/MostafaRostami72)
