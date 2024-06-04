// Import components
import { postings } from "./postings"

function Posting() {
  return (
    <div>
      <h2>Positions</h2>
      {postings.map(posting => {
        return (
          <div>
            <img src={posting.imageURL} alt="image" />
            <h2>{posting.price}</h2>
            <h3>{posting.title}</h3>
            <h4>{posting.description}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default Posting