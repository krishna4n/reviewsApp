import {Component} from 'react'
import './index.css'

class Review extends Component {
  state = {reviewId: 0}

  onPrevious = () => {
    this.setState(prevState => ({
      reviewId: prevState.reviewId > 0 ? prevState.reviewId - 1 : 0,
    }))
  }

  onNext = () => {
    this.setState(prevState => ({
      reviewId: prevState.reviewId < 3 ? prevState.reviewId + 1 : 3,
    }))
  }

  render() {
    const {reviewId} = this.state
    const {reviewsList} = this.props
    const selectedList = reviewsList[reviewId]

    return (
      <div className="container">
        <button
          type="button"
          className="button"
          onClick={this.onPrevious}
          value="leftArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="arrow"
          />
        </button>
        <div className="details-container">
          <h1 className="heading">Reviews</h1>
          <img
            src={selectedList.imgUrl}
            alt={selectedList.username}
            className="profile-img"
          />

          <ul className="profile-details">
            <li>
              <p className="username">{selectedList.username}</p>
            </li>
            <li>
              <p className="company-name">{selectedList.companyName}</p>
            </li>
            <li>
              <p className="profile-description">{selectedList.description}</p>
            </li>
          </ul>
        </div>

        <button
          type="button"
          className="button"
          onClick={this.onNext}
          value="rightArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="arrow"
          />
        </button>
      </div>
    )
  }
}

export default Review
