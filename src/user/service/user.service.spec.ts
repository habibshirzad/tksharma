import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import exp from 'constants';
import { create } from 'domain';
import { resolve } from 'path/posix';
import { User } from '../dto/entity/user.entity'
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
 



  const mockUserService = {
    findOne: jest.fn(),  
   

  }

  beforeEach(async () => {


    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService,{
        provide:getRepositoryToken(User),
        useValue: mockUserService
      }],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  // it('it should be able to get users',() => {
  //   expect(service.getUsers()).not.toEqual(null)
  // })

  it('it should be able to get user by id',async () => {
    expect(await service.getUser(1))
  })

//   describe('add user', () => {
//     let user;
//     beforeEach(() => {
//       user = {
//         id : 1,
//         email: 'a@gmail.com',
//         username: 'a',

//       };create.mockReturnValue(user)
//     }),
  
//   it('add user', () => {
//     const newUser =  service.addUser(
//       user
//     )
//     expect(newUser).toEqual(user)
  
  
// })

// })
})