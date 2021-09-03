# Refactoring-playground

*해당 레포지토리는 [마틴 파울러 (Martin Fowler)](https://ko.wikipedia.org/wiki/마틴_파울러) 의 저서 Refactoring 2판을 읽으며 따라간 것을 기록하는 저장소이다.*

## 실행
```shell
ts-node main.ts
```

---

> 프로그램이 새로운 기능을 추가하기에 편한 구조가 아니라면,  
> 먼저 기능을 추가하기 쉬운 형태로 리팩터링하고 나서 원하는 기능을 추가한다.

## 리팩토링의 첫 단계
```text
리팩토링할 코드 영역을 꼼꼼하게 검사해줄 테스트 코드부터 마련
```

> 워드 커닝햄 (Ward Cunningham)
> 
> 코드 분석을 통해 얻은 정보는 휘발성이 높기로 악명 높은 저장장치인 내 머릿속에 기록되므로, 잊지 않으려면 재빨리 코드에 반영하라
> 
> 그러면, 다음번에 코드를 볼 때 다시 분석하지 않아도 코드 스스로가 자신이 하는 일이 무엇인지 이야기해줄 것이다.

