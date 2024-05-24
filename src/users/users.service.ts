/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';
import { equals } from 'class-validator';

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
            const rolesArrays =  this.users.filter(user => user.role === role)
            if(rolesArrays.length === 0 ) throw new NotFoundException('Role não encontrada')
                return rolesArrays
        }
        return this.users
    }

    findOne(id:number){
        const user = this.users.find(user => user.id === id)
        if(!user) throw new NotFoundException('Usuario nao encontrado')
        return user
    }    

    create(createUserDTO: CreateUserDTO){
       
        const userIncrementId = [...this.users].sort((a,b) => b.id - a.id)
        const newUser = {
            id: userIncrementId[0].id + 1,...createUserDTO}
        
        this.users.push(newUser)
        return newUser

        }

    update(id:number, updateUserDTO: UpdateUserDTO ){
        this.users = this.users.map( user => {
            if(user.id === id){
                return { ...user,...updateUserDTO}
            }
            return user
        })

        return this.findOne(id)


    }

    delete(id:number){
        const removedUser = this.findOne(id)
        this.users = this.users.filter(user => user.id !== id)
        return removedUser

    }
    
}


