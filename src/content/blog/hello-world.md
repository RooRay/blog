---
author: RooRay
pubDatetime: 2023-03-18T00:29:29+00:00
title: Hello, world!
postSlug: adding-new-posts-in-astropaper-theme
featured: true
draft: true
tags:
  - hello-world
---

## Hello, world!

Welcome to my brand new blog powered by Astro, the AstroPaper theme by Sat Naing and Cloudflare Pages! Here I'll write about all sorts in the technology space from up and coming stuff to small things I find cool.

## Getting This Site Running

I didn't get this site running until my sixth attempt. See the image belo below:

![A screenshot showing the Cloudflare Pages dashboard](https://cdn.rooray.xyz/krSzyP.png)

This was partly due to NodeJS-related errors. For example, Astro demanded I used a newer NodeJS version than Cloudflare Pages defaulted to, causing builds to fail. Unfortunately sine I was new to Cloudflare Pages and Vercel, the platform I originally intended to use, didn't work at the time, I had to go through some docs, eventually finding how to set the version. In the end I used Cloudflare's panel to effectively do the equivalent of:

```js
NODE_VERSION=16.12.0
```

After that, it was mostly just small issues like some images being broken and then I got onto building the actual site!

### Designing the Site