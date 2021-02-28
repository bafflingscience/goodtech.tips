fetch('http://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=5ca8fac10fc041c9a1593a1145c4ae23')

.then(response => {return response.json();})
.then(getJSON => {console.log(getJSON);})
.catch(error => console.error('fetch newsAPI error!!', error))