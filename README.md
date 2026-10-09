# Student Study Manager
This is a simple Web-Based app built in React to keep track of study activities. It was done for a class assignment, and is not recommended to be used over existing solutions.

### Table of Contents
- [Features](#features)
- [How to Run](#how-to-run)
- [Acknowledgements](#acknowledgements)
- [Additional Assignment Requirements](#additional-assignment-requirements)
  - [Merge Conflict](#merge-conflict)
  - [Workflow](#workflow)
  - [Release](#release)

## Features
This project contains the following features:
 - Adding and removing study activities
 - Marking activities as completed
 - Viewing a list of all incomplete actvities and a list of completed activities
 - Viewing the total number of incomplete and completed activities in the form of a pie chart

## How to Run
To run this project, ensure that [Node.js](https://nodejs.org/en/download) is installed correctly. Then, follow the steps below:
1. Download the project .zip
2. Unzip into it's own folder
3. Open the command prompt inside the folder
4. Run the command `npm install` and wait for it to complete
5. Run the command `npm dev run` and navigate to http://localhost:5173/ in your browser of choice

## Acknowledgements
This project was built with the following 3rd party technologies:
- [Node.js](https://nodejs.org/en) JavaScript Runtime
- [React.js](https://react.dev/) Web UI Library
- [Vite](https://vite.dev/) Front-end Build Tool
- [react-minimal-pie-chart](https://www.npmjs.com/package/react-minimal-pie-chart) Pie Chart Library

# Additional Assignment Requirements
This section will contain additional info required for the assignment.

## Merge Conflict
An intentional merge conflict was created on October 8 around 8:00 PM. This was done through the use of the text file `intentionalmergeconflict.txt`, which was created in advance for the express purpose of creating a merge conflict. First, a branch named `merge-conflict` was created, whose only difference form the `main` branch was `intentionalmergeconflict.txt` being changed. Then, the `main` branch version of `intentionalmergeconflict.txt` was changed to be different from both its original version and the version in the `merge-conflict` branch. Once that was complete, a pull request named Intentional Merge Conflict was opened aiming to merge the `merge-conflict` branch with the `main` branch, which caused a merge conflict due to the different changes made to `intentionalmergeconflict.txt`. This merge conflict was resolved by keeping the version of `intentionalmergeconflict.txt` found in the `main` branch.

## Workflow
For this project we tried created branches which focused on a set of requirements at a time. Each branch had one person assigned to it, and would request a review from the other member in the pull request. Unfortunately as Git is still new to us, we somewhat struggled keeping to this.

`Branch-with-bugged-code` was meant to be the branch for requirements 4, 5, and the rest of 3. However PkmnFan0791 ran into some issues he could not solve on his own, and created the branch to pass it on to LJPCODESTUDIO, who proceeded to finish all the work on that branch. In hindsight once the bug was fixed, he should've merged the branch and created a new one to continue work on.

In future projects we will strive to better coordinate tasks and manage branches in a more sensible manner.

## Release
As outlined in our planning document, this project will use a Canary release format. Since it is a standalone application with no account system we can not selective release updates to individual users. Instead we opted to use an open beta system. With this system, we would release quicker updates labelled as `Beta` which would contain new features. Customers can then choose to download these versions and provide feedback before the changes are brought to the main, or `stable`, release.

This will be done using the Github repository itself, which has a section for project releases. This feature allows developers to give releases a version, for which we would append beta versions with a `-b` suffix. We would also mark the beta as a `Pre-release` and give it a `Beta` tag. The main version will be marked without any of this.