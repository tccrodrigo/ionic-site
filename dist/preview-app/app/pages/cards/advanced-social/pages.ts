import {Page} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../../directives/helpers';

@Page({
  templateUrl: './build/pages/cards/advanced-social/template.html',
  directives: [forwardRef(() => AndroidAttribute)]
})
export class AdvancedSocialPage {
    constructor() {

    }
}