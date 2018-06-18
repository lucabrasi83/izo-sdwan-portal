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
      lng: 103.88880100000006,
      status: 'ONLINE',
      site: 'TCL-SG-SINGAPORE-SDWAN-PRIME'
    },
    {
      lat: 22.2784388,
      lng: 114.18471449999993,
      status: 'OFFLINE',
      site: 'TCL-HK-HONGKONG-SDWAN-PRIME'

    },
    {
      lat: 48.8816121,
      lng: 2.2718419000000267,
      status: 'ONLINE',
      site: 'TCL-FR-PARIS-SDWAN-PRIME'
    },
    {
      lat: 19.0691644,
      lng: 72.87164529999995,
      status: 'OFFLINE',
      site: 'TCL-IN-MUMBAI-SDWAN-PRIME'
    },
    {
      lat: 37.4063062,
      lng: -121.97649330000002,
      status: 'ONLINE',
      site: 'TCL-US-SANTACLARA-SDWAN-PRIME'
    },
    {
      lat: 40.7554075,
      lng: -73.9789116,
      status: 'ONLINE',
      site: 'TCL-US-NEWYORK-SDWAN-PRIME'
    },
    {
      lat: 45.4808753,
      lng: -73.54014690000002,
      status: 'ONLINE',
      site: 'TCL-CA-MONTREAL-SDWAN-PRIME'
    },
    {
      lat: 51.510783,
      lng: -0.09394420000000991,
      status: 'ONLINE',
      site: 'TCL-UK-LONDON-SDWAN-PRIME'
    },
    {
      lat: 50.1149424,
      lng: 8.649016299999971,
      status: 'ONLINE',
      site: 'TCL-DE-FRANKFURT-SDWAN-PRIME'
    },
    {
      lat: 40.4314381,
      lng: -74.24920780000002,
      status: 'ONLINE',
      site: 'TCL-US-MATAWAN-SDWAN-PRIME'
    },
    {
      lat: 51.6198638,
      lng: -0.7792074999999841,
      status: 'OFFLINE',
      site: 'TCL-UK-CRESSEX-SDWAN-PRIME'
    },
    {
      lat: 18.602495,
      lng: 73.865002,
      status: 'ONLINE',
      site: 'TCL-IN-PUNE-SDWAN-PRIME'
    },

    {
      lat: 13.1316877,
      lng: 80.16576650000002,
      status: 'ONLINE',
      site: 'TCL-IN-CHENNAI-SDWAN-PRIME'
    },
    {
      lat: -33.8677371,
      lng: 151.20169350000003,
      status: 'ONLINE',
      site: 'TCL-AU-SYDNEY-SDWAN-PRIME'
    },

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
      19;
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
