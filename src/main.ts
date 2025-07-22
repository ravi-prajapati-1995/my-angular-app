import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

//These are the components that will be loaded when application starts
bootstrapApplication(AppComponent).catch((err) => console.error(err));
//To load the header component in starting
// bootstrapApplication(HeaderComponent)
