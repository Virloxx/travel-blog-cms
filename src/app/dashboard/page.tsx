import React from 'react';
import { useState } from 'react';

function dashboardPage() {
    const [dashboard, setDashboard] = useState(0)
    
  return (
    <div id="page-wrapper" className="dashboard-container">
      {/* Sidebar for Buttons */}
      <div className="dashboard-sidebar">
        <div className="button-container">
          <a href="/dashboard/manage-posts">
            <button className="button primary fit">MANAGE POSTS</button>
          </a>
          <button className="button primary fit">MANAGE USERS</button>
          <button className="button primary fit">MANAGE SPOTLIGHTS</button>
          <button className="button primary fit">MANAGE FEATURES</button>
          <button className="button primary fit">MANAGE BANNER</button>
          <button className="button primary fit">MANAGE MISC. INFO</button>
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
          <div className="content-box">
            <h3>Manage Posts Content</h3>
            <p>Details about managing posts will appear here.</p>
          </div>
          <div className="content-box">
            <h3>Manage Spotlights Content</h3>
            <p>Details about managing spotlights will appear here.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default dashboardPage;
