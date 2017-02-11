function lastUpdated(a, b, c, d) {
	var pubdate = new Date (a).getTime();
	var update = new Date (b).getTime();
	var offset = pubdate + 60 * 60 * 1000 * c;
    var monthName=["January","February","March","April","May","June","July","August","September","October","November","December"];
	var year = parseInt(b.substring(0, 4));
	var month = parseInt(b.substring(5, 7) - 1, 10);
	var day = parseInt(b.substring(8, 10), 10);
	var format = d + " " + monthName[month] + " " + day + ", " + year;
	var uDate = update > offset ? format : "";
	document.getElementById("update-timestamp").innerHTML = uDate;
}
lastUpdated ("<data:post.timestampISO8601/>", "<data:post.lastUpdatedISO8601/>", "12", "Updated");
