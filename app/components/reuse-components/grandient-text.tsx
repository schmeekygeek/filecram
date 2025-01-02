interface GradientTextProps {
  tag: keyof JSX.IntrinsicElements;
  text: string;
}

function GradientText(props: GradientTextProps) {
  return (
    <props.tag
      className="font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 
      text-transparent bg-clip-text bg-300% animate-gradient"
    >
      {props.text}
    </props.tag>
  )
}

export default GradientText
