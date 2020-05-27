import React from 'react'
import { RouteComponentProps } from '@reach/router'
import fishData from '../data/fish.json'

function Fish(props: RouteComponentProps) {
  return (
    <div>
      {fishData.map((fish) => (
        <div key={fish.id}>{fish.name}</div>
      ))}
    </div>
  )
}

export default Fish
