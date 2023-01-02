# Algorithm Squad

> 2023 코드스쿼드 알고리즘 스터디 저장소 입니다.

## 😎 Study Member

| ![kyhyun](https://avatars.githubusercontent.com/u/77887712?v=4) | ![Poco](https://avatars.githubusercontent.com/u/101160636?v=4) | ![Den](https://avatars.githubusercontent.com/u/81420856?v=4) | ![NANII](https://avatars.githubusercontent.com/u/107349637?v=4) |
| :-------------------------------------------------------------: | :------------------------------------------------------------: | :----------------------------------------------------------: | :-------------------------------------------------------------: |
|             [**Ethan**](https://github.com/kyhyun)              |             [**Poco**](https://github.com/poco111)             |           [**Den**](https://github.com/sjuhan123)            |            [**NANII**](https://github.com/bread1022)            |

## 💻 진행 방식

### ✅ 사용 방법 Summary

1. 원본 저장소 Fork 하기
2. Fork한 저장소를 로컬 저장소에 복사하기
3. main 브랜치에서 폴더구조 규칙에 맞게 파일을 생성해서 문제 풀기
4. 커밋 규칙에 따라 소스코드를 내 원격 저장소에 업로드하기
5. 내 원격 저장소에 있는 것을 원본 저장소에 PR 하기
6. 다른 사람 PR을 보고 코드 리뷰하기

### 1. 원본 저장소 Fork하기

- 스터디에 있는 저장소에 우측 상단에 위치한 `Fork` 버튼을 누르면 본인의 저장소에 해당 저장소가 생성된다.

![image](https://user-images.githubusercontent.com/77887712/210265643-2c1e3f08-58e2-42dd-ae46-c8cc1f0cdd57.png)

### 2. Fork한 저장소를 로컬 저장소에 복사하기

1. 빈 폴더(디렉토리)를 하나 생성한다. (이름은 알아서 이쁘게 정한다.)
2. 생성한 폴더 경로에서 아래의 명령어를 통해 원격에 있는 저장소를 복사해서 가져오자.
   - 여기서 `.` 은 현재 경로를 가리킨다. 따라서 생략하지 말고 포함시켜주자.
   - 중요한건 `clone`하는 대상은 `fork 해온 내 원격 저장소`라는 점을 유의해야한다.

```bash
git clone [내 원격 저장소 주소] .

// HTTPS 방식
$ git clone https://github.com/Algorithm-Squad/Algorithm.git .

// SSH 방식
$ git clone git@github.com:Algorithm-Squad/Algorithm.git .
```

### 3. 폴더 구조 / 파일 생성

- 폴더 구조는 `해당 주차/닉네임/문제 출처(플랫폼)/문제 이름` 형식으로 작업한다.
- `src` 폴더의 하위 구조로 작성한다.

#### 예시

![image](https://user-images.githubusercontent.com/77887712/210265665-ae3ac0cc-3b1c-47e2-9fea-41aa339112c5.png)

```bash
src/weekly1/ethan/leetCode/136_SingleNumber.js
```

### 4. 커밋 규칙 및 소스 코드 업로드

- Commit 메세지 작성에 규칙이 있으며, 이에 맞게 작성해야한다.
  - commit 메세지 : `문제 출처(플랫폼)] 문제이름/ 난이도`
  - description : `문제 주소(option)`
- 플랫폼 작성 양식
  - [BOJ] - 백준
  - [PGS] - 프로그래머스
  - [LTC] - 리트코드
  - [ETC] - 그외

#### 예시

```bash
$ git commit -m"[LTC]136. Single Number / easy

https://leetcode.com/problems/single-number/"
```

### 5. PR 양식 / PR 생성하기

#### 5-1. PR 생성하기

1. 저장소의 카테고리에 `Pull Requests` 를 들어가서 `New pull request` 를 선택한다.
2. Fork 한 저장소에서 원본 저장소로 PR을 보낼 때, 충돌 관련 내용을 체크하고 `Create pull request`버튼을 누른다.
3. PR 양식에 맞추어 PR 제목과 내용, 그리고 우측에 있는 라벨도 등록한 후 `Create pull request` 를 진행한다.
4. `head repository : fork한 내 저장소` + `compare : main`

→ `base repository: 원본 저장소` + `base : 내 닉네임으로 된 branch`

#### 5-2. PR 양식

##### PR 제목

- 닉네임 / 주차 / 푼 문제 갯수
- 예시) `Ethan / 1월 1주차 / 5문제`

##### PR 본문

1. 문제 출처
2. input 과 output 설명
3. 풀이 과정 (아이디어)

- 본문에 코멘트는 반드시 양식을 따를 필요 없이 자유로 작성해도 상관 없으나, 다른 리뷰어가 참고하기도 좋고, 문제에 대한 회고를 작성한다면 개인에게도 도움이 된다.

##### 라벨

- `assignee` : 내 아이디를 추가한다.
- `reviewer` : 작성자가 이미 문제를 푼 사람을 지정하거나 혹은 리뷰를 진행하려는 사람이 추가한다.

##### Merge

- 일요일 저녁 9시에 코드 리뷰 진행 후, 일괄적으로 Merge를 진행한다.

### 6. 코드 리뷰하기

- 다른 사람의 Pull Request (PR)을 보고 자유롭게 코드리뷰를 진행한다.
- 아래와 같은 플래그를 이용해서 코멘트를 달면 상대방의 기분을 상하지 않게 의도를 좀 더 잘 전달할 수 있다.
- 의견 제시
  - 잘했다고 생각하는 부분
  - 이렇게 하면 더 좋을 것 같다고 생각하는 부분
  - 왜 이렇게 풀었는지 궁금한 부분
  - 또 다른 풀이 방식을 제시
- 코드의 일부분 혹은 전체 코드 아래에 코멘트를 작성하는 리뷰 어느쪽이든 상관 없다.
