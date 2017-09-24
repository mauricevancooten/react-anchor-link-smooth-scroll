import React, {Component} from 'react'

class AnchorLink extends Component {
  constructor(props) {
    super(props)
    this.smoothScroll = this.smoothScroll.bind(this)
  }
  componentDidMount() {
    require('smoothscroll-polyfill').polyfill()
  }
  smoothScroll(e) {
    e.preventDefault()
    const id = e.target.getAttribute('href').slice(1)
    window.scroll({
      top: document.getElementById(`${id}`).offsetTop,
      behavior: 'smooth'
    })
  }
  render() {
    return (
      <a href={this.props.href} onClick={this.smoothScroll}>{this.props.children}</a>
    )
  }
}

export default AnchorLink
