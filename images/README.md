# 이미지 파일

이 폴더에는 웹사이트에서 사용할 이미지 파일들을 저장합니다.

## 프로필 사진 추가 방법

1. 프로필 사진을 준비합니다.
   - 권장 크기: **200x200px** 또는 **400x400px** (정사각형)
   - 권장 형식: **JPG** 또는 **PNG**
   - 파일 크기: 1MB 이하 권장

2. 파일명을 `profile.jpg` 또는 `profile.png`로 변경합니다.

3. 이 폴더(`images/`)에 파일을 저장합니다.

4. `index.html` 파일을 열어서 다음 부분을 수정합니다:

```html
<img src="images/profile.jpg" alt="Profile Picture" id="profile-img">
```

파일명이 `profile.png`인 경우:
```html
<img src="images/profile.png" alt="Profile Picture" id="profile-img">
```

## 이미지 최적화 팁

- **온라인 도구 사용**: [TinyPNG](https://tinypng.com/) 또는 [Squoosh](https://squoosh.app/)를 사용하여 이미지 크기를 최적화할 수 있습니다.
- **이미지 편집**: [Canva](https://www.canva.com/) 또는 [Photopea](https://www.photopea.com/)를 사용하여 이미지를 편집할 수 있습니다.
- **크기 조정**: 이미지 편집 도구를 사용하여 정사각형으로 자르고 200x200px 또는 400x400px로 리사이즈합니다.

## 다른 이미지 추가

필요한 경우 이 폴더에 다른 이미지도 추가할 수 있습니다:
- 프로젝트 스크린샷
- 로고
- 기타 웹사이트 이미지

