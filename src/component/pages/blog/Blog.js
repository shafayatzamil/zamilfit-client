import React from "react";

const Blog = () => {
  return (
    <div className="m-4">
      <div className="mb-2">
        <h1 className="text-3xl font-semibold">
          Difference between SQL and NoSQL?
        </h1>
        <p>
          <p>
            (SQL) databases are classified as Relational databases, i.e.,
            RDBMS.SQL databases can only be run on a single system and because
            of this, they don’t follow the distribution of data and hence they
            don’t support hierarchical storage of data. SQL databases are
            table-based databases which makes them better for multi-row
            transaction applications.
          </p>
          <p>
            (NoSQL) databases are known as non-relational or distributed
            database.NoSQL Databases can run on multiple systems, and hence,
            they support data distribution features like data repetition,
            partition, etc., making them the best option for hierarchical
            storage of data.NoSQL is document-based, key-value pair, and graph
            databases, which makes them better when there are a lot of changes
            in the data.
          </p>
        </p>
      </div>
      <div className="mb-2">
        <h1 className="text-3xl font-semibold">
          What is JWT, and how does it work?
        </h1>
        <p>
          JSON Web Token (JWT) is an open standard for securely transmitting
          information between parties as JSON object.
          <p>
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted.
          </p>
        </p>
      </div>
      <div className="mb-2">
        <h1 className="text-3xl font-semibold">
          What is the difference between javascript and NodeJS?
        </h1>
        <p>
          NodeJS is a cross-platform and opensource Javascript runtime
          environment that allows the javascript to be run on the server-side.
          Nodejs allows Javascript code to run outside the browser. Nodejs comes
          with a lot of modules and mostly used in web development.
        </p>
        <p>
          Javascript is a Scripting language. It is mostly abbreviated as JS. It
          can be said that Javascript is the updated version of the ECMA script.
          Javascript is a high-level programming language that uses the concept
          of Oops but it is based on prototype inheritance.
        </p>
      </div>
      <div className="mb-2">
        <h1 className="text-3xl font-semibold">
          How does NodeJS handle multiple requests at the same time?
        </h1>

        <p>
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them.
        </p>
      </div>
    </div>
  );
};

export default Blog;
