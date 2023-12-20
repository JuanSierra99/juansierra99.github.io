const typing = async () => {
  let docElement = document.getElementById("imTyping");
  const string1 = "Hello, World !";
  const string2 = " i'm Juan Sierra :)";

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
    if (t.isIntersecting) {
      t.target.classList.add("show");
    } else {
      t.target.classList.remove("show");
    }
  });
}, null);
const targets = document.querySelectorAll(".hidden");
targets.forEach((t) => observer.observe(t));
