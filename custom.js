$(function () {

	$("#clearButton").click(function () {
		$('#searching').val('');
		// $('#Films').text("");
		$('#results').text("")
	});

	$("#searchSubmit").click(function () {
		// alert($('#searching').val());
		// console.log($('#searching').val());

		// $.get("https://api.themoviedb.org/3/search/multi?api_key=d272326e467344029e68e3c4ff0b4059&language=ru-RU&query=матрица", function (data) {
		//     console.log("Data Loaded: " + data);
		// });


		$.ajax({
			type: 'GET',
			url: 'https://api.themoviedb.org/3/search/multi',
			data: {'api_key': 'd272326e467344029e68e3c4ff0b4059', 'query': $('#searching').val()},
			success: function (data) {
				console.log(data);
				console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

				var tbody=document.getElementById("results");
				var row = document.createElement("TR")
				for(var i=0;i<data.results.length;i++){

					for(var key in data.results[i]){

						var table =document.createElement("HR");
						document.getElementById('results').append(key);
						document.getElementById('results').append(data.results[i][key]);
						document.getElementById('results').append(table);

					}
				}

				// $("#Films ").append(
				// 	"<tr><th> Title</th><p></p><th>Language</th><p></p><th>Date</th><p></p><th>Overview</th></tr>")
				//
				//
				// $.each(data.results, function (number, film) {
				//
				// 	$("#Films ").append(
				// 		"<tr>"
				// 		+ "<td>" + film.title + "</td>"
				// 		+ "<td>" + film.original_language + "</td>"
				// 		+"<td>" + film.release_date + "</td>"
				// 		+"<td>" + film.overview + "</td>"
				// 		+ "</tr>")
				console.log(film.title);
				// })

			},
			error: function (error) {
				console.log(error);
			}
		});
	});

});

/*
console.log(data);
				console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

				$("#Films ").append(
					"<tr><th> Title</th><p></p><th>Language</th><p></p><th>Date</th><p></p><th>Overview</th></tr>")


				$.each(data.results, function (number, film) {

					$("#Films ").append(
						"<tr>"
						+ "<td>" + film.title + "</td>"
						+ "<td>" + film.original_language + "</td>"
						+"<td>" + film.release_date + "</td>"
						+"<td>" + film.overview + "</td>"
						+ "</tr>")
				console.log(film.title);
				})




 */

