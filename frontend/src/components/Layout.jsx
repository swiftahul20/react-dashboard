import React from 'react'
import Sidebar from './Sidebar';
import Content from './Content';

export default function Layout() {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}
