var config = {
    style: 'mapbox://styles/citystructuregeodev/cko3e4s3u063417l4rget6oh4',
    accessToken: 'pk.eyJ1IjoiY2l0eXN0cnVjdHVyZWdlb2RldiIsImEiOiJja25ueDlzZGEwdGN3MnZwMW8zcGtmZmt2In0.v3O-fdC6ljls0PfnrMH_og',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: true,
    title: 'Kalamazoo River Field Survey April 27th 2021',
    subtitle: 'EGLE & Tribal float survey of river sediment deposit zones',
    byline: '',
    footer: 'Data Collection and Story by NHBP Environmental Staff <a href="https://nhbp-nsn.gov/environmental/" target="_blank">NHBP ENV</a> - <a href="https://storymaps.arcgis.com/collections/2f9f61b09e5b4860b527eff83cc08fb4/" target="_blank">StoryMap Collection</a>',
    chapters: [
        {
            id: 'kzooLanding',
            alignment: 'center',
            title: 'Morrow Pond November 2020',
            image: '',
            description: '<iframe width="600" height="316" src="https://www.youtube-nocookie.com/embed/zn-5QsjeQIQ?version=3&loop=1&playlist=zn-5QsjeQIQ&autoplay=1&modestbranding=1&rel=0&mute=1&controls=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe></br>The Morrow Pond is a human made impoundment of the Kalamazoo River between Comstock and Galesburg, Michigan.  It was drawn down in late 2019 to repair a hydropower dam structure.  This is UAV video of the lowered impoundment in November 2020.',
            location: {
                center: [-85.50457, 42.28606],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            
        },
        {
            id: 'merrill',
            alignment: 'left', 
            title: 'Merrill Park, Comstock',
            image: 'https://drive.google.com/uc?export=download&id=1-AEZQFT5WtkFtTEcC3WbfF4Grebkatt7',
            description: 'EGLE & Tribal staff prepare to launch at Merrill Park in Comstock on the Kalamazoo River.  The purpose of the survey was to inspect sediment released from the lowering of the impoundment.  Tribal Staff from NHBP Environmental and Gun Lake THPO participated to conduct a limited Cultural Survey. GPS Data and photos collected by NHBP Staff.',
            location: {
                center: { lon: -85.53731, lat: 42.28178 },
                zoom: 13.16,
                pitch: 43.00,
                bearing: -49.63
            },
            mapAnimation: 'flyTo',
            
        },
        {
            id: 'turtleLogs',
            alignment: 'left',
            title: 'Numerous Turtle Logs', 
            image: 'https://drive.google.com/uc?export=download&id=1mRJS9IPIwkjB4WA4N-zzR3UWTyuaCqxo',
            description: 'Several logs along this stretch had 5 or more turtles resting on them.  The turtles did not appear to be common painted or snapping turtles, and EGLE staff believes they may be Map Turtles.',
            location: {
                center: { lon: -85.52359, lat: 42.28402 },
                zoom: 15.13,
                pitch: 59.00,
                bearing: -86.43
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                   
                }
            ],
            onChapterExit: [
                {
                   
                }
            ]
        },
        {
            id: 'oxbowDown',
            alignment: 'left',
            title: 'Oxbow Outflow',
            image: 'https://services5.arcgis.com/RsKCQCx9eUKixVOM/arcgis/rest/services/service_f13c39e417024074b738a4e6549c53aa/FeatureServer/0/4/attachments/4',
            description: 'This is the outflow from the Oxbow where much of the current work is being conducted. Sheet pilings are blocking most of the flow from entering the Oxbow.',
            location: {
                center: { lon: -85.52589, lat: 42.28433 },
                zoom: 15.73,
                pitch: 59.00,
                bearing: -99.23
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                     
                }
            ],
            onChapterExit: [
                {
                    
                }
            ]
        },
        {
            id: 'dryBank',
            alignment: 'left',
            title: 'Upland Bank Stop',
            image: 'https://services5.arcgis.com/RsKCQCx9eUKixVOM/arcgis/rest/services/service_f13c39e417024074b738a4e6549c53aa/FeatureServer/0/5/attachments/7',
            description: 'Due to an unexpected leaky kayak, the group made an emergency stopover here to plug the hole. We were able to continue to the planned take out point.',
            location: {
                center: { lon: -85.53355, lat: 42.28535 },
                zoom: 16.64,
                pitch: 73.00,
                bearing: -102.43
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                     
                }
            ],
            onChapterExit: [
                {
                      
                }
            ]
        },
        {
            id: 'niceRif',
            alignment: 'left',
            title: 'Rocky Riffle',
            image: 'https://services5.arcgis.com/RsKCQCx9eUKixVOM/arcgis/rest/services/service_f13c39e417024074b738a4e6549c53aa/FeatureServer/0/7/attachments/10',
            description: 'Rocky Riffle Area with some areas covered with sediments, and sediment deposits visible in the background',
            location: {
                center: { lon: -85.54202, lat: 42.28368 },
                zoom: 16.64,
                pitch: 74.00,
                bearing: -88.87
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                      
                }
            ],
            onChapterExit: [
                {
                      
                }
            ]
        },
        {
            id: 'smallDep',
            alignment: 'left',
            title: 'Sediment Notch Deposit',
            image: 'https://services5.arcgis.com/RsKCQCx9eUKixVOM/arcgis/rest/services/service_f13c39e417024074b738a4e6549c53aa/FeatureServer/0/8/attachments/12',
            description: 'On the left bank sediments have accumulated in a notch between two sections of the CERLA landfills.',
            location: {
                center: { lon: -85.54849, lat: 42.28315 },
                zoom: 16.64,
                pitch: 75.00,
                bearing: -68.87
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                      
                }
            ],
            onChapterExit: [
                {
                     
                }
            ]
        },
        {
            id: 'largeDep',
            alignment: 'left',
            title: 'Large Sediment Bar',
            image: 'https://services5.arcgis.com/RsKCQCx9eUKixVOM/arcgis/rest/services/service_f13c39e417024074b738a4e6549c53aa/FeatureServer/0/11/attachments/19',
            description: 'Considerable amounts of sediments are visible in this area, and have emerged several feet above the water during unseasonally dry conditions in spring 2021.',
            location: {
                center: { lon: -85.54929, lat: 42.28302 },
                zoom: 17,
                pitch: 75,
                bearing: -56.44
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                { 
                   layer: 'kzoosurvey',
                    opacity: 1 
                }
            ],
            onChapterExit: []
        },
        {
            id: 'landfillDep',
            alignment: 'left',
            title: 'River Bend & Deposition',
            image: 'https://services5.arcgis.com/RsKCQCx9eUKixVOM/arcgis/rest/services/service_f13c39e417024074b738a4e6549c53aa/FeatureServer/0/12/attachments/20',
            description: 'The River takes an almost 90 degree bend northward, and large sediment deposits are continued on the western bank.  This picture is near the end of a large landfill on the river from the ongoing CERCLA Kalamazoo River PCB site.',
            location: {
                center: { lon: -85.55230, lat: 42.28436 },
                zoom: 17,
                pitch: 75.00,
                bearing: -38.04
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                    
                }
            ],
            onChapterExit: [
                {
                    
                }
            ]
        },
        {
            id: 'pedBridge',
            alignment: 'left',
            title: 'Bridges Old & New', 
            image: 'https://drive.google.com/uc?export=download&id=1PkgeZ3Zz1gWJHJRTfasW2lfv-wfP5_fH',
            description: 'NHBP, EGLE, and Gun Lake staff float underneath an old railroad trestle, with the newer Kalamazoo River Valley Trail bicycle bridge visble just downstream. <a href="https://www.kalcounty.com/parks/krvt/" target="_blank">KRVT Website</a> ',
            location: {
                center: { lon: -85.55929, lat: 42.28936 },
                zoom: 17.00,
                pitch: 75.00,
                bearing: -49.84
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'trainDep',
            alignment: 'left',
            title: 'Rail Staging Yard',
            image: 'https://services5.arcgis.com/RsKCQCx9eUKixVOM/arcgis/rest/services/service_f13c39e417024074b738a4e6549c53aa/FeatureServer/0/13/attachments/24',
            description: 'The group paddles past a large railyard directly off the eastern bank of the Kalamazoo River inside the City.',
            location: {
                center: { lon: -85.56095, lat: 42.29093 },
                zoom: 17.16,
                pitch: 75.00,
                bearing: -77.04
            },
            onChapterEnter: [
                {
                } 
            ],
            onChapterExit: [
                {
                   
                }
            ]
        },
        {
            id: 'mayors',
            alignment: 'left',
            title: 'Mayors Riverfront Park', 
            image: 'https://services5.arcgis.com/RsKCQCx9eUKixVOM/arcgis/rest/services/service_f13c39e417024074b738a4e6549c53aa/FeatureServer/0/14/attachments/25',
            description: 'Sediment deposits along the western bank near the City of Kalamazoo Mayors Riverfront Park.  The Kalamazoo Farmers Market will be held at the Park during 2021</br> <a href="http://pfcmarkets.com/" target="_blank">PFC Farmers Market Site</a>',
            location: {
                center: { lon: -85.56420, lat: 42.29218 },
                zoom: 17.00,
                pitch: 75.00,
                bearing: -76.24
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'michBridge',
            alignment: 'left',
            title: 'Downtown Sediments',
            image: 'https://services5.arcgis.com/RsKCQCx9eUKixVOM/arcgis/rest/services/service_f13c39e417024074b738a4e6549c53aa/FeatureServer/0/15/attachments/27',
            description: 'Past the Michigan Ave Bridge and confluences with the Portage and Arcadia Creeks, the group flows past an area with an emergent sediment bar on the east bank.',
            location: {
                center: { lon: -85.57242, lat: 42.29651 },
                zoom: 17.00,
                pitch: 75.00,
                bearing: 16.80
            },
            onChapterEnter: [
                {
                    
                }
            ],
            onChapterExit: [
                {
                
                }
            ]
         },
         {
            id: 'bankDebris',
            alignment: 'left',
            title: 'Bank Debris',
            image: 'https://services5.arcgis.com/RsKCQCx9eUKixVOM/arcgis/rest/services/service_f13c39e417024074b738a4e6549c53aa/FeatureServer/0/16/attachments/28',
            description: 'Debris and trash are notable and scattered along the banks through this stretch.',
            location: {
                center: { lon: -85.57289, lat: 42.29891 },
                zoom: 17.00,
                pitch: 75.00,
                bearing: -19.20
            },
            onChapterEnter: [
                {
                  
                }
            ],
            onChapterExit: [
                {
                   
                }
            ]
         },
         {
            id: 'gullBridge',
            alignment: 'left',
            title: 'Gull Road Bridge',
            image: 'https://services5.arcgis.com/RsKCQCx9eUKixVOM/arcgis/rest/services/service_f13c39e417024074b738a4e6549c53aa/FeatureServer/0/17/attachments/29',
            description: 'Paddling past the Gull Road/M-43 Bridge near the take out point at Verberg Park.',
            location: {
                center: { lon: -85.57364, lat: 42.29939 },
                zoom: 17.00,
                pitch: 75.00,
                bearing: -42.65
            },
            onChapterEnter: [
                {
                    
                }
            ],
            onChapterExit: [
                {
                  
                }
            ]
         },
         {
            id: 'inlet',
            alignment: 'left',
            title: 'Verberg Sediments',
            image: 'https://services5.arcgis.com/RsKCQCx9eUKixVOM/arcgis/rest/services/service_f13c39e417024074b738a4e6549c53aa/FeatureServer/0/20/attachments/34',
            description: 'Sediment deposit across from the Verberg lagoon inlet.  This is where the group exited the River.',
            location: {
                center: { lon: -85.57335, lat: 42.30203 },
                zoom: 17.00,
                pitch: 75.00,
                bearing: -0.70
            },
            onChapterEnter: [
                {
                    
                }
            ],
            onChapterExit: [
                {
                    
                }
            ]
         },
         {
            id: 'ending',
            alignment: 'center',
            title: 'Thanks For Joining Us!',
            image: 'https://drive.google.com/uc?export=download&id=1wknYjdufHc8FAOwdpG-zlSGyc3EKYWiR',
            description: 'Glad you could join us for this paddle survey of the Kalamazoo River in the City and Comstock Township.  We were able to collect GPS locations for large sediment deposits, and sited some notable wildlife such as Map Turtles and an Osprey Nest.  See Michigan Water Trails for maps and info on accessing our State Waterways: <a href="https://www.michiganwatertrails.org/default.asp" target="_blank">Michigan Water Trails</a>', 
            location: {
                center: { lon: -85.57722, lat: 42.30513 },
                zoom: 11.5,
                pitch: 70.00,
                bearing: -49.68
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [
                {
                    
                }
            ],
            onChapterExit: [
                {
                    
                }
            ]
         }
    ]
};
