function make_grade_table() {
// Get entered values from user	

   var total_form_amt = document.getElementById("total_form_amt").value;
   var form_earned_amt = document.getElementById("form_earned_amt").value;
   var total_sum_amt = document.getElementById("total_sum_amt").value;
   var sum_earned_amt = document.getElementById("sum_earned_amt").value;
   var next_sum_amt = document.getElementById("next_sum_amt").value;
   var n = next_sum_amt;
   var big_table = " ";
   var temp1;
   var temp2;
   
   temp1 = (parseInt(form_earned_amt) / (parseInt(total_form_amt))*10);
   temp2 = parseInt(total_sum_amt)+parseInt(next_sum_amt);
     // Create header of table.  Do this just once.
big_table = '<table class="tg"><tr><th>Score</th><th>final grade</th></tr>';
for (n=next_sum_amt;n>=0;n--){
big_table = big_table + '<tr><td class="tg-uv3p">' + n + '</td><td class="tg-uv3p">' + round((temp1+((parseInt(sum_earned_amt)+parseInt(n)) / (temp2)*90)),2)+ "</td></tr>";
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