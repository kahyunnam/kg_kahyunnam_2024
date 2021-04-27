//an array containining command-line arguments
var int_array = process.argv;

//string_array will later contain the phonetic equivalent int_array
var string_array = [];

/* 
  loops through int_array, 
  and fills string_array as defined above.
*/
for (var i = 2; i < int_array.length; ++i) {
  var num = int_array[i];
  var num_string = "";
  var ns;

  while (num > 0) {

    var n = num % 10;
    if (n == 0) {
      ns = "Zero";
    }
    if (n == 1) {
      ns = "One";
    }
    if (n == 2) {
      ns = "Two";
    }
    if (n == 3) {
      ns = "Three";
    }
    if (n == 4) {
      ns = "Four";
    }
    if (n == 5) {
      ns = "Five";
    }
    if (n == 6) {
      ns = "Six";
    }
    if (n == 7) {
      ns = "Seven";
    }
    if (n == 8) {
      ns = "Eight";
    }
    if (n == 9) {
      ns = "Nine";
    }

    num_string = ns + num_string;
    num = Math.floor(num / 10);
  }

  string_array[i - 2] = num_string;
}

//output will contain the std output in specified format
var output = string_array[0];

/*
  loops through string_array
*/
for (var i = 1; i < string_array.length; ++i) {
  output = output + "," + string_array[i];
}

console.log(output);