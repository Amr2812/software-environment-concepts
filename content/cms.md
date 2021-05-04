---
title: Content Management Systems (CMS)
sort: 5
---

### content managemnet system (CMS)

A content management system (CMS) is an application that is used to manage web content without the need for specialized technical knowledge, allowing multiple contributors to create, edit and publish. Content in a CMS is typically stored in a [database](/databses) and displayed in a presentation layer based on a set of templates.

**There is a type of CMSs is called Headless CMS:**

### Traditional CMS

Over the last decade, the focus of websites has been a marriage of the CMS and your site’s design. Having the CMS part and parcel with the site design has made it easy to update content without the overhead we used to see like having to manually update pages via HTML development, moving content and files with FTP (file transfer protocol), etc…

A traditional CMS, like WordPress or Drupal, is a monolith that connects the front-end and the back-end of a website in a neat and easy application code base. They contain everything from the database for content all the way up through the presentation layer.

**Pros**

- Entire site is served from a single system

- Easy to manage all content

- Control front-end design through themes and templates

- Large communities for support

- Lower technical barrier to entry

**Cons**

- Create only website content (the same content can’t be easily served up on other devices)

- Do not always scale well

- Requires developers who are CMS specific

- Limited flexibility

- More time and money required for maintenance and enhancements

**When to Use a Traditional CMS**

Traditional CMS’s are still fantastic systems that work for a variety of deployment types. If you’re strictly building a website for yourself, a small business or even an enterprise solution that doesn’t need to share content with other digital properties, you may be best served by using a traditional CMS. You can get up and running fast and you’ll be able to manage your site from a single source. It’s also important to note that while a traditional CMS is typically a single site solution, many of them have plugins to enable multi-site and/or API access to share digital resources with external applications. Those plugins come with their own challenges and benefits.

### Headless CMS

A headless CMS differentiates itself by not connecting directly with a front-end at all. While traditional CMS’ aim to be a single solution to managing both the content and the front-end, a headless CMS deals strictly with the content. Once created and edited, content is published via an application programming interface (API) and that’s it. The headless CMS has no impact or input on the front-end. This provides the flexibility to get your content out in as many ways as possible regardless of how it’s presented.

If it helps, think of the headless CMS like an author writing a book. The author, headless CMS, is providing the content while the publisher, website, formats and delivers the content to the public via hardback book, e-book, etc… The consumption methods change but the content is consistent.

**Pros**

* Content is ready to be served on any device

* With the headless API developers can worry less about content and more about presentation

* Front-end agnostic (A headless CMS doesn’t care about where the content is going or how it’s going to be displayed. It simply serves it up allowing developers the freedom to use their preferred frameworks and tools.)

* Simply create content without worrying about being in a single system that contains everything

**Cons**

* No content preview (Some systems allow you to build a preview integration but this does add additional upfront overhead.)

* More upfront integration/configuration effort

* Developing a head/client(By “head/client”, we mean the output and displaying of the content that you have created (website, mobile application, etc).)

**When to Use a Headless CMS**

A headless CMS isn’t always the best choice, so you have to consider your circumstances carefully. We recommend using a headless CMS in the following cases:

* Websites/web apps that are [Single-Page Apps](/frontend#single-page-applications-spa) built using [Js Frameworks](/frontend#javascript-framework) or [Libraries](frontend#javascript-library) such as Vue and React

* Native mobile apps

* Any environment in which you need to publish content across multiple platforms all at once

* When using a [static site generator](/frontend#static-site-generators-ssg)
