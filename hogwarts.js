if (typeof jQuery == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
  } else {console.log('I did it! I linked jQuery and this js file!')};

// YEAR 1
// Query for your div with the id of container and set it to a variable named $container and and console.log($container);
const $container = $("#container")
console.log($container);

// Create an <h1> element and set it to a variable called $h1 and console log it. Add some text inside the h1 element. Example text: 'Hogwarts'
const $h1 = $("<h1>").text("Hogwarts");
console.log($h1);
$container.append($h1);


// YEAR 2
// h2 element with your name
const $h2 = $("<h2>");
$h2.html("Yuna");
$container.append($h2)

// h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin )
const $h3 = $("<h3>").html("Gryffindor");
$container.append($h3);

// h4 element with your pet's name. this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
const $h4 = $("<h4>").addClass("Scabbers").html("Mouse");
$container.append($h4);

// h4 element with your wand
const $h44 = $("<h44>").addClass("Holly Wand")


// YEAR 3
// Following what you did in previous years, add the following into an unordered list (with the attribute of storage and a value of trunk):
const $ul = $("<ul>").attr("storage", "trunk");

// butter beer
let $li = $("<li>").html("butter beer");
$ul.append($li);

// invisibility cloak (add a class of secret)
$li = $("<li>").addClass("secret").html("invisibility cloak");
$ul.append($li);

// magic map (add a class of secret)
$li = $("<li>").addClass("secret").html("magic map");
$ul.append($li);

// time turner (add a class of secret)
$li = $("<li>").addClass("secret").html("time turner");
$ul.append($li);

// leash (for your pet, be sure to give this list element the same class as you gave your pet)
$li = $("<li>").addClass("pet").html("leash");
$ul.append($li);

// Bertie Bott's Every Flavor [Jelly] Beans.
$li = $("<li>").html(`Bertie Bott's Every Flavor [Jelly] Beans`);

// append the unordered list to your container div
$ul.append($li);
$container.append($ul);

// YEAR 4
// create a table (I was not able to figure out how to make a table that's visible.)
// Right above your table add an h5 that says 'Spring 2017'
$($container).append($("<h5>").html("Spring 2017"));
let $table = $("<table>");

// Inside the table add a thead element
let $thead = $("<thead>");
let $tr = $("<tr>");
let $td = $("<td>");
let $td1 = $("<td>");

// Inside the thead element add two th elements
// in the first th add the text Day
// // in the second th add the text Classes
$thead
  .append($($tr).append($("<th>").html("Day"), $("<th>").html("Classes")))
  .addClass("Heading");

$table.append($thead);

// Create a tr element and add two td elements inside.
let $tbody = $("<tbody>");
$tbody.append(

  // in the first td add the day Monda
  $("<tr>").append($("<td>").html("M"), $("<td>").html("Transfiguration"))
);

// in the second td add the classes you are taking ( Herbology, Divination, History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice, etc.)
$tbody.append(
  $("<tr>").append($("<td>").html("T"), $("<td>").html("Charms"))
);

// Create more tr elements with tds inside so that you have Monday - Friday and classes each of those days
$tbody.append(
  $("<tr>").append($("<td>").html("W"), $("<td>").html("Potions"))
);
$tbody.append(
  $("<tr>").append($("<td>").html("Th"), $("<td>").html("Defense Against the Dark Arts"))
);
$tbody.append(
  $("<tr>").append($("<td>").html("F"), $("<td>").html("Herbology"))
);
$table.append($tbody);
$container.append($table);

// YEAR 5
// Break your wand! (select the element that contains your wand and remove it)
$h44.remove();

// Class was hard! Drink all your butter beer! (remove just the butter beer from your list)
$ul.find('li:contains("butter beer")').remove();

// Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)
let $newWand = $("<h4>").html(`Duct Tape Wand`).insertAfter($h4);
$newWand.css("color", "indigo");

// Unsure on how to do this
// Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML). Make sure your pet's leash stays in your trunk (list item with the same class as your pet inside unordered list)
// Have your pet come back (remove your pet from the DOM, put it back in its original location) 

// Year 6
// Nosey roommate alert! hide (use jQuery method hide) to hide all your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
// Nosey roommate falls asleep 2 seconds later (chain the jQuery method delay on your hide method (give argument of at least 2000) to prevent showing your secret elements too soon.
$(".secret").hide("slow").delay(2000);
const alpha = setTimeout(() => {
  $(".secret").show("slow");
}, 2000);

// add the class cabbage to your pet's leash. Do not replace your pet's leash's original class. Your pet, which also has the same class should remain unaffected
$itemToMove.addClass("cabbage");

// Fix your pet's leash by removing the class of cabbage (be sure to keep your pet's leash's original class)
$itemToMove.removeClass("cabbage");

// Year 7
// Update your class schedule to read 'Fall 2018'
$("#container h5").html("Fall 2018");

// Celebrate by buying more butter beer! Append a list item with the text 'Butter beer' as the first list item inside your unordered list with the value of trunk
$ul.prepend($("<li>").text("Butter beer"));

// Whoops! You broke your trunk when you stood on it while singing karaoke. Get a new storage container for your stuff; replace the unodered list's property of trunk with a new property of chest
$ul.attr("storage", "chest");
