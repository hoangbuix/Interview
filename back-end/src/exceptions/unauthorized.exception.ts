import { HttpStatus, HttpException } from "@nestjs/common";


export class UnAuthorizedException extends HttpException {
    constructor(message?: string) {
        super(message || "UnAuthorizedException", HttpStatus.UNAUTHORIZED)
    }
}