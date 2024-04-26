# Waste Data Management Application

This project is a simple application developed to manage waste collection data stored in a CSV file (`pod_data.csv`). The application allows users to view, edit, delete, and export waste collection data for several clients in a user-friendly format. It includes features such as search, filtering, sorting, pagination, and data export to Excel.

## Installation and Setup

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository to your local machine:

```
git clone https://github.com/bobo-oo/podfather-test.git
```

2. Navigate to the project directory:

```
cd podfather-test
```

3. Install dependencies:

```
npm install --force
```

### Running the Application

1. Start the application:

```
npm start
```

2. Open a web browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Overview

The application provides a user-friendly interface to manage waste collection data for multiple clients. Users can view, edit, delete, and export data, as well as perform operations such as search, filtering, sorting, and pagination to efficiently analyze the data.

## Features

- Display waste collection data for multiple clients in a tabular format.
- Edit functionality to modify existing data.
- Delete functionality to remove records from the dataset.
- Export functionality to download the updated data in Excel format.
- Search functionality to search for specific data.
- Filtering options to filter data based on specific criteria.
- Sorting functionality to sort data based on column values.
- Pagination to navigate through multiple pages of data.

## Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Bootstrap](https://getbootstrap.com/) - Front-end framework for developing responsive and mobile-first websites.
- [react-bootstrap-table-next](https://react-bootstrap-table.github.io/react-bootstrap-table2/) - Bootstrap table component for React.
- [xlsx](https://www.npmjs.com/package/xlsx) - JavaScript library for reading and writing Excel files.

## Author

- Bo Bo Oo

## Additional Information

- The app uses Bootstrap for styling, so make sure to include Bootstrap in your project dependencies.
- Ensure that the API endpoints used in the app are accessible from your environment.

```bash
npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```bash
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```bash
npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
