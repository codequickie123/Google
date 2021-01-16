

import { Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef, ViewRef, EmbeddedViewRef, ViewChildren } from '@angular/core';
import { RyberService } from '../ryber.service'
import { fromEvent, from, Subscription, Subscriber, of, combineLatest } from 'rxjs';
import { deltaNode, eventDispatcher, numberParse, objectCopy } from '../customExports'
import { catchError, delay } from 'rxjs/operators'
import { environment as env } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Directive({
    selector: '[appExternalQuery]'
})
export class ExternalQueryDirective {

    @Input() loading: any;
    extras: any;
    zChildren: any;

    constructor(
        private el: ElementRef,
        private http: HttpClient,
        private renderer: Renderer2,
        private ryber: RyberService
    ) { }


    @HostListener('click') onClick() {


        if (this.extras?.confirm === 'true') {



            let update = (document.querySelector(".f_o_r_m_Result") as HTMLElement)
            let validDomains = ["user", "group", "serviceAccount"]
            let query = (document.querySelector(".f_o_r_m_Answer") as HTMLInputElement)?.value

            let data: any = {
                titleName:"Jalen",
                query
            }

            console.log(data)
            update.innerText = "Submitting ..."

            //communicate with the python backend
            this.http.post(
                "http://localhost:3005",
                data,
                {
                    responseType: 'text',
                }
            )
            .subscribe({


                error: (error) => {

                    update.innerText = "Is the backend running?"
                    eventDispatcher({
                        event: 'resize',
                        element: window
                    })
                },
                next: (result: any) => {
                    console.log(result)
                    update.innerText = result

                    eventDispatcher({
                        event: 'resize',
                        element: window
                    })
                }

            })
            //

        }

    }

    ngOnInit() {
        this.extras = this.loading
        if (this.extras?.confirm === 'true') {
            // console.log(this.extras)
            this.ryber[this.extras.co.valueOf()].metadata.zChildrenSubject
                .subscribe(() => {
                    this.zChildren = this.ryber[this.extras.co.valueOf()].metadata.zChildren
                    // console.log(this.zChildren)
                })
            setTimeout(() => {
                // this.el.nativeElement.click()
            }, 200)
        }
    }


    ngOnDestroy() {
        if (this.extras?.confirm === 'true') {
            Object.values(this)
                .forEach((x: any, i) => {
                    if (x instanceof Subscriber) {
                        x.unsubscribe?.()
                    }

                })
        }
    }
}

