# 目录解构

```shell
tree -I node_modules > tree.txt
```

```
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── img
│       ├── login
│       │   ├── login_ball.png
│       │   ├── login_bg.jpg
│       │   ├── logo.png
│       │   └── top.png
│       └── navbar
│           └── person.png
├── src
│   ├── App.vue
│   ├── api
│   │   └── login.js
│   ├── assets
│   │   └── css
│   │       ├── baseColor.less
│   │       └── common.less
│   ├── components
│   │   └── layout
│   │       ├── Navbar.vue
│   │       ├── UpdatePassword.vue
│   │       └── UserGroup.vue
│   ├── config
│   │   └── index.js
│   ├── main.js
│   ├── mock
│   │   └── index.js
│   ├── mockProdServer.js
│   ├── router
│   │   └── index.js
│   ├── store
│   │   └── user.js
│   ├── utils
│   │   ├── auth.js
│   │   ├── directive.js
│   │   └── fetch.js
│   └── views
│       ├── home
│       │   └── Home.vue
│       └── login
│           ├── Login.vue
│           └── components
│               ├── Download.vue
│               ├── Earth.vue
│               ├── Login.vue
│               ├── Navbar.vue
│               └── Stars.vue
└── vite.config.js
```
