import React from 'react';
import NavLinks from '@/ui/nav-links';
//import clsx from 'clsx';

export default function TopNav() {
  return (
    <div className="dashboard-sidebar">
        <div className="button-container">
        <NavLinks></NavLinks>
        </div>
    </div>
  )
}