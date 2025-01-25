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
            <ManagePosts />
        );
      case 'users':
        return (
            <ManageUsers />
        );
      case 'spotlights':
        return (
            <ManageSpotlights />
        );
      case 'features':
        return (
            <ManageFeatures />
        );
      case 'misc':
        return (
            <ManageMiscInfo />
        );
    }
  };

  return (
    <section id="page-wrapper">
      <div className="dashboard-sidebar">
        <div className="button-container">
          <button 
            className={activeSection === 'posts' ? 'active' : ''} 
            onClick={() => setActiveSection('posts')}>
              MANAGE POSTS
            </button>
          <button 
            className={activeSection === 'users' ? 'active' : ''} 
            onClick={() => setActiveSection('users')}>
              MANAGE USERS
            </button>
          <button 
            className={activeSection === 'spotlights' ? 'active' : ''} 
            onClick={() => setActiveSection('spotlights')}>
              MANAGE SPOTLIGHTS
            </button>
          <button 
            className={activeSection === 'features' ? 'active' : ''} 
            onClick={() => setActiveSection('features')}>
              MANAGE FEATURES
            </button>
          <button 
            className={activeSection === 'misc' ? 'active' : ''} 
            onClick={() => setActiveSection('misc')}>
              MANAGE MISC. INFO
            </button>
        </div>
      </div>
      <div className="dashboard-content">
        <section>
          <div className="content-box">{renderContent()}</div>
        </section>
      </div>
    </section>
  );
}

export default DashboardPage;