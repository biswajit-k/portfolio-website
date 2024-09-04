---
title: Session in SQLAlchemy ORM
description: "Session is a core part of any database ORM. It abstracts away the handling of transactions ins 
database using session object. This makes it easier to manage ORM objects. This article explains simply about
session in general and how you can use it."
date: 2024-08-24
featured: true
slug: /blog/sqlqlchemy-session-basics
tags:
  - databases
  - python
  - sqlalchemy
---

## Contents

- <a href="#what-is-a-session">What is a session?</a>
- <a href="#crud-operations">CRUD operations using session</a>
- <a href="#important-features">Important features in session</a>
- <a href="#whats-next">What's next?</a>

## <span id="what-is-a-session">What is a session?</span>

Session is an object which is used in database ORM layer to perform database operations.

Many database connection tools like [SQLAlchemy](https://www.sqlalchemy.org/) provide two ways to interact with the database - Query Builder and the ORM.

I will be using SQLAlchemy for the examples in this article, but similar concept is used by any other database toolkit providing these functionality.

1.  **Query Builder**:

    As the name suggests, it provides functions and objects to build a SQL query.

The basic components in a query builder are - `Engine`, `Connection`, `MetaData`, `Table`, `Transaction`, `Column`.

The basic idea of using it is like - use the _Engine_ to connect with the database, it acts like the connection manager. Then create _Connection_ using the engine. When you have the connection, you can begin a _Transaction_, execute it and finally commit/rollback it. Withing a transaction, you can create _Table_ which have _Column_ of certain types like _Integer_, _String_ or execute queries like _Select_.

SQLAlchemy has the [**core**](https://docs.sqlalchemy.org/en/20/core/) module which provides this API.

2. **ORM**:

_Object Relational Mapping(ORM)_ follows the object-oriented programming approach.

We create classes for the database entities. The objects of these classes, are mapped to the corresponding database entity. For example, the object of a _User_ class would represent a row in the table.

For example, below snippet defines a _user_ table in the database with two columns _id_ and _fullname_ where _id_ is the primary key.

```python
class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, autoincrement=True)
    fullname = Column(String, nullable=False)

with Session(engine) as session:
    john = User(fullname="John Doe")
    print(john.fullname)    # accessing the object - John Doe

    session.add(john)   # insert row in the user table
    session.commit()    # persist the object

```

In this way we interact with the objects which are mapped to equivalent SQL code. This not only reduces the complexity and redundancy but also gives us ability to interact with database in an object-oriented approach.

Notice in the above code that we used **session** to insert record in the database.

### What is happening behind the scene?

Look at the below code to understand.

```python
start.py
```

Let's quickly breakdown each line:

- `session.begin()` : This initiates a transaction in the database. Behind the scene, the session request the engine to get a database connection. Further requests to database in this transaction will be made through this connection.

- `session.add(john)` : Here, the _john_ object to is converted to equivalent SQL row and a insert SQL query is generated that is held by the session object.

- `session.flush()` : Now, the user _john_ is **temporarily** inserted into the database. The `flush()` command temporarily writes to the database. This change is not permanant and can be rolledback by calling `session.rollback()`. Note that we have disabled `autoflush`, however, when it is enabled(_the default_) then flush will be automatically called after _session.add()_.

- `session.commit()` : This command makes the changes permanant into the database. Also, the _john_ object will be expired, which means that next call to the object will fetch the object from the database instead of getting it from the identity map.

- `session.close()` : This command finally closes the transaction and the connection is returned back to the connection pool.

### Where does the session fit?

Below image describes the architecture of SQLAlchemy.
![]()

|              ![sqlalchemy architecture](./images/sqlalchemy_architecture.png)               |
| :-----------------------------------------------------------------------------------------: |
| _[SQLAlchemy Architecture](https://techspot.zzzeek.org/files/2011/sqla_arch_retro.key.pdf)_ |

As we can see, ORM provides an abstraction over the Core module. The session helps in getting the connection from the connection pool. It allows storing the ORM object, creating a transaction, mapping the ORM object to equivalent SQL query and finally executing it.

### How does the session store object?

Inside the session, there is a data structure called the [identity map](https://docs.sqlalchemy.org/en/20/glossary.html#term-identity-map), which stores the objects that are fetched or created within the session.

It is similar to a map/dictionary the primary key is mapped to the object. From the query result set, using the primary keys it is checked if the object is already present in the identity map, if it does then it is returned, otherwise new object is created for it. This prevents creation of another copy of existing object.

An example from the [docs](https://docs.sqlalchemy.org/en/20/orm/session_basics.html#expiring-refreshing):

```python
u1 = session.scalars(select(User).where(User.id == 5)).one()
u2 = session.scalars(select(User).where(User.id == 5)).one()
u1 is u2    # True
```

In above example, _u1_ and _u2_ are the same object fetched from Identity Map.

## <span id="crud-operations">CRUD operations using session</span>

1. **Create**

First we create a class object and then we insert it into the database using the `session.add(obj)` command.

```python
with Session(engine) as session:
    john = User(fullname="John Doe")
    session.add(john)
    session.commit()
```

2. **Read**

Reading the object is done by passing the sql statement created from `Select` object to the `session.execute(stmt)` or `session.scalars(stmt)` functions.

`session.execute()` return list of row object, while `session.scalars()` extracts the first value from each row and returns the list of that. This is same as `session.execute().scalars()`.See the below example-

```python
from sqlalchemy import select

with Session(engine) as session:
    stmt1 = select(User).where(User.fullname == "John Doe").all()

    # Output => list[Row objects]
    # Row object => (User(...), )
    # Each row object is a tuple with one User object as we provided User in the select function
    # Finally => [(User(id=1, fullname="John Doe"), )]
    session.execute(stmt1)

    # Output => list[ScalarResult object]
    # ScalarResult object => Row[0] i.e first value of each row object
    # Finally => [User(id=1, fullname="John Doe")]
    session.scalars(stmt1)

    stmt2 = select(user.id, user.fullname).where(User.fullname == "John Doe")

    # Output => list[Row objects]
    # Row object => (user.id, user.fullname)
    # Finally => [(1, "John Doe")]
    session.execute(stmt2).all()

    # Output => list[ScalarResult object]
    # ScalarResult object => Row[0] i.e first value of each row object
    # Finally => [1]
    session.scalars(stmt2).all()
```

There are multiple options to choose how we want the data after we get the query result. For example all rows, single row, etc. Some of the commonly used options are -

- `.all()` : Returns all the matching rows in a list
- `.first()` : Returns the first matched row, or `None` if no row is found
- `.one()` : Expects that only one row should be in the result and returns that. If there is 0 or more than 1 row then raises Exception.
- `.scalar()` : Singular form of `scalars`, it returns the first column inside the first row in retult. If result is empty then returns `None`.

3. **Update**

To update the object, we first need a reference to it. So we first fetch it, then we normally change its attributes for updation. After, we commit, the changes get permanant.

```python
john = session.scalar(select(User).where(User.fullname="John Doe"))
john.fullname = "Alice"

john in session.dirty   # True

session.commit()
```

4. **Delete**

Like update, we first need the reference to the object. After we get it, we can simply call `session.delete()` and commit it.

```python
john = session.scalar(select(User).where(User.fullname="John Doe"))
session.delete(john)

john in session.deleted     # True

session.commit()
```

For bulk insertion, updation and deletion, seperate [functions](https://docs.sqlalchemy.org/en/20/orm/queryguide/dml.html#orm-enabled-insert-update-and-delete-statements) are also provided. Using them, we don't need to have object's reference with us before hand.

## <span id="important-features">Important features in session</span>

Session object has various features and methods to manipulate existing state of objects. [State management](https://docs.sqlalchemy.org/en/20/orm/session_state_management.html) with session is in itself a vast topic, however, here we will cover some major features.

- **Auto Begin**

The session object internally calls the `session.begin()`(and comes into a transactional state) as soon as
some work is performed with it. So, the transaction is begun lazily. It can also be check if session has an active transaction currently by-

```python
session.execute(...)
session.in_transaction()    # True
```

To disable this feature and take control of session begin state `session.autobegin = False`

- **Expiring**

The objects go into expired state in cases when the session is committed, rolledback, closed or by explicitly calling `session.expire(obj)`.

Note that it has no effect on the record(_if present_) in the database corresponding to the object.

Object is expired means that whenever it is accessed next time, its attributes need to be re-fetched from the database.

- **Refreshing**

Refreshing the object does the same thing as expire, but instead of lazily fetching attributes when they are accessed, it fetches them just after expiring the object.

The object is refreshed by calling `session.refresh(obj)`.

- **Rolling Back**

Rolling back _undo_ the transaction changes that have been flushed by the session. This is possible as the flush command writes to a temporary file in the database. The changes get permanant into the database only after committing them. So, we have the ability to rollback them before the commit.

It can be done by calling `session.rollback()`. The effects of rolling back are - the connection gets released and the objects get expired.

- **Expunging**

Expunging means removing the object from the session, so it will no longer be tracked by the session. In this case, the object is said to be in a de-attached state.

Object is expunged by calling `session.expunge(obj)`

- **Merging**

Merging is the opposite of expunging, it attaches the de-attached object with the session.

It is called as `attached_obj = session.merge(obj)`.

If the object is already attached to another session, a new copy is made which gets attached to current session, while the original object also remains attached to its original session.

Finally, we need to commit the changes to persist the object in database.

## <span id="whats-next">What's next?</span>

In this article, we have covered the basic concept behind session and common features it has. However, there is more to be understood about the session. The other topics includes state management, transaction details, cascading and thread safe session. We are going to cover them in coming articles.
