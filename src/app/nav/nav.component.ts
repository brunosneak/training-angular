import { Component } from "@angular/core";

@Component({
	selector: "app-nav",
	templateUrl: "./nav.component.html",
	styleUrls: ["./nav.component.scss", "./nav.component.responsive.scss"],
})
export class NavComponent {
	public navStatus: boolean = false;
	constructor() {}

	animButton() {
		this.navStatus = !this.navStatus;
	}
}
