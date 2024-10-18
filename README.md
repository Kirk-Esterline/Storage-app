<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<h3 align="center">Storage-app</h3>

<p align="center">Store all items with confidence knowing they can be easily located</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- About the Project -->

## About The Project

Boatyards store a large variety of items related to the boat. During the boating season all these items such as sails, cushions, spars and personal items are stored on the boat. But when the boat is decommissioned at the end of the season often those items are separated from the boat itself. This could be temporary to send a sail or a cushion to be repared, or it could be season long if items are stored away from the boat itself. In the best case some effort is required to coordinate all the items returning to the boat before it is commissioned for the season. In the worst case items end up going missing and do not make it back to the boat when it is commissioned. This results in added expense and headache for the boatyard and loss of valuable boating days for the customer. 

This project aims to ease this problem by creating a platform where stored boats inventory can be recorded at the end of the season during decommissioning, updated as work is preformed, and verified against the following season during commissioning. Additionally coordiaion will be aided by all workers being able to see the current status and location of items. Lastly customer relationships will be aided due to the customer being aware of what was stored with the boat and what was delivered during commissioning.

## Packages to Install

- [ ] Node
- [ ] Express
    Postgres (might return to postgres in the future, but for now will stick with mongodb)
    @neondatabase/serverless (might use Neon in the future but for now we are returning to Mongo)
[ ] dotenv
[ ] bcrypt
[ ] connect-mongo
[ ] ejs
[ ] express
[ ] express-flash
[ ] express-session
[ ] mongodb
[ ] mongoose
[ ] morgan
[ ] nodemon
[ ] passport
[ ] passport-local
[ ] validator

## Notes about current issues

Currently working through a connection issue when an updated connect-mongo version. The current MongoStore version requires a different connection string than the template code the server.js was based on. 

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Kirk-Esterline/Storage-app.svg?style=for-the-badge
[contributors-url]: https://github.com/Kirk-Esterline/Storage-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Kirk-Esterline/Storage-app.svg?style=for-the-badge
[forks-url]: https://github.com/Kirk-Esterline/Storage-app/network/members
[stars-shield]: https://img.shields.io/github/stars/Kirk-Esterline/Storage-app.svg?style=for-the-badge
[stars-url]: https://github.com/Kirk-Esterline/Storage-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/Kirk-Esterline/Storage-app.svg?style=for-the-badge
[issues-url]: https://github.com/Kirk-Esterline/Storage-app/issues
[license-shield]: https://img.shields.io/github/license/Kirk-Esterline/Storage-app.svg?style=for-the-badge
[license-url]: https://github.com/Kirk-Esterline/Storage-app/blob/master/LICENSE.txt