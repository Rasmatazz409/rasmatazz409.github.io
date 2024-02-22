---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Building of the Blog - Part 1'
pubDate: 2-21-24
description: 'The first official post of the new blog.  I detail some of the process used to build the blog as well as some insights and future plans.'
image:
    url: '/blog_images/rasmatazz.png'
    alt: 'The full Astro logo.'
tags: ["blog", "coding", "website"]
---

# Building of the Blog - Part 1

Welcome to the *first* official post of the blog!  This post details some initial information and background regarding this site as a whole.
As you may have read from the main page, this website aims to be sort of a personal blog/portfolio/archive for many of the different projects
I work on or just as a place for me to store my thoughts on different topics.  What you'll find here is insanely varied and will likely differ
from post to post depending on what I'm working on or have going on at the moment.  A majority of the posts here will relate to something I've got a
strong interest in (technology, gaming, etc.), but you may find the occasional stray post discussing something completely unrelated.

## Background behind the site

This site's first form was created many years ago (around 2020) completely from scratch using nothing but HTML and CSS.  The first initial posts on the site
at the time were some of the Python projects I was working on while first learning the language.  These included some data science projects as well as a
neat little text-based adventure game that I developed (which is still available on GitHub!).
While this worked for the initial pages and posts that were created, one can expect the upkeep and maintenance necessary to grow exponentially as newer pages and content were
added.  While I wanted to keep the site going as I grew my coding skills, it simply became too cumbersome and the site was left untouched for years with no new content.

While I always wanted to re-visit adding new content to the site, my coding skills and desire to try and fix the initial site's framework just didn't provide enough motivation
to do anything with it.  I considered many different options at this point including hosting a site through a third-party platform, but I still wanted to create something that I could truly say that *I* created
myself and not something that I just configured or themed.  I continued to grow my coding skills through both classes that I was taking as part of my IT degree and through personal and work-related projects until
I finally felt like I was at the point that I wanted to revisit working on this site.  However, I also made two major decisions: I was going to re-create the site from scratch and I _needed_ some way to streamline the process of adding new content.
I knew that there were different platforms out there that could accomplish this such as Wordpress, but they all seemed like more than what I needed and - in many cases - would have required me to move my site from its initial home in GitHub pages to
a paid third-party hosting platform which I did not want to do.  Luckily, I found my solution: static site generators.

## The framework

GitHub pages is known to work with numerous static site generators, including the one that they recommend known as Jekyll.  The idea seemed great, but the setup and initial creation process was also pretty daunting.  After looking into quite a few
different alternatives, I finally arrived at the one that would ultimately be used to power the site: **Astro**

<img src="https://docs.astro.build/assets/full-logo-light.png" class="mx-auto">

Astro functions similarly to other static site generators, but has some neat features that - while they weren't needed initially - would allow me to implement some new functionality to my site at a later date if I so chose.  Furthermore, it had support
for Tailwind CSS which I was vaguely familiar with and wanted to give a try.  What I was left with was exactly what I wanted: an easy-to-use system I could utilize to generate my site statically and create new content with that didn't involve tons of 
raw HTML maintenance and updating.  I'm still fairly new to using it, but I'm already insanely satisfied with what I've been able to accomplish with this platform.

## The road ahead

Looking forward, I'm hoping to start populating the blog with more posts just to start getting content on here.  Additionally, you may notice small changes here or there regarding theming or how certain things are laid out as I work on getting the final
design of the site set.  Regarding core functionality, I'm pretty satisfied with what I have at the moment.  I can forsee some issues that I will encounter as the number of blog posts increase and have already started planning on how I can implement some changes
to address those (such as organizing posts by month for example).  Time will tell what ultimately happens to this site - hopefully, there'll be much more to see in the near future!