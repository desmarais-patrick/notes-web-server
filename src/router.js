class Router {
    /**
     * @param {object} options 
     * 
     * @param {url} options.URL Node.js `url` module
     * 
     * @param {ApiController} options.apiController
     * @param {FileController} options.fileController
     * @param {HealthController} options.healthController
     */
    constructor(options) {}

    /**
     * Routes server requests to corresponding controllers before 
     * sending back the server response.
     * 
     * @param {http.IncomingMessage} incomingMessage Readable stream for 
     * request events.
     * @param {http.ServerResponse} serverResponse Writable stream for 
     * request events.
     */
    route(incomingMessage, serverResponse) {
        // Try "/api" --> ApiController.relay()
        // Catch if down and signal 500 as JSON! ==> Move to controller!

        // "/_ah/health" --> HealthController.status()

        // Try "*" --> FileController.get()
        // Catch if down or inaccessible and return 500.html or default one. ==> Move to controller!
        // Catch if 404 and return 404.html ==> Move to controller!
    }
}

module.exports = Router;
