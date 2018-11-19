import {Component, OnDestroy, OnInit, HostListener} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GROUPS} from '@shared/mocks/mock-groups';

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss']
})


export class GroupComponent implements OnInit, OnDestroy {


    groups = GROUPS;
    paramsSubscription;
    group;
    sideNavEnabled: boolean;
    innerWidth: number;
    mobileSize: boolean;

    constructor(private route: ActivatedRoute) { }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.innerWidth = window.innerWidth;
    }

    isMobileSize() {
        if (this.innerWidth <= 992) {
            return true;
        } else {
            return false;
        }
    }

    toggleSideNavState() {
        this.sideNavEnabled = !this.sideNavEnabled;
    }

    getSideNavState() {
        return {
            'side-nav-open': this.sideNavEnabled,
            'side-nav-closed': !this.sideNavEnabled
        }
    }

    ngOnInit() {
        this.paramsSubscription = this.route.params.subscribe(params => {
            this.group = this.groups.find((el) => {
                return params.groupId === el.id;
            });
        });

        this.innerWidth = window.innerWidth;

        if (this.isMobileSize()) {
           this.sideNavEnabled = false;
        } else {
            this.sideNavEnabled = true;
        }

    }

    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }
}
