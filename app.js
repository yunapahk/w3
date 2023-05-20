if (typeof jQuery == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
  } else {console.log('I did it! I linked jQuery and this js file!')};

// YEAR 1
// Query for your div with the id of container and set it to a variable named $container
const container = $("#container")

// console.log($container);
console.log($container);

// Create an <h1> element and set it to a variable called $h1 and console log it. Add some text inside the h1 element. Example text: 'Hogwarts'
const $h1 = $("<h1>").html("Hogwarts");
$container.append($h1);


// YEAR 2
// h2 element with your name
const $h2 = $("<h2>");
$h2.html("Yuna");

// h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin )
$container.append($h2);
const $h3 = $("<h3>").html("Gryffindor");
$container.append($h3);

// h4 element with your pet's name. this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
const $h4 = $("<h4>").addClass("pet").html("tarantula");
$container.append($h4);

// h4 element with your wand
const $h42 = $("<h4>").html(
  "If You Were To Enter The Magical World Of Harry Potter Which Villain Would You Be?"
);
$container.append($h42);


// YEAR 3
const $ul = $("<ul>").attr("storage", "trunk");
let $li = $("<li>").html("butter beer");
$ul.append($li);
// $li = $("<li>").addClass("secret");
// $ul.append($li);
$li = $("<li>").addClass("secret").html("invisibility cloak");
$ul.append($li);
$li = $("<li>").addClass("secret").html("magic map");
$ul.append($li);
$li = $("<li>").addClass("secret").html("time turner");
$ul.append($li);
$li = $("<li>").addClass("pet").html("leash");
$ul.append($li);
$li = $("<li>").html(`Bertie Bott's Every Flavor [Jelly] Beans`);
$ul.append($li);
$container.append($ul);

// YEAR 4
$($container).append($("<h5>").html("Spring 2017"));
let $table = $("<table>");
let $thead = $("<thead>");
let $tr = $("<tr>");
let $td = $("<td>");
let $td1 = $("<td>");
// $thead.append($($tr).append($($th).html("Day"), $($th1).html("Classes")));
$thead
  .append($($tr).append($("<th>").html("Day"), $("<th>").html("Classes")))
  .addClass("Heading");
$table.append($thead);
let $tbody = $("<tbody>");
$tbody.append(
  //$($tr) Why this variable dont work in line 59 instead to "<tr>" and also   $("<tr>").append($($td).html("Monday"), $($td1).html("History of Magic")) it deletes the previous list
  $("<tr>").append($("<td>").html("Monday"), $("<td>").html("History of Magic"))
);
$tbody.append(
  $("<tr>").append($("<td>").html("Tuesday"), $("<td>").html("Divination"))
);
$tbody.append(
  $("<tr>").append($("<td>").html("Wednesday"), $("<td>").html("Herbology"))
);
$tbody.append(
  $("<tr>").append($("<td>").html("Thursday"), $("<td>").html("Charms"))
);
$tbody.append(
  $("<tr>").append($("<td>").html("Friday"), $("<td>").html("transfiguration"))
);
$table.append($tbody);
$container.append($table);

// YEAR 5
$h42.remove();
$ul.find('li:contains("butter beer")').remove();
// const $h4 = $("<h4>").addClass("pet").html("owl");
let $newWand = $("<h4>").html(`Bijay's Wand`).insertAfter($h4);
$newWand.css("color", "red");
let $pet = $h4.remove();
let $itemToMove = $('ul[storage="trunk"] li:nth-child(4)');
$itemToMove.detach();
$itemToMove.insertBefore('ul[storage="trunk"] li:nth-child(1)');
$itemToMove.detach();
$itemToMove.insertAfter('ul[storage="trunk"] li:nth-child(3)');
//============================================================//
//==========================Year 6============================//
$(".secret").hide("slow").delay(2000);
const alpha = setTimeout(() => {
  $(".secret").show("slow");
}, 3000);
$itemToMove.addClass("cabbage");
$itemToMove.removeClass("cabbage");
//============================================================//
//==========================Year 7============================//
$("#container h5").html("Fall 2018");
$ul.prepend($("<li>").text("Butter beer"));
$ul.attr("storage", "chest");
//============================================================//