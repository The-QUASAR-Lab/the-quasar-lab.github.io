---
layout: about
title: Home
permalink: /

selected_papers: false
social: false

announcements:
  enabled: true
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
---

<figure style="margin-bottom: 1.5rem;">
  <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/group_photo.jpg' | relative_url }}" alt="QUASAR Lab members on a rooftop at CU Boulder with the Flatirons in the background" style="width: 100%;">
  <figcaption class="caption">Left to right: Ramin, Alex, Seemanta, Nick, Collin, Cordelia, Kyle, Shipra, Tanner, and Kanishka</figcaption>
</figure>

Welcome to the QUASAR Lab homepage!

We are the Quantum Architecture, Systems, and Applications Research (QUASAR) Lab in the Department of Computer Science at CU Boulder, led by [Dr. Ramin Ayanzadeh]({{ '/people/' | relative_url }}). We study quantum computation from a systems and architecture perspective. Our research sits at the intersection of quantum computation and computer architecture, bridging the gap between quantum hardware and software to build and optimize the next generation of quantum platforms.

Take a look at our [publications]({{ '/publications/' | relative_url }}) or get to know [the people in our lab]({{ '/people/' | relative_url }}).

#### Address

Computer Systems Lab<br>
Department of Computer Science<br>
1111 Engineering Dr, Boulder, CO 80309

<!-- the theme writes the news heading in lowercase; capitalize it to match the navigation -->
<style>
  .cu-site-header header.ucb .site-name { font-size: 2.25rem; }
  @layer components {
    [role="main"].mt-5 { margin-top: 2rem !important; }
  }
  .post article > h2 { text-transform: capitalize; }
  /* The shared header already displays the lab name. Keep the main heading
     available to screen readers without repeating it visually. */
  .post > .post-header > .post-title {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
</style>
