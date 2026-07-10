# Task-Oriented Dexterous Grasping via Grasp Taxonomy — Project Page

논문 프로젝트 페이지 (정적 사이트). Nerfies/academic-project-page 스타일을 참고해 제작되었습니다.

## 폴더 구조
```
project_page/
├── index.html              # 메인 페이지 (여기만 열면 바로 미리보기 가능)
├── README.md
└── static/
    ├── css/style.css       # 스타일 (색/타이포/레이아웃)
    ├── js/script.js        # BibTeX 복사 버튼
    ├── images/             # 논문 figure (PDF에서 추출됨)
    │   ├── fig1_pipeline.png
    │   ├── fig2_conversion.png
    │   ├── fig3_framework.png
    │   ├── fig4_setup.png
    │   ├── fig5_deviation.png
    │   └── fig6_results.png
    ├── pdfs/paper.pdf       # 논문 PDF (Paper 버튼)
    └── videos/             # 여기에 demo.mp4 를 넣으세요
```

## 로컬 미리보기
```bash
cd project_page
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

## GitHub Pages 배포
1. GitHub에 새 repo 생성 (예: `taxonomy-dexgrasp`)
2. `project_page/` 안의 **내용물**을 repo 루트에 push
   ```bash
   cd project_page
   git init
   git add .
   git commit -m "project page"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
3. repo → **Settings → Pages** → Source: `main` / `/ (root)` 선택 후 저장
4. `https://<username>.github.io/<repo>/` 에서 확인

> `<username>.github.io` 라는 이름으로 repo를 만들면 root 도메인으로 배포됩니다.

## 채워야 할 부분 (TODO)
- **저자 링크**: `index.html`의 `<div class="authors">` 안 `href="#"` 를 각자 홈페이지로 교체
- **arXiv / Code 버튼**: 준비되면 `data-disabled="true"` 제거하고 `href` 채우기 (`.soon` 뱃지도 삭제)
- **데모 영상**: `static/videos/demo.mp4` 추가 (없으면 Video 섹션은 poster 이미지만 보임)
- **BibTeX**: 게재 확정 후 실제 서지정보로 업데이트
- **og:image / social preview**: 필요 시 `static/images/social_preview.jpg` 추가 후 메타태그 경로 수정

## 참고
- Figure는 업로드한 PDF에서 자동 추출한 것이라 해상도가 충분하지 않으면 원본 벡터/고해상도 이미지로 교체를 권장합니다.
