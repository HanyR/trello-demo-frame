
# API TESTING - TRELLO

Trello Testing Project: this is a summary to setup the environment for API Testing with Trello as a demo example.


## Dependencies

This project use next libraries: 
- .dotenv
- .dotenv-expand 
- .yargs

## Install dependencies:
```bash
  npm i
```
## Local Setup:
### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`POSTMAN_API_KEY`

`NEWMAN_QA_ENV_UID`

`NEWMAN_DEV_ENV_UID`

`NEWMAN_DEV_ENV_UID`


## Github Setup:
### Environment Variables

To run this project in Github repo, you will need to add the following environment variables in 'Settings/Secret and variables' section 

`POSTMAN_API_KEY`

`NEWMAN_QA_ENV_UID`

`NEWMAN_DEV_ENV_UID`

`NEWMAN_DEV_ENV_UID`

## Running Tests

Run your local tests with the next commands:

Running tests in  qa-environment:
```bash
  npm run qa
```

Running tests in  dev-environment:
```bash
  npm run dev
```

## Reports

To check for test results, you can go to Actions tab inside github and check on the job results.

Example Report:
![Example](https://github.blog/wp-content/uploads/2022/05/image-3.png)

![Example2](https://miro.medium.com/max/1400/0*vKI0jXmXheDXW6GA)

## Authors

- [@HanyR](https://github.com/HanyR)

![Logo](https://static3.pisapapeles.net/uploads/2020/05/trello-logo.png)