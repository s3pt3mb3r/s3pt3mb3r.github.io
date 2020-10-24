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
    translateY: "-15vh",
    delay: 0,
    easing: "easeOutSine",
  })
  .add({
    targets: ".intro-wrapper",
    duration: 300,
    opacity: "100%",
    translateY: ["2rem", "0rem"],
    delay: 0,
    easing: "easeInOutSine",
  })
  .add({
    targets: ".fa-spider",
    duration: 300,
    delay: 0,
    easing: "easeInOutSine",
    color: "#DB3339",
  })
  .add({
    targets: ".fa-spider",
    duration: 600,
    delay: 300,
    easing: "easeInOutSine",
    color: "#FCF9E9",
  });

$(".skillset span").hover(
  function () {
    $(".fa-spider").css("color", "#DB3339");
  },
);