FROM node:22-slim

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

# すべての依存関係をインストール（devDependencies も含む）
RUN npm ci

# TypeScript をコンパイル
RUN npm run build 2>/dev/null || echo "No build script defined"

CMD ["node", "dist/index.js"]

EXPOSE 3000
