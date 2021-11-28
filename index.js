function CreateTodoFromJSON() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var todolist = JSON.parse(this.responseText);
            var col = [];
            for (var i = 0; i < todolist.length; i++) {
                for (var key in todolist[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }

            // CREATE DYNAMIC TABLE.
            var table = document.createElement("table");

            // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.


            var tr = table.insertRow(-1);                   // TABLE ROW.



            // ADD JSON DATA TO THE TABLE AS ROWS.
            for (var i = 0; i < todolist.length; i++) {

                tr = table.insertRow(-1);

                for (var j = 2; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = todolist[i][col[j]];
                }
                var tabCell1 = tr.insertCell(2);
                var checkbox = document.createElement("input");
                checkbox.setAttribute("type", "checkbox");
                tabCell1.appendChild(checkbox)





            }

            // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
            var divContainer = document.getElementById("todo");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);





        }
        var rows = document.getElementsByTagName("tr");

        for (i = 1; i < rows.length; i++) {
            rows[i].cells.item(1).setAttribute("hidden", "true");
            var tick = rows[i].cells.item(2).children[0];
            if (rows[i].cells.item(1).innerHTML == "true") {

                tick.checked = true;
                rows[i].style.textDecoration = 'line-through 3px red';







            }

        }
        var count = 0;
        for (i = 1; i < rows.length; i++) {
             tick = rows[i].cells.item(2).children[0];
             
            tick.addEventListener('change',function(){
                (this).closest('tr').style.textDecoration = 'line-through 3px red';
                if((this).checked==true){
                count++;
                }
                if(count==5){
                    alert("5 Tasks have been Successfully Completed");
                    count=0;
                }



            });
            
        }







        }

        xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
        xhttp.send();

    }

