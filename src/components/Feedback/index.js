// Write your React code here.
import {Component} from 'react'
import Emojis from '../Emojis'
import './index.css'

class Feedback extends Component {
  state = {buttonPressed: false}

  FeedbackEmoji = () => {
    this.setState({buttonPressed: true})
  }

  render() {
    const {resources} = this.props
    const {buttonPressed} = this.state
    return (
      <div className="bg-container">
        {buttonPressed === false ? (
          <div className="box-container">
            <h1 className="content-head">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="ul">
              {resources.emojis.map(each => (
                <Emojis
                  key={each.id}
                  emojisDetails={each}
                  FeedbackEmoji={this.FeedbackEmoji}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="box-container2">
            <img
              src={resources.loveEmojiUrl}
              alt="love emoji"
              className="love-emoji"
            />
            <h1 className="thank-you-head">Thank You</h1>
            <p className="concern">
              We will use your feedback to improve your customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
