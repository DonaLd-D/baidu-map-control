var map1 = new BMap.Map("map1");     
	map1.centerAndZoom("北京",10);
  map1.enableScrollWheelZoom(true); 
  var top_right_navigation = new BMap.NavigationControl({
      anchor: BMAP_ANCHOR_TOP_RIGHT, 
      type: BMAP_NAVIGATION_CONTROL_SMALL
  });
  map1.addControl(top_right_navigation);
  var geolocationControl1 = new BMap.GeolocationControl();
  geolocationControl1.addEventListener("locationSuccess", function(e){
    // 定位成功事件
    var address = '';
    address += e.addressComponent.province;
    address += e.addressComponent.city;
    address += e.addressComponent.district;
    address += e.addressComponent.street;
    address += e.addressComponent.streetNumber;
    alert("当前定位地址为：" + address);
  });
  geolocationControl1.addEventListener("locationError",function(e){
    // 定位失败事件
    alert(e.message);
  });
  map1.addControl(geolocationControl1);  

  var map2 = new BMap.Map("map2");     
	map2.centerAndZoom("上海",10);
  map2.enableScrollWheelZoom(true);
  var top_right_navigation = new BMap.NavigationControl({
      anchor: BMAP_ANCHOR_TOP_RIGHT, 
      type: BMAP_NAVIGATION_CONTROL_SMALL
  }); 
  map2.addControl(top_right_navigation);
  var geolocationControl2 = new BMap.GeolocationControl();
  geolocationControl2.addEventListener("locationSuccess", function(e){
    // 定位成功事件
    var address = '';
    address += e.addressComponent.province;
    address += e.addressComponent.city;
    address += e.addressComponent.district;
    address += e.addressComponent.street;
    address += e.addressComponent.streetNumber;
    alert("当前定位地址为：" + address);
  });
  geolocationControl2.addEventListener("locationError",function(e){
    // 定位失败事件
    alert(e.message);
  });
  map2.addControl(geolocationControl2); 

  var map3 = new BMap.Map("map3");     
	map3.centerAndZoom("广州",10); 
  map3.enableScrollWheelZoom(true);
  var top_right_navigation = new BMap.NavigationControl({
      anchor: BMAP_ANCHOR_TOP_RIGHT, 
      type: BMAP_NAVIGATION_CONTROL_SMALL
  });
  map3.addControl(top_right_navigation);
  var geolocationControl3 = new BMap.GeolocationControl();
  geolocationControl3.addEventListener("locationSuccess", function(e){
    // 定位成功事件
    var address = '';
    address += e.addressComponent.province;
    address += e.addressComponent.city;
    address += e.addressComponent.district;
    address += e.addressComponent.street;
    address += e.addressComponent.streetNumber;
    alert("当前定位地址为：" + address);
  });
  geolocationControl3.addEventListener("locationError",function(e){
    // 定位失败事件
    alert(e.message);
  });
  map3.addControl(geolocationControl3); 

  