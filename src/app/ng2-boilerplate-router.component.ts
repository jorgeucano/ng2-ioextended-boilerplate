import { Component } from '@angular/core';
import { RouterdashComponent } from './+routerdash';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { ExtendedComponent } from './+extended';
import { SpeakersComponent } from './+speakers';
import { RegistracionComponent } from './+registracion';

@Component({
  moduleId: module.id,
  selector: 'ng2-boilerplate-router-app',
  templateUrl: 'ng2-boilerplate-router.component.html',
  styleUrls: ['ng2-boilerplate-router.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/live', component: RouterdashComponent},
  {path: '/extended', component: ExtendedComponent},
  {path: '/speakers', component: SpeakersComponent},
  {path: '/registracion', component: RegistracionComponent}
])
export class Ng2BoilerplateRouterAppComponent {
  title = 'GDG Buenos Aires';
}
