import React from 'react'

export default function Home(props) {
  return (
    <div>
        <h1>
            This Is Home Page - {props.homeText}
        </h1>
    </div>
  )
}
