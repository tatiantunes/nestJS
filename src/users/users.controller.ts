import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

/*@Get() - get simples
findAll(){
    return []
}*/
constructor(private readonly usersService:UsersService) {}
@Get()
 findAll(@Query('role') role?: 'FISICA' | 'JURIDICA' | 'ADMIN'){
    return this.usersService.findAll(role)
 }

@Get(':id')
findOne(@Param('id') id: string)
{
    return this.usersService.findOne(+id)
}




@Post()
create(@Body() user: {nome: string, email: string, role : 'ADMIN'|'FISICA'|'JURIDICA'}){
    return this.usersService.create(user)
}

@Patch(':id')
update(@Param('id') id: string, @Body() userUpdate: {nome?: string, email?: string, role? : 'ADMIN'|'FISICA'|'JURIDICA'})
{
    return this.usersService.update(+id,userUpdate)
}

@Delete(':id')
delete(@Param('id') id: string)
{
    return this.usersService.findOne(+id)
}


}
