# Welcome to react-arca

This is a barebones setup for working with React. We've only included the essentials to get you started.

## To run your app:

Ensure you are at the root directory and run `npm start`.

## To test your app:

We've pre-configured a very basic test configuration using Jest.

- Read the Jest and @testing-library/react documentation.
- Modify the jest.config.js and assetTransformer.js according to your testing standards.
- Add a setupTests.js if needed.
- Run `npm run test`.
- By default, we've set up Jest to provide a coverage report for you. This file is git ignored, and you can opt-out of providing coverage reports in your package.json from within the "script" section.

## To build your app:

We're using Webpack to create a production build.

- Read the Webpack documentation.
- Set up your webpack.config.js to optimize the build for your use case.
- Run `npm run build`.
- Webpack will provide your build output to a 'dist' folder. This file is git ignored, adjust these settings according to your needs.

## To make this app your own:

We highly recommend making these changes:

- Add your own favicon.ico. Replace the default favicon.ico within /public/favicon.ico.
- Adjust the head area within /public/index.html to support your project needs.
- Within /src/Components, we provided an example with Arca.js. Use this folder to incorporate your own components.
- Within /src, the files App.css, App.test.js, and App.js are all just templates. Use these to define the rest of your project.
- The /src/index.js is the entry point for the rest of the React app. This is the one file we recommend leaving as-is. But hey, hack away.
- The /README.md is what you're currently reading. Once you've read through this file, we highly recommend replacing all of its contents with your own. If you need to reference this file again, you can find it at https://github.com/mbb10324/react-arca/react-arca-template#readme.
- To change the port that your app will run on navigate to /webpack.config.js and at the top of the file you will find an "appPort" variable; change this number to change the port that the app will run on.
- We expose all environment variables throuhgout your React application by default. So all you have to do is create a .env at the root of your project, name a variable whatever you would like (ex: GITHUB_LINK=https://github.com/mbb10324/react-arca). Now, from anywhere within your application you can define the link with `const githubLink = process.env.GITHUB_LINK`.
- We set up some basic linting rules using the .eslintrc file. These are our opinions, and we expect you as the developer to fit these to your project needs. To get quickly set up, the project is designed to work with ESLint out of the box. You can install the extension here https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint.
- After installng the extension. Here is a quick starting configuration to use in your vscodes settings.json which will format your code on save so linting errors get automatically fixed as you develop:

```json
{
	"extends": ["react-app", "react-app/jest"],
	"rules": {
		"semi": ["warn", "always"],
		"quotes": ["warn", "double"],
		"jsx-quotes": ["warn", "prefer-double"],
		"indent": ["warn", "tab", { "SwitchCase": 1 }],
		"no-tabs": 0,
		"max-len": ["warn", 150]
	}
}
```

## Feedback

- If you have any feedback and would like to see things added/removed/changed, create a new issue at https://github.com/mbb10324/react-arca/issues

## Contributing

react-arca is an open-source library, and we welcome contributions from the developer community. If you're interested in contributing, we recommend following these steps located within the /docs folder to get started:

1. Read the **Code of Conduct**: Before contributing, please familiarize yourself with our Code of Conduct, which outlines the expected behavior and guidelines for interaction within the react-arca community.

2. Review the **Developer Guidelines**: Take some time to read our Developer Guidelines, which provide helpful information and best practices for contributing code, reporting issues, and proposing new features.

3. Explore the **Developer Readme**: The Developer Readme serves as a comprehensive guide for developers working with react-arca. It provides detailed information about the library's architecture, key components, and usage instructions.

Once you've gone through these resources and feel comfortable with the guidelines and documentation, you can start contributing to react-arca at https://github.com/mbb10324/react-arca!

We greatly appreciate your contributions and look forward to building an inclusive and collaborative developer community around react-arca!
