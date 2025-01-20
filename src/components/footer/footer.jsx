import React from 'react'

function Footer() {
  return (
    <section id="footer">
        <div className="inner">
        <h2 className="major">Get in touch</h2>
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
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
            </div>
            </div>
            <ul className="actions">
            <li><input type="submit" value="Send Message" /></li>
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

export default Footer