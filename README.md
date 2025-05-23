# InfiniteScroll

This project is part of the Udemy course [30 Days of Angular: Build 30 Web Projects with Angular](https://www.udemy.com/course/30-days-of-angular/).

## Overview

InfiniteScroll is an Angular application demonstrating the implementation of infinite scrolling—a popular UI pattern where more content loads automatically as the user scrolls down the page. This project is designed to help you understand how to efficiently fetch and display data in chunks, improving both performance and user experience.

## Features

- Infinite scroll for loading posts dynamically
- Modular Angular components and services
- Responsive and modern UI
- Clean, maintainable code structure

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Angular CLI](https://angular.io/cli)

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd infinite-scroll
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Development Server

To start a local development server, run:

```bash
ng serve
```

Open your browser at [http://localhost:4200/](http://localhost:4200/). The app will reload automatically on code changes.

### Building

To build the project for production:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests

To execute unit tests via [Karma](https://karma-runner.github.io):

```bash
ng test
```

### Running End-to-End Tests

To run e2e tests:

```bash
ng e2e
```

## Project Structure

- `src/app/components/post-list/` – Displays a list of posts with infinite scroll
- `src/app/components/post/` – Renders individual post items
- `src/app/services/post.service.ts` – Handles fetching post data
- `src/app/` – Main app module and configuration

## Learning Outcomes

By working through this project, you will learn:

- How to implement infinite scrolling in Angular
- Best practices for component and service organization
- Efficient data fetching and UI updates

## Additional Resources

- [Angular Documentation](https://angular.io/docs)
- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)

---

This project is for educational purposes as part of the Udemy course [30 Days of Angular](https://www.udemy.com/course/30-days-of-angular/).
