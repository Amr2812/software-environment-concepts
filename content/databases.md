---
title: Databases
sort: 4
---

### Databases

A database is an organized collection of structured information, or data, typically stored electronically in a computer system. A database is usually controlled by a [database management system (DBMS)](#database-management-system-DBMS). Together, the data and the DBMS, along with the applications that are associated with them, are referred to as a database system, often shortened to just database.

### database management system (DBMS)

A database typically requires a comprehensive database software program known as a database management system (DBMS). A DBMS serves as an interface between the database and its end users or programs, allowing users to retrieve, update, and manage how the information is organized and optimized. A DBMS also facilitates oversight and control of databases, enabling a variety of administrative operations such as performance monitoring, tuning, and backup and recovery.

Some examples of popular database software or DBMSs include MySQL, Microsoft SQL Server, and MongoDB.

### Structured Query Language (SQL)

SQL is a programming language used by nearly all [relational databases](#relational-databases) to query, manipulate, and define data, and to provide access control.

### Relational databases

Relational databases became dominant in the 1980s. Items in a relational database are organized as a set of tables with columns and rows. Relational database technology provides the most efficient and flexible way to access structured information.

### NoSQL databases

A NoSQL, or nonrelational database, allows unstructured and semistructured data to be stored and manipulated (in contrast to a relational database, which defines how all data inserted into the database must be composed). NoSQL databases grew popular as web applications became more common and more complex.

There are four big NoSQL types: key-value store, document store, column-oriented database, and graph database.

### Key–value database

A key-value database (sometimes called a key-value store) uses a simple key-value method to store data. These databases contain a simple string (the key) that is always unique and an arbitrary large data field (the value). They are easy to design and implement. They are extremely fast.

An Example is Redis.

**When to use a key-value database**

- When your application needs to handle lots of small continuous reads and writes, that may be volatile. Key-value databases offer fast in-memory access.

- When storing basic information, such as customer details; storing webpages with the URL as the key and the webpage as the value; storing shopping-cart contents, product categories, e-commerce product details

- For applications that don’t require frequent updates or need to support complex queries.

**Use cases for key-value databases**

- Session management on a large scale.

- Using cache to accelerate application responses.

- Storing personal data on specific users.

- Product recommendations, storing personalized lists of items for individual customers.

- Managing each player’s session in massive multiplayer online games.

### wide-column databses

Wide-column stores use the typical tables, columns, and rows, but unlike relational databases (RDBs), columnal formatting and names can vary from row to row inside the same table. And each column is stored separately on disk.

An Example is HBASE.

### Document database

Designed for storing, retrieving, and managing document-oriented information, document databases are a modern way to store data in JSON format rather than rows and columns.

Some examples are MongoDB and Firebase Firestore.

**Use Cases of Document database**

- User Profiles

  Because document databases have a flexible schema, they can store documents that have different attributes and data values. Document databases are a practical solution to online profiles in which different users provide different types of information. Using a document database, you can store each user's profile efficiently by storing only the attributes that are specific to each user.

  Suppose that a user elects to add or remove information from their profile. In this case, their document could be easily replaced with an updated version that contains any recently added attributes and data or omits any newly omitted attributes and data. Document databases easily manage this level of individuality and fluidity.

* Real-Time Big Data

  Historically, the ability to extract information from operational data was hampered by the fact that operational databases and analytical databases were maintained in different environments—operational and business/reporting respectively. Being able to extract operational information in real time is critical in a highly competitive business environment. By using document databases, a business can store and manage operational data from any source and concurrently feed the data to the BI engine of choice for analysis. There is no requirement to have two environments.

* Content Management

  To effectively manage content, you must be able to collect and aggregate content from a variety of sources, and then deliver it to the customer. Due to their flexible schema, document databases are perfect for collecting and storing any type of data. You can use them to create and incorporate new types of content, including user-generated content, such as images, comments, and videos.

### Graph Databases

A graph database is a database designed to treat the relationships between data as equally important to the data itself. It is intended to hold data without constricting it to a pre-defined model. Instead, the data is stored like we first draw it out - showing how each individual entity connects with or is related to others.

An Example is neo4j.

- Why Graph Databases?

  We live in a connected world! There are no isolated pieces of information, but rich, connected domains all around us. Only a database that natively embraces relationships is able to store, process, and query connections efficiently. While other databases compute relationships at query time through expensive JOIN operations, a graph database stores connections alongside the data in the model.

### Milti-model Databses

A multimodel database is a data processing platform that supports multiple data models, which define the parameters for how the information in a database is organized and arranged. Being able to incorporate multiple models into a single database lets information technology (IT) teams and other users meet various application requirements without needing to deploy different database systems.

Examples are FunaDB and ArangoDB.

