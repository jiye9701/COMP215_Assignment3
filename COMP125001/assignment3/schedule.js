var rows, cols, table = '';

//$("#btnSubmit").submit(function (e) {
//    e.preventDefault();
//});
//
//
// 
// 
//



function createTable() {
    rows = document.getElementById("rows").value;
    cols = document.getElementById("cols").value;

    table += "<table>";



    for (i = 1; i <= rows; i++) {


        table += "<tr>";


        for (j = 1; j <= cols; j++) {

            table += "<td>";

            table += i + "," + j;

            table += "</td>";    //from count 1
        }

        document.getElementById('result').innerHTML = table;




        table += "</tr>";
    }



    table += "</table>";




    table = '';
}


function popup()
{
    window.open("assignment3.html", "", "width=480, height=500, toolbar=no, menubar=no, scrollbars=no, resizable=yes");

}

    




