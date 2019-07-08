import { Injectable } from '@angular/core';


export interface Roles{
    teacher?: boolean;
    parent?: boolean;
}

// tslint:disable-next-line: class-name
interface user {
    username: string ;
    uid: string ;
}

@Injectable()
export class UserService {
    private user: user;

    constructor() {

    }

// tslint:disable-next-line: no-shadowed-variable
    setUser( user: user) {
        this.user = user;
    }

    getUID() {
        return this.user.uid;
    }
}
