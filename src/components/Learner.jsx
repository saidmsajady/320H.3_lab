import React from 'react'

export default function Learner({ name, bio, scores }) {
  return (
    <div>

        <h2>{name}</h2>
        <p>{bio}</p>
        <hr></hr>
        <ul>
        {scores.map((score, index) => (
            <li key={index}>{score.date}: {score.score}</li>
        ))}
        </ul>

    </div>
  )
}
