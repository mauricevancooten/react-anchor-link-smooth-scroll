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
    let offset = 0
    if (typeof this.props.offset !== 'undefined') {
      offset = parseInt(this.props.offset)
    }
    const id = e.currentTarget.getAttribute('href').slice(1)
    window.scroll({
      top: document.getElementById(`${id}`).offsetTop - offset,
      behavior: 'smooth'
    })
  }
  render() {
    return (
      <a {...this.props} onClick={this.smoothScroll}>{this.props.children}</a>
    )
  }
}

export default AnchorLink
