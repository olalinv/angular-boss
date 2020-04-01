
import { Greetings } from '@angular-boss/shared/domain';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-ui-greetings',
  template: `
    <h1>
      {{ greeting.message }}
    </h1>
  `,
  styles: []
})
export class GreetingsComponent implements OnInit {
  public greeting: Greetings = { message: 'Hello world' };

  constructor() { }

  ngOnInit(): void {
  }

}
