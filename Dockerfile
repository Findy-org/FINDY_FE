# Build stage
FROM node:18-alpine AS builder

# 작업 디렉토리 설정
WORKDIR /app

# Yarn Berry 활성화
RUN corepack enable

# package.json, yarn.lock, tsconfig 파일들 복사
COPY . .

# yarn berry 설정 및 의존성 설치
RUN yarn set version berry
RUN yarn install
RUN yarn build

# Production stage
FROM nginx:alpine

# builder stage에서 빌드된 결과물을 nginx로 복사
COPY --from=builder /app/dist /usr/share/nginx/html

# 80 포트 노출
EXPOSE 80

# nginx 실행
CMD ["nginx", "-g", "daemon off;"]