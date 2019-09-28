import React, {Component} from 'react'

class AnchorLink extends Component {
  constructor(props) {
    super(props)
    this.smoothScroll = this.smoothScroll.bind(this)
  }
  componentDidMount() {
    require('smoothscroll-polyfill').polyfill()
  }
  smoothScroll(event) {
    event.preventDefault()
    const e = { ...event }
    const { href } = this.props;
    if (history.pushState && href) {
      history.pushState({}, '', href)
      window.dispatchEvent(new Event('hashchange'))
    }
    setTimeout(() => {
      let offset = () => 0
      if (typeof this.props.offset !== 'undefined') {
        if (!!(this.props.offset && this.props.offset.constructor && this.props.offset.apply)) {
          offset = this.props.offset
        } else {
          offset = () => parseInt(this.props.offset)
        }
      }
      const id = e.currentTarget.getAttribute('href').slice(1)
      const $anchor = document.getElementById(id);
      const offsetTop = $anchor.getBoundingClientRect().top + window.pageYOffset;
      window.scroll({
        top: offsetTop - offset(),
        behavior: 'smooth'
      })
      if (this.props.onClick) {this.props.onClick(e)}
    }, 0);
  }
  render() {
    const { offset, ...rest } = this.props;
    return (
      <a {...rest} onClick={this.smoothScroll} />
    )
  }
}

export default AnchorLink
