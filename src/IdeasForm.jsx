import React, {useState} from "react";

const IdeasForm = (props) => {
  let [input, setInput] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addIdeas(input)
    e.target.reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="text" onChange={(e) => {
          setInput(e.target.value)
          }}/>
          
        <button type="submit" >Submit your idea!</button>
      </form>
    </div>
  )
}

export default IdeasForm