import React from 'react'
import Header from "../components/Header"

const PrimaryLayout = (props) => (
<div>
    <Header/>
    <div className="container">
      <div className="row justify-content-md-center">
          <div className={props.column}>
              {props.children}
          </div>
        
      </div>
      
    </div>
  </div>
)

export default PrimaryLayout