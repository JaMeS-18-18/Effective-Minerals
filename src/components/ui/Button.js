import React from 'react'

export default function Button(props) {
  return (
    <button className='buttonCard'>
        <p className='buttonText'>
            {props.title}
        </p>
    </button>
  )
}
