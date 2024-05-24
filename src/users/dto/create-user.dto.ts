/* eslint-disable prettier/prettier */
import { IsEmail, IsEnum ,IsNotEmpty, IsString} from "class-validator";


export class CreateUserDTO{
    @IsString()
    @IsNotEmpty()
    nome: string;
    
    @IsEmail()
    email: string;

    @IsEnum(['ADMIN','FISICA','JURIDICA'],{message :'Precisa de um role valido'})
    role : 'ADMIN' |'FISICA'|'JURIDICA';
}