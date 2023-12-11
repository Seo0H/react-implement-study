# React Implement Study

## 진행 기간

> 23.12.11 ~ 23.12.14
> 15일(금) 대면 모임 전까지 진행

## 학습 목표

- **React**를 이용한 기능 구현 시 **같은 기능을 다른 방법으로 구현할 수 있는** **여러 경우의 수**를 보고
  그 중 **더 나은 것을 가려낼 수 있는 능력**을 키우는 것
- **Front End 직무에서 요구하는 기본적인 능력**에 대해 자신이 공부 중인 기술로 **학습하는 것**
  - 사용자 상호작용 핸들링과 정보 수집
  - 요구사항에 맞게 주어진 데이터를 시각화
  - 프로젝트 설계
  - 최적화
  - ect…

## 안내 사항

- **레포지토리 위치와 이름 규칙**: `JSPS / react-implement-study` 레포지토리를 fork 하여 작업 후, 15일 전까지 해당 레포로 PR
- **평가 기준**
  - Git 관리 수준
  - 기능의 정상 동작 여부
  - 작성된 코드의 가독성과 퀄리티
  - 사용한 기술의 이유와 목적이 명확한지의 여부

## 진행 가이드

| 진행 기간            | @2023년 12월 11일 → 2023년 12월 14일                                                                                                                                                                                                                                                                                                           |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 빌드 기술            | React 관련 기술 자유롭게 사용 가능                                                                                                                                                                                                                                                                                                             |
| 상태 관리            | 자유 선택                                                                                                                                                                                                                                                                                                                                      |
| 사용 가능 라이브러리 | - React Router(react-router-dom) <br/> - HTTP Client 라이브러리(Axios 등) <br/> - 스타일링 관련 라이브러리(Sass, Styled Components, Emotion, tailwind 등) <br/> - 아이콘 등 UI 관련 라이브러리(Font-Awesome, React-Icons, Bootstrap 등) <br/> - 기능과 직접적인 연관이 없는 설정관련 라이브러리(craco, dotenv, typescript, testing library 등) |
| 사용 언어            | JS / TS 선택                                                                                                                                                                                                                                                                                                                                   |
| 컴포넌트 유형        | 함수 컴포넌트                                                                                                                                                                                                                                                                                                                                  |
| 코드 포메팅          | pretter, eslint, eslint plugin import 사용                                                                                                                                                                                                                                                                                                     |

## 참여 방법

1. `React-implement-study` 레포지토리를 fork 합니다.
2. `React-implement-study/your-nick-name` 경로에서 작업합니다.
3. 모임 전 까지 업스트림 레포지토리 (`React-implement-study`) 로 PR합니다.

## 구현 요구 사항 : TO DO List

### 필수 구현 사항

**요구 사항 1 : 라우팅과 온보딩 UI**

- `/todo` 경로에 접속하면 to-do-list의 목록을 볼 수 있어야 합니다.
- 목록에서는 유저가 추가한 to-do 의 목록과 완료 여부가 표시되어야 합니다.

**요구 사항 2 : Todo CRUD**

- todo 의 `Create` , `Read`, `Update`, `Delete`가 가능해야 합니다.
- Create : 새로운 todo를 생성할 수 있어야 합니다.
- Read : todo가 생성되면 UI에 추가된 todo가 적용되어야 합니다.
- Update: 생성된 todo의 완료 여부와 내용을 수정할 수 있어야 합니다.
  - 수정 모드에서는 수정 완료와 취소 동작을 할 수 있습니다.
  - 수정 완료 버튼을 누르면 수정한 내용이 적용됩니다.
  - 취소 버튼을 누르면 수정 내용을 적용하지 않습니다.
- Delete : 생성된 todo의 개별 삭제와 전체 삭제가 가능해야 합니다.

### 선택 구현 사항

**선택 사항 1 : API 사용**

- [`JSPS / react-implement-sutdy-api`](https://github.com/JavaScript-PS-Study/react-implement-study-api) 를 로컬 서버로 사용합니다.
- 해당 레포의 readme에 작성된 API spec을 지켜 위 필수 구현 사항을 구현합니다.

**선택 사항 2 : Todo State Filtering**

- todo리스트의 진행 상태 별로 필터링 기능이 제공되어야 합니다.
- 진행 상태 종류 : 미완료 - 완료

**선택 사항 3 : Testing 코드 구현**

- Jest, React Testing Library를 이용해 요구 사항 구현에 대한 테스트 코드를 작성합니다.

## 스터디의 시스템에 의견이나 문제가 있다면?

- Issue로 등록해서 알려주세요!

## 참고 레포

- <https://github.com/walking-sunset/selection-task>
- <https://github.com/gothinkster/realworld>

## 참여자

<table>
    <td align="center">
      <a href="https://github.com/Seo0H">
          <img src=https://avatars.githubusercontent.com/u/108770949?v=4" width="100px;" alt=""/>
          <br />
          <sub><b>SEO</b></sub>
          <br />
          <sub>Group leader</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/g2hhh2ee">
          <img src=https://avatars.githubusercontent.com/u/57996351?s=88&v=4" width="100px;" alt=""/>
          <br />
          <sub><b>JiHee Han</b></sub>
          <br />
          <sub>Participants</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/minh0518">
          <img src=https://avatars.githubusercontent.com/u/78631876?s=88&v=4" width="100px;" alt=""/>
          <br />
          <sub><b>조민호</b></sub>
          <br />
          <sub>Participants</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/syeonnn">
          <img src="https://avatars.githubusercontent.com/u/68735700?s=88&v=4" width="100px;" alt=""/>
          <br />
          <sub><b>Seoyeon Park</b></sub>
          <br />
          <sub>Participants</sub>
      </a>
    </td>
</table>
