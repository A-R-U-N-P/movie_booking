import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.scss']
})
export class VenuesComponent implements OnInit {
  public venuesList = [
    {
      name: "sathyam cinemas",
      show_time: [
        {
          time: "7.30 am",
          status: "almost Full",
          sound_system: "ATOMS enabled"
        },
        {
          time: "1.50 pm",
          status: "available",
          sound_system: "DOLBY 7.1"
        },
        {
          time: "4.30 pm",
          status: "almost Full",
          sound_system: "DOLBY 7.1"
        },
        {
          time: "7.30 pm",
          status: "almost Full",
          sound_system: "DOLBY 7.1"
        },
        {
          time: "1.30 pm",
          status: "available",
          sound_system: "DOLBY 7.1"
        },

      ]
    },
    {
      name: "Rohini cinemas",
      show_time: [
        {
          time: "4.30 pm",
          status: "available",
          sound_system: "ATOMS enabled"
        },
        {
          time: "7.50 pm",
          status: "available",
          sound_system: "DOLBY 7.1"
        },

      ]
    },
    {
      name: "Express avenue",
      show_time: [
        {
          time: "7.30 am",
          status: "almost Full",
          sound_system: "ATOMS enabled"
        },
        {
          time: "1.50 pm",
          status: "available",
          sound_system: "DOLBY 7.1"
        },
        {
          time: "4.30 pm",
          status: "almost Full",
          sound_system: "DOLBY 7.1"
        },
        {
          time: "7.30 pm",
          status: "almost Full",
          sound_system: "DOLBY 7.1"
        },
        {
          time: "1.30 pm",
          status: "available",
          sound_system: "DOLBY 7.1"
        },

      ]
    },
    {
      name: "AGS cinemas",
      show_time: [
        {
          time: "4.30 pm",
          status: "available",
          sound_system: "ATOMS enabled"
        },
        {
          time: "7.50 pm",
          status: "available",
          sound_system: "DOLBY 7.1"
        },

      ]
    },
    {
      name: "PVR cinemas",
      show_time: [
        {
          time: "7.30 am",
          status: "almost Full",
          sound_system: "ATOMS enabled"
        },
        {
          time: "1.50 pm",
          status: "available",
          sound_system: "DOLBY 7.1"
        },
        {
          time: "4.30 pm",
          status: "almost Full",
          sound_system: "DOLBY 7.1"
        },
        {
          time: "7.30 pm",
          status: "almost Full",
          sound_system: "DOLBY 7.1"
        },
        {
          time: "1.30 pm",
          status: "available",
          sound_system: "DOLBY 7.1"
        },

      ]
    },
    {
      name: "INOX National",
      show_time: [
        {
          time: "4.30 pm",
          status: "available",
          sound_system: "ATOMS enabled"
        },
        {
          time: "7.50 pm",
          status: "available",
          sound_system: "DOLBY 7.1"
        },

      ]
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
