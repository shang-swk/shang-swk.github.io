---
updated: 2025-02-19T16:53:02.955Z
date: 2025-02-19 04:02:00
title: Hexo 部署与 Git 连接问题排查
categories: 开发技术
tags:
  - git
excerpt: 记录 GitHub 连接失败时的排查步骤，以及 Git 代理的设置与清除方法。

---



## GitHub 连接失败



### 报错信息

```text
fatal: unable to access 'https://github.com/shang-swk/shang-swk.github.io.git/': Failed to connect to github.com port 443 after 21093 ms: Could not connect to server FATAL {   err: Error: Spawn failed       at ChildProcess.
```



这个问题通常是由网络连接问题或代理设置不正确导致的。

原因1：之前的http或者https代理服务器与目标地址连接出现问题，我们需要先断开 

```bash
       git config --global --unset https.proxy
       git config --global --unset http.proxy
```

这样就可以清除 Git 的代理设置，让其直接连接网络进行操作。

http和https的代理服务器可以用网上付费的一些服务器充当：**Google Proxyton**、**Cloudflare Proxies**，也可以用自己本地代替



原因2：

有时候取消代理设置仍然会出现报错，这时可以通过设置系统代理来解决。

打开系统设置，搜索代理设置，并点击编辑按钮。


在代理服务器中，将端口设置为7890（这个端口不会影响正常上网，可以放心设置），然后点击保存。

在终端输入以下命令，设置 Git 使用本地代理：

```bash
git config --global http.proxy http://127.0.0.1:7890
```

设置完成后，可以通过以下命令检验是否设置成功：

```bash
git config --global -l
```



