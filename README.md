Project Name: Managing books.

Short description: Developed by RESTful API using Node.js and MongoDB for Managing books.

Technologies involved: RESTful API, Node.js, MongoDB, Mongoose(ORM).

ALERT: MongoDB connection string and PORT numbers are excluded from this repository.

CRUD operations: Users can able to:
1.Add a new book (title, author, summary)
2.View a list of all books
3.View details of a specific book by its ID
4.Update a book's details
5.Delete a book

Base url is-"____/api/book"
APIs are:

1.To add a book-> Base url/add 
    -> query - user_id
    -> body  - title, author, summary

Explanation: If a same user is adding two books for instance, user_id is auto-generated for the book he/she added first, that is returned to the user, using that user_id he/she can add multiple books with a same user_id. Ultimately if we analyze an specific user record we could get data for a single user_id with multiple added books.  

2.To list all books-> Base url/list.
Explanation: This API retrieves list of all books and no. of books present in the library.

3.To view a book by its id-> Base url/:bookId
    -> params - bookId

Explanation: This API is retrieves a data of single book by passing its unique id.     

4.To update a book-> Base url/update
    -> query - book_id, user_id
    -> body - title, author, summary(give necessary field to be updated)

Explanation: This API update book's information by passing ids to update necessary fields.     

5.To delete a book-> Base ul/delete
    -> query - book_id, user_id
    
Explanation: This API delete book's information by its ids.   
