<template>
  <div class="">
    <center>
    <h3 style="font-family: 'Open Sans', sans-serif;"><span class="glyphicon glyphicon-facetime-video"></span> Calling History<hr></h3></center>
      <div align="right" style="margin-right: 250px">
        <label for="sel1"> <span class="glyphicon glyphicon-filter"></span><b style="font-family: 'Open Sans', sans-serif;"> Select Filter (select one):</b></label>
        <select class="form-control" v-model="filter" style="width: 150px;height: 30px">
          <option>Default</option>
          <optgroup label="Month">
          <option value="1">January</option>
          <option value="2">Febuary</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6" @click="count()">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
          </optgroup>
        </select>
        <br>
      </div>
    <center>
    <div align="right" style="margin-right: 430px">
      <h4 style="font-family: 'Open Sans', sans-serif;">Total: {{now}}</h4>
    </div>
    <div class="col" style="width: 500px;" v-for="logs in log" v-if="logs.month == filter || filter === 'Default'">
      <table border = 0 style="width: 500px;">
        <tr style="height: 40px;">
          <td style="width: 390px;padding-left: 10px">{{logs.caller}} 
            <span class="glyphicon glyphicon-earphone" style="color:#5CB85C; font-size: 20px;"></span>
            <span class="glyphicon glyphicon-arrow-right" style="color:#3399ff; font-size: 20px;"></span> {{logs.callto}}
          </td>
          <td rowspan="2" style="padding-left: 10px; border-left:1px solid #cccccc;">
            <span class="glyphicon glyphicon-calendar" style="color:#d9534f; font-size: 15px;"></span> {{logs.date}}<br>
            <span class="glyphicon glyphicon-time" style="color:#d9534f; font-size: 15px;"></span> {{logs.time}}
          </td>
        </tr>
        <tr style="height: 40px;">
          <td style="width: 390px;padding-left: 10px">
            <span class="glyphicon glyphicon-map-marker" style="color:#d9534f; font-size: 15px;"></span> 
            <a v-bind:href="'https://www.google.com/maps/search/?api=1&query=' + logs.lat + ',' + logs.lng">Go</a> @ {{logs.lat.toFixed(3)}}, {{logs.lng.toFixed(3)}}
          </td>
        </tr>
      </table>
      <hr>
    </div>
    </center>
  </div>
</template>

<script>
  import {userRef, logRef} from './firebase'
  import swal from 'sweetalert2'

  export default {
    components: {
    },
    data () {
      return {
        name: '',
        username: '',
        pass: '',
        pass2: '',
        adminpass: '',
        filter: 'Default',
        num: 0
      }
    },
    firebase: {
      user: userRef,
      log: logRef
    },
    mounted () {
      this.count()
    },
    computed: {
      now: function () {
        this.num = 0
        this.log.forEach(log => {
          if (log.month === this.filter * 1) {
            this.num = this.num + 1
          } else if (this.filter === 'Default') {
            this.num = this.num + 1
          }
          console.log(this.filter, 58)
        })
        console.log(this.num)
        return this.num
      }
    },
    created () {
      var pattMail = /.+@\w+\..+/g
      console.log(pattMail.test('nutpat'))
    },
    methods: {
      pushUser () {
        if (this.adminpass === '023944571') {
          if (this.pass === this.pass2) {
            userRef.push({
              name: this.name,
              user: this.username,
              pass: this.pass
            })
            swal({
              title: 'Add User Success',
              icon: 'success',
              button: 'Ok'
            })
          } else {
            swal({
              title: 'Password does not match',
              icon: 'error',
              button: 'Noooo'
            })
          }
        } else {
          swal({
            title: 'Wrong Admin Password',
            icon: 'error',
            button: 'Noooo'
          })
        }
      },
      count () {
        console.log(this.filter, 'ssdsd')
        this.num = ''
        this.log.forEach(log => {
          if (log.month === this.filter) {
            this.num = this.num + 1
          }
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
    /* color:rgb(205, 92, 177) */
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