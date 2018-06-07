import {Component, OnInit, ViewChild, Output, EventEmitter, OnDestroy} from '@angular/core';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import {fuseAnimations} from '@fuse/animations';
import {AppqosPredefinedService} from '../../firebase-services/appqos-predefined.service';
import {Observable, Subscription} from 'rxjs';
import {map, filter, distinctUntilChanged, tap, debounceTime } from 'rxjs/operators';


@Component({
  selector: 'fuse-predefined',
  templateUrl: './predefined.component.html',
  styleUrls: ['./predefined.component.scss'],
  animations: fuseAnimations

})
export class PredefinedComponent implements OnInit, OnDestroy {

  firebaseTenantSub: Subscription;
  indexCheckboxSub: Subscription;
  rows: Observable<any[]>;
  tenant: any;
  origRowIndex = [];
  loadingIndicator = true;
  filteredValue: string;
  index: number;


  constructor(private appqosPredefined: AppqosPredefinedService) {

  }

  @ViewChild(DatatableComponent) table: DatatableComponent;
  @Output('rowSelect') rowSelect = new EventEmitter<any>();
  @Output('pageChange') pageChange = new EventEmitter<any>();


  updateFilter() {


    if (this.filteredValue) {
      const val = this.filteredValue.toLowerCase().toString().trim();

      this.loadingIndicator = true;
      this.rows = this.appqosPredefined.getAppqosPredefined(this.tenant)
          .pipe(
            // Keep original Array copy before filtering
            tap(_tabobj => {
              this.origRowIndex = [..._tabobj];
            }),
            distinctUntilChanged(),
            debounceTime(1000),
            // Filter Observable on desired keys
            map(_mapobj => _mapobj.filter(_filteredobj =>
              _filteredobj['appname'].toLowerCase().toString().trim().indexOf(val) !== -1 || !val
              ||
              _filteredobj['type'].toLowerCase().toString().trim().indexOf(val) !== -1 || !val
              ||
              _filteredobj['sdwanprofile'].toLowerCase().toString().trim().indexOf(val) !== -1 || !val
            )),
            tap(res => {
              this.loadingIndicator =
                false;
            })
          );

    }

    else {
      this.loadingIndicator = true;
      this.rows = this.appqosPredefined.getAppqosPredefined(this.tenant)
          .pipe(
            distinctUntilChanged(),
            tap(res => {
              this.origRowIndex =
                [...res];
              this.loadingIndicator =
                false;
            })
          );

    }

    this.table.offset = 0;

    // Set Index to Infinite Value to uncheck selection when filtering
    this.index = 99999;

    // Output to disable buttons when user filter data
    this.rowSelect.emit({'row': {'sdwanprofile': 'UNCHECKED'}});

  }


  onLimitChange($event) {
    this.table.limit =
      $event.value;
    this.table.recalculate();

  }


  ngOnInit() {

    this.loadingIndicator =
      true;

    // Subscribe to index to reset checkbox when user performs app action
    this.indexCheckboxSub =
      this.appqosPredefined.indexObs.subscribe(index => this.index =
        index);

    // First Retrieve Tenant ID from user
    this.firebaseTenantSub =
      this.appqosPredefined.getTenantObject().subscribe(tenantid => {
        this.tenant =
          tenantid.payload.val();


        this.rows = this.appqosPredefined.getAppqosPredefined(this.tenant).pipe(
            // Keep original array copy
            tap(_tapobj => {
              this.origRowIndex =
                [..._tapobj];
              this.loadingIndicator =
                false;
            })
          );
      });

  }


  ngOnDestroy() {
    this.firebaseTenantSub.unsubscribe();
    this.indexCheckboxSub.unsubscribe();
  }


  onSelect($event, rowIndex) {
    if ($event.source.checked) {
      this.index =
        rowIndex;
      this.rowSelect.emit({'tenant': this.tenant, 'row': $event.source.value, 'index': this.origRowIndex.indexOf($event.source.value)});
      return;
    }
    else {
      this.rowSelect.emit({'row': {'sdwanprofile': 'UNCHECKED'}});
    }
  }

}
