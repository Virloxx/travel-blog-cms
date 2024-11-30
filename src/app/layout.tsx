import React from 'react';
import '@/app/ui/main.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Solid State by HTML5 UP</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </head>
      <body>
        {/* Page Wrapper */}
        <div id="page-wrapper">
          {/* Header */}
          <header id="header">
            <h1><a href="index.html">Solid State</a></h1>
            <nav>
              <a href="#menu">Menu</a>
            </nav>
          </header>
          <section id="wrapper">
            {children}
          </section>
          {/* Footer */}
          <section id="footer">
            <div className="inner">
              <h2 className="major">Get in touch</h2>
              <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
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
              <ul className="contact">
                <li className="icon solid fa-home">
                  Untitled Inc<br />
                  1234 Somewhere Road Suite #2894<br />
                  Nashville, TN 00000-0000
                </li>
                <li className="icon solid fa-phone">(000) 000-0000</li>
                <li className="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
                <li className="icon brands fa-twitter"><a href="#">twitter.com/untitled-tld</a></li>
                <li className="icon brands fa-facebook-f"><a href="#">facebook.com/untitled-tld</a></li>
                <li className="icon brands fa-instagram"><a href="#">instagram.com/untitled-tld</a></li>
              </ul>
              <ul className="copyright">
                <li>&copy; Untitled Inc. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
              </ul>
            </div>
          </section>
        </div>
      </body>
    </html>
  );
}
