


window.onload = function() {

  var password = 'gunpowder'
  var inputpassword = prompt('Please enter password:')

  if (inputpassword === password) {

    //color-code adminlog table
    document.getElementById("loading_overlay").style.display = "none";
    var table, tr, td, i, txtValueUpper;
    table = document.getElementById("logTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        txtValueUpper = txtValue.toUpperCase();
        if (txtValueUpper.includes('!WARN')){
          tr[i].style.background = "#FCE698";
        }  
        else if (txtValueUpper.includes('!KILL')){
          tr[i].style.background = "#FCE698";
        }
        else if (txtValueUpper.includes('!RESIGN')){
            tr[i].style.background = "#FCE698";
        }
        else if (txtValueUpper.includes('!KICK')){
          tr[i].style.background = "orange";
        }
        else if (txtValueUpper.includes('!TEMPBAN')){
          tr[i].style.background = "#FF6666";
        }
        else if (txtValueUpper.includes('!BAN')){
          tr[i].style.background = "#FF2222";
        }
        else if (txtValueUpper.includes('AMNESTY')){
          tr[i].style.background = "#66FF66";
        }
      } 
    }
  }
  else{
    var bodysel = document.getElementById("body");
    bodysel.innerHTML = "SORRY, WRONG PASSWORD";
    bodysel.style.fontSize = "80px";
  }

}

function clearInputs() {
  //Clear input fields
  document.getElementById("myInput").value = "";
  document.getElementById("command_filter").value = "none";
  //set all log rows to display:none                                  Tried using for-loop to combine logs_row and names_row, but this didn't work.
  table = document.getElementById("logTable");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length - 1; i++) { //table header <th> counts as a row, so we start i at 1 to skip header.
      tr[i].style.display = "none";
    }
  
  //set all name rows to display:none
  table = document.getElementById("namesTable");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length - 1; i++) {
      tr[i].style.display = "none";
    }

  //set counters to 0
  document.getElementById("counter_warnings").innerHTML = 0;
  document.getElementById("counter_resigns").innerHTML = 0;
  document.getElementById("counter_kills").innerHTML = 0;
  document.getElementById("counter_kicks").innerHTML = 0;
  document.getElementById("counter_bans").innerHTML = 0;

}



function showHideTutorial() {   //toggle the tutorial div
    tutorialdiv = document.getElementById("tutorial");
    if (tutorialdiv.style.display !== "block"){
        tutorialdiv.style.display = "block";
    }
    else{
        tutorialdiv.style.display = "none";
    }
}



function filterLogTable() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue,command_selector,command_filter;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("logTable");
    tr = table.getElementsByTagName("tr");
    
    command_selector = document.getElementById("command_filter").value;
    if (command_selector === "none") {
      command_filter = "";//when searching this empty string within string, will always return true.
    }
    else{
      command_filter = "!".concat(command_selector.toUpperCase()); //transform 'warn' into '!WARN' etc.
    }
    
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().includes(filter)) {
          if (txtValue.includes(command_filter)) {
            tr[i].style.display = "block";
          }
          else {
            tr[i].style.display = "none";
          }  
        }
        else {
          tr[i].style.display = "none";
        }  
      }
    }
}


function filterLogTable_precise() {
  // Declare variables
  var input, searchterm, filter, table, tr, td, i, txtValue,command_selector,command_filter;
  input = document.getElementById("myInput");
  searchterm = input.value.toUpperCase();
  filter = " " + searchterm + "'"
  table = document.getElementById("logTable");
  tr = table.getElementsByTagName("tr");
  
  command_selector = document.getElementById("command_filter").value;
  if (command_selector === "none") {
    command_filter = "";//when searching this empty string within string, will always return true.
  }
  else{
    command_filter = "!".concat(command_selector.toUpperCase()); //transform 'warn' into '!WARN' etc.
  }
  
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().includes(filter)) {
        if (txtValue.includes(command_filter)) {
          tr[i].style.display = "block";
        }
        else {
          tr[i].style.display = "none";
        }  
      }
      else {
        tr[i].style.display = "none";
      }  
    }
  }
}


    function filterNamesTable() {
      // Declare variables
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("namesTable");
      tr = table.getElementsByTagName("tr");
  
  
      // Loop through all table rows, and hide those who don't match the search query
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().includes(filter)) {
                tr[i].style.display = "block";
          }
          else {
                tr[i].style.display = "none";
          }
        }
      }
    }


    function filterNamesTable_precise() {
      // Declare variables
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase() + ' ';
      table = document.getElementById("namesTable");
      tr = table.getElementsByTagName("tr");
  
  
      // Loop through all table rows, and hide those who don't match the search query
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().includes(filter)) {
                tr[i].style.display = "block";
          }
          else {
                tr[i].style.display = "none";
          }
        }
      }
    }






    function setCounters() {

      //set variables
      var table, tr, td, i, txtValue;
      var warnAmount, resignAmount, killAmount, kickAmount, banAmount;
      warnAmount = resignAmount = killAmount = kickAmount = banAmount = 0;
      
            
      //set pointers to logtable elements
      table = document.getElementById("logTable");
      tr = table.getElementsByTagName("tr");
  
      // Check the filtered log table and store the amount of warns, kicks etc in variables.
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.includes('!WARN')) {
              if(tr[i].style.display !== "none"){
              warnAmount++;
              }
          }
          else if (txtValue.includes('!KILL')) {
            if(tr[i].style.display !== "none"){
            killAmount++;
            }
          }
          else if (txtValue.includes('!RESIGN')) {
            if(tr[i].style.display !== "none"){
            resignAmount++;
            }
          }
          else if (txtValue.includes('!KICK')) {
            if(tr[i].style.display !== "none"){
            kickAmount++;
            }
          }
          else if (txtValue.includes('!BAN')) {
            if(tr[i].style.display !== "none"){
            banAmount++;
            }
          } 
        } 
      }
       //set counter values
      document.getElementById("counter_warnings").innerHTML = warnAmount
      document.getElementById("counter_resigns").innerHTML = resignAmount
      document.getElementById("counter_kills").innerHTML = killAmount
      document.getElementById("counter_kicks").innerHTML = kickAmount
      document.getElementById("counter_bans").innerHTML = banAmount

    }

    
    function filterFunction() {
      //declare variables
      input = document.getElementById("myInput").value;
      command_selector = document.getElementById("command_filter").value;
      if(input === "" && command_selector === "none" ) {
        clearInputs();
      }
      else{
      filterLogTable();
      filterNamesTable();
      setCounters();
      }
    }

    function searchClickedName(name_and_date) {
      var name_only = name_and_date.split(" ")[0]; //splits username entry into list of name string and date string, [0] will select the name string.
      document.getElementById("myInput").value = name_only;
      filterLogTable_precise();
      filterNamesTable_precise();
      setCounters();
    }