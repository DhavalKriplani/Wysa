# Wysa

This is a project for Interview @ Wysa.

### Project Definition: 
Set up automatic, client-initiated data porting between accounts in 2 devices in a system that does not use any online or real world user identity authentication to sign up.

### Tech Stack Used: 
Node JS and MongoDB

JSON Web Token (JWT) is used for securing the APIs. Express.js is also used.

### Concept Used: 
Time-based One-Time Password (TOTP) is the concept used for authentication of user from one device to another.

Here a website is a mediator to create data porting between the 2 devices. However, the APIs are created in such a manner that the data porting can be easily done when used in the Wysa app directly.

### File Structure

- #### handlers
    Handlers handle all the requests that have been defined for the Controller. The respective Controller is then called for code execution.

- #### Controllers
    Controllers are the heart for code execution. Respective models are called for any database transaction. Helpers are also used as needed.

- #### Models
    Models have been divided into Schemas and Methods.
    - ##### Schemas
        Schemas define the skeleton structure of a database.
    - ##### Methods
        Methods are basically functions that are used to deal with the CRUD operations.

- #### Views
    Views are the HBS files for html code.
    
- #### Helpers
    Helpers are the files used for the code that is minimal and can be reused everywhere in the project.
