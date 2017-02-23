import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TranslateService, LangChangeEvent } from 'ng2-translate';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public helloWorldString: string = '';

	constructor(public navCtrl: NavController, public translate: TranslateService) {
		translate.setDefaultLang('en');
		this.updateVariables();

		translate.onLangChange.subscribe((event: LangChangeEvent) => {
			console.log('Our translations changed!');
			this.updateVariables();
		});
	}

	updateVariables () {
		this.translate.get('Hellur wurld!').subscribe(
			value => {
				// value is our translated string
				this.helloWorldString = value;
			}
		);
	}

	changeLanguage (newLanguage: string) {
		this.translate.use(newLanguage).subscribe(ready => {
			//this.updateVariables();
		});
	}
}
