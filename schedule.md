---
layout: page
title: Schedule
description: Course schedule
---


<html lang='en'>
  <style>
      :root {
        --purple: #834D9D;
        --orange: #F2A431;
        --green: #55B849;
        --peach: #DB8457;
        --lavender: #8174B1;
        --aquamarine: #ADD8E6;
        --dark_blue: #000080;
        --dark_red: #800020;
        --dark_green: #228B22;
        --lemon: #F5C108;
        --dirty_pink: #DA3074;
        --electric_purple: #CC00FF;
        --deep_orange: #FF9900;
        --teal_blue: #006666;
        --dark_magenta: #660066;
      }
      .lecture {
        /* border-color: black; */
        background-color: var(--dark_blue);
        border-color: var(--deep_orange);
        /* border: calc(var(--fc-list-event-dot-width) / 2) solid var(--peach); */
      }
      .talk {
        background-color: var(--lavender);
      }
      .exercise {
        background-color: var(--lemon);
      }
      .meal {
        background-color: var(--dark_green);
      }
      .party {
        background-color: var(--dark_magenta);
      }
      .other {
        background-color: var(--peach) !important;
        /* border: calc(var(--fc-list-event-dot-width) / 2) solid var(--peach) !important; */
      }
      .fc-event-title {
          /* font-size: 16px !important; //Your font size */
          font-weight: bold;
      }
      .newdot {
        display: inline-block !important;
        box-sizing: content-box !important;
        width: calc(var(--fc-list-event-dot-width)) !important;
        height: calc(var(--fc-list-event-dot-width)) !important;
        border-radius: calc(var(--fc-list-event-dot-width) / 2);
      }
  </style>

  <!-- .fc-list-event-dot {
    display: inline-block;
    box-sizing: content-box;
    width: 0;
    height: 0;
    border: calc(var(--fc-list-event-dot-width) / 2) solid var(--fc-event-border-color);
    border-radius: calc(var(--fc-list-event-dot-width) / 2);
  } -->


  <head>
    <meta charset='utf-8' />
    <script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.11/index.global.min.js'></script>
    <script src="https://cdn.jsdelivr.net/npm/@fullcalendar/google-calendar@6.1.11/index.global.min.js"></script>
    <script src="/calendar.js"></script>
  </head>
  <body>
    <div id='calendar'></div>
  </body>
</html>