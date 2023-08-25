import * as i0 from '@angular/core';
import { Injectable, Component, NgModule, Input } from '@angular/core';

class NgxAlertMessageService {
    constructor() { }
}
NgxAlertMessageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxAlertMessageService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxAlertMessageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxAlertMessageService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxAlertMessageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NgxAlertMessageComponent {
}
NgxAlertMessageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxAlertMessageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxAlertMessageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: NgxAlertMessageComponent, selector: "lib-ngx-alert-message", ngImport: i0, template: `
    <p>
      ngx-alert-message works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxAlertMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ngx-alert-message', template: `
    <p>
      ngx-alert-message works!
    </p>
  ` }]
        }] });

class NgxAlertMessageModule {
}
NgxAlertMessageModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxAlertMessageModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxAlertMessageModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: NgxAlertMessageModule, declarations: [NgxAlertMessageComponent, AlertComponent, JustAlertComponent], exports: [NgxAlertMessageComponent, AlertComponent, JustAlertComponent] });
NgxAlertMessageModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxAlertMessageModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: NgxAlertMessageModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NgxAlertMessageComponent, AlertComponent, JustAlertComponent],
                    imports: [],
                    exports: [NgxAlertMessageComponent, AlertComponent, JustAlertComponent],
                }]
        }] });

class AlertComponent {
    ngOnInit() {
        if (this.mode === 'success') {
            this.color = 'green';
        }
        else if (this.mode === 'primary') {
            this.color = '#0d47a1';
        }
        else if (this.mode === 'danger') {
            this.color = 'crimson';
        }
        else if (this.mode === 'warning') {
            this.color = '#ff9800';
        }
        else if (this.mode === 'info') {
            this.color = 'cornflowerblue';
        }
        else {
            this.color = 'white';
            this.textColor = 'black';
            this.bold = 'true';
        }
    }
}
AlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: AlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: AlertComponent, selector: "ngx-alert", inputs: { mode: "mode", close: "close", bold: "bold", text: "text", disabled: "disabled" }, ngImport: i0, template: "<div class=\"alert-bar-ngx\" [style.backgroundColor]=\"color\" [style.color]=\"textColor\"\r\n  [style.fontWeight]=\"bold === 'true' ? 'bold' : '100'\" [style.opacity]=\"disabled === 'true' ? '0.5' : '1'\"\r\n  [style.cursor]=\"disabled === 'true' ? 'not-allowed' : 'pointer'\">\r\n  <span class=\"closeIcon\" [hidden]=\"close === 'false'\">\r\n    &#215;\r\n  </span>\r\n  {{ text }}\r\n</div>\r\n", styles: [".alert-bar-ngx{margin:.625rem 0rem;padding:.6125rem .8125rem;color:#fff;box-shadow:0 0 5px 5px #f5f5f5}.closeIcon{float:right;cursor:pointer}.just-close{width:5%;font-weight:bolder;background-color:#dc143c;color:#fff;border-radius:0 5px 5px 0;padding:5px;display:flex;align-items:center;text-align:center}.just-content{width:95%;padding:5px}.just-container{display:flex;border-radius:1;border:1px solid crimson;border-radius:9px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-alert', template: "<div class=\"alert-bar-ngx\" [style.backgroundColor]=\"color\" [style.color]=\"textColor\"\r\n  [style.fontWeight]=\"bold === 'true' ? 'bold' : '100'\" [style.opacity]=\"disabled === 'true' ? '0.5' : '1'\"\r\n  [style.cursor]=\"disabled === 'true' ? 'not-allowed' : 'pointer'\">\r\n  <span class=\"closeIcon\" [hidden]=\"close === 'false'\">\r\n    &#215;\r\n  </span>\r\n  {{ text }}\r\n</div>\r\n", styles: [".alert-bar-ngx{margin:.625rem 0rem;padding:.6125rem .8125rem;color:#fff;box-shadow:0 0 5px 5px #f5f5f5}.closeIcon{float:right;cursor:pointer}.just-close{width:5%;font-weight:bolder;background-color:#dc143c;color:#fff;border-radius:0 5px 5px 0;padding:5px;display:flex;align-items:center;text-align:center}.just-content{width:95%;padding:5px}.just-container{display:flex;border-radius:1;border:1px solid crimson;border-radius:9px}\n"] }]
        }], propDecorators: { mode: [{
                type: Input
            }], close: [{
                type: Input
            }], bold: [{
                type: Input
            }], text: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

class JustAlertComponent {
    ngOnInit() {
        if (this.mode === 'success') {
            this.color = 'green';
        }
        else if (this.mode === 'primary') {
            this.color = '#0d47a1';
        }
        else if (this.mode === 'danger') {
            this.color = 'crimson';
        }
        else if (this.mode === 'warning') {
            this.color = '#ff9800';
        }
        else if (this.mode === 'info') {
            this.color = 'cornflowerblue';
        }
        else {
            this.color = 'white';
            this.textColor = 'black';
            this.bold = 'true';
        }
    }
}
JustAlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: JustAlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
JustAlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: JustAlertComponent, selector: "ngx-just-alert", inputs: { mode: "mode", close: "close", bold: "bold", text: "text", disabled: "disabled" }, ngImport: i0, template: "<div class=\"just-container\" [style.border]=\"'1px solid ' + mode\" [style.color]=\"mode\"\r\n  [style.fontWeight]=\"bold === 'true' ? 'bold' : '100'\" [style.opacity]=\"disabled === 'true' ? '0.5' : '1'\"\r\n  [style.cursor]=\"disabled === 'true' ? 'not-allowed' : 'pointer'\">\r\n  <div class=\"just-content\">\r\n    {{ text }}\r\n  </div>\r\n  <div class=\"just-close\" [style.backgroundColor]=\"mode\" [style.color]=\"'white'\">\r\n    <span>&#215;</span>\r\n  </div>\r\n</div>\r\n", styles: [".just-close{width:6%;font-weight:bolder;text-align:center;background-color:#dc143c;color:#fff;border-radius:0;padding:0;display:grid;align-items:center}.just-content{width:95%;padding:.6125rem .8125rem}.just-container{display:flex;border-radius:1;border:1px solid crimson;margin:.625rem 0rem;color:#fff;box-shadow:0 0 5px 5px #f5f5f5}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: JustAlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-just-alert', template: "<div class=\"just-container\" [style.border]=\"'1px solid ' + mode\" [style.color]=\"mode\"\r\n  [style.fontWeight]=\"bold === 'true' ? 'bold' : '100'\" [style.opacity]=\"disabled === 'true' ? '0.5' : '1'\"\r\n  [style.cursor]=\"disabled === 'true' ? 'not-allowed' : 'pointer'\">\r\n  <div class=\"just-content\">\r\n    {{ text }}\r\n  </div>\r\n  <div class=\"just-close\" [style.backgroundColor]=\"mode\" [style.color]=\"'white'\">\r\n    <span>&#215;</span>\r\n  </div>\r\n</div>\r\n", styles: [".just-close{width:6%;font-weight:bolder;text-align:center;background-color:#dc143c;color:#fff;border-radius:0;padding:0;display:grid;align-items:center}.just-content{width:95%;padding:.6125rem .8125rem}.just-container{display:flex;border-radius:1;border:1px solid crimson;margin:.625rem 0rem;color:#fff;box-shadow:0 0 5px 5px #f5f5f5}\n"] }]
        }], propDecorators: { mode: [{
                type: Input
            }], close: [{
                type: Input
            }], bold: [{
                type: Input
            }], text: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

/*
 * Public API Surface of ngx-alert-message
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AlertComponent, JustAlertComponent, NgxAlertMessageComponent, NgxAlertMessageModule, NgxAlertMessageService };
//# sourceMappingURL=ngx-alert-message.mjs.map