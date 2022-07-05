import * as React from 'react';

export interface IReactBestTabsProps {
  children?: React.ReactNode;

  // default active tab
  activeTab?: number;

  // select container class name
  className?: string

  // tab items class name
  ulClassName?: string

  // active ta class name
  activityClassName?: string

  // run when click on tab
  onClick?: (event: React.MouseEvent<HTMLLIElement>, tab: number) => void
}

// ReactBestTabs component is the default export

export default function Tabs(props: IReactBestTabsProps)

export function Tab(props: {
  title: string
  children?: React.ReactNode;
  className?: string
})
