const typing = async () => {
  let docElement = document.getElementById("imTyping");
  const string1 = "Hello, World !";
  const string2 = " I'm Juan Sierra :)";

  const constructString = (str) => {
    for (let i in str) {
      setTimeout(
        (index) => {
          docElement.textContent += str[index];
          if (str[index] == "!") {
            setTimeout(() => {
              deconstructString();
            }, 900);
          }
        },
        i * 110,
        i
      );
    }
    resolve();
  };

  const deconstructString = async () => {
    let interval = setInterval(() => {
      let lastChar = docElement.textContent.charAt(
        docElement.textContent.length - 1
      );
      if (lastChar !== ",") {
        docElement.textContent = docElement.textContent.slice(0, -1);
      } else {
        clearInterval(interval); // Stop deconstruction at the comma
        constructString(string2); // Construct second string
      }
    }, 100);
  };
  constructString(string1);
};
typing();

const observer = new IntersectionObserver((target) => {
  target.forEach((t) => {
    if (t.isIntersecting && t.target.complete) {
      t.target.classList.add("show");
    }
    //  else {
    //   t.target.classList.remove("show");
    // }
  });
}, null);

const viewportHeight = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);
const rootMargin = `0px 0px -${viewportHeight / 2}px 0px`;

const process_image = new IntersectionObserver(
  (inverted_images) => {
    inverted_images.forEach((image) => {
      if (image.isIntersecting) {
        image.target.classList.remove("inverted");
      } else {
        image.target.classList.add("inverted");
      }
      // console.log(image);
    });
  },
  { rootMargin: "0px 0px -90% 0px" }
);

inverted = document.querySelectorAll(".inverted");
inverted.forEach((img) => {
  console.log("here");
  process_image.observe(img);
});
// process_image.observe(inverted);

const targets = document.querySelectorAll(".hidden");
targets.forEach((t) => observer.observe(t));
