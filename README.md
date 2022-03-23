# SARA (Search And Reporting Application)

>This is a redo (front-end part) of a project I work on in college - Course: **Internet and Web Technologies**. This project is one of my favorites, it taught me the importance of *Collaboration*, *Critical Thinking*, and *Problem Solving* in Software Development and gave me the foundation and introduction to Web Application Development including: client-server architecture, popular Internet application protocols, Internet application design, website design, client-side programming and server-side programming. I also learned the basics of Search Engine Optimization, SEO is about making it easy for search enigines to crawl, indexed and understand a websites content.

## Project Description

The project for the Fall 2019 semester is to build a website containing a "Search And Reporting Application" (SARA). The project will be implemented in three phases.

## Technologies
* Front-end 
    * HTML5
    * CSS3
    * JavaScript (ES6)
* Back-end
    * PHP
    * Node
    * MySQL

NOTE: Frameworks such a Bootstrap/TailwindCSS for css (as well as CSS pre-processors like SASS), React/Vue/Angular for js, and Laravel for php or Express for Node were not use use by my group in this project since we all were new to the technologies and only knew the fundamentals, but frameworks are essential in Modern (agile) Web Development and I highly recomment taking time to learn atleast one Front-end or/and Back-end framework, after you feel comfortable with the basics.

## Overview

Phase 1: Create a website which will be used to house SARA, as well as other pertinent information.

Phase 2: Display search results obtained from using the Google Search API.

Phase 3: Display search results from your own search engine which indexes the entire content of webpages. (Details about the search engine will be provided later in the semesters when we discuss databases and server-side programming.) Administration screens related to this search engine will also be needed.
 

## Website/Homepage:
 

The home page should have at least the following four high-level menu options.

**Resources** - with web development resources relevant to our course, zybooks, Google Search API, w3schools, Stack Overflow, and MDN Web Docs.

**Search** – with items to the various search modes specified in the Overview. This will obviously be the most important functional area of the site.

**Browser** – with five items respectively communicating the following attributes

*Navigator* - appName, product, appVersion, userAgent, platform, language

*Window* - innerHeight, innerWidth

*Screen* - width, height, availWidth, availHeight, colorDepth, pixelDepth

*Location* - href, hostname, pathname, protocol

*Geolocation* - Latitude, Longitude

(Note: Some of this information have been deprecated - ex: window.navigator.appName - so i'm only reporting a subset)

**About** – with items to descriptions of the developer of the page (i.e. you, the student) and a "Contact Us" to contact you by e-mail for examaple.

 

## Responsive Web Design
 
The website should use "responsive web design" (RWD) – so that it can be easily viewed on mobile devices, as well as on larger screens such as laptops and desktops.

## Read, Search, and Write

The site should allow the entry of a search term in a search box, pass that to the Google search engine. Google will provide results in JSON format, which should be read and displayed as they were when reading directly from a JSON file.

___

### NOTE1: for this project (redo) I improvise the mechanism we have to built by using the Free fake API JSONPlaceholder (calls to /photos return a json file containing fake data with fields some of them are id,title, and url  (as if results were comming from the Google Search API.) 
THE CURRENT SETUP WORKS AS FOLLOWS: Make a one time call to JSONPlaceholder, store that info in a variable locally, when the user input a search use this variable.

### NOTE2: Since Phase 3 of this project requires database storage Its not implemented here. Feel free to clone this repository and add to it by implementing that missing part.