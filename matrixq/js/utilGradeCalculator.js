function make_grade_table() {
  // Get entered values from user	
  var test_val = document.getElementById("test_amt").value;
  var book_val = document.getElementById("book_amt").value;
  var calc_method = document.getElementById("grade_method").value;
  var n = 0;
  var big_table = "";



  //Change course based on calc_method
  if (calc_method == "Normal") {
    // Create header of table.  Do this just once.
    big_table = '<table class="tg"><tr><th>Amount Correct</th><th>Amount Incorrect</th><th>Percentage</th><th>Grade Book Amount</th></tr>';

    for (n = test_val; n >= 0; n--) {
      big_table = big_table + '<tr><td class="tg-uv3p">' + n + '</td><td class="tg-uv3p">' + (test_val - n) + '</td><td class="tg-uv3p">' + parseInt((n / test_val) * 100) + '</td><td class="tg-uv3p">' + parseInt((n / test_val) * book_val) + "</td></tr>";
    }

    big_table = big_table + "</table>";

    document.getElementById("grade_Table").innerHTML = big_table;

  } // end Normal Block
  else if (calc_method == "Square Root") {
    // use the square root method	
    // Create header of table.  Do this just once.
    big_table = '<table class="tg"><tr><th>Amount Correct</th><th>Amount Incorrect</th><th>Percentage</th><th>Grade Book Amount</th></tr>';

    for (n = test_val; n >= 0; n--) {
      big_table = big_table + '<tr><td class="tg-uv3p">' + n + '</td><td class="tg-uv3p">' + (test_val - n) + '</td><td class="tg-uv3p">' + parseInt(Math.sqrt((n / test_val) * 100) * 10) + '</td><td class="tg-uv3p">' + parseInt(((Math.sqrt((n / test_val) * 100) * 10) / 100) * book_val) + "</td></tr>";
    }

    big_table = big_table + "</table>";

    document.getElementById("grade_Table").innerHTML = big_table;

  } // end Square Root Block
  else {
    document.getElementById("grade_Table").innerHTML = calc_method;
  }
}