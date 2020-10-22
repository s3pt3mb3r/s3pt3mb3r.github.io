var basicTimeline = anime.timeline();
basicTimeline.add({
  targets: ".anime-base",
  duration: 500,
  width: "50rem",
  marginRight: "0rem",
  delay: (elm, i) => i * 100,
  easing: "easeInOutSine",
})
  .add({
    targets: "header, .social-wrapper",
    duration: 200,
    opacity: "100%",
    delay: 0,
    easing: "easeInSine",
  })
  .add({
    targets: ".anime-cover",
    duration: 100,
    width: "5rem",
    delay: (elm, i) => i * 80,
    easing: "easeInOutSine",
  })
  .add({
    targets: ".wrapper",
    duration: 400,
    translateY: "-30vh",
    delay: 0,
    easing: "easeOutSine",
  })
  .add({
    targets: ".intro-1",
    duration: 500,
    opacity: "100%",
    delay: 0,
    easing: "easeInOutSine",
  });