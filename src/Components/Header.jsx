import React from 'react'
import "./Header.css"

function Header({text, bg , count}) {
  return (
    <div className={` flex items-center h-4 p-4 text-sm text-white listHeader`}>
    {/* <h5> */}
    {text} -  <b> {count}</b>
    {/* </h5> */}
    </div>
  )
}

export default Header