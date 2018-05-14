import {Component, ViewEncapsulation, ViewChild} from '@angular/core';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import {DatePipe} from '@angular/common';
import {MessageService} from 'primeng/components/common/messageservice';


@Component({
  selector: 'fuse-taskviewer',
  templateUrl: './taskviewer.component.html',
  styleUrls: ['./taskviewer.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class TaskviewerComponent  {



  constructor(private msgService: MessageService) {

  }

  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows = [
    { taskid: '32ededef3434', taskname: 'Basic AppQoS - Assign App', status: 'COMPLETE', start_time: 1525403596780,
      end_time: 1525444596780, progress_percent: 100 },

    { taskid: '32edededef34341', taskname: 'Advanced AppQoS - Create App', status: 'IN_PROGRESS', start_time: 12232332424,
      end_time: 34545435, progress_percent: 40 },

    { taskid: '32ededef34342', taskname: 'ZTP Site Mumbai Activation', status: 'COMPLETE', start_time: 12136563543,
      end_time: 131345435435435, progress_percent: 100 },

    { taskid: '32edededef34343', taskname: 'Basic AppQoS - Assign App', status: 'IN_PROGRESS', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 63 },

    { taskid: '32ed232dedef34344', taskname: 'Static Route Creation - Device MUMBAI-01', status: 'ERROR', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 100 },

    { taskid: '32ededef34345', taskname: 'Basic AppQoS - Assign App', status: 'COMPLETE', start_time: 1525403596780,
      end_time: 1525444596780, progress_percent: 100 },

    { taskid: '32edededef34346', taskname: 'Advanced AppQoS - Create App', status: 'IN_PROGRESS', start_time: 12232332424,
      end_time: 34545435, progress_percent: 40 },

    { taskid: '32ededef34347', taskname: 'ZTP Site Mumbai Activation', status: 'COMPLETE', start_time: 12136563543,
      end_time: 131345435435435, progress_percent: 100 },

    { taskid: '32edededef34348', taskname: 'Basic AppQoS - Assign App', status: 'IN_PROGRESS', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 63 },

    { taskid: '32ed232dedef34349', taskname: 'Static Route Creation - Device MUMBAI-01', status: 'ERROR', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 100 },
    { taskid: '32ededef343410', taskname: 'Basic AppQoS - Assign App', status: 'COMPLETE', start_time: 1525403596780,
      end_time: 1525444596780, progress_percent: 100 },

    { taskid: '32edededef343411', taskname: 'Advanced AppQoS - Create App', status: 'IN_PROGRESS', start_time: 12232332424,
      end_time: 34545435, progress_percent: 40 },

    { taskid: '32ededef343412', taskname: 'ZTP Site Mumbai Activation', status: 'COMPLETE', start_time: 12136563543,
      end_time: 131345435435435, progress_percent: 100 },

    { taskid: '32edededef343413', taskname: 'Basic AppQoS - Assign App', status: 'IN_PROGRESS', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 63 },

    { taskid: '32ed232dedef343414', taskname: 'Static Route Creation - Device MUMBAI-01', status: 'ERROR', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 100 },

    { taskid: '32edededef343415', taskname: 'Basic AppQoS - Assign App', status: 'IN_PROGRESS', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 63 },

    { taskid: '32ed232dedef343416', taskname: 'Static Route Creation - Device MUMBAI-01', status: 'ERROR', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 100 },
    { taskid: '32edededef343417', taskname: 'Basic AppQoS - Assign App', status: 'IN_PROGRESS', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 63 },

    { taskid: '32ed232dedef343418', taskname: 'Static Route Creation - Device MUMBAI-01', status: 'ERROR', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 100 },
    { taskid: '32edededef343419', taskname: 'Basic AppQoS - Assign App', status: 'IN_PROGRESS', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 63 },

    { taskid: '32ed232dedef343420', taskname: 'Static Route Creation - Device MUMBAI-01', status: 'ERROR', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 100 },
    { taskid: '32edededef343421', taskname: 'Basic AppQoS - Assign App', status: 'IN_PROGRESS', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 63 },

    { taskid: '32ed232dedef343422', taskname: 'Static Route Creation - Device MUMBAI-01', status: 'ERROR', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 100 },
    { taskid: '32edededef343423', taskname: 'Basic AppQoS - Assign App', status: 'IN_PROGRESS', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 63 },

    { taskid: '32ed232dedef343424', taskname: 'Static Route Creation - Device MUMBAI-01', status: 'ERROR', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 100 },
    { taskid: '32edededef343425', taskname: 'Basic AppQoS - Assign App', status: 'IN_PROGRESS', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 63 },

    { taskid: '32ed232dedef343426', taskname: 'Static Route Creation - Device MUMBAI-01', status: 'ERROR', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 100 },
    { taskid: '32edededef343427', taskname: 'Basic AppQoS - Assign App', status: 'IN_PROGRESS', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 63 },

    { taskid: '32ed232dedef343428', taskname: 'Static Route Creation - Device MUMBAI-01', status: 'ERROR', start_time: 1313453545,
      end_time: 12133545345453, progress_percent: 100 },


  ];

  temp = this.rows;

  selected = [];
  selectedTasks = [];
  selectedIndex = [];


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
  onSelect({selected}) {

    this.selectedTasks = this.selected;
  }

  onDeleteTask() {

    for (let index = 0; index < this.selectedTasks.length; index++) {
        console.log('Delete Index ' + this.rows.indexOf(this.selectedTasks[index]));
        this.rows.splice(this.rows.indexOf(this.selectedTasks[index]), 1);
    }
    // Handle Immutable Array
    this.rows = [...this.rows];

    this.msgService.add({
      severity: 'success', summary: 'Tasks Deleted', detail: `${this.selectedTasks.length} Task(s) successfully deleted.`

    });
    // Reset Selected Tasks Array
    this.selectedTasks.length = 0;
  }

}

