function make_grade_table() {
// Get entered values from user	
   var test_amt = document.getElementById("test_amt").value;
   var book_amt = document.getElementById("book_amt").value;
   var total_amt = document.getElementById("total_amt").value;
   var n = test_amt;
   var big_table = " ";
   // Create header of table.  Do this just once.
big_table = '<table class="tg"><tr><th>Score</th><th>final grade</th></tr>';
for (n; n>=0; n--){
big_table = big_table + '<tr><td class="tg-uv3p">' + n + '</td><td class="tg-uv3p">' + round(((parseInt(book_amt) + parseInt(n))/(parseInt(total_amt) + parseInt(test_amt))*100),2)+ "</td></tr>";
}
big_table = big_table + "</table>";
   document.getElementById("grade_Table").innerHTML = big_table;
   
   
//function to round a number to a specific decimal place
function round(value, exp) {
  if (typeof exp === 'undefined' || +exp === 0)
    return Math.round(value);

  value = +value;
  exp = +exp;

  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
    return NaN;

  // Shift
  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}
}