Data = [
  {
    img1: "Asset/download (2).jpeg",
    title: "Website",
    subtitle: "Swager",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempora, assumenda distinctio alias natus molestias.",
  },
  {
    img1: "Asset/download (2).jpeg",
    title: "Website",
    subtitle: "Swager",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempora, assumenda distinctio alias natus molestias.",
  },
];

var container = document.querySelector(".container-project");

Data.forEach((element) => {
  container.innerHTML += `<div class="project">
        <div class="img-project">
            <img src="${element.img1}" alt="">
            <img src="${element.img1}" alt="">
        </div>
        <div class="desc-project">
            <h1>${element.title}</h1>
            <h2>${element.subtitle}</h2>
            <p>${element.desc}</p>
        </div>
        <button class="read-more">Read More</button>
    </div>`;
});
