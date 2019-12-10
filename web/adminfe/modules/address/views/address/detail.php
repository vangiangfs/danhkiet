<script type="text/javascript" src="http://maps.google.com/maps/api/js?v=3.exp&sensor=true&libraries=places&language=vi"></script>
<style>
    #gmap {
  height: 400px;
  margin: 20px 0px;
  width: 100% !important;
}

.controls {
    margin-top: 16px;
    border: 1px solid transparent;
    border-radius: 2px 0 0 2px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    height: 32px;
    outline: none;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

#pac-input {
    background-color: #fff;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 300;
    margin-left: 12px;
    padding: 15px;
    text-overflow: ellipsis;
    width: 400px;
}

#pac-input:focus {
    border-color: #4d90fe;
}

.pac-container {
    font-family: Roboto;
}

#type-selector {
    color: #fff;
    background-color: #4d90fe;
    padding: 5px 11px 0px 11px;
}

#type-selector label {
    font-family: Roboto;
    font-size: 13px;
    font-weight: 300;
}
</style>
<script>
var oldMarker;
function initialize() {
    <?php
    $latitude = @$data -> latitude? $data -> latitude:'21.028224';
    $longitude = @$data -> longitude? $data -> longitude:'105.835419';
    ?>
    var latlng = new google.maps.LatLng(<?php echo $latitude ?>, <?php echo $longitude ?>);
    var markers = [];
	var image = '/templates/default/images/arrow-up1.png';
    var myOptions = {
        zoom: 13,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    var map = new google.maps.Map(document.getElementById("gmap"),myOptions);
    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
    });
    // Create the search box and link it to the UI element.
  var input = /** @type {HTMLInputElement} */(
      document.getElementById('pac-input'));
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var searchBox = new google.maps.places.SearchBox(
    /** @type {HTMLInputElement} */(input));

  // [START region_getplaces]
  // Listen for the event fired when the user selects an item from the
  // pick list. Retrieve the matching places for that item.
  google.maps.event.addListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();

    for (var i = 0, marker; marker = markers[i]; i++) {
      marker.setMap(null);
    }

    // For each place, get the icon, place name, and location.
    markers = [];
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });

      markers.push(marker);

      bounds.extend(place.geometry.location);
    }

    map.fitBounds(bounds);
  });
  // [END region_getplaces]

  // Bias the SearchBox results towards places that are within the bounds of the
  // current map's viewport.
  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
  });
    function placeMarker(location) {
        marker = new google.maps.Marker({
            position: location,
            map: map,
            animation: google.maps.Animation.DROP,
			icon: image,
        });
        if (oldMarker != undefined){
            oldMarker.setMap(null);
        }
        oldMarker = marker;
        map.setCenter(location);
		//var infowindow = new google.maps.InfoWindow({
//			content: $('#title').val(),
//			maxWidth: 3500
//		});
		//infowindow.open(map,marker);
		document.getElementById("latitude").value = location.lat();

		document.getElementById("longitude").value = location.lng();
    }
 	placeMarker(latlng);
}
$(document).ready(function(){
google.maps.event.addDomListener(window, 'load', initialize);
});
</script>
<link type="text/css" rel="stylesheet" media="all" href="../libraries/jquery/jquery.ui/jquery-ui.css" />
<script type="text/javascript" src="../libraries/jquery/jquery.ui/jquery-ui.js"></script>
<script type="text/javascript" src="../libraries/jquery/jquery.ui/jquery-ui.js"></script>

<!-- FOR TAB -->
 <script>
  $(document).ready(function() {
    $("#tabs").tabs();
  });
  </script>
<?php
$title = @$data ? FSText :: _('Edit'): FSText :: _('Add');
global $toolbar;
$toolbar->setTitle($title);
$toolbar->addButton('apply',FSText :: _('Apply'),'','apply.png');
$toolbar->addButton('Save',FSText :: _('Save'),'','save.png');
$toolbar->addButton('back',FSText :: _('Cancel'),'','back.png');

	$this -> dt_form_begin(0);
	?>
<div id="tabs">
		    <ul>
		        <li><a href="#fragment-1"><span><?php echo FSText::_("Tr&#432;&#7901;ng c&#417; b&#7843;n"); ?></span></a></li>

                <li><a href="#fragment-4"><span><?php echo FSText::_("Cấu hình SEO"); ?></span></a></li>
		    </ul>

			<!--	BASE FIELDS    -->
		    <div id="fragment-1">
				<?php include_once 'detail_base.php';?>
			</div>

    <div id="fragment-4">
        <table cellspacing="1" class="admintable">
            <?php
            TemplateHelper::dt_edit_text(FSText :: _('Alias'),'alias',@$data -> alias,'',60,1,0,FSText::_("Can auto generate"));
            TemplateHelper::dt_edit_text(FSText :: _('SEO title'),'seo_title',@$data -> seo_title,'',100,1);
            TemplateHelper::dt_edit_text(FSText :: _('SEO meta keyword'),'seo_keyword',@$data -> seo_keyword,'',100,1);
            TemplateHelper::dt_edit_text(FSText :: _('SEO meta description'),'seo_description',@$data -> seo_description,'',100,9);
            ?>
        </table>
    </div><!--end: #fragment-4-->
	    </div>


	<?php

	$this -> dt_form_end(@$data,0);

?>
<script type="text/javascript" src="<?php // echo URL_ROOT.'libraries/jquery/google_map/gg_map.js'?>"></script>
<script>
function changeCity22($city_id,$id){
    $.ajax({
		type : 'get',
		url : '/admin/index.php?module=address&view=address&raw=1&task=loadDistricts',
		dataType : 'html',
		data: {city_id:$city_id},
		success : function(data){
            $('#'+$id).html(data);
        },
		error : function(XMLHttpRequest, textStatus, errorThrown) {}
	});
    return false;
}
</script>