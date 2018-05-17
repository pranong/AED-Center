<template>
  <div class="">
    <div class="row">
      <div class="rounded col" style="margin-left: 250px;background-color: #99c2ff;">
        <div class="hidden" v-for="(devices, index) of device" v-bind:key="devices['.key']">
          {{total = index+1}}
        </div>
        <div class="hidden" v-for="(item, index) in device" :key="device['.key']">
          <div v-if="item.status == 1">
            {{totalstat = index+1}}
          </div>
        </div>
        <div class="hidden" v-for="(item, index) in device">
          <div v-if="item.lock == 1">
            {{totallock = index+1}}
          </div>
        </div>
        <div class="hidden" v-for="(item, index) in device">
          <div v-if="item.battery < 25">
            {{totalbatt = index+1}}
          </div>
        </div>
        <div class="hidden" v-for="(devices, index) of device" v-bind:key="devices['.key']">
          <div v-if="devices.enablepass == 0">
            {{totaldis = index+1}}
          </div>
        </div>
        <h3 style="font-family: 'Open Sans', sans-serif;"><span class="glyphicon glyphicon-info-sign"></span> Summary<hr></h3>
        <div class="rounded row"  style="margin-left: 10px;margin-bottom: 20px;margin-right: 10px;background-color: white;">
          <div class="col" style="border-right: 1px solid #ccc;"><br>
             <b style="font-family: 'Open Sans', sans-serif;font-size: 20px;"><span class="glyphicon glyphicon-signal icon-info"></span></b> <b style="font-family: 'Open Sans', sans-serif;font-size: 20px">Total</b><hr style="margin-top: 10px;margin-bottom: 10px;">
            <span class="glyphicon glyphicon-ok icon-success"></span> <b style="font-family: 'Open Sans', sans-serif;">Available</b><br>
            <span class="glyphicon glyphicon-remove icon-unsuccess"></span> <b style="font-family: 'Open Sans', sans-serif;">Unavailable</b><br>
            <span class="glyphicon glyphicon-lock icon-success"></span> <b style="font-family: 'Open Sans', sans-serif;">Closed</b><br>
            <span class="glyphicon glyphicon-lock icon-unsuccess"></span> <b style="font-family: 'Open Sans', sans-serif;">Open</b><br>
            <span class="glyphicon glyphicon-flash icon-warning"></span> <b style="font-family: 'Open Sans', sans-serif;">Charging Needed</b><br>
            <span class="glyphicon glyphicon-exclamation-sign icon-unsuccess"></span> <b style="font-family: 'Open Sans', sans-serif;">Disabled Pass</b><br><br>
          </div>
          <div class="col">
            <br>
            <b style="font-family: 'Open Sans', sans-serif;font-size: 20px;">{{total}} Devices</b><hr style="margin-top: 10px;margin-bottom: 10px;">
            <b style="font-family: 'Open Sans', sans-serif;">{{totalstat}} Devices</b><br>
            <b style="font-family: 'Open Sans', sans-serif;">{{total-totalstat}} Devices</b><br>
            <b style="font-family: 'Open Sans', sans-serif;">{{totallock}} Devices</b><br>
            <b style="font-family: 'Open Sans', sans-serif;">{{total-totallock}} Devices</b><br>
            <b style="font-family: 'Open Sans', sans-serif;">{{totalbatt}} Devices</b><br>
            <b style="font-family: 'Open Sans', sans-serif;">{{totaldis}} Devices</b><br><br>
          </div>
        </div>
      </div>
      <div class="col-4" align="right" style="margin-right: 250px;margin-top: 190px;">
        <label for="sel1"> <span class="glyphicon glyphicon-filter"></span><b style="font-family: 'Open Sans', sans-serif;"> Select Filter (select one):</b></label>
        <select class="form-control" v-model="filter" style="width: 150px;height: 30px">
          <option>Default</option>
          <optgroup label="Status">
          <option>Available</option>
          <option>Unavailable</option>
          </optgroup>
          <optgroup label="Lock">
          <option>Open</option>
          <option>Closed</option>
          </optgroup>
        </select>
      </div>
    </div>
    <div class="col-8" style="margin-left: 250px;">
      <br>
      <table border="0" align="center" class="table">
        <thead>
          <tr>
            <th rowspan="2" width="50" style="text-align: center;">Name</th>
            <th rowspan="2" width="150" style="text-align: center;">Location</th>
            <th colspan="2" scope="colgroup" style="text-align: center;" class="bg-primary">Available</th>
            <th colspan="2" scope="colgroup" style="text-align: center;" class="bg-danger">Unavailable</th>
            <th rowspan="2" width="50" style="text-align: center;">Now</th>
            <th rowspan="2" width="50" style="text-align: center;">Live Streaming</th>
          </tr>
          <tr>
            <th scope="col" width="120" style="text-align: center;">Date</th>
            <th scope="col" width="120" style="text-align: center;">Time</th>
            <th scope="col" width="120" style="text-align: center;">Date</th>
            <th scope="col" width="120" style="text-align: center;">Time</th>
          </tr>
          </thead>
          <tbody align="center">

          <tr v-if="filter === 'Available' && devices.status == 1" v-for="(devices, index) of device" v-bind:key="devices['.key']">
            <!-- <td scope="rowgroup">{{index+1}}</td> -->
            <td scope="rowgroup">AED {{devices['.key']}}</td>
            <td scope="row"><a v-bind:href="'https://www.google.com/maps/search/?api=1&query=' + devices.lat + ',' + devices.lng">Go to<br>{{devices.lat}},<br>{{devices.lng}}</a></td>
            <td class="table-primary">
              <div v-for="log of devices.log.status" v-bind:key="log['.key']">
                <div v-if="log.statuslog == 1">{{log.date}}</div>
              </div>
            </td>
            <td class="table-primary">
              <div v-for="log of devices.log.status" v-bind:key="log['.key']">
                <div v-if="log.statuslog == 1">{{log.time}}</div>
              </div>
            </td>
            <td class="table-danger">
              <div v-for="log of devices.log.status" v-bind:key="log['.key']">
                <div v-if="log.statuslog == 0">{{log.date}}</div>
              </div>
            </td>
            <td class="table-danger">
              <div v-for="log of devices.log.status" v-bind:key="log['.key']">
                <div v-if="log.statuslog == 0">{{log.time}}</div> 
              </div>
            </td>
            <td scope="rowgroup">
              <div v-if="devices.lock == '1'">
                <img src="./img/un2.png">
              </div>
              <div v-else>
                <img src="./img/un.png">
              </div><br>
              <div v-if="devices.status == '1'">
                <img src="./img/gc.png">
              </div>
              <div v-else>
                <img src="./img/rc.png">
              </div><br>
              <div v-if="devices.battery > 75">
              <b style="font-family: Quicksand, sans-serif;position:  relative;">{{devices.battery}} % </b>
                <img src="./img/100.png" height="30" style="position:  relative;bottom: 10px;">
              </div>
              <div v-else-if="devices.battery > 50">
              <b style="font-family: Quicksand, sans-serif;position:  relative;">{{devices.battery}} % </b>
                <img src="./img/75.png" height="30" style="position:  relative;bottom: 10px;">
              </div>
              <div v-else-if="devices.battery > 25">
              <b style="font-family: Quicksand, sans-serif;position:  relative;">{{devices.battery}} % </b>
                <img src="./img/50.png" height="30" style="position:  relative;bottom: 10px;">
              </div>
              <div v-else-if="devices.battery > 0">
              <b style="font-family: Quicksand, sans-serif;position:  relative;">{{devices.battery}} % </b>
                <img src="./img/25.png" height="30" style="position:  relative;bottom: 10px;">
              </div><br>
              <div v-if="devices.enablepass == '1'">
                <img src="./img/enable.png" height="30" >
              </div>
              <div v-else>
                <img src="./img/unable.png" height="30" >
              </div><br>
            </td>
            <td>
              <br>
              <span class="glyphicon glyphicon-play" @click="stream(index+1)"></span>
            </td>
          </tr>

          <tr v-if="filter === 'Unavailable' && devices.status == 0" v-for="(devices, index) of device" v-bind:key="devices['.key']">
            <td scope="rowgroup">AED {{devices['.key']}}</td>
            <td scope="row"><a v-bind:href="'https://www.google.com/maps/search/?api=1&query=' + devices.lat + ',' + devices.lng">Go to<br>{{devices.lat}},<br>{{devices.lng}}</a></td>
            <td class="table-primary">
              <div v-for="log of devices.log.status" v-bind:key="log['.key']">
                <div v-if="log.statuslog == 1">{{log.date}}</div>
              </div>
            </td>
            <td class="table-primary">
              <div v-for="log of devices.log.status" v-bind:key="log['.key']">
                <div v-if="log.statuslog == 1">{{log.time}}</div>
              </div>
            </td>
            <td class="table-danger">
              <div v-for="log of devices.log.status" v-bind:key="log['.key']">
                <div v-if="log.statuslog == 0">{{log.date}}</div>
              </div>
            </td>
            <td class="table-danger">
              <div v-for="log of devices.log.status" v-bind:key="log['.key']">
                <div v-if="log.statuslog == 0">{{log.time}}</div> 
              </div>
            </td>
            <td scope="rowgroup">
              <div v-if="devices.lock == '1'">
                <img src="./img/un2.png">
              </div>
              <div v-else>
                <img src="./img/un.png">
              </div><br>
              <div v-if="devices.status == '1'">
                <img src="./img/gc.png">
              </div>
              <div v-else>
                <img src="./img/rc.png">
              </div><br>
              <div v-if="devices.battery > 75">
              <b style="font-family: Quicksand, sans-serif;position:  relative;">{{devices.battery}} % </b>
                <img src="./img/100.png" height="30" style="position:  relative;bottom: 10px;">
              </div>
              <div v-else-if="devices.battery > 50">
              <b style="font-family: Quicksand, sans-serif;position:  relative;">{{devices.battery}} % </b>
                <img src="./img/75.png" height="30" style="position:  relative;bottom: 10px;">
              </div>
              <div v-else-if="devices.battery > 25">
              <b style="font-family: Quicksand, sans-serif;position:  relative;">{{devices.battery}} % </b>
                <img src="./img/50.png" height="30" style="position:  relative;bottom: 10px;">
              </div>
              <div v-else-if="devices.battery > 0">
              <b style="font-family: Quicksand, sans-serif;position:  relative;">{{devices.battery}} % </b>
                <img src="./img/25.png" height="30" style="position:  relative;bottom: 10px;">
              </div><br>
              <div v-if="devices.enablepass == '1'">
                <img src="./img/enable.png" height="30" >
              </div>
              <div v-else>
                <img src="./img/unable.png" height="30" >
              </div><br>
            </td>
            <td>
              <br>
              <span class="glyphicon glyphicon-play" @click="stream(index+1)"></span>
            </td>
          </tr>

          <tr v-if="filter === 'Open' && devices.lock == 0" v-for="(devices, index) of device" v-bind:key="devices['.key']">
            <td scope="rowgroup">AED {{devices['.key']}}</td>
            <td scope="row"><a v-bind:href="'https://www.google.com/maps/search/?api=1&query=' + devices.lat + ',' + devices.lng">Go to<br>{{devices.lat}},<br>{{devices.lng}}</a></td>
            <td class="table-primary">
              <div v-for="log of devices.log.status" v-bind:key="log['.key']">
                <div v-if="log.statuslog == 1">{{log.date}}</div>
              </div>
            </td>
            <td class="table-primary">
              <div v-for="log of devices.log.status" v-bind:key="log['.key']">
                <div v-if="log.statuslog == 1">{{log.time}}</div>
              </div>
            </td>
            <td class="table-danger">
              <div v-for="log of devices.log.status" v-bind:key="log['.key']">
                <div v-if="log.statuslog == 0">{{log.date}}</div>
              </div>
            </td>
            <td class="table-danger">
              <div v-for="log of devices.log.status" v-bind:key="log['.key']">
                <div v-if="log.statuslog == 0">{{log.time}}</div> 
              </div>
            </td>
            <td scope="rowgroup">
              <div v-if="devices.lock == '1'">
                <img src="./img/un2.png">
              </div>
              <div v-else>
                <img src="./img/un.png">
              </div><br>
              <div v-if="devices.status == '1'">
                <img src="./img/gc.png">
              </div>
              <div v-else>
                <img src="./img/rc.png">
              </div><br>
              <div v-if="devices.battery > 75">
              <b style="font-family: Quicksand, sans-serif;position:  relative;">{{devices.battery}} % </b>
                <img src="./img/100.png" height="30" style="position:  relative;bottom: 10px;">
              </div>
              <div v-else-if="devices.battery > 50">
              <b style="font-family: Quicksand, sans-serif;position:  relative;">{{devices.battery}} % </b>
                <img src="./img/75.png" height="30" style="position:  relative;bottom: 10px;">
              </div>
              <div v-else-if="devices.battery > 25">
              <b style="font-family: Quicksand, sans-serif;position:  relative;">{{devices.battery}} % </b>
                <img src="./img/50.png" height="30" style="position:  relative;bottom: 10px;">
              </div>
              <div v-else-if="devices.battery > 0">
              <b style="font-family: Quicksand, sans-serif;position:  relative;">{{devices.battery}} % </b>
                <img src="./img/25.png" height="30" style="position:  relative;bottom: 10px;">
              </div><br>
              <div v-if="devices.enablepass == '1'">
                <img src="./img/enable.png" height="30" >
              </div>
              <div v-else>
                <img src="./img/unable.png" height="30" >
              </div><br>
            </td>
            <td>
              <br>
              <span class="glyphicon glyphicon-play" @click="stream(index+1)"></span>
            </td>
          </tr>

          <tr v-if="filter === 'Closed' && devices.lock == 1" v-for="(devices, index) of device" v-bind:key="devices['.key']">
            <td scope="rowgroup">AED {{devices['.key']}}</td>
            <td scope="row"><a v-bind:href="'https://www.google.com/maps/search/?api=1&query=' + devices.lat + ',' + devices.lng">Go to<br>{{devices.lat}},<br>{{devices.lng}}</a></td>
            <td class="table-primary">
              <div v-for="log of devices.log.status" v-bind:key="log['.key']">
                <div v-if="log.statuslog == 1">{{log.date}}</div>
              </div>
            </td>
            <td class="table-primary">
              <div v-for="log of devices.log.status" v-bind:key="log['.key']">
                <div v-if="log.statuslog == 1">{{log.time}}</div>
              </div>
            </td>
            <td class="table-danger">
              <div v-for="log of devices.log.status" v-bind:key="log['.key']">
                <div v-if="log.statuslog == 0">{{log.date}}</div>
              </div>
            </td>
            <td class="table-danger">
              <div v-for="log of devices.log.status" v-bind:key="log['.key']">
                <div v-if="log.statuslog == 0">{{log.time}}</div> 
              </div>
            </td>
            <td scope="rowgroup">
              <div v-if="devices.lock == '1'">
                <img src="./img/un2.png">
              </div>
              <div v-else>
                <img src="./img/un.png">
              </div><br>
              <div v-if="devices.status == '1'">
                <img src="./img/gc.png">
              </div>
              <div v-else>
                <img src="./img/rc.png">
              </div><br>
              <div v-if="devices.battery > 75">
              <b style="font-family: Quicksand, sans-serif;position:  relative;">{{devices.battery}} % </b>
                <img src="./img/100.png" height="30" style="position:  relative;bottom: 10px;">
              </div>
              <div v-else-if="devices.battery > 50">
              <b style="font-family: Quicksand, sans-serif;position:  relative;">{{devices.battery}} % </b>
                <img src="./img/75.png" height="30" style="position:  relative;bottom: 10px;">
              </div>
              <div v-else-if="devices.battery > 25">
              <b style="font-family: Quicksand, sans-serif;position:  relative;">{{devices.battery}} % </b>
                <img src="./img/50.png" height="30" style="position:  relative;bottom: 10px;">
              </div>
              <div v-else-if="devices.battery > 0">
              <b style="font-family: Quicksand, sans-serif;position:  relative;">{{devices.battery}} % </b>
                <img src="./img/25.png" height="30" style="position:  relative;bottom: 10px;">
              </div><br>
              <div v-if="devices.enablepass == '1'">
                <img src="./img/enable.png" height="30" >
              </div>
              <div v-else>
                <img src="./img/unable.png" height="30" >
              </div><br>
            </td>
            <td>
              <br>
              <span class="glyphicon glyphicon-play" @click="stream(index+1)"></span>
            </td>
          </tr>

          <tr v-if="filter === 'Default'" v-for="(devices, index) of device" v-bind:key="devices['.key']">
            <td scope="rowgroup">AED {{devices['.key']}}</td>
            <td scope="row"><a v-bind:href="'https://www.google.com/maps/search/?api=1&query=' + devices.lat + ',' + devices.lng">Go to<br>{{devices.lat}},<br>{{devices.lng}}</a></td>
            <td class="table-primary">
              <div v-for="log of devices.log.status" v-bind:key="log['.key']">
                <div v-if="log.statuslog == 1">{{log.date}}</div>
              </div>
            </td>
            <td class="table-primary">
              <div v-for="log of devices.log.status" v-bind:key="log['.key']">
                <div v-if="log.statuslog == 1">{{log.time}}</div>
              </div>
            </td>
            <td class="table-danger">
              <div v-for="log of devices.log.status" v-bind:key="log['.key']">
                <div v-if="log.statuslog == 0">{{log.date}}</div>
              </div>
            </td>
            <td class="table-danger">
              <div v-for="log of devices.log.status" v-bind:key="log['.key']">
                <div v-if="log.statuslog == 0">{{log.time}}</div> 
              </div>
            </td>
            <td scope="rowgroup">
              <div v-if="devices.lock == '1'">
                <img src="./img/un2.png">
              </div>
              <div v-else>
                <img src="./img/un.png">
              </div><br>
              <div v-if="devices.status == '1'">
                <img src="./img/gc.png">
              </div>
              <div v-else>
                <img src="./img/rc.png">
              </div><br>
              <div v-if="devices.battery > 75">
              <b style="font-family: Quicksand, sans-serif;position:  relative;">{{devices.battery}} % </b>
                <img src="./img/100.png" height="30" style="position:  relative;bottom: 10px;">
              </div>
              <div v-else-if="devices.battery > 50">
              <b style="font-family: Quicksand, sans-serif;position:  relative;">{{devices.battery}} % </b>
                <img src="./img/75.png" height="30" style="position:  relative;bottom: 10px;">
              </div>
              <div v-else-if="devices.battery > 25">
              <b style="font-family: Quicksand, sans-serif;position:  relative;">{{devices.battery}} % </b>
                <img src="./img/50.png" height="30" style="position:  relative;bottom: 10px;">
              </div>
              <div v-else-if="devices.battery > 0">
              <b style="font-family: Quicksand, sans-serif;position:  relative;">{{devices.battery}} % </b>
                <img src="./img/25.png" height="30" style="position:  relative;bottom: 10px;">
              </div><br>
              <div v-if="devices.enablepass == '1'">
                <img src="./img/enable.png" height="30" >
              </div>
              <div v-else>
                <img src="./img/unable.png" height="30" >
              </div><br>
            </td>
            <td>
              <br>
              <span class="glyphicon glyphicon-play" @click="stream(index+1)"></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import {deviceRef} from './firebase'
  import swal from 'sweetalert2'

  export default {
    components: {
    },
    data () {
      return {
        datacollection: null,
        getData: '',
        total: '',
        totalstat: 0,
        totallock: 0,
        totalbatt: 0,
        totaldis: 0,
        filter: 'Default'
      }
    },
    firebase: {
      device: deviceRef
    },
    mounted () {
      this.fillData()
      console.log('>>>>>', this.device)
    },
    created () {
      setTimeout(() => {
        let n = 0
        console.log(this.device.length)
        for (n = 0; n < this.device.length; n++) {
          for (const key in this.device[n].log.status) {
            if (this.device[n].log.status.hasOwnProperty(key)) {
              let vm = this
              vm.getData = this.device[n].log.status[key]
              console.log(vm.getData)
            }
          }
        }
        console.log(this.getData[2] + '2')
        // vm.value = getData
        // vm.statlog = vm.value.log.status.map(data => data.statuslog)
        // vm.timelabel = vm.value.log.status.map(data => data.date + ' ' + data.time)
        // this.fillDataspeed()
        // var myarray = vm.value.speedtest.map(data => data.valuedown)
        // vm.lasdown = myarray[myarray.length - 1]
        // myarray = vm.value.speedtest.map(data => data.valueup)
        // vm.lasup = myarray[myarray.length - 1]
      }, 1000)
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: this.timelabel,
          datasets: [
            {
              label: 'Available',
              backgroundColor: 'rgba(196, 93, 105, 0.3)',
              data: this.Avalue
            }, {
              label: 'Unvailable',
              backgroundColor: 'rgba(32, 162, 219, 0.3)',
              data: this.Uvalue
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      },
      stream (id) {
        swal({
          title: '<b>Live Streaming</b>',
          // html: '          <iframe src="http://kmutnbaedcctv' + id + '.ddns.net:8082/" height="250" width="320" frameborder="0"></iframe>',
          html: '<iframe src="http://10.41.162.197:8082/" height="250" width="320" frameborder="0"></iframe>',
          button: 'Close'
        })
      }
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:800i');
@import url('https://fonts.googleapis.com/css?family=Quicksand:700');
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
  .icon-success {
    color: #5CB85C;
  }
  .icon-unsuccess {
    color: #d9534f;
  }
  .icon-info {
    color: #3399ff;
  }
  .icon-warning {
    color: #ffbb33;
  }
  th {
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
  }
  td {
    font-family: 'Quicksand', sans-serif;
  }
  .data-primary {
    backgroundColor: #5bc0de;
  }
  /* tbody tr:nth-child(even)
	{
	  background: #d6d6c2;
	} */
   b {
     font-family: 'Open Sans', sans-serif;
   }
</style>