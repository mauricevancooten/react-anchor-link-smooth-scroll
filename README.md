# React Anchor Link Smooth Scroll

React component for anchor links using the [smoothscroll](https://github.com/iamdustan/smoothscroll) polyfill.

## Instructions

1. Install dependency: `npm install react-anchor-link-smooth-scroll`

2. Add script
    ```js
    import React from 'react'
    import ReactDOM from 'react-dom'
    import AnchorLink from 'react-anchor-link-smooth-scroll'

    const SmoothScroll = () => (
      <div>
        <AnchorLink href='#things'>Things</AnchorLink>
        <AnchorLink href='#stuff'>Stuff</AnchorLink>

        <section id='things'>
        <h2>Things</h2>
        </section>
        <section id='stuff'>
          <h2>Stuff</h2>
        </section>
      </div>
    )

    ReactDOM.render(
      <SmoothScroll />,
      document.getElementById('content')
    )
    ```

3. Options; offset the amount of pixels from the top, for if you have a sticky navigation.
    * Regular offset

      ```js
       <AnchorLink offset='100' href='#things'>Things</AnchorLink>
      ```

    * For responsive offset you can provide a function returning the needed integer to scroll from

      ```js
       <AnchorLink offset={() => 100} href='#things'>Things</AnchorLink>
      ```

## Changelog

v.1.0.11 (July 24th 2018), [ericmasiello](https://github.com/ericmasiello) Remove Fixed; offset prop from being spread, to avoid remaining props spread to anchor link element.

v1.0.10 (May 30th 2018), [@DanMMX](https://github.com/DanMMX) Created an option to receive a function for an offset calculation.

v1.0.9 (April 24th 2018), [@gazpachu](https://github.com/gazpachu) Fix to have hash change in address bar.

v1.0.7 (April 10th 2018), [@zauni](https://github.com/zauni) Fixed problem with nested HTML inside the anchor.

[@roborourke](https://github.com/roborourke) Fixed possibility of a custom onClick handler for secondary side effects.

## Licence

Licensed under the [MIT](https://opensource.org/licenses/MIT) Licence.
