# about JS (node)

- .env 파일을 읽는 모듈인 dotenv는 `require("dotenv").config();` 이와 같이 경로 없이 설정하면 프로젝트 실행 path의 .env 파일을 읽는다.
- config 파일을 `require`로 읽을 때 `const config = require("[path]");`이와 같이 쓰면 현재 코드가 있는 path 기준으로 상대 경로가 된다.
