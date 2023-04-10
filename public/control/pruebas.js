$(document).ready(function () {
    $("#nueva_reticula").click(function (e) {
        nueva_reticula();
    });
});
$(document).ready(function () {
    $("#listado_reticula").click(function (e) {
        listado_reticula();
    });
});

/*--------------------------------------------------------------------------------
                    Reticula
------------------------------------------------------------------------------- */

//Mostrar el formulario para registrar una nueva Reticula
function nueva_reticula() {
    $.ajax({
        url: "/reticula/create",
        type: "GET",
        dataType: "html",
    })
        .done(function (vista) {
            console.log("success");
            $("#contenedor").html(vista);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
}

//Mostrar el listado de los Reticula
function listado_reticula() {
    $.ajax({
        url: "/reticula/",
        type: "GET",
        dataType: "html",
    })
        .done(function (vista) {
            console.log("success");
            $("#contenedor").html(vista);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
}

//Mostrar el consultar de la Reticula
function consultar_reticula(id) {
    $.ajax({
        url: "/reticula/" + id,
        type: "GET",
        dataType: "html",
    })
        .done(function (vista) {
            console.log("success");
            $("#contenedor").html(vista);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
}

//Agregar cadena en la vista Réticula
function mas_cadena() {
    var cadena = $("#cadena").val();
    var opt = $("#cadena").find("option");
    var nombre = "";
    var row_cadenas = $(".row_cadena");
    var id_nuevo = "row_" + cadena;
    var bandera = false;
    if (cadena != "") {
        $.each(row_cadenas, function (index, elemento) {
            console.log(elemento.id);

            if (elemento.id == id_nuevo) {
                bandera = true;
            }
        });
        if (!bandera) {
            $.each(opt, function (index, elemento) {
                if (cadena == elemento.value) {
                    nombre = elemento.innerText;
                    console.log(nombre);
                }
            });
            $("#contenedor_cadenas").append(
                "<div class='form-group row_cadena' id='" +
                    id_nuevo +
                    "'>" +
                    "<input type='hidden' class='cadena_id'  value='" +
                    cadena +
                    "' >" +
                    "<label class='control-label col-md-3 col-sm-3 col-xs-12' for='cadena'> <span class='required'></span>" +
                    "</label>" +
                    "<div class='col-md-6 col-sm-6 col-xs-12'>" +
                    "<label for=''>" +
                    nombre +
                    "</label>" +
                    "</div>" +
                    "<div class='col-md-1 col-sm-1 col-xs-12'>" +
                    "<button type='button' class='btn btn-danger btn-block btn-xs' onclick='menos_elementos(\"" +
                    id_nuevo +
                    "\")'><span class='fa fa-trash'></span>" +
                    "</button>" +
                    "</div>" +
                    "</div>"
            );
        } else {
            msj("Cadena", "La Cadena ya ha sido agregada", 2);
        }
    } else {
        msj("Cadena", "Seleccione una Cadena", 2);
    }
}

//Agregar la tabla en la vista reticula
function generar_reticula(f) {
    //if (f.nom_sem.value != "" && f.no_matmax != "") {
    //msj("Reticula", "Por favor completar los campos", 2);
    //} else {
    var cabecera = "";
    var contenido = "";
    $("#no_sem").prop("disabled", true);
    $("#no_matmax").prop("disabled", true);
    var semestre = parseInt($("#no_sem").val());
    var maxmat = parseInt($("#no_matmax").val());
    console.log(semestre);
    console.log(maxmat);
    for (let i = 0; i < semestre; i++) {
        cabecera += "<td class='text-center'>Semestre " + (i + 1) + "</td>";
    }

    for (let j = 0; j < maxmat; j++) {
        contenido += "<tr id='col_" + j + "'>";
        for (let k = 0; k < semestre; k++) {
            contenido +=
                "<td  data-toggle='modal' data-target='.bs-example-modal-lg'></td>";
        }
        contenido += "</tr>";
    }
    $("#contenedor_reticula").append(
        "<table id='myTable' class='table table-bordered'>" +
            "<tbody id='contenedor_columna'>" +
            "<tr>" +
            cabecera +
            "</tr>" +
            contenido +
            "</tbody>" +
            "<tbody id='contenedor_fila'>" +
            "</tbody>" +
            "<tfoot>" +
            "<tr>" +
            "</tr>" +
            "</tfoot>" +
            "</table>"
    );
    $("#botongen").prop("disabled", true);
    $("#contenedor_add_cf").append(
        "<div class='mb-1 row'>" +
            "<div class='col-form-label col-md-3 col-sm-2 col-xs-12 text-left text-sm-right'>" +
            "</div>" +
            "<div class='col-md-4 col-sm-4 col-xs-12'>" +
            "<button class='btn btn-dark' type='button' onclick='generar_mas_filas()'>Agregar fila</button>" +
            "</div>" +
            "<div class='col-md-4 col-sm-4 col-xs-12'>" +
            "<button class='btn btn-dark' type='button' onclick='generar_mas_columnas()'>Agregar columna</button>" +
            "</div>" +
            "</div>"
    );
    //}
}

//Agrega a la tabla de la reticula un nuevo renglon en semestre
function generar_mas_filas() {
    sem = parseInt($("#no_sem").val());
    mat = parseInt($("#no_matmax").val());
    console.log("entre");
    contenido = "";
    for (let k = 0; k < sem; k++) {
        contenido +=
            "<td  data-toggle='modal' data-target='.bs-example-modal-lg'></td>";
    }
    console.log(mat);
    $("#contenedor_columna").append(
        "<tr id='col_" + mat + "'>" + contenido + "</tr>"
    );
    var maxmat = parseInt($("#no_matmax").val());
    maxmat = maxmat + 1;
    $("#no_matmax").val(maxmat);
}

//Agregar a la tabla de la reticula una nueva columna en semestre
function generar_mas_columnas() {
    no_sem = parseInt($("#no_sem").val());
    mat = parseInt($("#no_matmax").val());
    cadena = "Semestre " + (no_sem + 1);
    var firstRow = document.getElementById("myTable").rows[0];
    var t = document.getElementById("myTable");
    firstRow.align = "center";
    $("td").addClass("text-center");
    var x = firstRow.insertCell(no_sem);
    x.innerHTML = cadena;
    sn = "";
    for (let i = 0; i < mat; i++) {
        sn =
            "<td  data-toggle='modal' data-target='.bs-example-modal-lg'></td>";
        $("#col_" + i).append(sn);
    }
    no_sem = no_sem + 1;
    $("#no_sem").val(no_sem);
}
