console.log(`This is my index js file`);

//Initialize The variables
source = "in";
let apiKey = "b9e26c61e19148189c24af4df287a32d";

//Grab the news container
let newsAccordion = document.getElementById("newsAccordion");

//create an ajax get request
const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `http://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apiKey}`,
  true
);

// What to do when response is ready
xhr.onload = function() {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    //  console.log(articles);
    let newsHtml = "";
    articles.forEach((element,index) => {
      // console.log(element,index);
      let news = `
                    <div class="card">
                      <div class="card-header" id="heading${index}">
                        <h2 class="mb-0">
                          <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            <b>Breaking News : ${index + 1}.</b> ${element["title"]}
                          </button>
                        </h2>
                      </div>

                      <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                        <div class="card-body">
                         ${element["description"]}
                         For Detailed News Click <a href = "${element["url"]}" target = "_blank"> here</a>
                        </div>
                      </div>
                    </div>
                  `;
      newsHtml += news;
    });

    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
};

xhr.send();
