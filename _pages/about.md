---
layout: post
title: About
date:
description:
img:
tags: tag
permalink: "/about/"
---

<link rel="stylesheet" href="https://rawgit.com/dimsemenov/Magnific-Popup/master/dist/magnific-popup.css">
<link rel="stylesheet" href="../assets/css/gallery.css">
<link rel="stylesheet" href="../assets/css/gallery-images.css">

<img src="../assets/img/profiles/justine-evans-photo2.png" title="Justine Evans" alt="image of Justine Evans" style="max-width: 250px; width: 100%; display: block; margin: auto;" />

<p align="center">
  Media craftswoman.<br />
  Has two cats and a houseplant.<br />
  Lover of digital design and graphic arts.<br />
  Web designer, illustrator, and research enthusiast.<br />
  Astro-hobbyist, mid-century modernist, and terrible cook.
  <!-- Astro-hobbyist, classical flutist, gamer, and horrendous cook.-->
</p>

<div style="text-align: center;">
  <span class="dot"></span> <span class="dot"></span> <span class="dot"></span>
</div>

<!-- This is a breakaway from is @ramenhog's original gallery, opting for a single-row of equal cards to declutter page. It also adds code for thumbnails different from the main image, particularly usefull for videos and other iframes: -->

<h2>Gallery with Lightbox</h2>

<!-- Not Supported -->
<div class="message">
   Sorry, your browser does not support CSS Grid.
</div>

<section class="gallery-1">
   <div class="grid grid--small lightbox-gallery">

      <!-- Thumbnail -->
      <a href="#image-1" class="item item--small image-1">
         <div class="item__details">
            First Image
         </div>
      </a>
      <!-- Lightbox -->
      <a href="#_" class="lightbox-1" id="image-1">
         <img src="https://images.pexels.com/photos/954599/pexels-photo-954599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
      </a>

      <!-- Thumbnail -->
      <a href="#image-2" class="item item--small image-2">
         <div class="item__details">
            Second Image
         </div>
      </a>
      <!-- Lightbox -->
      <a href="#_" class="lightbox-1" id="image-2">
         <img src="https://images.pexels.com/photos/93052/pexels-photo-93052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
      </a>


      <!-- Thumbnail -->
      <a href="#image-3" class="item image-3">
         <div class="item__details">
            Video
         </div>
      </a>
      <!-- Lightbox -->
      <a href="#_" class="lightbox-1" id="image-3">
         <iframe src="https://player.vimeo.com/video/210558372" frameborder="0" width="100%" height="100%" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </a>

      <!-- Thumbnail -->
      <a href="#image-4" class="item image-4">
         <div class="item__details">
            SoundCloud
         </div>
      </a>
      <!-- Lightbox -->
      <a href="#_" class="lightbox-1" id="image-4">
         <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/209029946&color=%23bc8fc7&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      </a>

   </div>
</section>



<div style="border-bottom: 5px dotted #444; margin: 3rem 0;"></div>

<script src="../assets/js/magnific.js"></script>
