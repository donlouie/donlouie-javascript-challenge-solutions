// Chaining Animations (3 Methods)
$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});

// Animate method through click Event Listener
$("button").on("click", function() {
    $("h1").animate({opacity:0.5});
});

// SlideUp, SlideDown by click Event Listener
$("button").on("click", function() {
    $("h1").slideToggle();
});

// FadeIn, FadeOut by click Event Listener
$("button").on("click", function() {
    $("h1").fadeToggle();
});


// Show, Hide, Toggle Element by click Event Listener
$("button").on("click", function() {
    $("h1").toggle();
});

// Remove all Elements 
$("button").remove();

// Prepend & Append
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");  //After Content of Element

// Create New Button Before, After
$("h1").before("<button>New</button>"); //Before Element
$("h1").after("<button>New</button>"); //After Element

// Change Element Color through Mouseover Event
$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
});


// Detect Key Event(Key Pressed) in an Input
$("input").keypress(function(event) {
    console.log(event.key);
});

// Change h1 according to KeyPress Event
$(document).keypress(function(event) {
    $("h1").text(event.key);
});

// Adding Event Listener
// Change Color through Click
// without jQuery
for (var i = 0; i < 5; i++) {
  document
    .querySelectorAll("button")
    [i].addEventListener("click", function () {
        document.querySelectorAll("h1").style.color = "purple";
    });
}
// with jQuery
$("button").click(function() {
    $("h1").css("color", "purple");
})

// Get Attribute by Browser Console
$("h1").attr("class");

// Change Attribute
$("a").attr("href", "https://facebook.com")

// Change Text
/$("h1").text("textHere");
$("button").text("textHere");

// Add / Remove Class
$("h1").addClass("classHere");
$("h1").removeClass("classHere");
