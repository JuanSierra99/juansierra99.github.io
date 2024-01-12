// const typing = async () => {
// let docElement = document.getElementById("imTyping");
// const string1 = "Hello, World !";
// const string2 = " I'm Juan Sierra :)";

//   const constructString = (str) => {
//     for (let i in str) {
//       setTimeout(
//         (index) => {
//           docElement.textContent += str[index];
//           if (str[index] == "!") {
//             setTimeout(() => {
//               deconstructString();
//             }, 900);
//           }
//         },
//         i * 110,
//         i
//       );
//     }
//     resolve();
//   };

//   const deconstructString = async () => {
//     let interval = setInterval(() => {
//       let lastChar = docElement.textContent.charAt(
//         docElement.textContent.length - 1
//       );
//       if (lastChar !== ",") {
//         docElement.textContent = docElement.textContent.slice(0, -1);
//       } else {
//         clearInterval(interval); // Stop deconstruction at the comma
//         constructString(string2); // Construct second string
//       }
//     }, 100);
//   };
//   constructString(string1);
// };
// typing();

const observer = new IntersectionObserver((target) => {
  target.forEach((t) => {
    if (t.isIntersecting) {
      t.target.classList.add("show");
      observer.unobserve(t.target);
    }
  });
}, null);

const header_text = document.getElementById("film-text");
const process_image = new IntersectionObserver(
  (inverted_images) => {
    console.log(inverted_images);
    inverted_images.forEach((image) => {
      const imageId = image.target.id;
      if (image.isIntersecting) {
        switch (imageId) {
          case "image1":
            header_text.textContent = "I LOVE TAKING FILM PHOTOS :)";
            break;
          case "image2":
            header_text.textContent =
              "MY OTHER HOBBIES INCLUDE GAMING, READING, AND WORKING OUT";
            break;
          case "image3":
            header_text.textContent =
              "I'M ALSO INTO COLLECTING AUDIO EQUIPMENT, MANGA, AND TABLETOP GAMES";
            break;
          case "last-film-images":
            header_text.textContent = "OH AND I LOVE TRAVELING !";
            break;
        }
      }
    });
  },
  { rootMargin: "0px 0px -80% 0px", threshold: 0.2 }
);

inverted = document.querySelectorAll(".inverted-film");
inverted.forEach((img) => {
  process_image.observe(img);
});

const targets = document.querySelectorAll(".hidden");
targets.forEach((t) => observer.observe(t));
