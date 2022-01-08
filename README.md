# 💻 코딩 테스트 과제 수행(22.01.05 - 22.01.08)

## ⚙ 기술 스택

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=React-Router&logoColor=black"> <img src="https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=yellow">

<br/>

## 📝 구현 사항

- [x] REST api를 통해 json-server와 통신 후 데이터 처리
- [x] 가공 방식 또는 재료 조건 선택에 의한 데이터 필터링(둘 다 선택 시 교집합)
- [x] 필터링 리셋 버튼 클릭 시 선택된 필터링 모두 해제 후 초기화
- [x] 요청의 진행 상황에 따른 데이터 필터링
- [x] 모바일 버전에서 햄버거 아이콘 클릭 시 메뉴 슬라이드 OPEN / CLOSE
- [x] PC 및 모바일 버전 디자인 작업

<br/>

## 🎄 Src Tree 구조

src  
ㅤ|-- api: json-server 요청 api 구현  
ㅤ|-- assets: 리소스  
ㅤ|ㅤㅤㅤ|-- images: 이미지 리소스  
ㅤ|-- components: 컴포넌트 구현  
ㅤ|-- hooks: 커스텀 훅 구현  
ㅤ|-- pages: 페이지 컴포넌트 구현  
ㅤ|-- styles: 글로벌 스타일

<br/>

## 🎮 데모
<img src="https://user-images.githubusercontent.com/21259498/148638144-81e93e62-57c7-49f1-ad9c-c03b1042407f.gif" width="700px"/> <img src="https://user-images.githubusercontent.com/21259498/148638167-224c1a67-c936-4fea-9ba5-cd35bf45e91e.gif" width="194px"/>

<br/>

## ▶ 실행 방법

### 1. 패키지 설치

```bash
yarn install # or npm install
```

### 2. 소스 빌드
```bash
yarn build
```

### 3. 서버 및 App 실행
```bash
yarn start
```

### 4. 웹 사이트(http://localhost:3000) 접속
