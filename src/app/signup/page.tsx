import React from 'react'

function page() {
  return (
    <section id="form">
    <div className="inner">
      <h2 className="major">Sign up</h2>
      <form method="post" action="#">
        <div className="fields">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="field">
            <label htmlFor="password2">Repeat password</label>
            <input type="password" name="password2" id="password2" />
          </div>
        </div>
        <ul className="actions">
          <li><input type="submit" value="Sign up" /></li>
        </ul>
      </form>
      <ul className="copyright">
        <li>&copy; Untitled Inc. All rights reserved.</li>
        <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
      </ul>
    </div>
  </section>
  )
}

export default page