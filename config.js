var config = {
    style: 'mapbox://styles/citystructuregeodev/cko3e4s3u063417l4rget6oh4',
    accessToken: 'pk.eyJ1IjoiY2l0eXN0cnVjdHVyZWdlb2RldiIsImEiOiJja25ueDlzZGEwdGN3MnZwMW8zcGtmZmt2In0.v3O-fdC6ljls0PfnrMH_og',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: true,
    title: 'Kalamazoo River Field Survey April 27th 2021',
    subtitle: 'EGLE & Tribal float survey to review sediment deposits',
    byline: '',
    footer: 'Data Collection and Story by NHBP Environmental Staff <a href="https://nhbp-nsn.gov/environmental/">NHBP ENV</a> <a href="https://storymaps.arcgis.com/collections/2f9f61b09e5b4860b527eff83cc08fb4/">StoryMap Collection</a>',
    chapters: [
        {
            id: 'kzooLanding',
            alignment: 'center',
            title: 'Morrow Pond November 2020',
            image: 'https://drive.google.com/uc?export=download&id=1prwd_2ifZ1Da26CWsPPw2c4C9hJ2FlAe',
            description: 'The Morrow Pond is a human made impoundment of the Kalamazoo River between Comstock and Galesburg, Michigan.  It was drawn down in late 2019 to repair a hydropower dam structure.  This UAV photo was snapped in November 2020.',
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
            image: 'https://services5.arcgis.com/RsKCQCx9eUKixVOM/arcgis/rest/services/service_f13c39e417024074b738a4e6549c53aa/FeatureServer/0/2/attachments/2?token=ZbI4wkLviumrIl6Aj_XmeOkGqrRptUkdf2Hr5C7DkfsqFxc1L8gdeqig0-oiwbKavQOZaEBUlXSOknOYW4WfvXOKb-Kdoep48b8dIPqxvv6FBLpGCk7aKqqCCjnP-rpiB92jlgtPCIVtqGz7mZq4i8UrUB3F8ZY0wMvDb9I546D18XTBCNLmpo45qEdSXx49IMJTS0FMTkSJPVl0gwE99QbrTAV8OB13ZYFQS5Io6fhMZaRUQhYMqAHJZynYDi6pd2TPopALvoSf2G2uBn-DNXfURrDpJdAs_Lp0v_1DBT2vfAcG9LYvFh1fWIqtdZyj',
            description: 'EGLE & Tribal staff prepare to launch at Merrill Park in Comstock on the Kalamazoo River.  The purpose of the survey was to inspect sediment released from the lowering of the impoundment.',
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
            title: 'Numerous Turtles on Logs', 
            image: 'https://drive.google.com/uc?export=download&id=1mRJS9IPIwkjB4WA4N-zzR3UWTyuaCqxo',
            description: 'Several logs along this stretch had 5 or more turtles resting on them.  The turtles did not appear to be common painted or snapping turtles, and EGLE staff believes they are Map Turtles.',
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
            image: 'https://services5.arcgis.com/RsKCQCx9eUKixVOM/arcgis/rest/services/service_f13c39e417024074b738a4e6549c53aa/FeatureServer/0/4/attachments/4?token=Do3WVMQJ-DT6z65M-J1nc8SEgwPDW6Ap64sNaUrhOnbvpWx8Wu8KvIGt8G8VGKPzh6pdyQpTfSNGXcLVBOkpB6mgCV6nwGNUpEQgavqGxC8UE1MS3LTwiBxkFjYmo8YR8WePWtrs-MV2bUGa9VDyblInyJfGVuhSFRru3aFH5XyG-qcQaUqkQrxnqKynkOR_EiqLW5QViqRP5AYrUFK1J53mMqM2Str9wsG29coEcDAFvwGteRkuYIi-fWryxjMRloqcB-GlWk98w-l_xsv4idm7MH9xgziAlgblBZ6SPm87jn4vTcMPt8F_Iz0wgoae',
            description: 'This is the outflow from the Oxbow where much of the current work is being conducted. Sheet pilings are blocking much of the flow from entering the Oxbow.',
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
            image: 'https://services5.arcgis.com/RsKCQCx9eUKixVOM/arcgis/rest/services/service_f13c39e417024074b738a4e6549c53aa/FeatureServer/0/5/attachments/7?token=Do3WVMQJ-DT6z65M-J1nc8SEgwPDW6Ap64sNaUrhOnbvpWx8Wu8KvIGt8G8VGKPzh6pdyQpTfSNGXcLVBOkpB6mgCV6nwGNUpEQgavqGxC8UE1MS3LTwiBxkFjYmo8YR8WePWtrs-MV2bUGa9VDyblInyJfGVuhSFRru3aFH5XyG-qcQaUqkQrxnqKynkOR_EiqLW5QViqRP5AYrUFK1J53mMqM2Str9wsG29coEcDAFvwGteRkuYIi-fWryxjMRloqcB-GlWk98w-l_xsv4idm7MH9xgziAlgblBZ6SPm87jn4vTcMPt8F_Iz0wgoae',
            description: 'Due to an unexpected leaky kayak, the group made an emergency stop over here to plug the hole. We were able to continue to the planned take out point.',
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
            image: 'https://services5.arcgis.com/RsKCQCx9eUKixVOM/arcgis/rest/services/service_f13c39e417024074b738a4e6549c53aa/FeatureServer/0/7/attachments/10?token=Do3WVMQJ-DT6z65M-J1nc8SEgwPDW6Ap64sNaUrhOnbvpWx8Wu8KvIGt8G8VGKPzh6pdyQpTfSNGXcLVBOkpB6mgCV6nwGNUpEQgavqGxC8UE1MS3LTwiBxkFjYmo8YR8WePWtrs-MV2bUGa9VDyblInyJfGVuhSFRru3aFH5XyG-qcQaUqkQrxnqKynkOR_EiqLW5QViqRP5AYrUFK1J53mMqM2Str9wsG29coEcDAFvwGteRkuYIi-fWryxjMRloqcB-GlWk98w-l_xsv4idm7MH9xgziAlgblBZ6SPm87jn4vTcMPt8F_Iz0wgoae',
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
            image: 'https://services5.arcgis.com/RsKCQCx9eUKixVOM/arcgis/rest/services/service_f13c39e417024074b738a4e6549c53aa/FeatureServer/0/8/attachments/12?token=Do3WVMQJ-DT6z65M-J1nc8SEgwPDW6Ap64sNaUrhOnbvpWx8Wu8KvIGt8G8VGKPzh6pdyQpTfSNGXcLVBOkpB6mgCV6nwGNUpEQgavqGxC8UE1MS3LTwiBxkFjYmo8YR8WePWtrs-MV2bUGa9VDyblInyJfGVuhSFRru3aFH5XyG-qcQaUqkQrxnqKynkOR_EiqLW5QViqRP5AYrUFK1J53mMqM2Str9wsG29coEcDAFvwGteRkuYIi-fWryxjMRloqcB-GlWk98w-l_xsv4idm7MH9xgziAlgblBZ6SPm87jn4vTcMPt8F_Iz0wgoae',
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
            image: 'https://services5.arcgis.com/RsKCQCx9eUKixVOM/arcgis/rest/services/service_f13c39e417024074b738a4e6549c53aa/FeatureServer/0/11/attachments/19?token=Do3WVMQJ-DT6z65M-J1nc8SEgwPDW6Ap64sNaUrhOnbvpWx8Wu8KvIGt8G8VGKPzh6pdyQpTfSNGXcLVBOkpB6mgCV6nwGNUpEQgavqGxC8UE1MS3LTwiBxkFjYmo8YR8WePWtrs-MV2bUGa9VDyblInyJfGVuhSFRru3aFH5XyG-qcQaUqkQrxnqKynkOR_EiqLW5QViqRP5AYrUFK1J53mMqM2Str9wsG29coEcDAFvwGteRkuYIi-fWryxjMRloqcB-GlWk98w-l_xsv4idm7MH9xgziAlgblBZ6SPm87jn4vTcMPt8F_Iz0wgoae',
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
            id: 'rainbow2015',
            alignment: 'left',
            title: 'Rainbow Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Rainbow Glacier lost 17 acres of surface area (about 6%).',
            location: {
                center: { lon: -85.55230, lat: 42.28436 },
                zoom: 17,
                pitch: 75.00,
                bearing: -38.04
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'kintla1998',
            alignment: 'left',
            title: 'Kintla Glacier, 1998',
            image: '',
            description: 'Kintla Glacier is in Glacier National Park in the U.S. state of Montana. The glacier is situated on a plateau 2 miles (3.2 km) southwest of Kintla Peak at an elevation between 8,700 feet (2,700 m) and 7,700 feet (2,300 m) above sea level. The glacier has numerous crevasses and is actually two glaciers.',
            location: {
                center: [-114.18755, 48.92880],
                zoom: 13.09,
                pitch: 48.50,
                bearing: 164.00
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'kintla2015',
            alignment: 'left',
            title: 'Kintla Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Harrison Glacier lost 24 acres of surface area (about 10%).',
            location: {
                center: [-114.18755, 48.92880],
                zoom: 13.09,
                pitch: 48.50,
                bearing: 164.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'sperry1998',
            alignment: 'left',
            title: 'Sperry Glacier, 1998',
            image: '',
            description: 'Sperry Glacier is a glacier on the north slopes of Gunsight Mountain west of the Continental Divide in Glacier National Park in the U.S. state of Montana. Although many geologic features of Glacier National Park were formed during the much longer period of glaciation ending over 10,000 years ago, Sperry Glacier — like all the glaciers in the park today — is a product of the recent Little Ice Age, the period of cooler average temperatures starting in about the 13th century and concluding in the mid-19th century.',
            location: {
                center: [-113.75672, 48.62433],
                zoom: 13.68,
                pitch: 34.50,
                bearing: 106.40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sperry2015',
            alignment: 'left',
            title: 'Sperry Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Harrison Glacier lost 37 acres of surface area (about 16%).',
            location: {
                center: [-113.75672, 48.62433],
                zoom: 13.68,
                pitch: 34.50,
                bearing: 106.40
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
         }
    ]
};