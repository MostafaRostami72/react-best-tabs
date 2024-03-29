import React from 'react'
import styled from "styled-components";
import GitHubButton from 'react-github-btn';
import ParentProps from "./parent.props";
import 'react-best-tabs/dist/index.css'
import TabProps from "./tab.props";
import Example1 from "./examples/example_1";
import Example2 from "./examples/example_2";
import Example3 from "./examples/example_3";

const App = () => {
    return (
        <div className="container mt-3 mt-lg-5">
            <div className="d-flex align-items-center justify-content-between bg-white position-sticky fixed-top">
              <div className="">
                <h1>React Best tabs</h1>
                <p>A great package to easily create beautiful tabs in React.</p>
              </div>

              <div className="d-flex align-items-center">
                <div className="github-icon">
                  <GitHubButton href="https://github.com/MostafaRostami72/react-best-tabs" data-show-count="true" data-size="large" aria-label="Star react-best-tabs on GitHub">Star</GitHubButton>
                </div>

                <a href="https://www.npmjs.com/package/react-best-tabs" target="_blank" className="ml-3">
                  <img alt="npm" src="https://img.shields.io/npm/v/react-best-tabs.svg"/>
                </a>
              </div>
            </div>

            <Section>
                <h2>Install</h2>
                <hr/>
                <Pre>
                    <code>
                        npm install --save react-best-tabs
                    </code>
                </Pre>
            </Section>

            <Section>
                <h2>Usage</h2>
                <hr/>

                <div className="mt-3">
                    <h4 className="mb-3">1 - Import component</h4>
                    <Pre>
                        <code className="d-block">
                            import Tabs,{'{Tab}'} from 'react-best-tabs';
                        </code>

                        <code className="d-block">
                            import 'react-best-tabs/dist/index.css';
                        </code>
                    </Pre>
                </div>

                <div className="mt-5">
                    <h4 className="mb-3">2 - Add the component markup to your react component</h4>
                    <Pre>
                        <code>
                            {
                                '<Tabs activeTab="1" className="mt-5" ulClassName="" activityClassName="bg-success" onClick={(event, tab) => console.log(event, tab)} >\n' +
                                '    <Tab title="tab 1" className="mr-3">\n' +
                                '        // tab contents \n' +
                                '        <div className="mt-3">\n' +
                                '             Tab 1 content\n' +
                                '        </div>\n' +
                                '       // ./ tab contents \n' +
                                '     </Tab>\n' +

                                ' \n' +

                                '     <Tab title="tab 2" className="mr-3">\n' +
                                '          <div className="mt-3">\n' +
                                '              Tab 2 content\n' +
                                '           </div>\n' +
                                '      </Tab>\n' +

                                ' \n' +

                                '      <Tab title="tab 3" className="mr-3">\n' +
                                '          <div className="mt-3">\n' +
                                '              Tab 3 content\n' +
                                '          </div>\n' +
                                '      </Tab>\n' +
                                '</Tabs>'
                            }
                        </code>
                    </Pre>
                </div>
            </Section>

            <Section>
                <h2>Props</h2>
                <hr/>
                <div className="mt-3">
                    <h4>1 - Parent props :
                        <Pre className="mt-3">
                            <code>{'<Tabs activeTab="1" className="mt-5" ulClassName="" activityClassName="">'}</code>
                        </Pre>
                    </h4>
                    <ParentProps/>
                </div>

                <div className="mt-3">
                    <h4>2 - Tab props :
                        <Pre className="mt-3">
                            <code>{'<Tab title="tab 3" className="mr-3">'}</code>
                        </Pre>
                    </h4>
                    <TabProps/>
                </div>
            </Section>

            <Section>
                <h2>Examples</h2>
                <div className="mt-5">
                    <Example1/>
                </div>

                <div className="mt-5">
                    <Example2/>
                </div>

                <div className="mt-5">
                    <Example3/>
                </div>
            </Section>
        </div>
    )
};

export default App;

// styles

const Section = styled.div`
    margin: 80px 0;

    @media (max-width: 768px) {
        margin: 56px 0;
    }
`;

export const Pre = styled.pre`
    background-color: #ebebeb;
    font-size: .937rem;
    padding: 12px;
    border-radius: 8px;
`;
