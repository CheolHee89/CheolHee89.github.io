# Git 인증 문제 해결 가이드

## 현재 문제
- 다른 계정(`kopo-chlee`)으로 인증되어 있어 `CheolHee89` 저장소에 접근할 수 없습니다.

## 해결 방법

### 방법 1: Windows 자격 증명 관리자에서 제거 (권장)

1. **Windows 자격 증명 관리자 열기**
   - Windows 검색에서 "자격 증명 관리자" 또는 "Credential Manager" 검색
   - 또는 `Win + R` → `control /name Microsoft.CredentialManager` 입력

2. **Windows 자격 증명 탭 클릭**

3. **GitHub 관련 자격 증명 찾기**
   - `git:https://github.com` 또는 `github.com` 검색

4. **자격 증명 제거**
   - 해당 항목을 클릭하고 **제거** 또는 **편집** 클릭
   - 사용자 이름과 비밀번호 삭제 후 저장

5. **다시 푸시 시도**
   - 푸시할 때 GitHub 사용자명과 Personal Access Token 입력

### 방법 2: Personal Access Token 사용

1. **GitHub에서 토큰 생성**
   - GitHub 로그인 → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - **Generate new token (classic)** 클릭
   - **Note**: "Git Push Token" 등 설명 입력
   - **Expiration**: 원하는 기간 선택
   - **Select scopes**: `repo` 체크 (모든 권한)
   - **Generate token** 클릭
   - **토큰 복사** (한 번만 표시됨!)

2. **푸시 시 토큰 사용**
   - 사용자명: `CheolHee89`
   - 비밀번호: 생성한 Personal Access Token 붙여넣기

### 방법 3: Git Credential Manager 사용

PowerShell에서:
```powershell
# 자격 증명 제거
git credential-manager-core erase
# 또는
git credential reject https://github.com
```

그 다음 푸시 시 새 자격 증명 입력

### 방법 4: SSH 사용 (고급)

1. SSH 키 생성 (이미 있다면 생략)
2. GitHub에 SSH 키 추가
3. 원격 저장소 URL을 SSH로 변경:
   ```bash
   git remote set-url origin git@github.com:CheolHee89/CheolHee89.github.git
   git push -u origin main
   ```

## 빠른 해결 (PowerShell)

```powershell
# 자격 증명 제거
cmdkey /list | findstr github
# GitHub 자격 증명이 있으면:
cmdkey /delete:git:https://github.com
```

그 다음 푸시 시 새 자격 증명 입력

