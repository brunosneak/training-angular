import {
	Component,
	OnInit,
	ViewChild,
	ElementRef,
	AfterViewInit,
} from "@angular/core";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss", "./home.component.responsive.scss"],
})
export class HomeComponent implements OnInit, AfterViewInit {
	@ViewChild("monPerso") public monPerso: ElementRef;

	constructor() {}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		this.jump();
	}

	jump() {
		let idSetInterval;
		let persoPosition = this.monPerso.nativeElement.offsetLeft;
		idSetInterval = setInterval(() => {
			persoPosition -= 165;
			if (this.monPerso) {
				this.monPerso.nativeElement.style.left = persoPosition + "px";
			}
			if (persoPosition <= -2300) {
				clearInterval(idSetInterval);
			}
		}, 200);
	}
}
