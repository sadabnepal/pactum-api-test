# api testing using pactum js with mock data

### getting started
```
git clone https://github.com/sadabnepal/pactum-api-test.git
cd pactum-api-test
```

### pre-requisite
[![NodeJs](https://img.shields.io/badge/-NodeJS-%23339933?logo=npm)](https://nodejs.org/en/download/)
[![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)

### set environment
```
export ENV=local  
      OR
export ENV=dev
```

### run test
```
npm run test
```

### stub details
The project is using [pactum mock](https://pactumjs.github.io/guides/mock-server.html) which provides following endpoints 

`GET: /api/users/{id}` fetches the user information by `user id` <br>
`POST: /api/users` fetches the user with query parameter `{ page: 2 }` <br>
`POST: /api/users` creates user with body `{ name: 'Ken', job: 'Test Engineer' }`
`GET: /bearer` authenticate user with token that includes `Bearer` <br>

### learning references:
pactum: https://pactumjs.github.io/introduction/welcome.html <br>
supertest: http://visionmedia.github <br>
mocha: https://ricostacruz.com/mocha/ <br>
mocha config: https://github.com/mochajs/mocha/tree/master/example/config <br>
eslint: https://eslint.org/docs/latest/use/getting-started <br>
vscode settings: https://code.visualstudio.com/docs/getstarted/settings <br>
Blog: https://medium.com/@joaovitorcoelho10/pactumjs-a-next-gen-rest-api-testing-tool-ae88a9e51916

### TODO:
      - better reusable http calls
