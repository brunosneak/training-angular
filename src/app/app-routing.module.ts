import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { CvComponent } from "./cv/cv.component";

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "contact", component: ContactComponent },
	{ path: "cv", component: CvComponent },
	{ path: "**", redirectTo: "" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
