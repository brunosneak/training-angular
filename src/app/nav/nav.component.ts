import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-nav",
	templateUrl: "./nav.component.html",
	styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
	public navStatus: boolean = false;
	constructor() {}

	ngOnInit(): void {}

	animButton() {
		this.navStatus = !this.navStatus;
		console.log(this.navStatus);
	}
}
