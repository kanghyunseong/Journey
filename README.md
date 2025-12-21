# Journey

![React Native](https://img.shields.io/badge/React%20Native-0.7x-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Platform](https://img.shields.io/badge/platform-Android%20%7C%20iOS-lightgrey)
![State](https://img.shields.io/badge/state-react--query%20%7C%20zustand-orange)
![Backend](https://img.shields.io/badge/backend-NestJS-red?logo=nestjs)
![License](https://img.shields.io/badge/license-MIT-green)

지도 기반 장소 공유 모바일 앱 **Journey**는 사용자가 방문한 장소를 지도에 등록하고 사진·설명으로 피드를 작성하며, 캘린더에서 날짜별 게시물을 확인할 수 있는 서비스입니다.

---

## ✨ 주요 기능

* 🗺️ **지도 기반 장소 조회 및 등록** (react-native-maps)
* 📍 **Kakao 장소 검색 연동**
* 📝 **게시물(피드) 작성**: 이미지 업로드 · 미리보기 지원
* 📅 **캘린더 뷰**로 날짜별 게시물 확인
* 🔐 **카카오 / 애플 로그인** 및 권한 요청 UX
* ⚡ **상태 관리**: react-query + Zustand

---

## 🧱 기술 스택

**Frontend**

* React Native
* TypeScript
* react-navigation
* react-native-maps
* react-query
* Zustand

**Backend**

* NestJS

---

## 📁 폴더 구조 (요약)

```
journey/
├─ front/                # React Native 앱
│  └─ src/
│     ├─ components/     # 재사용 UI (Calendar, PostForm 등)
│     ├─ screens/        # 화면 컴포넌트 (MapHomeScreen, FeedDetail 등)
│     ├─ hooks/          # 커스텀 훅 (useSearchLocation, usePermission 등)
│     └─ api/            # API 클라이언트 설정
└─ server/               # NestJS 백엔드 API
```

---

## 🚀 설치 및 실행

### Frontend

```bash
cd front
npm install
npm start        # Metro 실행
npm run android  # Android
npm run ios      # iOS
```

### Backend

```bash
cd server
npm install
npm run start:dev
```

---

## 📌 주요 파일

* `front/src/components/calendar/Calendar.tsx`

  * 월간 달력 UI 및 날짜 선택 로직
* `front/src/hooks/useSearchLocation.ts`

  * Kakao 장소 검색 커스텀 훅
* `front/src/components/post/PostForm.tsx`

  * 게시물 작성 폼 및 이미지 미리보기
* `front/src/api/axios.ts`

  * API 클라이언트 설정
* `server/src/post/post.service.ts`

  * 게시물 도메인 비즈니스 로직

---

## 🧪 테스트 / 코드 품질

* Jest 기반 테스트 설정
* ESLint / Prettier 적용

---

## 🤝 기여 방법

* 버그 리포트, 문서 개선, 간단한 PR 환영합니다
* 로컬 실행 가이드 확인 후 작업 브랜치에서 PR을 제출해주세요

---

## 🧠 Why react-query / Zustand?

### react-query 선택 이유

* **서버 상태(Server State)와 UI 상태의 명확한 분리**
  게시물 목록, 장소 검색 결과, 상세 데이터 등 서버에서 가져오는 데이터의 생명주기(로딩·에러·캐싱)를 컴포넌트 외부에서 일관되게 관리하기 위해 react-query를 선택했습니다.

* **자동 캐싱 및 데이터 동기화**
  동일한 게시물/장소 데이터를 여러 화면(Map, Feed, Calendar)에서 사용하기 때문에, 캐싱과 refetch 전략을 자동으로 처리해주는 react-query가 적합했습니다.

* **UX 개선 (로딩/에러 처리 단순화)**
  `isLoading`, `isError`, `refetch` 등의 상태를 표준화하여 로딩 스피너, 에러 UI를 일관되게 구현할 수 있었습니다.

* **확장성과 유지보수성**
  API 로직을 커스텀 훅으로 분리(`usePosts`, `useSearchLocation` 등)하여 기능 확장 시 코드 수정 범위를 최소화했습니다.

---

### Zustand 선택 이유

* **가볍고 직관적인 전역 상태 관리**
  로그인 상태, 사용자 정보, 선택된 날짜/장소 등 클라이언트 전역 상태를 Redux보다 간결한 방식으로 관리하기 위해 Zustand를 사용했습니다.

* **보일러플레이트 최소화**
  액션, 리듀서, 디스패치 구조 없이 함수 기반으로 상태를 정의할 수 있어 학습 비용과 코드 양을 크게 줄였습니다.

* **React Native 친화적 구조**
  모바일 환경에서 필요한 단순한 전역 상태(권한 상태, 모달 상태 등)를 빠르게 처리하는 데 적합했습니다.

* **react-query와의 역할 분리**

  * 서버 상태: react-query
  * UI/클라이언트 상태: Zustand
    로 책임을 명확히 나누어 상태 관리 구조를 단순화했습니다.

---
### 해당 프로젝트는 클론 코딩 + 기능 추가로 구현된 프로젝트입니다!

