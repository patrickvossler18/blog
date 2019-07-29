---
layout: post
title: Raspberry pi 3 SSH Disconnecting
date: 2019-07-06 11:19 -0700
---
I set up a weather station with my raspberry pi in my room. It monitors temperature, humdity, pressure, and brightness. I adapted the UI from another project (which I can't find right now otherwise I would link to it) and it looks pretty good. ![](/assets/img/pi_weather_station.png)

But after a few hours it seems like the wifi goes down on the Raspberry pi. I'm unable to ping it locally or SSH into it. I've checked with logs that it is still up and the weather station is still running.

## What I've tried to far

* I thought maybe it was an issue of the pi being removed from the arp table so I set up a cronjob to make the pi ping the router every 10 minutes to remind it that the pi still exists
* I've make sure that in the interfaces config the power-saving option is turned off

I'll update this if I make any more progress on this.

UPDATE:
I totally forgot that I also assigned a permanent IP address for the raspberry pi on my local network. I did this by telling my wireless router to assign a static lease to my raspberry pi based on its MAC address. So far this has been working perfectly. Perhaps in the past the issue was that my raspberry pi's IP would change and that would explain why I would be able to ping or ssh into it even though everything seemed to be working fine.

Looks like the problem has been solved!

UPDATE 7/28:
I was still been having issues with the pi disconnecting after several days. After checking the gunicorn logs, I think the source of the problem could be in the html template. Originally the html template makes requests to update the graph every second which means that the pi is polling the sensors, writing the data to the database, and then sending the request to the webpage every second. My current fix is to update the page once a minute. It's very possible this isn't actually the issue but either way for a personal page like this, I don't really need second by second updates of the temperature in my room.