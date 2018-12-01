import VanillaTilt from "vanilla-tilt";
import { OnInit, OnDestroy, Directive, Input, ElementRef, Output, EventEmitter } from "@angular/core";
import { TiltOptions, TiltValues } from "vanilla-tilt";

@Directive({
	selector: "[ssvTilt]",
	exportAs: "ssvTilt",
})
export class TiltDirective implements OnInit, OnDestroy {

	@Input() tiltOptions: TiltOptions;

	@Output() tiltChange = new EventEmitter();

	private vanillaTilt: VanillaTilt;

	constructor(
		private el: ElementRef<HTMLElement>,
	) {
	}

	ngOnInit() {
		this.vanillaTilt = new VanillaTilt(this.el.nativeElement, this.tiltOptions);
		this.el.nativeElement.addEventListener("tiltChange", this.handleTiltChange);
	}

	ngOnDestroy() {
		if (this.vanillaTilt) {
			this.vanillaTilt.destroy();
		}
		this.el.nativeElement.removeEventListener("tiltChange", this.handleTiltChange);
	}

	getValues(): TiltValues {
		return this.vanillaTilt.getValues();
	}

	reset() {
		this.vanillaTilt.reset();
	}

	private handleTiltChange() {
		this.tiltChange.emit();
	}
}