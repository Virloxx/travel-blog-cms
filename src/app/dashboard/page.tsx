'use client'

import React, { useState } from 'react';
import ManagePosts from '../../components/dashboardComponents/managePosts/managePosts';
import ManageFeatures from '../../components/dashboardComponents/manageFeatures/manageFeatures';
import ManageMiscInfo from '../../components/dashboardComponents/manageMiscInfo/manageMiscInfo';
import ManageSpotlights from '../../components/dashboardComponents/manageSpotlights/manageSpotlights';
import ManageUsers from '../../components/dashboardComponents/manageUsers/manageUsers';

function DashboardPage() {
  const [activeSection, setActiveSection] = useState('posts');

  const renderContent = () => {
    switch (activeSection) {
      case 'posts':
        return (
          <div>
            <ManagePosts />
          </div>
        );
      case 'users':
        return (
          <div>
            <ManageUsers />
          </div>
        );
      case 'spotlights':
        return (
          <div>
            <ManageSpotlights />
          </div>
        );
      case 'features':
        return (
          <div>
            <ManageFeatures />
          </div>
        );
      case 'misc':
        return (
          <div>
            <ManageMiscInfo />
          </div>
        );
    }
  };

  return (
    <section id="page-wrapper">
      <div className="dashboard-sidebar">
        <div className="button-container">
          <button className="button fit" onClick={() => setActiveSection('posts')}>MANAGE POSTS</button>
          <button className="button fit" onClick={() => setActiveSection('users')}>MANAGE USERS</button>
          <button className="button fit" onClick={() => setActiveSection('spotlights')}>MANAGE SPOTLIGHTS</button>
          <button className="button fit" onClick={() => setActiveSection('features')}>MANAGE FEATURES</button>
          <button className="button fit" onClick={() => setActiveSection('misc')}>MANAGE MISC. INFO</button>
        </div>
      </div>

      <div className="dashboard-content">
        <header>
          <div className="inner content-title">
            <h2>MANAGE {activeSection}</h2>
          </div>
        </header>
        <section>
          <div className="content-box">{renderContent()}</div>
        </section>
      </div>
    </section>
  );
}

export default DashboardPage;