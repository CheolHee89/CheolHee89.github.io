# GitHub Pages 배포 가이드

이 문서는 GitHub Pages에 이력서 사이트를 배포하는 단계별 가이드를 제공합니다.

## 방법 1: GitHub 웹 인터페이스 사용 (가장 간단)

### 1단계: GitHub 저장소 생성

1. [GitHub](https://github.com)에 로그인합니다
2. 우측 상단의 **+** 버튼을 클릭하고 **New repository**를 선택합니다
3. 저장소 설정:
   - **Repository name**: `username.github.io` (username을 본인의 GitHub 사용자명으로 변경)
     - 예: `honggildong.github.io`
   - **Description**: "정보보안 전문가 이력서" (선택사항)
   - **Public** 선택 (GitHub Pages는 Public 저장소에서 무료)
   - **Initialize this repository with a README** 체크 해제
4. **Create repository** 버튼을 클릭합니다

### 2단계: 파일 업로드

1. 생성된 저장소 페이지에서 **uploading an existing file** 링크를 클릭합니다
2. 또는 **Add file** > **Upload files**를 클릭합니다
3. 로컬 컴퓨터에서 다음 파일들을 드래그 앤 드롭으로 업로드합니다:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `.gitignore`
   - `images/` 폴더 (프로필 사진 포함)
   - `projects/` 폴더 (PDF 파일 포함)
   - `.github/` 폴더 (워크플로우 파일 포함)
4. 페이지 하단의 **Commit changes** 버튼을 클릭합니다

### 3단계: GitHub Pages 활성화

1. 저장소 페이지에서 **Settings** 탭을 클릭합니다
2. 왼쪽 사이드바에서 **Pages**를 클릭합니다
3. **Source** 섹션에서:
   - **Deploy from a branch** 선택
   - **Branch**: `main` (또는 `master`) 선택
   - **Folder**: `/ (root)` 선택
4. **Save** 버튼을 클릭합니다

### 4단계: 배포 확인

1. 몇 분 후 (보통 1-2분) 저장소 페이지로 돌아갑니다
2. **Settings** > **Pages**에서 배포 상태를 확인합니다
3. 초록색 체크 표시와 함께 "Your site is live at..." 메시지가 나타납니다
4. 제공된 URL (예: `https://username.github.io`)로 접속하여 사이트를 확인합니다

---

## 방법 2: Git 명령어 사용 (고급)

### 사전 준비

1. [Git 설치 확인](https://git-scm.com/downloads)
2. GitHub 계정 준비

### 1단계: Git 저장소 초기화

터미널(또는 PowerShell)에서 프로젝트 폴더로 이동한 후:

```bash
# Git 저장소 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: 이력서 사이트 생성"
```

### 2단계: GitHub 저장소 생성 및 연결

1. GitHub에서 새 저장소 생성 (`username.github.io`)
2. 저장소 생성 후 표시되는 명령어를 사용하거나, 아래 명령어 실행:

```bash
# 원격 저장소 추가 (username을 본인의 GitHub 사용자명으로 변경)
git remote add origin https://github.com/username/username.github.io.git

# 브랜치 이름을 main으로 설정
git branch -M main

# GitHub에 푸시
git push -u origin main
```

### 3단계: GitHub Pages 활성화

방법 1의 3단계와 동일합니다:
1. 저장소 **Settings** > **Pages**
2. **Deploy from a branch** 선택
3. **Branch**: `main`, **Folder**: `/ (root)`
4. **Save**

---

## 배포 후 확인사항

### ✅ 체크리스트

- [ ] 사이트가 정상적으로 로드되는가?
- [ ] 프로필 사진이 표시되는가?
- [ ] 모든 섹션이 정상적으로 보이는가?
- [ ] PDF 다운로드 버튼이 작동하는가?
- [ ] 모바일에서도 잘 보이는가?

### 문제 해결

**사이트가 표시되지 않는 경우:**
- 배포가 완료될 때까지 몇 분 기다려보세요
- 브라우저 캐시를 지우고 다시 시도해보세요 (Ctrl+F5)
- GitHub 저장소의 **Settings** > **Pages**에서 배포 상태를 확인하세요

**이미지가 표시되지 않는 경우:**
- `images/` 폴더에 파일이 제대로 업로드되었는지 확인하세요
- 파일 경로가 `images/profile.jpg`인지 확인하세요
- 파일명 대소문자가 정확한지 확인하세요 (GitHub는 대소문자를 구분합니다)

**PDF 다운로드가 안 되는 경우:**
- `projects/` 폴더에 PDF 파일이 있는지 확인하세요
- 파일명이 `project1.pdf`, `project2.pdf`, `project3.pdf`인지 확인하세요
- 파일 크기가 너무 크지 않은지 확인하세요 (10MB 이하 권장)

---

## 업데이트 방법

### 웹 인터페이스 사용

1. GitHub 저장소 페이지에서 파일을 클릭합니다
2. 연필 아이콘(✏️)을 클릭하여 편집합니다
3. 변경사항을 저장하고 **Commit changes**를 클릭합니다
4. 자동으로 재배포됩니다 (몇 분 소요)

### Git 명령어 사용

```bash
# 변경사항 확인
git status

# 파일 추가
git add .

# 커밋
git commit -m "업데이트 내용 설명"

# GitHub에 푸시
git push
```

---

## 추가 팁

1. **커스텀 도메인 사용**: Settings > Pages에서 Custom domain을 설정할 수 있습니다
2. **HTTPS 자동 적용**: GitHub Pages는 자동으로 HTTPS를 제공합니다
3. **빠른 업데이트**: 변경사항은 보통 1-2분 내에 반영됩니다

---

## 도움이 필요하신가요?

- [GitHub Pages 공식 문서](https://docs.github.com/en/pages)
- [GitHub 커뮤니티 포럼](https://github.community/)

