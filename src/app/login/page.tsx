import React from 'react'

function page() {
  return (
    <section id="form">
    <div className="inner">
      <h2 className="major">Login</h2>
      <form method="post" action="#">
        <div className="fields">
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required/>
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required/>
          </div>
        </div>
        <a href="#">Forgot password?</a>
        <ul className="actions">
          <li><input type="submit" value="Login" /></li>
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