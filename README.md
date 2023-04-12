## Circutor Technical Test

This is a very simple application that shows some energy data Helsinki buildings from 1st January 2021 to around 28 Feb 2022.

It has an API written in GO and a frontend written in React.

## Launch

Clone/Fork the repo with git clone <url>
Build the docker containers and launch the project with:
```sh
docker-compose up --build
```

The api is accessible on `http://localhost:1234/docs/index.html`
The frontend is accessible on `localhost:3001`

## Tasks

- Implement an error message when login fails
- Implement a small test for this new feature

Feel free to implement any other improvement as long as you write a test for it.

## List Redflags

Write here all red flags that you find in the code. Any examples that would stop a code review. If you want to fix some of them, go on.

1.- Styles inlined into the code. Try to put the styles into the specified scss or css files.
2.- No tests files from layouts folder.
3.- Generic functions like updateEmail or similars, put into a common.js file to be used.
4.- Dont have a 404 error page when trying to access into a incorrect path.
5.- Manage error messages into frontal code when failing the request from the API server.
6.- Not neccesary use two libraries like datefns and moment.

## How you would make this application maintainable and scalable

Write here all the steps you would take.
1.- Separate the backend and frontend code.
2.- Use TypeScript into the app to interact with the corrects types of data.
3.- Create a library for own components.

## Test submission

Please, submit this test as a new repository (a fork or a new one) in any free platform you want (bitbucket, gitlab, github, ..)