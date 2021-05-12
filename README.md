# kzooStory
A Mapbox Scrollytelling style Story of a survey of the Kalamazoo River on April 27th, 2021 with Staff from the Nottawaseppi Huron Band of the Potawatomi, State of Michigan EGLE, and The Gun Lake Tribe.   
The purpose of the survey was identify sediment deposition areas that were the result of the lowering of the Morrow Pond Dam starting in November 2019.   
A Survey was created in ArcGIS Survey123, which created a geopoint for each location entered into a survey.  The form also provided for multiple photos to be added to each record in additiona to various information about the POI.   
Collection of the survey resulted in a Feature Collection to be created in ArcGIS Online, which was exported as a GeoJSON to be added to the Mapbox Studio.   
A new style was developed in Mapbox Studio, which has exaggerated terrain features and the ability to pitch the mapview to a max of 85 degrees.  The survey GeoJSON was added into the Studio map, as the option to live load the data from ArcGIS Online was not available.   
The Map scrolls through the various features collected during the survey, gradually increasing the 3D effect as the camera zooms into the locations.  Images are loaded live from the ArcREST server, as the photos did not export with the GeoJSON data, and additional photos are embedded from a Google Drive address.     
Due to issues with some of the chapters not scrolling, and irregular scrolling action, it was discovered there were several errors in the Mapbox StoryTelling template.  Edits were made to test that properties of the various objects were not undefined, which was discovered to cause the scrolling to break.  When these were fixed the Story scrolled smoothly and worked much better! Thanks for the template Mapbox, though some of the code conventions (var instead of let) are a bit outdated.    

New commit 5-11-2021 with added video and Google Analytics for MapStory.  
