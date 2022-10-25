# ACRA React Component

Install the dependencies by running the following command

```bash
  npm install
```

## How to run storybook:

Run storybook by running the following command

```bash
  npm run storybook
```

## How to consumed component into the app:

1. Bundle and pack the library by running the following command

```bash
  npm run bundle
```

2. After running the following command, it should generated this file `acra-react-component-1.0.0.tgz`. Copy that file and paste it to the consumed app root directory

3. On the consumed app, run the following command

```bash
  npm install acra-react-component-1.0.0.tgz
```

4. Import the global styling, fonts, and icons on the root app react component (your app should have scss / sass installed)

```jsx
import 'acra-react-component/dist/foundation/foundation.scss';
```

5. You are ready to import the react component into your app

```jsx
import { Typography } from 'acra-react-component';
```