import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-result-page',
    templateUrl: './result-page.component.html',
    styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent implements OnInit {

    public planet: string;
    public status: boolean;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.status = (this.route.snapshot.paramMap.get('status').toString() === 'success');
        if (this.status ) {
            this.planet = this.route.snapshot.paramMap.get('planet').toString();
        }
    }

    tryAgain() {
        this.router.navigate(['planning']);
    }
}
