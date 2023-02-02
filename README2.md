
# API TESTING - TRELLO

Trello Testing Project: this is a summary to setup the environment for API Testing with Trello as a demo example.


## Pre-Req.

This project use newman. If you don't have newman installed, run next command:

```bash
  npm i newman
```

## Dependencies

This project use next libraries: .dotenv , .dotenv-expand, .yargs

- .dotenv install:
```bash
  npm i dotenv
```
- .dotenv-expand install:
```bash
  npm i dotenv-expand
```
- .yargs install:
```bash
  npm i yargs
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`POSTMAN_API_KEY`  

Inside .env file you need to complete the _UID variable values , please check the Postman CollectionID and Postman EnvironmentID and add the value inside next variables:

`NEWMAN_QA_ENV_UID`

`NEWMAN_DEV_ENV_UID`

`NEWMAN_DEV_ENV_UID`


## Running Tests

Github actions are setting up to execute your tests on push to qa/dev branches. But also you can check for test-results in terminal:

For run tests in  qa-environment:
```bash
  npm run qa
```

For run tests in  dev-environment:
```bash
  npm run dev
```



## Reports

To check for test results, you can go to Actions tab inside github and check on the job results.

Example Report:
![Example](https://github.blog/wp-content/uploads/2022/05/image-3.png)

## Authors

- [@HanyR](https://github.com/HanyR)

![Logo](https://static3.pisapapeles.net/uploads/2020/05/trello-logo.png)