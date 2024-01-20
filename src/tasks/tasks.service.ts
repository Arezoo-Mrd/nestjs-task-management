import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  constructor() {}
  public doSomething() {
    console.log('%c doSomething');
  }
}
