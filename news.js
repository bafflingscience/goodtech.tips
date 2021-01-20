document.readyState(function() {
    let url ="https://newsapi.org/v2/top-headlines?sources=breitbart-news&id=breitbart-news&apiKey=5ca8fac10fc041c9a1593a1145c4ae23"

    $.ajax({
        url:url,
        method:"GET",
        dataType: "Json",

        beforeSend: function() {
            $(".progress").show();
        },

        complete: function() {
            $(".progress").hide();
        },

        success: function(news) {
            let output = "";
            let latestNews = news.articles;
            
            for(var i in latestNews)
            {
                output += `
                  <h2 class="headline-title">${latestNews[i].title}  
                  </h2>
                `;
            }
            if(output !== "") {
                $("#newsResults").html(output);
            }
        },

        error: function("#newsResults").html("Some error occured") {
        }
    })
})