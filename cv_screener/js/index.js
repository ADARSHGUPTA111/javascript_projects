console.log("This is js");
//array of objects which contains info about the candidates

//the image of the user has com from the randomuser.me
const data = [
  {
    name: "Suraj",
    age: 21,
    city: "Kolkata",
    language: "C++",
    framework: "angular",
    image: "https://randomuser.me/api/portraits/men/43.jpg"
  },
  {
    name: "Amit",
    age: 21,
    city: "bhiwandi",
    language: "Java",
    framework: false,
    image: "https://randomuser.me/api/portraits/men/89.jpg"
  },
  {
    name: "Camilla",
    age: 21,
    city: "Nashik",
    language: "JavaScript",
    framework: "ReactJs",
    image: "https://randomuser.me/api/portraits/women/71.jpg"
  },
  {
    name: "Taylor Swift",
    age: 21,
    city: "England",
    language: "Go",
    framework: "Flask",
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    name: "Yashvi",
    age: 21,
    city: "USA",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

//CV Iterator

function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}

//button listener for next button

const next = document.getElementById("nextId");
nextId.addEventListener("click", nextCV);

const candidates = cvIterator(data);
nextCV();

function nextCV() {
  const currentCandidate = candidates.next().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");
  if (currentCandidate != undefined) {
    image.innerHTML = `<img src ='${currentCandidate.image}'>`;
    profile.innerHTML = `
    <ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old </li>
    <li class="list-group-item">Lives In : ${currentCandidate.city}</li>
    <li class="list-group-item">Knows : ${currentCandidate.language} (coding language)</li>  
    <li class="list-group-item">Specialises in : ${currentCandidate.framework} framework</li>  
    </ul>
    `;
  } else {
    alert("End Of Applications");
    window.location.reload();
  }
}
