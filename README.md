## Getting Started

1. Install dependencies.

  ```
  npm i
  ```

2. Run starter kit in development mode.

  ```
  npm start
  ```

3. Point your browser to [http://localhost:3000](http://localhost:3000)
4. Change any app code and see the changes applied immediately!
5. Open app in multiple tabs, try to increase counter in one tab and then switch to another tab. You will see that 
counter value updated there as well, because counter is live updated via subscriptions.

## Deploying to [Heroku]
1. Add your app to Heroku
1. Allow Heroku to install build time dependencies from the devDependencies in package.json:
   `Settings -> Config Variables -> Add`, KEY: `NPM_CONFIG_PRODUCTION`, VALUE: `false`.
1. Deploy your app on Heroku

## License
Copyright © 2016 Leonid Lazaryev <leonidlazaryev@gmail.com>. This source code is licensed under the MIT license.
