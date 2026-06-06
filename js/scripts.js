/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//-------------------------------------
    function trcpost(vis_src = 'none', page_id = 'ts'){
        var vis_id = getckie() ?? 0;
        if(vis_id==0){
            var scr_width = window.screen.width ?? 0;
            var scr_height = window.screen.height ?? 0;
            var vis_city = 'unkn';
            var vis_region = 'unkn';
            var vis_country = 'unkn';
            var vis_lat = 'unkn';
            var vis_long = 'unkn';
            var vis_isp = 'unkn';

            /*var vis_city = datab.city ?? 'unkn';
            var vis_region = datab.region ?? 'unkn';
            var vis_country = datab.country ?? 'unkn';
            var vis_lat = datab.lat ?? 'unkn';
            var vis_long = datab.long ?? 'unkn';
            var vis_isp = datab.isp ?? 'unkn';*/
            //    var vis_ip = datab.query ?? 'unkn';

            fetch('https://tunga.free.nf/vcentral/vcentral.php', { //'http://ip-api.com/batch' // http://localhost/vcentral/vcentral.php 
                method: 'POST',
                headers: {
                    //'Content-Type': /*'application/json' // or */'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({
                    action1 : "trc_new",
                    vis_id : 0,
                    vis_src : vis_src,
                    vis_city: vis_city,
                    vis_region: vis_region,
                    vis_country: vis_country,
                    vis_lat: vis_lat,
                    vis_long: vis_long,
                    scr_width : scr_width,
                    scr_height : scr_height,
                    page_id : page_id,
                    vis_isp: vis_isp
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('HTTP error ' + response.status);
                }
                return response.json(); // or response.text() if not JSON
            })
            .then(datab => {
                setckie('vis_id', datab.vis_id); // assign new vis_id to cookie
                console.log('Success:', datab);
            })
                    //-------------------------------------------
        }else{// for vis_id!=0
            fetch('https://tunga.free.nf/vcentral/vcentral.php', {  // http://localhost/vcentral/vcentral.php
                method: 'POST',
                headers: {
                    //'Content-Type': /*'application/json' // or */'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({
                    action1 : "trc_new",
                    vis_id : vis_id,
                    page_id : page_id
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('HTTP error ' + response.status);
                }
                return response.json(); // or response.text() if not JSON
            })
            .then(datab => {
                console.log('Success:', datab);
            })
        }
    }

//-------------------------------------
    function trcpost00(vis_src = 'none', page_id = 'ts'){
        var vis_id = getckie() ?? 0;
        /*var post_data = {
				'action1': 'trc_save',
                'vis_ip': vis_ip,
        }*/
        if(vis_id==0){
            fetch('http://ip-api.com/json/', { // http://localhost/proj_one/includes/geoapi.php
                //method: 'POST', // KILL THIS LINE FOR 'GET' METHOD
                headers: {
                    //'Content-Type': /*'application/json' // or */'application/x-www-form-urlencoded'
                },
                //      body: JSON.stringify( post_data )
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('HTTP error ' + response.status);
                }
                return response.json(); // or response.text() if not JSON
            })
            .then(datab => {
                if(datab.isp!=""){ // if geo-api call is successful
                    var scr_width = window.screen.width ?? 0;
                    var scr_height = window.screen.height ?? 0;
                    /*var vis_city = datab.city ?? 'unkn';
                    var vis_region = datab.region ?? 'unkn';
                    var vis_country = datab.country ?? 'unkn';
                    var vis_lat = datab.latde ?? 'unkn';
                    var vis_long = datab.longde ?? 'unkn';
                    var vis_isp = datab.isp ?? 'unkn';*/

                    var vis_city = datab.city ?? 'unkn';
                    var vis_region = datab.region ?? 'unkn';
                    var vis_country = datab.country ?? 'unkn';
                    var vis_lat = datab.lat ?? 'unkn';
                    var vis_long = datab.long ?? 'unkn';
                    var vis_isp = datab.isp ?? 'unkn';
                //    var vis_ip = datab.query ?? 'unkn';

                    fetch('http://tunga.free.nf/vcentral/vcentral.php', { // http://localhost/vcentral/vcentral.php
                        method: 'POST',
                        headers: {
                            //'Content-Type': /*'application/json' // or */'application/x-www-form-urlencoded'
                        },
                        body: JSON.stringify({
                            action1 : "trc_new",
                            vis_id : 0,
                            vis_src : vis_src,
                            vis_city: vis_city,
                            vis_region: vis_region,
                            vis_country: vis_country,
                            vis_lat: vis_lat,
                            vis_long: vis_long,
                            scr_width : scr_width,
                            scr_height : scr_height,
                            page_id : page_id,
                            vis_isp: vis_isp
                        })
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('HTTP error ' + response.status);
                        }
                        return response.json(); // or response.text() if not JSON
                    })
                    .then(datab => {
                        setckie('vis_id', datab.vis_id); // assign new vis_id to cookie
                        console.log('Success:', datab);
                    })
                    /*  .catch(error => {
                    console.error('Error:', error);
                    });*/
                }
                console.log('Success:', datab);
            })
            .catch(error => {
            //  console.error('Error:', error);
            });
        }else{// for vis_id!=0
            fetch('http://tunga.free.nf/vcentral/vcentral.php', {  // http://localhost/vcentral/vcentral.php
                method: 'POST',
                headers: {
                    //'Content-Type': /*'application/json' // or */'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({
                    action1 : "trc_new",
                    vis_id : vis_id,
                    page_id : page_id
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('HTTP error ' + response.status);
                }
                return response.json(); // or response.text() if not JSON
            })
            .then(datab => {
                console.log('Success:', datab);
            })
        }
    }

//======================================================================
    function getckie(choice = 0){
        var vis_id = document.cookie.split('; ')
        .find(row => row.startsWith('vis_id='))
        ?.split('=')[1]
        ? decodeURIComponent(document.cookie.split('; ')
            .find(row => row.startsWith('vis_id='))
            .split('=')[1])
            : null;
        if(choice==1){
            var divout = document.getElementById("testdiv5");
            divout.innerHTML = '<p>' + vis_id + '</p>';
        }
        return vis_id;
    }
    function setckie(name, value, days = 7) {
        const expires = new Date(Date.now() + days * 86400).toUTCString();
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
    }


   // trcpost('tunga_gh', 'ct');
