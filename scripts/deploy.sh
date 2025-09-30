#!/bin/bash
# =========================================
# deploy.sh
# 목적: dev -> deploy -> preview 를 한 번에 실행
# 사용법: sh ./scripts/deploy.sh
# =========================================

# 0️⃣ 현재 스크립트 위치 기준으로 프로젝트 루트 이동
SCRIPT_DIR=$(cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd)
PROJECT_ROOT="$SCRIPT_DIR/.."
cd "$PROJECT_ROOT" || exit 1
echo "Project root: $PROJECT_ROOT"

# 1️⃣ 개발 서버 실행 (백그라운드)
echo "Starting development server..."
npm run dev &
DEV_PID=$!   # 백그라운드 PID 저장
echo "Dev server PID: $DEV_PID"

# 2️⃣ 빌드 후 gh-pages 브랜치 배포
echo "Building project..."
npm run build

echo "Deploying to gh-pages..."
# gh-pages CLI 사용 (package.json deploy 스크립트)
npm run deploy

# 3️⃣ 배포 확인용 미리보기
echo "Preview the build..."
npm run preview

# 4️⃣ 개발 서버 종료
echo "Stopping development server..."
kill $DEV_PID
echo "Deployment complete!"
