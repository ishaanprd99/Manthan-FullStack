import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import "./home.css"
import Feed from '../../components/feed/Feed'


function Home() {
  return (
      <>
  
< Topbar/>

<div className="homeContainer"> 
 < Sidebar />
 < Feed  />
 < Rightbar />
</div>

 </>

  )
}

export default Home