# 灵魂信息素深度测评

这是一个纯前端静态网站，不需要安装依赖，直接打开 `index.html` 就能运行，也适合部署成可分享链接。

## 文件说明

- `index.html`：页面结构
- `styles.css`：视觉样式与响应式布局
- `script.js`：题库、交互、结果逻辑

## 本地启动

1. 打开文件夹 `C:\Users\zjl\Desktop\新建文件夹\胡乱搞的`
2. 双击 `index.html`
3. 浏览器里就能看到网站

## 如何变成可分享链接

### 方案一：GitHub Pages

1. 注册或登录 GitHub
2. 新建一个仓库，比如 `soul-pheromone-test`
3. 把当前文件夹里的文件上传到仓库根目录
4. 进入仓库 `Settings`
5. 打开 `Pages`
6. 在 `Build and deployment` 里选择 `Deploy from a branch`
7. 分支选 `main`，目录选 `/root`
8. 保存后等待几十秒，GitHub 会生成一个公开链接

### 方案二：Netlify

1. 登录 Netlify
2. 选择 `Add new site`
3. 选择 `Deploy manually`
4. 把整个文件夹直接拖进页面
5. 部署完成后会自动得到一个公开链接

### 方案三：Vercel

1. 登录 Vercel
2. 选择 `Add New...`
3. 选择 `Project`
4. 导入你的静态网站文件夹或 GitHub 仓库
5. 保持默认配置直接部署
6. 部署完成后即可分享链接

## 后续可继续升级

- 接数据库：保存每个用户的结果
- 接分享海报：生成适合社交平台传播的结果图
- 接登录系统：做个人主页和历史记录
- 改成 Vue / React：方便后续扩展功能
