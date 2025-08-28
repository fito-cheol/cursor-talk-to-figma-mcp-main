# 노란우산 가입 폼

피그마 디자인을 기반으로 제작된 노란우산 가입 정보 입력 폼입니다.

## 📁 파일 구조

```
├── figma-signup-form.html    # 순수 HTML 버전
├── SignupForm.jsx           # React 컴포넌트
├── SignupForm.scss          # SCSS 스타일
├── App.jsx                  # React 앱 메인 컴포넌트
├── App.scss                 # 앱 전역 스타일
├── package.json             # 프로젝트 설정
└── README.md               # 프로젝트 설명
```

## 🚀 시작하기

### HTML 버전 사용
1. `figma-signup-form.html` 파일을 브라우저에서 직접 열기
2. 별도의 설치 과정 없이 바로 사용 가능

### React 버전 사용
1. 의존성 설치:
```bash
npm install
```

2. 개발 서버 실행:
```bash
npm start
```

3. 브라우저에서 `http://localhost:3000` 접속

## 🎨 디자인 특징

- **모바일 우선 디자인**: 375px 최대 너비로 모바일 환경에 최적화
- **Pretendard 폰트**: 한국어에 최적화된 폰트 사용
- **접근성 고려**: 키보드 네비게이션 및 포커스 스타일 지원
- **반응형 디자인**: 다양한 화면 크기에 대응

## 📱 주요 기능

### 폼 입력 필드
- **저축금액(월)**: 50,000원~1,000,000원 범위 입력
- **저축 주기**: 매월/3개월에 한번 선택
- **자동이체일**: 드롭다운으로 날짜 선택
- **관리 직원**: 검색 기능이 있는 입력 필드

### 라디오 버튼 그룹
- **가입증서 수령 방법**: 알림톡/이메일/우편
- **우편 받으실 곳**: 자택/사업장
- **희망 장려금**: 신청/미신청

### 진행 상태 표시
- 3단계 진행 바 (현재 3단계)
- 단계별 시각적 피드백

### 버튼 상태 관리
- **이전 버튼**: 항상 활성화
- **다음 버튼**: 필수 필드 입력 시 활성화

## 🎯 기술 스택

### HTML 버전
- HTML5
- CSS3
- Vanilla JavaScript

### React 버전
- React 18
- SCSS
- React Hooks (useState)

## 🎨 색상 팔레트

```scss
$primary-color: #2873e3;      // 메인 블루
$primary-light: #f3f9ff;      // 연한 블루
$primary-dark: #235fd2;       // 진한 블루
$text-primary: #101116;       // 주요 텍스트
$text-secondary: #454855;     // 보조 텍스트
$text-tertiary: #737684;      // 세 번째 텍스트
$border-color: #c5c8d3;       // 테두리
$border-light: #979baa;       // 연한 테두리
$background-light: #f3f4f7;   // 연한 배경
$background-white: #ffffff;   // 흰색 배경
$disabled-color: #d3d6de;     // 비활성화 색상
```

## 📋 폼 검증

다음 필드들이 필수 입력 항목입니다:
- 저축금액(월)
- 자동이체일
- 관리 직원

모든 필수 필드가 입력되면 "다음" 버튼이 활성화됩니다.

## 🔧 커스터마이징

### 색상 변경
`SignupForm.scss` 파일의 변수 섹션에서 색상을 수정할 수 있습니다:

```scss
$primary-color: #your-color;
$text-primary: #your-text-color;
```

### 폼 필드 추가
`SignupForm.jsx`의 `formData` state에 새로운 필드를 추가하고, 해당하는 JSX 요소를 생성하면 됩니다.

## 📱 브라우저 지원

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.
