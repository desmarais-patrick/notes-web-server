# notes-web-server

Child project for notes, Web server in front of API and Web client files

This child project is on hold.
It's not currently used in the Notes app.
Using this Web server could enable HTTPS and render CORS considerations unnecessary.
However, using this Web server will certainly increase the number of requests that are now mediated 
by the Cloud Storage static file server.

Note also that implementing HTTP/2 on such Web server hasn't been investigated.
