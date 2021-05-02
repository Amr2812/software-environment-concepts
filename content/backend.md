---
title: Backend Web (server-side) Development
sort: 3
---

### Back End Development

Back End Development is about dealing with [databases](/databases) and building APIs so [Frontend Developers](/frontend) can use the [API](/basics#Application-Programming-Interface-API) to deal with data.

The Code that the Backend developer writes runs on the [server](/servers) or on the [cloud](/cloud).

### Rest API

Representational state transfer is a software architectural style which uses a subset of [HTTP](/basics#http-and-https). It is commonly used to create interactive applications that use Web services. A Web service that follows these guidelines is called RESTful. Rest is the most popular protocol.

We Get Data from Restful Web Services by endpoints for example an endpoint which returns posts and another which returns users.

### GraphQL

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

GraphQL APIs are organized in terms of types and fields, not endpoints. Access the full capabilities of your data from a single endpoint. GraphQL uses types to ensure Apps only ask for what’s possible and provide clear and helpful errors. Apps can use types to avoid writing manual parsing code.

### Soap

SOAP is a messaging protocol specification for exchanging structured information in the implementation of web services in computer networks. Its purpose is to provide extensibility, neutrality, verbosity and independence.

### Message Brokers

A message broker is software that enables applications, systems, and services to communicate with each other and exchange information. The message broker does this by translating messages between formal messaging protocols. This allows interdependent services to “talk” with one another directly, even if they were written in different languages or implemented on different platforms.

### WebSockets

The WebSocket API is an advanced technology that makes it possible to open a two-way interactive communication session between the user's browser and a server. With this API, you can build realtime apps like chat apps.

### reverse proxy server

A proxy server is a go‑between or intermediary server that forwards requests for content from multiple clients to different servers across the Internet. A reverse proxy server is a type of proxy server that typically sits behind the firewall in a private network and directs client requests to the appropriate backend server. A reverse proxy provides an additional level of abstraction and control to ensure the smooth flow of network traffic between clients and servers.

Examples of Web Servers are Nginx and Apache.

Common uses for a reverse proxy server include:

* __Load balancing__ – A reverse proxy server can act as a “traffic cop,” sitting in front of your backend servers and distributing client requests across a group of servers in a manner that maximizes speed and capacity utilization while ensuring no one server is overloaded, which can degrade performance. If a server goes down, the load balancer redirects traffic to the remaining online servers.

* __Web acceleration__ – Reverse proxies can compress inbound and outbound data, as well as cache commonly requested content, both of which speed up the flow of traffic between clients and servers. They can also perform additional tasks such as SSL encryption to take load off of your web servers, thereby boosting their performance.

* __Security and anonymity__ – By intercepting requests headed for your backend servers, a reverse proxy server protects their identities and acts as an additional defense against security attacks. It also ensures that multiple servers can be accessed from a single record locator or URL regardless of the structure of your local area network.

### Cookies

Cookies are small files which are stored on a user's computer. They are designed to hold a modest amount of data specific to a particular client and website, and can be accessed either by the web server or the client computer. This allows the server to deliver a page tailored to a particular user, or the page itself can contain some script which is aware of the data in the cookie and so is able to carry information from one visit to the website.

### Authentication Types

There are multiple Authentication Types and the most popular are:

* __Session-based__ - is one in which the user state is stored on the server's memory. When using a session based auth system, the server creates and stores the session data in the server memory when the user logs in and then stores the session Id in a cookie on the user browser.

* __Token-based__ - is one in which the user state is stored on the client. In the token based authentication, the user data is encrypted into a JWT (JSON Web Token) with a secret and then sent back to the client. The JWT is then stored on the client side and sent as a header for every subsequent [http request](/basics#HTTP-Request--Response). The server receives and validates the JWT before proceeding to send a response to the client.

* __OAuth 2.0__ - authorization framework is a protocol that allows a user to grant a third-party web site or application (like facebook or google) access to the user's protected resources, without necessarily revealing their long-term credentials or even their identity. It is the way you can login with google or facebook with.
