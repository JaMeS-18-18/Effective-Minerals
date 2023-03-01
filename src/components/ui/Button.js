import React from 'react'

export default function Button(props) {
  return (
    <div className='buttonCard'>
        <p className='buttonText'>
            {props.title}
        </p>
    </div>
  )
}
