//declare var ambientLight: Color;

export declare function setColor(colorName: string): void;

interface FileService {
    writeFile(ftpServerAddress: string): string;
}
declare const fileService: FileService;

export namespace simpleHttpTemplate {
    export interface Http {
        method?: string;
        param?: string;
        body?: string;
    }
    export class ApiCheat{}
}
