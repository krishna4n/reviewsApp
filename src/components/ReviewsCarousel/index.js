// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewId: 0}

  onDecrease = () => {
    const {reviewId} = this.state
    if (reviewId > 0) {
      this.setState(prevState => ({
        reviewId: prevState.reviewId - 1,
      }))
    }
  }

  onIncrease = () => {
    const {reviewsList} = this.props
    const {reviewId} = this.state
    if (reviewId < reviewsList.length - 1) {
      this.setState(prevState => ({
        reviewId: prevState.reviewId + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {reviewId} = this.state

    const {imgUrl, username, companyName, description} = reviewsList[reviewId]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="reviews-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
            alt="left arrow"
            className="left-arrow"
            onClick={this.onDecrease}
          />
          <div className="reviews">
            <img src={imgUrl} alt="" className="" />
            <p className="name">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
            alt="right arrow"
            className="right-arrow"
            onClick={this.onIncrease}
          />
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
