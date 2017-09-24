# React Anchor Link Smooth Scroll

React component for anchor links using the [smoothscroll](https://github.com/iamdustan/smoothscroll) polyfill.

## Instructions

1. Install dependency `npm install react-anchor-link-smooth-scroll`

2. Add script

```
import React from 'react'
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const SmoothScroll = () => (
  <AnchorLink href="#things">Things</AnchorLink>
  <AnchorLink href="#stuff">Stuff</AnchorLink>

  <section id="things">
   <h2>Things</h2>
  </section>
  <section id="stuff">
    <h2>Stuff</h2>
  </section>
)

ReactDOM.render(
  <SmoothScroll />,
  document.getElementById('content')
)
```

## Licence

Licensed under the [MIT](https://opensource.org/licenses/MIT) Licence.
