# BancoBebe
BB: Somos tu mamá - React Webapp - SSR - PWA - Without Next, CRA, or Gatsby.

⚠️ Warning: No longer maintained. Check [react-chocolate](#proximamente) or [react-router-ultra](#proximamente2).

## SPA vs. SSR

This was complicated. I'm a fan of microservices, but in this case the facility and advantages of monorepos for the API and rendering from the server were higher.

These are my initial thoughts:

- SSR
- Data Storage (and API) using Node.js and MongoDB
- Authentication logic with Cookies 🍪
- Data come straight from Node files that connect to Mongo (really cool 😎)
- Less importance data could be fetched from the client to an API (GraphQL? Long live this 🙌)
- Landing Pages could be SPAs, but not sure... 🤔

The deal is how to do this! :sweat_smile:

## Frontend Architecture

Tech and tools:

- Express.js -> Server, SSR, DB (data) logic, SSR and API...
- React -> UI using renderToString and hydrate (streams are cool but does not support React Helmet or prefetching), some pages load data initially from the server, but it needs an API or something to load the same data just in case the page loads in the browser side (React Router Links), other pages just does not load data from the server but in the browser with an API...
- Webpack + Babel -> ES6+ to JS in bundles, for server and browser (check `config/webpack.*.js)...
- Webpack + loadable-components -> Code Splitting with ssr and no-ssr support...

> React.lazy still does not supports SSR...

## Design System Principles

All products (just one, by now 😅) should follow these simple rules:

### ⛰ Inspirational
We take inspiration from everywhere. For the same, our product should be a source of inspiration for developers, designers and other product creators. Not only the final result, all our processes must be planned and executed with excellence.

### ⚪️ Clean and spaced
Our UI should create a peaceful atmosphere, triggering creativity of users. This ambiance can be shaped by leaving a lot of space around every piece of interface. Cluttered interface is the source of stress that produces cortisol and adrenaline, both blocks our creative powers.

### 💪 Clarity and Consistency
The entire application should have the same objectives and should talk to the users in the same way, either visually or in writing.

### 🚼 Perceived stability
Even with robust and complex platforms, users should perceive the processes as simple and familiar as possible.

### 🎮 User control and forgiving
Users should have the feeling of control over the product, the application must allow the user to change his mind or start a new process whenever he needs it.

### ♿️ Accessibility
Our products should be usable for any user. We must build perceptible, operable, understandable and robust products.

### 📱 Mobile first
Design and development always starts on the mobile. The responsive design is not optional, but priority and mandatory.

### 👷‍♀ Predictable Architecture
Architecture must be predictable and natural. Features should be placed in the right context to be easy to discover by new users.

### ♻️ Reusability
Every hour that we invest working on a component should serve to build other components and prevent you or someone else from having to rebuild our work.

### 🔡 Covering all scenarios
We account for all ‘states’ in the system, and there are symbols for each of these states.

### 😘 K.I.S.S. (Keep it simple)
Cover all scenarios, but do not over-complicate users and yourselves with unnecessary details.

### 👥 Shareable
We must build and work with tools that allow us to share all our work.
