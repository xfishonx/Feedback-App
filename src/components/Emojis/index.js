import './index.css'

const Emojis = props => {
  const {emojisDetails, FeedbackEmoji} = props
  const {name, imageUrl} = emojisDetails

  const emojiClicked = () => {
    FeedbackEmoji(name)
  }
  return (
    <li className="li">
      <div className="emoji-container">
        <button type="button" onClick={emojiClicked} className="btn">
          <img src={imageUrl} alt={name} className="emoji-pic" />
        </button>
        <p className="expression-name">{name}</p>
      </div>
    </li>
  )
}

export default Emojis
