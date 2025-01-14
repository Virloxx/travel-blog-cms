import React from 'react'
import Searchbar from '../../components/searchbar/searchbar'

function page() {
  return (
    <section id="form">
    <div className="inner">
      <h2 className="major">SEARCH FOR A POST</h2>
      <Searchbar></Searchbar>
      <ul className="copyright">
        <li>&copy; Untitled Inc. All rights reserved.</li>
        <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
      </ul>
    </div>
  </section>
  )
}

export default page