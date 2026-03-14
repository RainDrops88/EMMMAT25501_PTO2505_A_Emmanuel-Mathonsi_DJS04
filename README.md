# React Podcast App: Search, Sort, Filter, and Pagination

## Project Overview

In this project, I build an advanced podcast browsing experience that allows users to dynamically **search**, **sort**, **filter**, and **paginate** a list of podcast shows. The goal is to create an intuitive interface that responds to user input in real time and maintains a consistent, seamless experience throughout navigation.

This project test your ability to manage complex UI state, synchronise multiple user interactions, and maintain clean, scalable code.

---

## Tools

![Git](https://img.shields.io/badge/-Git-F05032?style=flat&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-circle&logo=github)
![HTML5](https://img.shields.io/badge/-HTML5-black?style=flat-circle&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-black?style=flat-circle&logo=css3)
![MARKDOWN](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&amp;logo=markdown&amp;logoColor=white)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](#)
[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](#)

---

## Core Objectives

### Search Functionality

- Implement a flexible search that matches any part of the podcast title.
- Results should update dynamically as the user types or upon submission.
- Ensure that search results integrate with current filters, sorts, and pagination without resetting them.

### Sorting Options

- Allow sorting podcasts by:
  - Newest first (based on last updated date).
  - Title A–Z and Z–A.
- Sorting must work in tandem with any search or filter criteria.

### Filtering

- Enable genre-based filtering using a dropdown or multi-select input.
- Ensure filters work alongside current search, sort, and pagination state.
- Maintain selected filters when navigating between pages or updating the list.

### Pagination

- Display podcasts in manageable chunks using pagination, load-more, or infinite scroll.
- Ensure that pagination respects the currently active search, filter, and sort state.
- Keep all UI selections intact while navigating pages.

### State Synchronisation

- Maintain a centralised and cleanly organised state using React state, context, or a state management library.
- Ensure that all controls (search, sort, filter, pagination) reflect changes immediately and stay in sync.

### Code Quality & Maintainability

- Use JSDoc to document all major functions and modules.
- Apply consistent formatting and naming conventions.
- Keep logic modular and components reusable.

### API Endpoints

Data can be called via a `fetch` request to the following endpoint.

| URL                               |                             |
| --------------------------------- | --------------------------- |
| `https://podcast-api.netlify.app` | Returns an array of PREVIEW |

### Genre Titles

Since the podcast preview information fetched from the API only exposes genres by their IDs, the actual genre details (such as titles) are not included in the API response. These details are instead provided in the data.js file found in this repository. Therefore, it is recommended that you include the mapping between genre ID values and their corresponding titles in your code using this file.

---

## Project Deliverables

- A fully functional React app that:

  - Fetches and displays podcast data.
  - Allows live searching, sorting, filtering, and pagination.
  - Maintains consistent state across all UI interactions.

- **Clean Codebase** with:

  - Reusable, modular components.
  - Clear and consistent formatting across all files.
  - JSDoc comments for functions/modules.

- **README.md** with:

  - Project overview and purpose.
  - Setup and usage instructions.
  - Descriptions of key features (search, filter, sort, pagination).

- **Version Control (GitHub)**:
  - Clear, meaningful commit messages.
  - Incremental commits reflecting development progress.

  ---

## Project Setup Instructions

  1. Clone the project folder.
  2. Build your site using HTML, CSS, JavaScript and React.
  3. Create a div tag with id="root".
  4. Direct your main.jsx to the root.
  5. Create the Podcast card.
  6. Create functions to convert dates and get genres.
  7. Create functions to pull data from API and update the cards.
  7. Use Git to track your progress with frequent commits.

  ---

## 🌐 Socials

[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/RainDrops88)  
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/emmanuel-mathonsi-300b33308/)  
📧 Email: [07942jerry@gmail.com]
