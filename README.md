# protected-app

This npm package provides middleware for protecting routes in a backend application using JSON Web Tokens (JWT). It verifies the presence and validity of a JWT token from the client's cookies, retrieves the user ID, and fetches user details from a specified user model. If successful, it attaches the user object to the request (req.user) for subsequent route handling. Handles various error scenarios like missing or invalid tokens, unauthorized access, and internal server errors.

