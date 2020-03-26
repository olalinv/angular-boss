
import { Greetings } from '@angular-boss/shared/domain';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-ui-greetings',
  template: `
    <p>
      {{ greeting.message }}
    </p>
  `,
  styles: []
})
export class GreetingsComponent implements OnInit {
  public greeting: Greetings = { message: 'Hello world' };

  constructor() { }

  ngOnInit(): void {
  }

}
