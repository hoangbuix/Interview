import { HttpException, HttpStatus } from "@nestjs/common";


export class NotAcceptableException extends HttpException {
    constructor(message?: string) {
        super(message || "Not acceptable", HttpStatus.NOT_ACCEPTABLE);
    }
}