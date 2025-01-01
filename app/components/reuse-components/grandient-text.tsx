import React from 'react'

function GrandientText(prop: { text: string; tag: keyof JSX.IntrinsicElements }) {
  return (
    <prop.tag
      className="font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 
      text-transparent bg-clip-text bg-300% animate-gradient"
    >
    {prop.text} {" "}
    </prop.tag>
  )
}

export default GrandientText
