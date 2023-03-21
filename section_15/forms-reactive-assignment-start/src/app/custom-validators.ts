import { FormControl } from "@angular/forms";
import { Observable } from "rxjs/Observable";

export class CustomValidators {
	static invalidName(control: FormControl): {[s: string]: boolean} {
		if(control.value === 'Test') {
			return {'invalidName': true};
		}

		return null;
	}
    
	static asyncInvalidName(control: FormControl): Promise<any> | Observable<any> {
		const promise = new Promise<any>((resolve, reject) => {
			setTimeout(() => {
				if ( control.value === 'Testing' ) {
					resolve({ 'invalidName': true });
				} else {
				resolve(null)
				}
			}, 2500);
		});

		return promise;
	}
}