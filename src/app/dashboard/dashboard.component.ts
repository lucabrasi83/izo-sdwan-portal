import {Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {AgmMap} from '@agm/core';
import {Subscription} from 'rxjs';
import {InventoryService} from '../firebase-services/inventory.service';
import {map, tap} from 'rxjs/operators';


@Component({
  selector: 'fuse-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit, OnDestroy {

  @ViewChild('AgmMap') public AgmMap: AgmMap;

  mapZoom = 3;
  mapLat = 0;
  mapLng = 0;

  firebaseTenantSub: Subscription;
  firebaseInvSub: Subscription;
  tenant: any;

  viewTaskSummary = [
    500,
    400
  ];


  viewDevicesPieCharts = [
    550,
    400
  ];

  devicesByStatus: { name: string, value: number }[];

  devicesByModel: {name: string, value: number}[];


  customTaskSummaryColors = [
    {
      name: 'ERROR',
      value: '#F44336'
    },
    {
      name: 'COMPLETE',
      value: 'limegreen'
    },
    {
      name: 'IN_PROGRESS',
      value: '#FFEB3B'
    },
    {
      name: 'CANCELLED',
      value: '#304FFE'
    }
  ];

  customDeviceByStatusColors = [
    {
      name: 'OFFLINE',
      value: '#F44336'
    },
    {
      name: 'ONLINE',
      value: 'limegreen'
    }
  ];

  constructor(private invService: InventoryService) {
  }

  markers = [
    {
      lat: 1.336588,
      lng: 103.886607,
      status: 'ONLINE'
    },
    {
      lat: 22.2784388,
      lng: 114.1825205,
      status: 'OFFLINE'

    },
    {
      lat: 48.8816121,
      lng: 2.2696479,
      status: 'ONLINE'
    },
    {
      lat: 19.0691644,
      lng: 72.8694513,
      status: 'OFFLINE'
    },
    {
      lat: 37.4063062,
      lng: -121.9786873,
      status: 'ONLINE'
    },
    {
      lat: 51.510783,
      lng: -0.0961382,
      status: 'ONLINE'
    },
    {
      lat: 50.1149458,
      lng: 8.6468276,
      status: 'OFFLINE'
    }
  ];

  tasks_summary = [
    {
      name: 'ERROR',
      value: 2
    },
    {
      name: 'IN_PROGRESS',
      value: 3
    },
    {
      name: 'COMPLETE',
      value: 10
    },
    {
      name: 'CANCELLED',
      value: 1
    }

  ];


  ngOnInit() {

    this.firebaseTenantSub =
      this.invService.getTenantObject().subscribe(tenantid => {
        this.tenant =
          tenantid.payload.val();

        this.firebaseInvSub =
          this.invService.getTenantDevices(this.tenant).subscribe(dev_array => {


            this.devicesByStatus =
              [
                {
                  name: 'ONLINE',
                  value: dev_array.filter(offline => offline['status'] ===
                    'ONLINE').length
                },

                {
                  name: 'OFFLINE',
                  value: dev_array.filter(online => online['status'] ===
                    'OFFLINE').length

                }

              ];

            // Find each Device Model counts
            let counts = {};
            for (let i = 0; i < dev_array.length; i++) {
              if (typeof counts[dev_array[i]['device_model']] === 'undefined') {
                counts[dev_array[i]['device_model']] = 1;

              }
              else {
                counts[dev_array[i]['device_model']] ++;

              }
            }

            // Push device Model counts into Pie chart array
            this.devicesByModel = [];
            for (let key in counts) {

              this.devicesByModel.push( {name: key, value: counts[key]});

            }

          });

      });
  }


  ngOnDestroy() {
    this.firebaseTenantSub.unsubscribe();
    this.firebaseInvSub.unsubscribe();
  }

  onMarkerClick(lat, lng) {
    this.mapZoom =
      18;
    this.mapLat =
      lat;
    this.mapLng =
      lng;


  }

  onZoomChange() {
    this.mapZoom =
      this.AgmMap.zoom;
  }

  onInfoWindowClose() {
    this.mapLat =
      0;
    this.mapLng =
      0;
    this.mapZoom =
      2;
    this.AgmMap.triggerResize(true);
  }

}
