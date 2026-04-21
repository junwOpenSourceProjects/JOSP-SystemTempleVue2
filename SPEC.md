# JOSP-SystemTempleVue2 技术规格文档

## 1. 项目概述

| 属性 | 说明 |
|------|------|
| 项目名称 | JOSP-SystemTempleVue2 |
| 项目类型 | 企业级后台管理系统前端 (Vue 2) |
| 技术基础 | vue-element-admin |
| 构建工具 | vue-cli |
| 代码托管 | GitHub |

## 2. 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Vue | 2.6.10 | 渐进式JavaScript框架 (已停止维护) |
| Element UI | 2.13.2 | 饿了么UI组件库 |
| Vuex | 3.1.0 | 状态管理 |
| Vue Router | 3.0.2 | 路由管理 |
| Axios | 1.13.5 | HTTP客户端 |
| vue-cli | 4.4.4 | Vue脚手架构建工具 |

### Node.js要求
- Node >= 8.9
- npm >= 3.0.0

## 3. 项目结构

```
JOSP-SystemTempleVue2/
├── build/                  # 构建脚本
├── mock/                   # Mock数据
├── public/                 # 静态资源
├── src/
│   ├── api/               # API接口定义
│   ├── assets/            # 资源文件
│   ├── components/        # 公共组件
│   ├── directive/         # 自定义指令
│   ├── filters/           # 过滤器
│   ├── icons/             # 图标文件
│   ├── lang/              # 国际化
│   ├── layout/            # 布局组件
│   ├── router/            # 路由配置
│   ├── store/             # Vuex状态管理
│   ├── styles/            # 样式文件
│   ├── utils/             # 工具函数
│   ├── vendor/            # 第三方库
│   ├── views/             # 页面组件
│   ├── App.vue            # 根组件
│   └── main.js            # 入口文件
├── tests/                 # 测试文件
├── .env.development       # 开发环境变量
├── .env.production        # 生产环境变量
├── .env.staging          # 预发布环境变量
├── babel.config.js        # Babel配置
├── vue.config.js          # Vue CLI配置
├── jest.config.js         # Jest配置
└── package.json
```

## 4. 核心模块

### 4.1 路由模块 (src/router/)
- 静态路由配置
- 动态路由加载 (基于权限)
- 路由守卫 (权限校验)

### 4.2 状态管理 (src/store/)
- user: 用户信息、Token管理
- permission: 权限模块、动态路由生成
- app: 应用全局配置

### 4.3 API层 (src/api/)
- 基于Axios封装
- 请求/响应拦截器
- API接口分组管理

### 4.4 布局组件 (src/layout/)
- 侧边栏导航
- 顶栏导航
- 主内容区域

## 5. 构建命令

| 命令 | 说明 |
|------|------|
| npm run dev | 启动开发服务器 |
| npm run build:prod | 构建生产版本 |
| npm run build:stage | 构建预发布版本 |
| npm run lint | 代码检查 |
| npm run test:unit | 单元测试 |
| npm run test:ci | CI测试 |
| npm run new | 生成新页面模板 |

## 6. 环境变量

### 开发环境 (.env.development)
- API基础路径配置

### 生产环境 (.env.production)
- 生产环境API配置

### 预发布环境 (.env.staging)
- 预发布API配置

## 7. 主要功能特性

- [x] 用户登录/注销
- [x] RBAC权限管理 (用户、角色、菜单)
- [x] 动态路由加载
- [x] 表格增删改查
- [x] ECharts图表展示
- [x] 主题定制
- [x] 国际化支持
- [x] Mock数据模拟

## 8. 注意事项

1. **Vue 2 已停止维护**: 本项目使用Vue 2.6.10，已于2023年12月31日停止维护
2. **无法升级Vite**: 由于依赖vue-cli构建，Vue 2项目无法直接升级到Vite
3. **依赖安全**: 建议关注依赖安全更新，Dependabot已配置自动安全更新
4. **Mock模式**: 开发模式下使用本地mock数据，无需后端服务

## 9. 相关链接

- 后端项目: [JOSP-SystemTempleJava](../JOSP-SystemTempleJava)
- 原型项目: [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)
