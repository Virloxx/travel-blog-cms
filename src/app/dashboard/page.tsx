'use client'

import React, { useState } from 'react';
import Link from 'next/link';

function DashboardPage() {
  const [activeSection, setActiveSection] = useState('posts'); // Default section

  const renderContent = () => {
    switch (activeSection) {
      case 'posts':
        return (
          <div>
            <h3>Manage Posts</h3>
            <p>Details about managing posts will appear here.</p>
          </div>
        );
      case 'users':
        return (
          <div>
            <h3>Manage Users</h3>
            <p>Details about managing users will appear here.</p>
          </div>
        );
      case 'spotlights':
        return (
          <div>
            <h3>Manage Spotlights</h3>
            <p>Details about managing spotlights will appear here.</p>
          </div>
        );
      case 'features':
        return (
          <div>
            <h3>Manage Features</h3>
            <p>Details about managing features will appear here.</p>
          </div>
        );
      case 'banner':
        return (
          <div>
            <h3>Manage Banner</h3>
            <p>Details about managing banners will appear here.</p>
          </div>
        );
      case 'misc':
        return (
          <div>
            <h3>Manage Misc. Info</h3>
            <p>Details about managing miscellaneous information will appear here.</p>
          </div>
        );
      default:
        return <p>Select a section to manage.</p>;
    }
  };

  return (
    <div id="page-wrapper" className="dashboard-container">
      {/* Sidebar for Buttons */}
      <div className="dashboard-sidebar">
        <div className="button-container">
          <button className="button primary fit" onClick={() => setActiveSection('posts')}>MANAGE POSTS</button>
          <button className="button primary fit" onClick={() => setActiveSection('users')}>MANAGE USERS</button>
          <button className="button primary fit" onClick={() => setActiveSection('spotlights')}>MANAGE SPOTLIGHTS</button>
          <button className="button primary fit" onClick={() => setActiveSection('features')}>MANAGE FEATURES</button>
          <button className="button primary fit" onClick={() => setActiveSection('banner')}>MANAGE BANNER</button>
          <button className="button primary fit" onClick={() => setActiveSection('misc')}>MANAGE MISC. INFO</button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="dashboard-content">
        <header>
          <div className="inner">
            <h2>DASHBOARD</h2>
          </div>
        </header>
        <section>
          <div className="content-box">{renderContent()}</div>
        </section>
      </div>
    </div>
  );
}

export default DashboardPage;
