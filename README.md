# Task-Oriented Dexterous Grasping via Grasp Taxonomy — Project Page

IROS 2026 프로젝트 페이지. [Nerfies](https://nerfies.github.io/) 템플릿 스타일 (Bulma 기반).

**Live:** https://rbtcsoscar.github.io/Task-Oriented-Dexterous-Grasping-via-Grasp-Taxonomy/

## ⚠️ 업로드 시 중요

GitHub Pages는 **repo 루트**의 `index.html`만 인식합니다.
이 zip을 풀면 나오는 파일들을 **폴더째로 올리지 말고**, 아래 항목들이 repo 최상단에 오도록 올리세요.

```
(repo 루트)
├── index.html          ← 반드시 루트에!
├── README.md
└── static/
    ├── css/index.css
    ├── images/*.png
    ├── pdfs/paper.pdf
    └── videos/         ← demo.mp4 를 여기에
```

기존에 잘못 올라간 `taxonomy_dexgrasp_page/` 폴더는 그대로 둬도 무방합니다 (무시됨).

## 업로드 방법 (웹, git 불필요)

1. repo → **Add file ▾ → Upload files**
2. 압축 푼 폴더 **안의** `index.html`, `README.md`, `static` 폴더를 전부 드래그
3. **Commit changes**
4. **Settings → Pages** → Source: `Deploy from a branch`, Branch: `main` / `/ (root)` → Save
5. 1~2분 뒤 위 Live 주소 접속

## TODO

- [ ] 저자 링크: `index.html`의 `<a href="#">` 를 각자 홈페이지로 교체
- [ ] arXiv / Code 버튼: `is-disabled` 클래스 제거 + `href` 채우기, 라벨의 `(soon)` 삭제
- [ ] 데모 영상: `static/videos/demo.mp4` 추가 (없으면 poster 이미지만 표시됨)
- [ ] 게재 확정 후 BibTeX 갱신

## 이미지 출처

논문 LaTeX 소스의 원본 figure를 사용했습니다.

| 페이지 파일 | 논문 원본 |
|---|---|
| `overview.png` | overview.png (Fig. 1) |
| `method_taxonomy.png` | method_b.png (Fig. 2) |
| `method_framework.png` | method_cd.png (Fig. 3) |
| `environment.png` | environment.png (Fig. 4) |
| `boxplot.png` | global_stability_boxplot_short.png (Fig. 5) |
| `real_results.png` | real_image.png (Fig. 6, 2000px 고해상도) |
