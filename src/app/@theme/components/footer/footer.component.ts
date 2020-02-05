import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created by <b>Nicole Geier</b> 2020</span>
    <div class="socials">
      <a href="https://github.com/TecIntelli/sp-techforesight" target="_blank" class="ion ion-social-github"></a>
    </div>
  `,
})
export class FooterComponent {
}
