import { IUser, RoleType } from './../user';

export const USERS: IUser[] = [
    { email: 'exampelr@gmail.com', username: 'supertt', birthdate: new Date(2005, 2, 5), role: RoleType.Admin },
    { email: 'rokityu@gmail.com', username: 'vlad45', birthdate: new Date(2003, 1, 10), role: RoleType.User },
    { email: 'cinneroki@gmail.com', username: 'bob', birthdate: new Date(2008, 10, 14), role: RoleType.Admin },
    { email: 'resswiogn@gmail.com', username: 'rocky', birthdate: new Date(2002, 4, 22), role: RoleType.User }
];

export const USERS_FROM_IT_STEP: IUser[] = [
    { email: 'rororo@itstep.com', username: 'rororo', birthdate: new Date(2001, 2, 22), role: RoleType.User },
    { email: 'tymov@itstep.com', username: 'vlad22', birthdate: new Date(1990, 4, 10), role: RoleType.Admin },
    { email: 'cimonnn@itstep.com', username: 'cimon45', birthdate: new Date(1999, 14, 14), role: RoleType.User }
];