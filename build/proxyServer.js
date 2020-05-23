"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const libraryServer_1 = require("./libraryServer");
class ProxyServer {
    constructor(port, host) {
        this.libraryServer = undefined;
        this.port = port;
        this.host = host;
        console.log("Proxy conectado");
    }
    download(url) {
        if (this.isPaid(url)) {
            if (!this.libraryServer) {
                this.libraryServer = new libraryServer_1.LibraryServer(this.port, this.host);
                this.libraryServer.download(url);
            }
        }
        else {
            console.log("No ha comprado este libro, debe comprarlo para poder descargarlo");
        }
    }
    isPaid(book) {
        return book == "/library/bookPaid";
    }
}
exports.ProxyServer = ProxyServer;
