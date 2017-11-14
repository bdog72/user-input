import React from 'react'
import './UserOutput.scss'

const userOutput = (props) => {
  return (
    <div className='userOutput'>
      <p>Username: {props.userName} </p>
      <p>I hope I'll be overwritten</p>
    </div>
  )
}

export default userOutput
