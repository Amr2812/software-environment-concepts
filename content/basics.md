---
title: Software Basics
sort: 1
---

### Programming Language

A programming language is a set of commands, instructions, and other syntax use to create a software program. Programmers use "high-level languages" to write programs. This code can be compiled into a "low-level language," which is understood by the computer hardware. Example of high-level languages include C++, C#, JavaScript, Python, etc...

### Algorithms

An algorithm is a set of detailed step-by-step instructions to complete a task

### Data Structure

Data Structure can be defined as the group of data elements which provides an efficient way of storing and organising data in the software so that it can be used efficiently. Some examples of Data Structures are arrays, Linked List, Stack, Queue, etc

### Http and Https

HTTP is a protocol which allows the fetching of resources, such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser.

HTTP is unsecured while HTTPS is secured. HTTP sends data over port 80 while HTTPS uses port 443. HTTP operates at application layer, while HTTPS operates at transport layer. No SSL certificates are required for HTTP, with HTTPS it is required that you have an SSL certificate and it is signed by a CA.

### Application Programming Interface (API)

An API is the bridge between the [client-side](/frontend) and the [server-side](/backend).

There are different Types of APIs and the most popular are [Rest](/backend#Rest-API) and [GrapghQL](/backend#GrapghQL).

The Backend Developer Program the API and The Frontend Developer uses it by sending [http requests (XHR)](#xhr) or opening [websockets](/backend#websockets).

### XHR

XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh.

Data can be in different types like [Json](#json) or [XML](#xml).

### HTTP Request / Response

Communication between clients and servers is done by requests and responses:

1. A client (a browser) sends an HTTP request to the web
1. A web server receives the request
1. The server runs an application to process the request
1. The server returns an HTTP response (output) to the browser
1. The client (the browser) receives the response

### Json

JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate.

It is used mostly on the web and data transfer.

### XML

Extensible Markup Language (XML) is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.

XML is used mostly for [Android Development](/mobile#android) and web services like RSS feed and [SOAP](/backend#soap).

### Domain Name

Domain name is the address of your website that people type in the browser’s URL bar to visit your website.

In other words, if your website was a house, then your domain name will be its address.

### Hosting

Web hosting is the place where all the files of your website are stored. It is like the home of your website where it actually lives.

A good way to think about this is if the domain name was the address of your house, then web hosting is the actual house that address points to. All websites on the internet, need web hosting.

When someone enters your domain name in a browser, the domain name is translated into the IP address of your web hosting company’s computer (server) or yours. This computer contains your website’s files, and it sends those files back to the users’ browsers.

### version control system

A version control system is a kind of software that helps the developer team to efficiently communicate and manage(track) all the changes that have been made to the source code along with the information like who made and what change has been made.

The Most popular Version Control System Is [Git](#git--github).

### Git / GitHub

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

There are Multiple repo (folder) hosting services like GitHub (The Most Popular), GitLab and BitBucket.

### Package Managers

A package manager is a tool to create project environments and easily import external dependencies (packages)

Examples of package managers are NPM, Yarn, Composer and Chocolatey.

### Authentication

It is the process of identifying users and validating who they claim to be. One of the most common and obvious factors to authenticate identity is a password. If the user name matches the password credential, it means the identity is valid, and the system grants access to the user.

You can learn more about [Authentication Types in this section](/backend#authentication-types)

### Authorization

Authorization happens after a user’s identity has been successfully authenticated. It is about offering full or partial access rights to resources like database, funds, and other critical information to get the job done.

In an organization, for example, after an employee is verified and confirmed via ID and password authentication, the next step would be defining what resources the employee would have access to.
