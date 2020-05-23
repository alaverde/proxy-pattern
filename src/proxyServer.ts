import { ILibraryServer } from "./ILibraryServer";
import { LibraryServer } from "./libraryServer";

export class ProxyServer implements ILibraryServer{
    private port:number;
    private host:string;
    libraryServer?:LibraryServer;

    constructor(
        port:number,
        host:string
    ){
        this.libraryServer = undefined;
        this.port = port;
        this.host = host;
        console.log("Proxy conectado");
    }

    public download(url:string):void{
        if(this.isPaid(url)){
            if(!this.libraryServer){
                this.libraryServer = new LibraryServer(this.port, this.host);
                this.libraryServer.download(url);
            }
        }else{
            console.log("No ha comprado este libro, debe comprarlo para poder descargarlo");
        }
    }

    private isPaid(book:string){
        return book == "/library/bookPaid";
    }
}