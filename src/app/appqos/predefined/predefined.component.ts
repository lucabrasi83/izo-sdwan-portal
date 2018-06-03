import {Component, OnInit, ViewChild, Output, EventEmitter, OnDestroy } from '@angular/core';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import { fuseAnimations } from '@fuse/animations';
import {Subscription} from 'rxjs/Subscription';
import {AppqosPredefinedService} from '../../firebase-services/appqos-predefined.service';





@Component({
  selector: 'fuse-predefined',
  templateUrl: './predefined.component.html',
  styleUrls: ['./predefined.component.scss'],
  animations   : fuseAnimations

})
export class PredefinedComponent implements OnInit, OnDestroy {

  firebaseTenantSub: Subscription;
  firebaseAppqosPredifinedSub: Subscription;
  indexCheckboxSub: Subscription;
  tenant: any;
  rows = [];
  temp = [];
  origRowIndex = [];
  loadingIndicator = true;
  filterValue: string;

  index: number;



  constructor(private appqosPredefined: AppqosPredefinedService)
  {

  }

  @ViewChild(DatatableComponent) table: DatatableComponent;
  @Output('rowSelect') rowSelect = new EventEmitter<any>();
  @Output('pageChange') pageChange = new EventEmitter<any>();



  updateFilter(event) {

    const val = event.target.value.toString().toLowerCase().trim();

    // get the columns numbers
    const colsAmt = 4;

    // get the key names for each column in dataset
    const keys = Object.keys(this.temp[0]);


     const temp_table = this.temp.filter(function(item) {
      for (let i = 0; i < colsAmt; i++){
        // check for a match
        if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val){
          // found match, return true to add to result set
          return true;
        }
      }
    });

    // update the rows
    this.rows = temp_table;


    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;

    // Set Index to Infinite Value to uncheck selection when filtering
    this.index = 99999;

    // Output to disable buttons when user filter data
    this.rowSelect.emit( {'row': {'sdwanprofile': 'UNCHECKED'}});


  }


  onLimitChange($event) {
    this.table.limit = $event.value;
    this.table.recalculate();

  }


  ngOnInit() {

    // Subscribe to index to reset checkbox when user performs app action
    this.indexCheckboxSub = this.appqosPredefined.indexObs.subscribe(index => this.index = index);

    // First Retrieve Tenant ID from user
    this.firebaseTenantSub = this.appqosPredefined.getTenantObject().subscribe(tenantid => {
      this.tenant = tenantid.payload.val();
      this.firebaseAppqosPredifinedSub = this.appqosPredefined.getAppqosPredefined(this.tenant).subscribe(predifinedapps =>
      {

        this.temp = [...predifinedapps];

        this.rows = predifinedapps;

        // Create copy of array to keep correct index. Index in this.rows get modified during filtering
        this.origRowIndex = [...this.rows];

        this.loadingIndicator = false;

      });
    });



  }


  ngOnDestroy() {
    this.firebaseTenantSub.unsubscribe();
    this.firebaseAppqosPredifinedSub.unsubscribe();
    this.indexCheckboxSub.unsubscribe();
  }


  onSelect($event, row) {
    if ($event.source.checked) {
      this.index = this.rows.indexOf(row);
      this.rowSelect.emit({'tenant': this.tenant, 'row': $event.source.value, 'index': this.origRowIndex.indexOf($event.source.value)});
      return;
    }
    else {
      this.rowSelect.emit( {'row': {'sdwanprofile': 'UNCHECKED'}});
    }
  }

}
