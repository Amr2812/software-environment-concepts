---
title: Frontend Web (client-side) Development
sort: 2
---

### [Front End Development:](#Front-end)

Front End Development is about developing The Software's (web, mobile, etc...) User Interface, getting and displaying data, handles users [authorization](#authorization), etc..

The Code that the Frontend developer write runs on the device's Operating System or Browser.

### [HTML:](#html)

Hyper Text Markup Language (HTML) is the standard markup language for Web pages.

### [CSS:](#css)

Cascading Style Sheets (CSS) is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.

### [JavaScript:](#js)

JavaScript (JS) is the most used programming language in the world. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.

It is used for:

* Adding interactivity and Building web pages
* Building [Single-Page Applications (SPA)](#spa)
* Server Side Development
* Building Mobile Apps
* other...

### [CSS Framework:](#css-framework)

A CSS Framework is a set of css classes or components that work together to make a User Interface and example of css frameworks are Bootstrap, TailwindCSS and Bulma.

### [Single-Page Applications (SPA) :](#spa)

A single-page application may retrieve all of the application’s HTML, JavaScript, and CSS code on the initial load or may load resources dynamically to update in response to user interaction or other events. Other web apps, in contrast, present the user with an intial page that is linked to parts of the application on separate HTML pages, which means that the user has to wait for a new page to load every time they make a new request.

SPAs use HTML5 and Ajax (Asynchronous JavaScript and XML) to enable smooth and dynamic responses to user requests, allowing content to update immediately when a user performs an action. Once the page is loaded, interactions with the server are through Ajax calls and data is returned, typically in JSON (JavaScript Object Notation) format, to update the page without requiring reloads.

SPAs can be done by Frameworks and Libraries like Vue, Angular and React

Finally, SPA is one Html File while others are multiple Html Files.

### [Javascript Framework:](#js-framework)

Frameworks provide a structure (like a skeleton, or a scaffolding…or a framework) to base your entire project around. This structure is created through page templates (provided by the framework) with specific areas set aside for inserting framework code.

Examples are Vue and Angular.

### [Javascript Library:](#js-library)

JavaScript libraries are collections of prewritten code snippets that can be used (and reused) to perform common JavaScript functions. JavaScript library code can be plugged into the rest of your project’s code easily.

Examples are JQuery and React.

### [CSS Preprocessors:](#preprocessors)

CSS Preprocessors add logic to css where you can define variables, loops, If conditions, etc...

### [Task Runners:](#task-runners)

Task Runners are toolkits that help to automate painful or time-consuming tasks in development workflow.

Examples are Gulp and NPM Scripts.

### [Module Bundlers:](#Module-Bundlers)

A module bundler is a tool that takes pieces of JavaScript and their dependencies and bundles them into a single file, usually for use in the browser. Examples are Parcel, Webpack and Rollup .

### [Server-Side Rendering (SSR):](#SSR)

Server-side rendering (SSR) is the process of rendering web pages on a server and passing them to the browser (client-side), instead of rendering them in the browser. SSR sends a fully rendered page to the client; the client's JavaScript bundle takes over and enables the SPA framework to operate

Compared to a traditional SPA (Single-Page Application), the advantage of SSR primarily lies in:

* Better SEO, as the search engine crawlers will directly see the fully rendered page.

* Note that as of now, Google and Bing can index synchronous JavaScript applications just fine. Synchronous being the key word there. If your app starts with a loading spinner, then fetches content via Ajax, the crawler will not wait for you to finish. This means if you have content fetched asynchronously on pages where SEO is important, SSR might be necessary.

* Faster time-to-content, especially on slow internet or slow devices. Server-rendered markup doesn't need to wait until all JavaScript has been downloaded and executed to be displayed, so your user will see a fully-rendered page sooner. This generally results in better user experience, and can be critical for applications where time-to-content is directly associated with
conversion rate.

Example are Next.js for React, Nuxt.js for Vue and Universal Angular.

### [Static Site Generators (SSG):](#SSG)

A static site generator is a software application that creates HTML pages from templates or components and a given content source. Most static site generators, including Gatsby and Nuxt, accept Markdown-formatted text files as a source, although They are not limited to Markdown.

Static site generators are an alternative to database-driven [content management systems](/cms), such as WordPress and Drupal. In such systems, content is managed and stored in a database. When the server receives a request for a particular URL, a software layer retrieves data from the database, merges it with template files, and generates an HTML page as its response.

Static site generators, on the other hand, generate HTML pages during a build process.

Static site generators reduce site complexity. That, in turn, improves speed and reliability, and smooths the developer experience.

* You don’t have to worry about database-toppling traffic spikes.

* There’s no need to manage database server software or backups.

* You can use version control software to manage and track changes to your content.

* Because your site is static, you can even forgo web servers and load balancers altogether. Instead, you can host your site with a content delivery network that scales with your site’s traffic.

* Better SEO, as the search engine crawlers will directly see the static page.

### [Progressive Web Apps (PWA):](#PWA)

PWAs are web apps developed using a number of specific technologies and standard patterns to allow them to take advantage of both web and [native](/mobile#native) app features like Push Notifications, Self-updates and Works on both Android and iOS. For example, web apps are more discoverable than native apps; it's a lot easier and faster to visit a website than to install an application, and you can also share web apps by simply sending a link.

### [Web Assembley (WASM):](#WASM)

Web Assembly is the binary instructions generated from high level languages such as C, C++ or Rust. It is much faster than JavaScript and WASM 1.0 has already shipped to major browsers.

It can be used for:

#### Inside the Browser

* Image / video editing

* Browser Games

* Scientific visualization and simulation

* Developer tooling (editors, compilers, debuggers, …)

* Live video augmentation (e.g. putting hats on people’s heads)

* etc...

#### Outside the Browser

* Server-side compute of untrusted code.

* Server-side application.

* Hybrid native apps on mobile devices.

* etc...
