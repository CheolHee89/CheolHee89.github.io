# GitHub 저장소 문제 해결 가이드

## 현재 상황
- 원격 저장소 URL: `https://github.com/CheoHee89/CheolHee89.github.io.git`
- 오류: `Repository not found`

## 문제 원인
GitHub에 저장소가 아직 생성되지 않았거나, 저장소 이름이 잘못되었을 수 있습니다.

## 해결 방법

### 방법 1: GitHub에서 저장소 생성 (권장)

1. **GitHub 웹사이트 접속**
   - https://github.com/CheoHee89 에 로그인

2. **새 저장소 생성**
   - 우측 상단 **+** 버튼 클릭 → **New repository**
   - **Repository name**: `CheolHee89.github.io` (정확히 이 이름으로!)
   - **Description**: 선택사항
   - **Public** 선택 (GitHub Pages는 Public이어야 무료)
   - **Initialize this repository with a README** 체크 해제
   - **Add .gitignore** 선택 안 함
   - **Choose a license** 선택 안 함
   - **Create repository** 클릭

3. **로컬에서 푸시**
   ```bash
   git push -u origin main
   ```

### 방법 2: 저장소 이름 확인 및 수정

만약 저장소 이름이 다르다면:

1. **현재 원격 저장소 확인**
   ```bash
   git remote -v
   ```

2. **원격 저장소 URL 수정** (필요한 경우)
   ```bash
   git remote set-url origin https://github.com/CheoHee89/정확한저장소이름.github.io.git
   ```

3. **다시 푸시**
   ```bash
   git push -u origin main
   ```

### 방법 3: 인증 문제 해결

만약 저장소는 존재하지만 권한 문제라면:

1. **Personal Access Token 사용**
   - GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
   - 새 토큰 생성 (repo 권한 필요)
   - 푸시 시 비밀번호 대신 토큰 사용

2. **SSH 사용** (권장)
   ```bash
   # SSH 키가 있다면
   git remote set-url origin git@github.com:CheoHee89/CheolHee89.github.io.git
   git push -u origin main
   ```

## 저장소 생성 후 GitHub Pages 활성화

1. 저장소 페이지에서 **Settings** 클릭
2. 왼쪽 메뉴에서 **Pages** 클릭
3. **Source** 섹션:
   - **Deploy from a branch** 선택
   - **Branch**: `main` 선택
   - **Folder**: `/ (root)` 선택
4. **Save** 클릭
5. 몇 분 후 `https://cheolhee89.github.io` 접속 확인

## 체크리스트

- [ ] GitHub에 로그인되어 있는가?
- [ ] 저장소 이름이 정확한가? (`CheolHee89.github.io`)
- [ ] 저장소가 Public인가?
- [ ] 저장소가 생성되었는가?
- [ ] 로컬 파일이 커밋되었는가?

