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
    let offset = () => 0
    if (typeof this.props.offset !== 'undefined') {
      if (!!(this.props.offset && this.props.offset.constructor && this.props.offset.apply)) {
        offset = this.props.offset
      } else {
        offset = () => parseInt(this.props.offset)
      }
    }
    const id = e.currentTarget.getAttribute('href').slice(1)
    window.scroll({
      top: document.getElementById(id).offsetTop - offset(),
      behavior: 'smooth'
    })
    if (this.props.onClick) {this.props.onClick(e)}
  }
  render() {
    const { offset, ...rest } = this.props;
    return (
      <a {...rest} onClick={this.smoothScroll} />
    )
  }
}

export default AnchorLink
