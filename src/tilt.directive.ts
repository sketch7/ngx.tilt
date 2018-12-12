import VanillaTilt from "vanilla-tilt";
import { OnInit, OnDestroy, Directive, Input, ElementRef, Output, EventEmitter } from "@angular/core";
import { TiltOptions, TiltValues } from "vanilla-tilt";

@Directive({
	selector: "[ssvTilt]",
	exportAs: "ssvTilt",
})
export class TiltDirective implements OnInit, OnDestroy {

	@Input() tiltOptions: TiltOptions | undefined;

	@Output() tiltChange = new EventEmitter<TiltValues>();

	private vanillaTilt!: VanillaTilt;
	private onTiltChange = this.handleTiltChange.bind(this);

	constructor(
		private el: ElementRef<HTMLElement>,
	) {
	}

	ngOnInit() {
		this.vanillaTilt = new VanillaTilt(this.el.nativeElement, this.tiltOptions);
		this.el.nativeElement.addEventListener("tiltChange", this.onTiltChange);
	}

	ngOnDestroy() {
		if (this.vanillaTilt) {
			this.vanillaTilt.destroy();
		}
		this.el.nativeElement.removeEventListener("tiltChange", this.onTiltChange);
	}

	getValues(): TiltValues {
		return this.vanillaTilt.getValues();
	}

	reset() {
		this.vanillaTilt.reset();
	}

	private handleTiltChange(event: CustomEvent<TiltValues>) {
		this.tiltChange.emit(event.detail);
	}
}