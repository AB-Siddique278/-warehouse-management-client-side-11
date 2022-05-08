import React from 'react';

const Blog = () => {
    return (
        <div>
            
            <div className='container my-3'>
                <div className="mt-3 border border-primary mb-3 p-3">
                    <h4>1 Difference between javascript and nodejs</h4>

                    <div className="row">
                        <div className="col-sm-6">
                            <h5 className="text-center">javascript</h5>

                            <ul>
                                <li>
                                    Javascript is a programming language that is used for writing scripts on the website.
                                </li>
                                <li>
                                    Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                                </li>
                                <li>
                                    It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.
                                </li>

                                <li>
                                    It is generally used on the client-side server.
                                </li>

                                <li>
                                    JavaScript can be run on any engine, including Spider Monkey, V8, and JavaScript Core.
                                </li>



                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <h5 className="text-center">nodejs</h5>

                            <ul>

                                <li>
                                    NodeJS is a Javascript runtime environment.
                                </li>
                                <li>
                                    V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                                </li>

                                <li>
                                    Nodejs is written in C, C++ and Javascript.
                                </li>

                                <li>
                                    It is generally used on the server-side.
                                </li>

                                <li>
                                    Node JS is only supported by the V8 engine, which Google Chrome mostly uses. Any JavaScript program written with Node JS will always be run in the V8 engine.
                                </li>



                            </ul>

                        </div>

                    </div>
                </div>



                <div className="mt-3 border border-primary mb-3 p-3">
                    <h4>
                        2 When should you use nodejs and when should you use mongodb
                    </h4>

                    <h5>When should I use nodejs</h5>
                    Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js was developed by Ryan Dahl in 2009 and its latest version is v0.10.36.

                    <li>Good for beginner developers, JavaScript is simple to learn, rich framework.</li>
                    <li>It is fast, due to Google's innovative technologies and the event loop.</li>
                    <li>Ability to keep data in native JSON (object notation) format in your database.</li>
                    <li>Multiple modules (NPM, Grunt, etc.) and supportive community.</li>
                    <li> Good to create real-time apps, such as chats and games.</li>
                    <li>Good for data streaming, thus for audio and video files, as an example.</li>
                    <li>Sponsored by Linux Foundation, as well as PayPal, Joylent, Microsoft, Walmart.
                        Wide range of hosting options.</li>
                    <li>JS is the longest-running language, 99% of developers know some of it.</li>

                    <h5>When should I use mongodb</h5>
                    MongoDB is an open-source document database built on a horizontal scale-out architecture that uses a flexible schema for storing data. Founded in 2007, MongoDB has a worldwide following in the developer community.

                    <li>High Write Load- If the need is to load rows of data without much security issues, you can be using it. However do avoid using with transactions, unless there is security implemented.
                    </li>
                    <li>
                        High Availability in Cloud- It is easier to set up a series of master-slave servers and recovery from failure is faster too.
                    </li>
                    <li>
                        Scalability- RDBMS has it’s own limitations when it comes to scalability, especially the performance which often tends to degrade. MongoDB comes with a built in solution for partition and database sharding.
                    </li>
                    <li>
                        Big Data sets And Unstable Schema- When you are dealing with tables larger than 1 GB, whose schema is never consistent, MongoDB is a pretty good option. Whenever you add a new field in MongoDB, it does not effect existing rows, and is faster, unlike a traditional RBDMS.
                    </li>



                </div>

                <div className="mt-3 border border-primary mb-3 p-3">
                    <h4>3 Differences between sql and nosql databases.</h4>

                    <div className='row'>
                        <div className='col-sm-6'>
                            <h5>SQL</h5>
                            <li>SQL databases are primarily called RDBMS or Relational Databases</li>
                            <li> Traditional RDBMS uses SQL syntax and queries to analyze and get the data for further insights. They are used for OLAP systems.</li>
                            <li>Structured query language (SQL)</li>
                            <li>These databases are best suited for complex queries</li>

                            <li> RDBMS database is the right option for solving ACID problems.</li>
                            <li>It should be used when data validity is super important</li>


                        </div>



                        <div className='col-sm-6'>
                            <h5>NoSQL</h5>
                            <li>NoSQL databases are primarily called as Non-relational or distributed database</li>
                            <li>NoSQL database system consists of various kind of database technologies. These databases were developed in response to the demands presented for the development of the modern application. </li>

                            <li> No declarative query language</li>
                            <li>These databases are not so good for complex queries</li>
                            <li>NoSQL is a best used for solving data availability problems</li>
                            <li>Use when it’s more important to have fast data than correct data</li>


                        </div>

                    </div>
                </div>

                <div className="mt-3 border border-primary mb-3 p-3">
                    <h5>What is the purpose of jwt</h5>
                    <h4>4 What is the purpose of jwt and how does it work</h4>
                    JWT, or JSON Web Token, is an open standard used to share information between two parties securely  a client and a server.

                   <li> JWT is a stateless authentication mechanism as the user state is never saved in the database. As JWTs are self-contained, all the necessary information is there, reducing the need of going back and forward to the database. With JWT we don't need to query database to authenticate the user for every api call.</li> 
                 <li>Protects against CSRF (Cross Site Request Forgery) attacks. </li>  
                 <li>JWT is compact. Because of its size, it can be sent through an URL, POST parameter, or inside an HTTP header.</li>  
                   <li>You can authorize only the requests you wish to authorize. Cookies are sent for every single request.</li> 
                 <li>You can send JWT to any domain. This is especially useful for single page applications that are consuming multiple services that are requiring authorization - so I can have a web app on the domain myapp.com that can make authorized client-side requests to myservice1.com and to myservice2.com. Cookies are bound to a single domain. A cookie created on the domain foo.com can't be read by the domain bar.com. </li>  
                 <br /> 

                 <h5>How does it work</h5>

                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: 
                    <li>xxxxx.yyyyy.zzzzz.</li>

                    <li>Once decoded, you will get two JSON strings:</li>

                    <li>The header and the payload.</li>
                    <li>The signature.</li>

                    The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
                    <br />

                    The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.



                </div>



            </div>
        </div>
    );
};

export default Blog;