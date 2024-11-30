// import type { Metadata } from "next";
// import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

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
      <body className="is-preload">
        {/* Page Wrapper */}
        <div id="page-wrapper">
          {/* Header */}
          <header id="header" className="alt">
            <h1><a href="index.html">Solid State</a></h1>
            <nav>
              <a href="#menu">Menu</a>
            </nav>
          </header>

          {/* Menu */}
          <nav id="menu">
            <div className="inner">
              <h2>Menu</h2>
              <ul className="links">
                <li><a href="index.html">Home</a></li>
                <li><a href="generic.html">Generic</a></li>
                <li><a href="elements.html">Elements</a></li>
                <li><a href="#">Log In</a></li>
                <li><a href="#">Sign Up</a></li>
              </ul>
              <a href="#" className="close">Close</a>
            </div>
          </nav>

          {/* Banner */}
          <section id="banner">
            <div className="inner">
              <div className="logo"><span className="icon fa-gem"></span></div>
              <h2>This is Solid State</h2>
              <p>Another free + fully responsive site template by <a href="http://html5up.net">HTML5 UP</a></p>
            </div>
          </section>

          {/* Wrapper */}
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
                    <textarea name="message" id="message" ></textarea>
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

        {/* Scripts */}
        <script defer src="../../assets/js/jquery.min.js"></script>
        <script defer src="../../assets/js/jquery.scrollex.min.js"></script>
        <script defer src="../../assets/js/browser.min.js"></script>
        <script defer src="../../assets/js/breakpoints.min.js"></script>
        <script defer src="../../assets/js/util.js"></script>
        <script defer src="../../assets/js/main.js"></script>
      </body>
    </html>
  );
}

