"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const proxyServer_1 = require("./proxyServer");
const server = new proxyServer_1.ProxyServer(80, "https://www.library.com");
server.download("/library/bookNoPaid");
server.download("/library/bookPaid");
