# 정보보안 전문가 이력서 홈페이지

정보보안/보안컨설팅 직무에 맞는 전문적인 이력서 홈페이지입니다. GitHub Pages를 통해 무료로 호스팅할 수 있습니다.

## 주요 기능

- 📄 프로필 및 자기소개
- 🎓 학력 정보
- 💼 기술 스택 (Network, Security, Cloud, ETC)
- 🏆 자격사항
- 📁 프로젝트 포트폴리오 (PDF 다운로드 가능)
- 📱 완전 반응형 디자인
- 🎨 모던 미니멀 디자인

## 파일 구조

```
github.myio/
├── index.html          # 메인 HTML 파일
├── styles.css          # 스타일시트
├── script.js           # JavaScript 기능
├── projects/           # 프로젝트 PDF 파일 폴더
│   ├── project1.pdf
│   ├── project2.pdf
│   └── project3.pdf
└── README.md           # 이 파일
```

## GitHub Pages 배포 방법

### 1. GitHub 저장소 생성

1. GitHub에 로그인합니다.
2. 새 저장소를 생성합니다 (예: `username.github.io`)
3. 저장소를 로컬로 클론합니다:
   ```bash
   git clone https://github.com/username/username.github.io.git
   cd username.github.io
   ```

### 2. 파일 업로드

1. 이 프로젝트의 모든 파일을 저장소 폴더에 복사합니다.
2. 프로젝트 PDF 파일들을 `projects/` 폴더에 추가합니다.
3. `index.html` 파일의 샘플 데이터를 본인의 정보로 수정합니다.

### 3. GitHub Pages 활성화

1. GitHub 저장소 페이지로 이동합니다.
2. **Settings** 탭을 클릭합니다.
3. 왼쪽 메뉴에서 **Pages**를 선택합니다.
4. **Source** 섹션에서 **Deploy from a branch**를 선택합니다.
5. **Branch**를 `main` (또는 `master`)로 선택하고 `/ (root)`를 선택합니다.
6. **Save** 버튼을 클릭합니다.

### 4. 배포 확인

몇 분 후 `https://username.github.io`에서 사이트를 확인할 수 있습니다.

## 내용 수정 방법

### 프로필 정보 수정

`index.html` 파일의 프로필 섹션을 수정합니다:

```html
<h1 class="profile-name">홍길동</h1>
<h2 class="profile-title">정보보안 컨설턴트</h2>
<p class="profile-description">...</p>
```

### 프로필 사진 변경

1. 프로필 사진을 준비합니다
   - 권장 크기: **200x200px** 또는 **400x400px** (정사각형)
   - 권장 형식: **JPG** 또는 **PNG**
   - 파일 크기: 1MB 이하 권장

2. 파일명을 `profile.jpg` 또는 `profile.png`로 변경합니다

3. `images/` 폴더에 파일을 저장합니다

4. `index.html`에서 이미지 경로를 확인합니다 (이미 설정되어 있습니다):

```html
<img src="images/profile.jpg" alt="Profile Picture" id="profile-img">
```

**참고**: 
- 파일이 없으면 자동으로 플레이스홀더 이미지가 표시됩니다
- PNG 파일을 사용하는 경우 `images/profile.png`로 경로를 수정하세요
- 외부 이미지 URL을 사용하려면 `src` 속성에 전체 URL을 입력하세요
- 자세한 가이드는 `images/README.md`를 참고하세요

### 연락처 정보 수정

`index.html` 파일의 연락처 링크를 수정합니다:

```html
<a href="mailto:your.email@example.com" class="contact-link">이메일</a>
<a href="https://github.com/yourusername" class="contact-link" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/yourprofile" class="contact-link" target="_blank">LinkedIn</a>
```

### 학력 정보 수정

`index.html` 파일의 Education 섹션을 수정합니다:

```html
<div class="education-item">
    <div class="education-year">2015 - 2019</div>
    <div class="education-details">
        <h3>컴퓨터공학과 학사</h3>
        <p class="education-school">○○대학교</p>
        <p class="education-description">...</p>
    </div>
</div>
```

### 기술 스택 수정

`index.html` 파일의 Skills 섹션을 수정합니다. 각 카테고리별로 기술을 추가/수정할 수 있습니다:

```html
<div class="skill-category">
    <h3 class="skill-category-title">Security</h3>
    <ul class="skill-list">
        <li>침투 테스트 (OWASP, PTES)</li>
        <li>취약점 분석 및 평가</li>
        <!-- 추가 기술 항목 -->
    </ul>
</div>
```

### 자격사항 수정

`index.html` 파일의 Certifications 섹션을 수정합니다:

```html
<div class="certification-item">
    <div class="cert-icon">🏆</div>
    <div class="cert-details">
        <h3>CISSP</h3>
        <p class="cert-org">(ISC)²</p>
        <p class="cert-date">2022.03</p>
    </div>
</div>
```

### 프로젝트 정보 수정

`index.html` 파일의 Projects 섹션을 수정합니다:

```html
<div class="project-card">
    <div class="project-header">
        <h3 class="project-title">프로젝트 제목</h3>
        <span class="project-year">2023.01 - 2023.06</span>
    </div>
    <p class="project-description">프로젝트 설명...</p>
    <div class="project-tech">
        <span class="tech-tag">기술1</span>
        <span class="tech-tag">기술2</span>
    </div>
    <a href="projects/project1.pdf" download class="btn-download">
        📄 PDF 다운로드
    </a>
</div>
```

### 프로젝트 PDF 추가

1. PDF 파일을 준비합니다.
2. `projects/` 폴더에 파일을 저장합니다.
3. 파일명을 `project1.pdf`, `project2.pdf`, `project3.pdf`로 지정합니다.
4. `index.html`에서 PDF 링크 경로가 올바른지 확인합니다.

### 색상 테마 변경

`styles.css` 파일의 `:root` 변수를 수정하여 색상을 변경할 수 있습니다:

```css
:root {
    --primary-color: #2563eb;    /* 주요 색상 */
    --secondary-color: #1e40af;  /* 보조 색상 */
    --text-primary: #1f2937;     /* 주요 텍스트 색상 */
    --text-secondary: #6b7280;   /* 보조 텍스트 색상 */
}
```

## 로컬에서 테스트하기

1. 로컬 웹 서버를 실행합니다:
   ```bash
   # Python 3 사용
   python -m http.server 8000
   
   # Node.js 사용 (http-server 설치 필요)
   npx http-server
   ```

2. 브라우저에서 `http://localhost:8000`으로 접속합니다.

## 커스터마이징 팁

- **폰트 변경**: `styles.css`의 `body` 선택자에서 `font-family`를 수정합니다.
- **섹션 순서 변경**: `index.html`에서 섹션의 순서를 변경합니다.
- **애니메이션 조정**: `script.js`에서 Intersection Observer 옵션을 수정합니다.
- **레이아웃 변경**: `styles.css`에서 그리드 레이아웃을 조정합니다.

## 브라우저 호환성

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)

## 라이선스

이 프로젝트는 자유롭게 사용하고 수정할 수 있습니다.

## 문의

문제가 발생하거나 질문이 있으시면 GitHub Issues를 통해 문의해주세요.

