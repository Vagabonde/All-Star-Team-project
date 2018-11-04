import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GROUPS} from '../mock-groups';

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit, OnDestroy {


    groups = GROUPS;
    paramsSubscription;
    group;


    constructor(private route: ActivatedRoute) {

  }

    sideNavEnabled: boolean = true;

    toggleSideNavState() {
        this.sideNavEnabled = !this.sideNavEnabled;
    }

    getSideNavState() {
        return {
            'side-nav': this.sideNavEnabled
        };
    }

    ngOnInit() {
      this.paramsSubscription = this.route.params.subscribe(params => {
            this.group = this.groups.find((el) => {
                return parseInt(params.groupId) === el.id;
            });
        });
    }

    ngOnDestroy() {
       this.paramsSubscription.unsubscribe();
    }
}
