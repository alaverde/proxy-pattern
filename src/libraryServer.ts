import { ILibraryServer } from "./ILibraryServer";

export class LibraryServer implements ILibraryServer{
    private port:number;
    private host:string;

    constructor(
        port:number,
        host:string
    ){
        this.port = port;
        this.host = host;
        console.log("Servidor conectado");
    }

    public download(url:string) :void{
        console.log("Descargando", url);
    }
}