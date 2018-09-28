import { HttpClient } from '@angular/common/http';
    import { Injectable } from '@angular/core';
    declare const Pusher: any;
    @Injectable()
    export class PusherServiceProvider {
      channel;
      constructor(public http: HttpClient) {
      var pusher = new Pusher("PUSHER_KEY", { 
      cluster: 'eu',
      encrypted: true,
      });
      this.channel = pusher.subscribe('comments');
    }

      public init(){
       return this.channel;
      }
    }