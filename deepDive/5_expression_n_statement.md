# Expression and Statement

- 값(value)은 식(expression)이 평가(evaluate)되어 생성된 결과를 말한다.
- 평가란 식을 해석해서 값을 생성하거나 참조하는 것을 의미.
- 즉 `10+20`이라는 expression이 evaluate 되어 30이라는 값을 생성.
- `var sum = 10 + 20;`여기에서 sum 변수에 할당되는 것은 10 + 20 이 아니라 평가된 결과 값인 30이다. 즉, 할당 이전에 평가되어 값을 생성해야 하는 것.
- 리터럴은 사람이 이해할 수 있는 문자나 기호를 사용해 값을 생성하는 표기법이다. 이때 연산자는 리터럴에 해당하지 않는다. (표현식은 리터럴이 아닐 수 있지만 리터럴은 표현식이다.)
- 표현식(expression)은 값으로 평가될 수 있는 문(statement)이다.
- 표현식이 평가된다면 새로운 값을 생성하거나 기존 값을 참조한다.
- 문(statement)은 프로그램을 구성하는 기본 단위이자 최소 실행 단위.
- 문은 여러 토큰으로 구성되는데, 토큰은 더이상 나눌 수 없는 코도의 기본 요소이다.
- 표현식인 문은 값으로 평가될 수 있기에 문이도 하며, 변수 선언문 같이 문이지만 값으로 평가될 수 없기에 표현식이 아닌 경우도 있다.
- `var x;` 이는 [변수 선언]문 이지만 표현식은 아님.
- 표현식인 문과 표현식이 아닌 문을 쉽게 구분하는 방법은 변수에 할당해 보는것이다.
- `var test = var x;` 이와 같이 선언문은 표현식이 아니기에 변수에 할당이 안된다.
- 크롬에서 표현식이 아닌 문을 실행하면 언제나 `undefined`를 출력한다. 이 출력된 `undefined`를 완료 값(completion value)이라고 부르는데, 이는 평가값이 아니기에 변수에 할당할 수도 없고 참조할 수도 없다.
