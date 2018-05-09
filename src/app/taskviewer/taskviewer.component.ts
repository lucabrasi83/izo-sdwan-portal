import {Component, ViewEncapsulation, ViewChild} from '@angular/core';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'fuse-taskviewer',
  templateUrl: './taskviewer.component.html',
  styleUrls: ['./taskviewer.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class TaskviewerComponent  {



  constructor() {

  }

  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows = [
    { taskid: '32ededef3434', taskname: 'Basic AppQoS - Assign App', status: 'COMPLETE', start_time: 1525403596780,
      end_time: 1525444596780, progress_percent: 100 },

    { taskid: '32edededef3434', taskname: 'Advanced AppQoS - Create App', status: 'IN_PROGRESS', start_time: 12232332424,
      end_time: 34545435, progress_percent: 40 },

    { taskid: '32ededef3434', taskname: 'ZTP Site Mumbai Activation', status: 'COMPLETE', start_time: 12136563543,
      end_time: 131345435435435, progress_percent: 100 },

    { taskid: '32edededef3434', taskname: 'Basic AppQoS - Assign App', status: 'IN_PROGRESS', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 63 },

    { taskid: '32ed232dedef3434', taskname: 'Static Route Creation - Device MUMBAI-01', status: 'ERROR', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 100 },

    { taskid: '32ededef3434', taskname: 'Basic AppQoS - Assign App', status: 'COMPLETE', start_time: 1525403596780,
      end_time: 1525444596780, progress_percent: 100 },

    { taskid: '32edededef3434', taskname: 'Advanced AppQoS - Create App', status: 'IN_PROGRESS', start_time: 12232332424,
      end_time: 34545435, progress_percent: 40 },

    { taskid: '32ededef3434', taskname: 'ZTP Site Mumbai Activation', status: 'COMPLETE', start_time: 12136563543,
      end_time: 131345435435435, progress_percent: 100 },

    { taskid: '32edededef3434', taskname: 'Basic AppQoS - Assign App', status: 'IN_PROGRESS', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 63 },

    { taskid: '32ed232dedef3434', taskname: 'Static Route Creation - Device MUMBAI-01', status: 'ERROR', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 100 },
    { taskid: '32ededef3434', taskname: 'Basic AppQoS - Assign App', status: 'COMPLETE', start_time: 1525403596780,
      end_time: 1525444596780, progress_percent: 100 },

    { taskid: '32edededef3434', taskname: 'Advanced AppQoS - Create App', status: 'IN_PROGRESS', start_time: 12232332424,
      end_time: 34545435, progress_percent: 40 },

    { taskid: '32ededef3434', taskname: 'ZTP Site Mumbai Activation', status: 'COMPLETE', start_time: 12136563543,
      end_time: 131345435435435, progress_percent: 100 },

    { taskid: '32edededef3434', taskname: 'Basic AppQoS - Assign App', status: 'IN_PROGRESS', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 63 },

    { taskid: '32ed232dedef3434', taskname: 'Static Route Creation - Device MUMBAI-01', status: 'ERROR', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 100 },

    { taskid: '32edededef3434', taskname: 'Basic AppQoS - Assign App', status: 'IN_PROGRESS', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 63 },

    { taskid: '32ed232dedef3434', taskname: 'Static Route Creation - Device MUMBAI-01', status: 'ERROR', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 100 },
    { taskid: '32edededef3434', taskname: 'Basic AppQoS - Assign App', status: 'IN_PROGRESS', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 63 },

    { taskid: '32ed232dedef3434', taskname: 'Static Route Creation - Device MUMBAI-01', status: 'ERROR', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 100 },
    { taskid: '32edededef3434', taskname: 'Basic AppQoS - Assign App', status: 'IN_PROGRESS', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 63 },

    { taskid: '32ed232dedef3434', taskname: 'Static Route Creation - Device MUMBAI-01', status: 'ERROR', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 100 },
    { taskid: '32edededef3434', taskname: 'Basic AppQoS - Assign App', status: 'IN_PROGRESS', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 63 },

    { taskid: '32ed232dedef3434', taskname: 'Static Route Creation - Device MUMBAI-01', status: 'ERROR', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 100 },
    { taskid: '32edededef3434', taskname: 'Basic AppQoS - Assign App', status: 'IN_PROGRESS', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 63 },

    { taskid: '32ed232dedef3434', taskname: 'Static Route Creation - Device MUMBAI-01', status: 'ERROR', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 100 },
    { taskid: '32edededef3434', taskname: 'Basic AppQoS - Assign App', status: 'IN_PROGRESS', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 63 },

    { taskid: '32ed232dedef3434', taskname: 'Static Route Creation - Device MUMBAI-01', status: 'ERROR', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 100 },
    { taskid: '32edededef3434', taskname: 'Basic AppQoS - Assign App', status: 'IN_PROGRESS', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 63 },

    { taskid: '32ed232dedef3434', taskname: 'Static Route Creation - Device MUMBAI-01', status: 'ERROR', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 100 },


  ];

  temp = this.rows;



  updateFilter(event) {
    const val = event.target.value.toString().toLowerCase().trim();

    // get the columns numbers
    const colsAmt = 6;

    // get the key names for each column in dataset
    const keys = Object.keys(this.temp[0]);


    const temp = this.temp.filter(function(item){
      for (let i = 0; i < colsAmt; i++){
        // check for a match
        if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 || !val){
          // found match, return true to add to result set
          return true;
        }
      }
    });

    // update the rows
    this.rows = temp;

    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onLimitChange($event) {
    this.table.limit = $event.value;
    this.table.recalculate();
  }


}

