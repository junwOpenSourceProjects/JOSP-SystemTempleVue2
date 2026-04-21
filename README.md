# JOSP-SystemTempleVue2

基于 vue-element-admin 模板的 Vue 2 企业级后台管理系统前端。

## 技术栈

| 技术 | 版本 |
|------|------|
| Vue | 2.6.10 |
| Element UI | 2.13.2 |
| Vuex | 3.1.0 |
| Vue Router | 3.0.2 |
| Axios | 1.13.5 |
| vue-cli | 4.4.4 |

> **注意**: Vue 2 已停止维护（2023年12月31日EOL），本项目无法升级到Vite。

## 项目结构

```
src/
├── api/           # API接口
├── components/    # 公共组件
├── directive/     # 自定义指令
├── filters/       # 过滤器
├── icons/         # 图标
├── lang/          # 国际化
├── layout/        # 布局组件
├── router/        # 路由配置
├── store/         # Vuex状态管理
├── styles/        # 样式文件
├── utils/         # 工具函数
├── vendor/        # 第三方库
├── views/         # 页面组件
├── App.vue
└── main.js
```

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build:prod

# 构建预发布版本
npm run build:stage

# 代码检查
npm run lint
```

## 主要功能

- 用户登录/注销
- RBAC权限管理（用户、角色、菜单）
- 动态路由加载
- 表格增删改查
- ECharts图表展示
- 主题定制
- 国际化支持
- Mock数据模拟

## 环境要求

- Node.js >= 8.9
- npm >= 3.0.0

## 相关项目

- 后端项目: [JOSP-SystemTempleJava](../JOSP-SystemTempleJava)
- 技术原型: [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

## 许可证

[GNU Affero General Public License v3.0](LICENSE)
