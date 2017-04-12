---
title: Support-first CSS
link: https://www.meetup.com/memphis-technology-user-groups/events/238967388/
linkText: RSVP Now
layout: post
eventDate: April 11th, 2017
eventLocation: FedEx Institute of Technology - Room 225
description: Come learn about how to implement the latest and greatest CSS tricks while still supporting all your old-browser needs.
hasNotes: true
---

## Meeting Notes:

Bryan gave a great lecture starting with how our language shapes the way we observe the world.  Using his "Support-First" methodology instead of creating Fallbacks we start with the least support and work or "Fallforward" to the most supported end product.  We all really want to use and utilize the most to date and greatest features.  However, we also are limited by supporting old browsers, small screen sizes, or non-technical clients.  Thus "Support-First" is our answer.  We start from a point of most support and add things like feature queries to allow the latest and greatest on browsers and devices that support them.

Bryan moved on to some really cool new CSS features.  He started this segment off with CSS Initial Letter which gives you the ability to expand a first letter multiple lines and character widths.  He then moved on to `Object-Fit` and `Object-Position`.  Essentially this grants the developer the ability to use the options for a background image on a foreground image.  So we can fit images inside the available space much like `background-size: cover;`.

Later, Bryan went on a rant about how awesome CSS Grid is.  Which it is amazing.  However, as it is right now, it has limited support.  It works in current versions of Chrome, Firefox, Opera and Safari.  There is a broken implementation in IE/Edge.  This is where the beginning conversation about "Support First" comes into play.  By developing for IE/Edge then applying some `@supports` magic we can support the browsers that support grid and still have acceptable design on the browsers that don't.


