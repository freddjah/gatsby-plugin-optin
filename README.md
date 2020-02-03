# gatsby-plugin-optin

This plugin is used when you need a users permission before executing scripts. The information about the user opting in or out is stored in a cookie with a lifetime of a year.

## Getting Started

`npm install gatsby-plugin-optin`
`yarn add gatsby-plugin-optin`

## How to use

Set up `gatsby-config.js`

```javascript
{
    resolve: `gatsby-plugin-optin`,
    options: {
        scripts: [
            `<script>alert('hi');</script>`,
            `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXX');</script>`
        ],
    },
},
```

Import the `<OptInWrapper>` to the place where you want to display it. For an example in your layout file.
Make handlers for opting in or out.

```jsx
import {
  OptInWrapper,
  userOptsIn,
  userOptsOut,
} from "gatsby-plugin-optin"

...

return (
    <>
        <OptInWrapper>
            <h1>Choose your destiny</h1>
            <button onClick={() => userOptsIn()}>Opt in</button>
            <button onClick={() => userOptsOut()}>Opt out</button>
        </OptInWrapper>
    ...
    </>
)
```

## License

This project is licensed under the MIT License.
