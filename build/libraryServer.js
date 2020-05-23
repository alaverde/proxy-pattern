"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LibraryServer {
    constructor(port, host) {
        this.port = port;
        this.host = host;
        console.log("Servidor conectado");
    }
    download(url) {
        console.log("Descargando", url);
    }
}
exports.LibraryServer = LibraryServer;
