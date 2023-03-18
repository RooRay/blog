---
author: RooRay
pubDatetime: 2023-03-18T14:00:00+00:00
title: Hello, world!
postSlug: hello-world
featured: true
draft: false
tags:
  - hello-world
description: Hello, and welcome to my new blog. Powered by Astro, the AstroPaper theme and Cloudflare Pages!
---

## Table of contents

## Hello, world!

Welcome to my brand new blog powered by [Astro](https://astro.build), the [AstroPaper theme](https://github.com/satnaing/astro-paper) by Sat Naing and Cloudflare Pages! Here I'll write about all sorts in the technology space from up and coming stuff to small things I find cool.

## Getting This Site Running

I didn't get this site running until my sixth attempt. See the image below:

![A screenshot showing the Cloudflare Pages dashboard](https://blogcdn.rooray.xyz/hello-world/cfdash.png)

This was partly due to NodeJS-related errors. For example, Astro demanded I used a newer NodeJS version than Cloudflare Pages defaulted to, causing builds to fail.

Unfortunately since I was new to Cloudflare Pages and Vercel, the platform I originally intended to use, didn't work at the time, I had to go digging through some docs, eventually finding how to set the version. In the end I used Cloudflare's web dashboard to effectively do the equivalent of:

```js
NODE_VERSION=16.12.0
```

After that, it was mostly just small issues like some images being broken and figuring out metadata and then I got onto building the actual site!

## Designing the Site

The colour scheme of this site is based on the background of my landing page, [rooray.xyz](https://rooray.xyz). I used the darkest and brightest colours to make the background and accent colours respectively. I also modified some of them slightly for things like accent colours!

![The background picture for my landing page website](https://blogcdn.rooray.xyz/hello-world/websitebg.png)

I also added in proper social media icons and my branding and then that was that!

## Final Configuration

All that's left now is changing a few stock pages, tagging things, and then that's it! This was mostly playing around with Markdown and Astro files, pretty interesting.

## Contribute

This blog is entirely open source, the GitHub repository for it is [here](https://github.com/RooRay/blog). You can contribute code, ideas or anything else! If there's an article you'd like to see or improve, or a change you'd like to make. Feel free to do so there!

If you have anything else you'd like to say or ask me, feel free to use the social icons in the footer to contact me!

Stay safe,
RooRay