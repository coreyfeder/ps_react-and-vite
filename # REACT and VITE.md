# REACT

like everything, we can install it with `npm`
it doesn't just install libraries, it can install whole frameworks

the "standard" way -- `npx create-react-app my-app` -- is outdated and no longer recommended
we're going to use `vite`
    it installs a bunch of stuff preconfigured
        `npm create vite@{version} {path}`
    for example
        `npm create vite@latest .`
It's a bundler that installs options for a framework and/or a ton of stuff.

We want JS.
(you can use TS if you're already very familiar)

Run the commands it shows.
    Different for each project

Go to the URL. _You are never done installing until you see the Vite + React screen in the browser._


Now we can delete some chaff.
    (The web page will update automatically.)
    assets\, probably don't need the .svg there
    index.css: technically none
    App.css: technically none
    App.jsx:
        nothing in the `return` statement
        none of the state management
        none of the imports except ./App.css
Now it's blank.


# Now, let's ORGANIZE!
we'll usually make folders in the /src folder
today, just "components"

## Styling
Some folks put the styling right in the .css files.
    fine if it's a tiny, tiny project
Some make a "styles" folder
We're going to do something called "styled components"
    in components, make a folder for each component
        in that folder, put both the .jsx _and_ the .css file

