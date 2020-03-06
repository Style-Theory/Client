// ! ini untuk fetch location
let areaJakarta = {
	"async": true,
	"crossDomain": true,
	"url": "http://dev.farizdotid.com/api/daerahindonesia/provinsi/31/kabupaten",
	"method": "GET",
}
let areakepSeribu = {
	"async": true,
	"crossDomain": true,
	"url": "http://dev.farizdotid.com/api/daerahindonesia/provinsi/31/kabupaten/3101/kecamatan",
	"method": "GET",
}
let areaJaksel = {
	"async": true,
	"crossDomain": true,
	"url": "http://dev.farizdotid.com/api/daerahindonesia/provinsi/31/kabupaten/3171/kecamatan",
	"method": "GET",
}
let areaJaktim = {
	"async": true,
	"crossDomain": true,
	"url": "http://dev.farizdotid.com/api/daerahindonesia/provinsi/31/kabupaten/3172/kecamatan",
	"method": "GET",
}
let areaJakpus = {
	"async": true,
	"crossDomain": true,
	"url": "http://dev.farizdotid.com/api/daerahindonesia/provinsi/31/kabupaten/3173/kecamatan",
	"method": "GET",
}
let areaJakbar = {
	"async": true,
	"crossDomain": true,
	"url": "http://dev.farizdotid.com/api/daerahindonesia/provinsi/31/kabupaten/3174/kecamatan",
	"method": "GET",
}
let areaJakut = {
	"async": true,
	"crossDomain": true,
	"url": "http://dev.farizdotid.com/api/daerahindonesia/provinsi/31/kabupaten/3175/kecamatan",
	"method": "GET",
}
$.ajax(areaJakarta).done(function (response) {
	console.log(response);
});