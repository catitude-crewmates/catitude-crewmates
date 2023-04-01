
document.addEventListener("DOMContentLoaded", function() {
  const animateTime = 30;

  const element = document.getElementById("animate");
  if (!element) {
    return
  }
  element.innerText = "";
  const text = "Cats are often overlooked and underrepresented in our world, and many of them do not have a loving home to call their own. It's important to raise awareness and encourage others to care for these furry feline friends. Whether through adoption, volunteering at a shelter, or simply spreading the word, we can all make a difference in the lives of these precious animals. Let's work together to ensure that all cats receive the love and care they deserve!!"
  for (let i = 0; i < text.length; i++) {
    window.setTimeout(() => {
      element.innerText = text.substring(0, i)
    }, animateTime * i)
  }

  const element2 = document.getElementById("animate2");
  element2.innerText = "";
  const text2 = `If you hear cats singing on the street, don't be alarmed. They're probably just rehearsing for their upcoming kitty boy band, "The Meow-tations".`
  for (let i = 0; i < text2.length; i++) {
    window.setTimeout(() => {
      element2.innerText = text2.substring(0, i)
    }, animateTime * (i + text.length))
  }

  const element3 = document.getElementById("animate3");
  element3.innerText = "";
  const text3 = `Kitty, kitty, fluffy and small
  With eyes so bright and a purring call
  Soft fur, cute nose, and tiny paws
  You're the feline beauty that we adore`
  for (let i = 0; i < text2.length; i++) {
    window.setTimeout(() => {
      element3.innerText = text3.substring(0, i)
    }, animateTime * (i + text.length + text2.length))
  }

  const element4 = document.getElementById("animate4");
  element4.innerText = "";3
  const text4 = `From whiskers to tail, you're perfect and sweet
  A bundle of joy, with tiny paws and feet
  We love you always, you bring us such glee
  Our little kitty, you complete our family.`
  for (let i = 0; i < text4.length; i++) {
    window.setTimeout(() => {
      element4.innerText = text4.substring(0, i)
    }, animateTime * (i + text.length + text2.length + text3.length))
  }

  const element5 = document.getElementById("animate5");
  element5.innerText = "";
  const text5 = `Meow, meow, little friend
  You're the love that never ends
  Cuddle up, and let's pretend
  That we're the best of friends`
  for (let i = 0; i < text5.length; i++) {
    window.setTimeout(() => {
      element5.innerText = text5.substring(0, i)
    }, animateTime * (i + text.length + text2.length + text3.length + text4.length))
  }

  const element6 = document.getElementById("animate6");
  element6.innerText = "";
  const text6 = `Kitty, kitty, we sing for you
  Our love for you, forever true
  Meow, meow, we say goodbye
  Until the next time, our friend, don't cry.`
  for (let i = 0; i < text6.length; i++) {
    window.setTimeout(() => {
      element6.innerText = text6.substring(0, i)
    }, animateTime * (i + text.length + text2.length + text3.length + text4.length + text5.length))
  }
})



document.addEventListener("DOMContentLoaded", function() {
  const icons = ["❤️", "🐈‍⬛", "🐈", "🐾", "🐱"];
  const iconElement = document.getElementById("icon-changer");
  if (!iconElement) {
    return
  }
  let iconIndex = 0;
  const setIcon = () => {
    iconElement.innerText = icons[iconIndex]
    iconIndex = (iconIndex + 1) % icons.length;
  }
  setIcon()
  window.setInterval(() => {
    setIcon();
  }, 1000)
});
