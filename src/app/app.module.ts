import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { CvComponent } from "./cv/cv.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjetsComponent } from "./projets/projets.component";

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		HomeComponent,
		HeaderComponent,
		CvComponent,
		ContactComponent,
		ProjetsComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
