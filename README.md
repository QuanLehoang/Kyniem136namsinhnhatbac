# Kỷ Niệm 136 Năm Ngày Sinh Chủ Tịch Hồ Chí Minh

## Giới thiệu

Đây là dự án website được thực hiện nhằm hướng tới dịp kỷ niệm **136 năm ngày sinh Chủ tịch Hồ Chí Minh (19/05/1890 - 19/05/2026)**.

Website được xây dựng với mong muốn tái hiện những dấu mốc lịch sử, những câu chuyện ý nghĩa và lòng biết ơn đối với vị lãnh tụ kính yêu của dân tộc Việt Nam.

---

## Người thực hiện

- Họ tên: **Quân Lê Hoàng**
- GitHub: **QuanLeHoang**
- Vai trò: Thiết kế và phát triển website

---

## Công nghệ sử dụng

- React
- TypeScript
- Vite
- CSS3
- Git & GitHub

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses Oxc
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses SWC

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances.

https://react.dev/learn/react-compiler/installation

---

## Expanding the ESLint configuration

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
