import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [{
        "id": 1,
        "nome" :"Tatiane",
        "email": "tati@hotmail.com",
        "role":"ADMIN",
    },
    {
        "id": 2,
        "nome" :"Sergio",
        "email": "sergio@hotmail.com",
        "role":"FISICA",
    },
    {
        "id": 3,
        "nome" :"Carina",
        "email": "carina@hotmail.com",
        "role":"JURIDICA",
    },
    {
        "id": 4,
        "nome" :"Jessica",
        "email": "jess@hotmail.com",
        "role":"FISICA",
    },
    {
        "id": 5,
        "nome" :"Josh",
        "email": "Josh@hotmail.com",
        "role":"JURIDICA",
    }]

    findAll(role?: 'ADMIN'| 'FISICA'| 'JURIDICA'){

        if(role){
            return this.users.filter(user => user.role === role)
        }
        return this.users
    }

    findOne(id:number){
        const user = this.users.find(user => user.id === id)
        return user
    }    

    create(user: {nome: string, email: string, role : 'ADMIN'|'FISICA'|'JURIDICA'}){
       
        const userIncrementId = [...this.users].sort((a,b) => b.id = a.id)
        const newUser = {
            id: userIncrementId[0].id + 1,...user}
        
        this.users.push(newUser)
        return newUser

        }
    }


