import React from 'react'

function managePosts() {
  return (
    <div id="page-wrapper">
        <section id="wrapper">
            <header>
                <div className="inner">
                    <h2>MANAGE POSTS</h2>
                </div>
            </header>
            <div className="wrapper">
                <div className="inner">
                    <section>
                        <div className="box alt">
                            <div className="row gtr-uniform">
                                <div className="col-4"><button className="button primary fit">MANAGE POSTS</button></div>
                                <div className="col-4"><button className="button primary fit">MANAGE USERS</button></div>
                                <div className="col-4"><button className="button primary fit">MANAGE SPOTLIGHTS</button></div>
                                <div className="col-4"><button className="button primary fit">MANAGE FEATURES</button></div>
                                <div className="col-4"><button className="button primary fit">MANAGE BANNER</button></div>
                                <div className="col-4"><button className="button primary fit">MANAGE MISC. INFO</button></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </div>
  )
}

export default managePosts