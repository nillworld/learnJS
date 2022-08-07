# BUN-!

- 일체형 JS 런타임.
- 번들러(webpack), 트랜스파일러(같은 언어이지만 문법만 바꿔주는 역할 - ex)typeScript, SASS, Babel), 패키지관리자(npm) 역할도 함.
- node.js는 초당 16,288개의 렌더링(요청 처리)을 하는 것에 비해 Bun은 초당 48,936개를 처리함.
- node.js에서 jest(node의 테스트용 종합 프레임워크) 테스트를 10만개 실행하면 34초가 걸리는데, Bun은 테스트 라이브러리가 내장되어 있고, 10만개 처리하는데 2.7초 밖에 안 걸림.
- 배터리(fetch, webSocket, readableStream)가 포함되어 있어서 개체를 내보내기만 하면 됨. ex) [test script](./server.js) - `bun run server.js`
- SQLite client가 내장되어 있음.
- Node-API의 90%를 지원(fs, path 등 많은 모듈을 지원)
- Bun은 Zig언어로 작성되어 빠름 (Zig는 수동 메모리 관리 기능이 있는 언어로, 때론 Rust보다 빠르고 '더 나은 C언어'로 불려지기도 함)
