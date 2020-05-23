import { ILibraryServer } from "./ILibraryServer";
import { ProxyServer } from "./proxyServer";

const server:ILibraryServer = new ProxyServer(80, "https://www.library.com");

server.download("/library/bookNoPaid");
server.download("/library/bookPaid");