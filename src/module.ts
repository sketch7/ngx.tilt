import { NgModule } from "@angular/core";

import { TiltDirective } from "./tilt.directive";

@NgModule({
	declarations: [TiltDirective],
	exports: [TiltDirective]
})
export class TiltModule {
}