$(document).ready(function() {
	$("#load").click(function() {
		$.ajax({
			url : "http://jsonplaceholder.typicode.com/posts",
			type : "GET",
			success : function(response) {
				for (var i = 0; i < response.length; i++) {
					$("#content").append("Title: " + response[i].title + "<br>");
					$("#content").append("Data: " + response[i].body + "<br>");
					$("#content").append("<br>");
				}
			}
		});
	});
});