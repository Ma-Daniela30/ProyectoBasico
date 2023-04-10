var _TOKEN = document.getElementsByName("csrf-token")[0].content;
var cont = 0;
var cont_evidencias = 1;
var CONTElementosA = 1;
var cont_arc = 1;
var PORCIENTO = 100;

$(document).ready(function () {
    $("#nueva_asignacionmd").click(function (e) {
        nueva_asignacion();
    });
});
$(document).ready(function () {
    $("#listado_asignacionmd").click(function (e) {
        listado_asignacion();
    });
});
$(document).ready(function () {
    $("#nueva_calendarizacion").click(function (e) {
        nueva_calendarizacion();
    });
});
$(document).ready(function () {
    $("#listado_calendarizacion").click(function (e) {
        listado_calendarizacion();
    });
});
$(document).ready(function () {
    $("#nueva_encabezadopie").click(function (e) {
        nueva_encabezadopie();
    });
});
$(document).ready(function () {
    $("#listado_encabezadopie").click(function (e) {
        listado_encabezadopie();
    });
});
$(document).ready(function () {
    $("#nueva_instrumentaciondidactica").click(function (e) {
        nueva_instrumentaciondidactica();
    });
});
$(document).ready(function () {
    $("#listado").click(function (e) {
        listado_historico();
    });
});
$(document).ready(function () {
    $("#listado_instrumentaciondidactica").click(function (e) {
        listado_instrumentaciondidactica();
    });
});
$(document).ready(function () {
    $("#nueva_proyectoindivudual").click(function (e) {
        nueva_proyectoindivudual();
    });
});
$(document).ready(function () {
    $("#listado_proyectoindivudual").click(function (e) {
        listado_proyectoindivudual();
    });
});
$(document).ready(function () {
    $("#nueva_evaluaciondiagnostico").click(function (e) {
        nueva_evaluaciondiagnostico();
    });
});
$(document).ready(function () {
    $("#listado_evaluaciondiagnostico").click(function (e) {
        listado_evaluaciondiagnostico();
    });
});
$(document).ready(function () {
    $("#nueva_evaluacionacreditacion").click(function (e) {
        nueva_evaluacionacreditacion();
    });
});
$(document).ready(function () {
    $("#listado_evaluacionacreditacion").click(function (e) {
        listado_evaluacionacreditacion();
    });
});
$(document).ready(function () {
    $("#nueva_grupo").click(function (e) {
        nueva_grupo();
    });
});
$(document).ready(function () {
    $("#listado_grupo").click(function (e) {
        listado_grupo();
    });
});
$(document).ready(function () {
    $("#nueva_aula").click(function (e) {
        nueva_aula();
    });
});
$(document).ready(function () {
    $("#listado_aula").click(function (e) {
        listado_aula();
    });
});
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
$(document).ready(function () {
    $("#nueva_temario").click(function (e) {
        nueva_temario();
    });
});
$(document).ready(function () {
    $("#listado_temario").click(function (e) {
        listado_temario();
    });
});
$(document).ready(function () {
    $("#nueva_planestudios").click(function (e) {
        nueva_planestudios();
    });
});
$(document).ready(function () {
    $("#listado_planestudios").click(function (e) {
        listado_planestudios();
    });
});
$(document).ready(function () {
    $("#nueva_especialidad").click(function (e) {
        nueva_especialidad();
    });
});
$(document).ready(function () {
    $("#listado_especialidad").click(function (e) {
        listado_especialidad();
    });
});
$(document).ready(function () {
    $("#cargar_materia").click(function (e){
        nueva_materias();
    });
});
$(document).ready(function () {
    $("#nueva_materia").click(function (e) {
        nueva_materia();
    });
});
$(document).ready(function () {
    $("#listado_materia").click(function (e) {
        listado_materia();
    });
});
$(document).ready(function () {
    $("#nueva_carrera").click(function (e) {
        nueva_carrera();
    });
});
$(document).ready(function () {
    $("#listado_carrera").click(function (e) {
        listado_carrera();
    });
});

function inicializar_tooltip() {
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
}

function regresar_principal() {
    msj("Home", "Bienvenido", 0); //0= verde 1= azul 2=error 3= amarillo
    $.ajax({
        url: "/",
        type: "GET",
        dataType: "html",
    })
        .done(function (vista) {
            console.log("success");
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
}

//Documentos
function sacardocumentos(id, idt) {
    var input = document.getElementById(id);
    var contenido = "";
    if (input.files && input.files[0])
        for (let index = 0; index < input.files.length; index++) {
            contenido += input.files[index]["name"] + ",";
        }
    contenido = contenido.slice(0, contenido.length - 1);
    var conte = (document.getElementById(idt).value = contenido);
}

//mensaje en forma de alert
function msj(titulo, texto, num) {
    tipo = "";
    if (num == 0) {
        tipo = "success";
    } else if (num == 1) {
        tipo = "info";
    } else if (num == 2) {
        tipo = "error";
    }

    if (tipo == "") {
        new PNotify({
            title: titulo,
            text: texto,
            styling: "bootstrap3",
        });
    } else {
        new PNotify({
            title: titulo,
            text: texto,
            type: tipo,
            styling: "bootstrap3",
        });
    }
}

//mensaje fijo para los rechazos de archivos
function msj2(titulo, texto) {
    new PNotify({
        title: titulo,
        text: texto,
        type: "error",
        hide: false,
        styling: "bootstrap3",
    });
}

function ocultarmsjpermanete() {
    $(document).ready(function () {
        $(".ui-pnotify").remove();
    });
}

// Limpia el formulario
function limpiar_general() {
    $("#form-nueva")[0].reset();
}

//funcion para mostar puntitos (cargando petirojo en una pagina)
function mp() {
    $("#loading").fadeIn(400, "linear");
}
// funcion para ocultar puntitos (cerrando al petirojo en una pagina)
function op() {
    $("#loading").fadeOut(10, "linear");
}

//funcion para mostar tooltip
function mtooltip() {
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
}

//funcion para ocultar tooltip
function otooltip() {
    $(document).ready(function () {
        $(document).ready(function () {
            $('[data-toggle="tooltip"]').click(function () {
                $('[data-toggle="tooltip"]').tooltip("hide");
            });
        });
    });
}

//Elimina las add de los elementos en las vistas
function menos_elementos(id) {
    $("#" + id).remove();
}

function get_vacio(variable) {
    if (variable == "" || isNaN(variable)) {
        return true;
    } else {
        return false;
    }
}

function get_Entero(variable) {
    if (variable == "" || isNaN(variable)) {
        return 0;
    } else {
        return variable;
    }
}

//Es entero
function is_number(cadena) {
    for (let i = 0; i < cadena.length; i++) {
        if (cadena.charCodeAt(i) < "48" || cadena.charCodeAt(i) > "57") {
            return false;
        }
    }
    return true;
}

//mostar la Confirmacion al eliminar registro
function modalConfirm(content, fooder) {
    var contenido = (document.getElementById("myModalContent").innerHTML =
        "<p>" + content + "</p>");
    var fooder = (document.getElementById("myModalFooder").innerHTML =
        '<button type="button" class="btn btn-danger " id="closeModal" onclick="' +
        fooder +
        '">Aceptar</button><button type="button" class="btn btn-secondary " data-dismiss="modal">Cancelar</button>');
    $("#myModalConfirm").modal();
}
//ocultar la confirmacion al eliminar registro
function ocultarModalConfirmacion() {
    $("#myModalConfirm").modal("hide");
}

//mostar la Confirmacion al eliminar registro
function ModalFirmar(fooder) {
    var fooder = (document.getElementById("myModalFooderF").innerHTML =
        '<button type="button" class="btn btn-success " id="closeModal" onclick="' +
        fooder +
        '">Firmar</button><button type="button" class="btn btn-dark " data-dismiss="modal">Cancelar</button>');
    $("#myModalFirma").modal();
}
//ocultar la confirmacion al eliminar registro
function ocultarModalFirmar() {
    $("#myModalFirma").modal("hide");
}

//mostar la Confirmacion para extender Seguimiento
function ModalExtenderSeguimiento(fooder) {
    var fooder = (document.getElementById("myModalFooderSeg").innerHTML =
        '<button type="button" class="btn btn-success " id="closeModal" onclick="' +
        fooder +
        '">Aceptar</button><button type="button" class="btn btn-dark " data-dismiss="modal">Cancelar</button>');
    $("#myModalSeguimiento").modal();
}
//ocultar la confirmacion para extender Seguimiento
function ocultarModalExtenderSeguimiento() {
    $("#myModalSeguimiento").modal("hide");
}

//mostar la Confirmacion al mostrar una imagen
function modalImg(titulo, content) {
    var titulo = (document.getElementById("myModalTitleI").innerHTML = titulo);
    var contenido = (document.getElementById("myModalContentI").innerHTML =
        "<img src='img/encabezado_pie/" +
        content +
        "' class='rounded col-md-12 col-sm-12 col-xs-12' alt=''>");
    var fooder = (document.getElementById("myModalFooderI").innerHTML =
        '<button type="button" class="btn btn-secondary " data-dismiss="modal">Cancelar</button>');
    $("#myModalImg").modal();
}

//mostrar Agregar materia a la reticula
function modalMateriaR(materia, fooder) {
    var contenido = (document.getElementById("myModalContentR").innerHTML =
        "<div class='mb-1 row'>" +
        "<div class='col-form-label col-md-4 col-sm-4 col-xs-12 text-left text-md-right'>" +
        "<label class='text-sm-left' for='materia'>Materia<span class='required'>*</span>" +
        "</label>" +
        "</div>" +
        "<div class='col-md-4 col-sm-4 col-xs-12'>" +
        "<select id='materia' name='materia' required='required' class='form-control form-control-sm'>" +
        "<option value='>--Seleccione--</option>" +
        "@foreach ($mat as $m)" +
        "<option value='{{ $m->cve_mat }}'>{{ $m->nombre_mat }}</option>" +
        "@endforeach" +
        "</select>" +
        "</div>" +
        "<div class='col-md-4 col-sm-4 col-xs-12'>" +
        "<div class='alert alert-danger' role='alert' id='a_materia' style='display: none'>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='mb-1 row'>" +
        "<div class='col-form-label col-md-4 col-sm-4 col-xs-12 text-left text-md-right'>" +
        "<label class='text-sm-left' for='materia'>Cadena<span class='required'>*</span>" +
        "</label>" +
        "</div>" +
        "<div class='col-md-4 col-sm-4 col-xs-12'>" +
        "<select id='materia' name='materia' required='required' class='form-control form-control-sm'>" +
        "<option value='>--Seleccione--</option>" +
        "@foreach ($mat as $m)" +
        " <option value='{{ $m->cve_mat }}'>{{ $m->nombre_mat }}</option>" +
        "@endforeach" +
        "</select>" +
        " </div>" +
        "<div class='col-md-4 col-sm-4 col-xs-12'>" +
        "<button type='button' class='btn btn-outline-secondary' onClick='><i class='fa fa-plus'></i>" +
        "</button>" +
        "<div class='alert alert-danger' role='alert' id='a_materia' style='display: none'>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='mb-1 row'>" +
        "<div class='col-form-label col-md-4 col-sm-4 col-xs-12 text-left text-md-right'>" +
        "<label class='text-sm-left' for='materia'>Departamento al que pertenece <span class='required'>*</span>" +
        "</label>" +
        "</div>" +
        "<div class='col-md-4 col-sm-4 col-xs-12'>" +
        "<select id='materia' name='materia' required='required'class='form-control form-control-sm'>" +
        " <option value='>--Seleccione--</option>" +
        "@foreach ($mat as $m)" +
        "<option value='{{ $m->cve_mat }}'>{{ $m->nombre_mat }}</option>" +
        "@endforeach" +
        "</select>" +
        "</div>" +
        "<div class='col-md-4 col-sm-4 col-xs-12'>" +
        "<div class='alert alert-danger' role='alert' id='a_materia' style='display: none'>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='mb-1 row'>" +
        "<div class='col-form-label col-md-4 col-sm-4 col-xs-12 text-left text-md-right'>" +
        "<label class='text-sm-left' for='materia'>Correquisito<span class='required'>*</span></label>" +
        "</div>" +
        "<div class='col-md-4 col-sm-4 col-xs-12'>" +
        "<select id='materia' name='materia' required='required' class='form-control form-control-sm'>" +
        "<option value='>--Seleccione--</option>" +
        "@foreach ($mat as $m)" +
        "<option value='{{ $m->cve_mat }}'>{{ $m->nombre_mat }}</option>" +
        "@endforeach" +
        "</select>" +
        "</div>" +
        "<div class='col-md-4 col-sm-4 col-xs-12'>" +
        "<button type='button' class='btn btn-outline-secondary' onClick='><i class='fa fa-plus'></i> </button>" +
        "<div class='alert alert-danger' role='alert' id='a_materia' style='display: none'>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='mb-1 row'>" +
        "<div class='col-form-label col-md-4 col-sm-4 col-xs-12 text-left text-md-right'>" +
        "<label class='text-sm-left' for='materia'>Prerrequisito<span class='required'>*</span>" +
        "</label>" +
        "</div>" +
        "<div class='col-md-4 col-sm-4 col-xs-12'>" +
        "<select id='materia' name='materia' required='required' class='form-control form-control-sm'>" +
        "<option value=''>--Seleccione--</option>" +
        "@foreach ($mat as $m)" +
        "<option value='{{ $m->cve_mat }}'>{{ $m->nombre_mat }}</option>" +
        "@endforeach" +
        "</select>" +
        "</div>" +
        "</div>");
}

//Mostrar el modificar unidad
function modalUnidad(id, no, tema, sub, foder) {
    var contenido = (document.getElementById("myModalConten").innerHTML =
        "<form action=''><?php @csrf" +
        "?><div class='mb-1 row'>" +
        "<div class='col-form-label col-md-6 col-sm-6 col-xs-12 text-left text-md-right'>" +
        "<label class='text-sm-left' for='nu'>No.de la unidad <span class='required'>*</span></label>" +
        "</div>" +
        "<div class='col-md-6 col-sm-6 col-xs-12'>" +
        "<input type='text' id='nu' name='nu' value='" +
        no +
        "' required='required'class='form-control form-control-sm' disabled>" +
        "</div>" +
        "</div>" +
        "<div class='mb-1 row'>" +
        "<div class='col-form-label col-md-12 col-sm-12 col-xs-12 text-left text-md-right'>" +
        "<label class='text-sm-left' for='te'>Tema<span class='required'>*</span></label>" +
        "</div>" +
        "<div class='col-md-12 col-sm-12 col-xs-12'>" +
        "<input type='text' id='te' name='te' value='" +
        tema +
        "' required='required'class='form-control form-control-sm' '>" +
        "</div>" +
        "</div>" +
        "<div class='mb-1 row'>" +
        "<div class='col-form-label col-md-12 col-sm-12 col-xs-12 text-left text-md-right'>" +
        "<label class='text-sm-left' for='su'>Subtema <span class='required'>*</span>" +
        "</label>" +
        "</div>" +
        "<div class='col-md-12 col-sm-12 col-xs-12'>" +
        "<textarea class='form-control form-control-sm' id='su' name='su' rows='7' style='resize: none'>" +
        sub +
        "</textarea>" +
        "</div>" +
        "</div>" +
        "   </div>" +
        "</form>");
    var fooder = (document.getElementById("myModalFoode").innerHTML =
        '<button type="button" class="btn btn-danger " id="closeModal" onclick="' +
        foder +
        '">Aceptar</button><button type="button" class="btn btn-secondary " data-dismiss="modal">Cancelar</button>');
    $("#myModalModifyTem").modal();
}
//Ocultar Actualizar unidad
function ocultarModalUnidad() {
    $("#myModalModifyTem").modal("hide");
}

//Mostrar el modificar unidad
function modalActividad(no, actap, comes, comge, foder) {
    var contenido = (document.getElementById("myModalConte").innerHTML =
        "<form action=''>" +
        "   <div class='mb-1 row'>" +
        "<div class='col-form-label col-md-6 col-sm-6 col-xs-12 text-left text-md-right'>" +
        "<label class='text-sm-left' for='nu'>No.de la unidad <span class='required'>*</span></label>" +
        "</div>" +
        "<div class='col-md-6 col-sm-6 col-xs-12'>" +
        "<input type='text' id='nu' name='nu' value='" +
        no +
        "' required='required'class='form-control form-control-sm' disabled>" +
        "</div>" +
        "</div>" +
        "<div class='mb-1 row'>" +
        "<div class='col-form-label col-md-12 col-sm-12 col-xs-12 text-left text-md-right'>" +
        "<label class='text-sm-left' for='te'>Actividad de Aprendizaje<span class='required'>*</span></label>" +
        "</div>" +
        "<div class='col-md-12 col-sm-12 col-xs-12'>" +
        "<textarea class='form-control form-control-sm' id='actapre' name='actapre' required='required' rows='7' style='resize:none'>" +
        actap +
        "</textarea>" +
        "</div>" +
        "</div>" +
        "<div class='mb-1 row'>" +
        "<div class='col-form-label col-md-12 col-sm-12 col-xs-12 text-left text-md-right'>" +
        "<label class='text-sm-left' for='su'>Competencia Especifica <span class='required'>*</span>" +
        "</label>" +
        "</div>" +
        "<div class='col-md-12 col-sm-12 col-xs-12'>" +
        "<textarea class='form-control form-control-sm' id='comes' name='comes' rows='7' style='resize: none'>" +
        comes +
        "</textarea>" +
        "</div>" +
        "</div>" +
        "<div class='mb-1 row'>" +
        "<div class='col-form-label col-md-12 col-sm-12 col-xs-12 text-left text-md-right'>" +
        "<label class='text-sm-left' for='su'>Competencia Generica <span class='required'>*</span>" +
        "</label>" +
        "</div>" +
        "<div class='col-md-12 col-sm-12 col-xs-12'>" +
        "<textarea class='form-control form-control-sm' id='comge' name='comge' rows='7' style='resize: none'>" +
        comge +
        "</textarea>" +
        "</div>" +
        "</div>" +
        "   </div>" +
        "</form>");
    var fooder = (document.getElementById("myModalFood").innerHTML =
        '<button type="button" class="btn btn-danger " id="closeModal" onclick="' +
        foder +
        '">Aceptar</button><button type="button" class="btn btn-secondary " data-dismiss="modal">Cancelar</button>');
    $("#myModalModifyATem").modal();
}
//Ocultar Actualizar unidad
function ocultarModalAct() {
    $("#myModalModifyATem").modal("hide");
}

//ocultar la confirmacion al mostrar una imagen
function ocultarModalImg() {
    $("#myModalImg").modal("hide");
}
//mostar la Agregar materia en reticula
function modalAddMateria(f) {
    //var fooder = (document.getElementById("myModalFooderR").innerHTML =
    //  '<button type="button" class="btn btn-outline-danger " id="closeModal" onclick="' +
    //fooder +
    //'">Aceptar</button><button type="button" class="btn btn-outline-secondary " data-dismiss="modal">Cancelar</button>');
    $("#myModalReticula").modal();
}
//ocultar la Agregar materia en reticula
function ocultarModalMateria() {
    $("#myModalReticula").modal("hide");
}

//mostar las observaciones
function modalObservacion(fooder) {
    var contenido = (document.getElementById("myModalCont").innerHTML =
        "<form action='' id='form-nuevaO'>" +
        "<div class='mb-1 row'>" +
        "<div class='col-form-label col-md-12 col-sm-12 col-xs-12'>" +
        "<label class='' for='observaciones'>Motivo del rechazo del documento <span class='required'>*</span></label>" +
        "</div>" +
        "<div class='col-md-12 col-sm-12 col-xs-12'>" +
        "<textarea name='observaciones' id='observaciones' cols='30' rows='10' required='required'class='form-control form-control-sm'></textarea>" +
        "</div>" +
        "</div>" +
        "</form>");
    var fooder = (document.getElementById("myModalFoor").innerHTML =
        '<button type="button" class="btn btn-success " id="closeModal" form="form-nuevaO" onclick="' +
        fooder +
        '">Guardar</button><button type="button" class="btn btn-dark " data-dismiss="modal">Cancelar</button>');
    $("#myModalObservacion").modal();
}
//ocultar las observaciones
function ocultarModalObservacion() {
    $("#myModalObservacion").modal("hide");
}

/*--------------------------------------------------------------------------------
                    Asignación Materia Docente
------------------------------------------------------------------------------- */
//Mostrar el formulario para registrar una nueva asignación materia docente
function nueva_asignacion() {
    mp();
    $.ajax({
        url: "/asignacionmd/create",
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
            op();
            console.log("complete");
        });
}

//Mostrar el formulario para cargar vaias Materias
function nueva_materias() {
    mp();
    $.ajax({
        url: "/materias/create",
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
            op();
            console.log("complete");
        });
}
//Mostrar el listado de la asignación materia docente
function listado_asignacion() {
    mp();
    $.ajax({
        url: "/asignacionmd/",
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
            op();
            console.log("complete");
        });
}

function add_asignacion(f) {
    var archivoe = new FormData(f);
    var a = document.getElementById("academica");
    if (!f.checkValidity()) {
        msj("Carga Académico", "Por favor de llenar los campos", 2);
    } else {
        var file = a.value;
        console.log(a.value);
        if (file.split(".").pop() == "xlsx") {
            $.ajax({
                url: "/asignacionmd",
                type: "POST",
                headers: { "X-CSRF-TOKEN": _TOKEN },
                dataType: "json",
                data: archivoe,
                processData: false,
                contentType: false,
            })
                .done(function (json) {
                    console.log("success");
                    msj(json.estado, json.mensaje, 0);
                    listado_asignacion();
                })
                .fail(function () {
                    console.log("error");
                })
                .always(function () {
                    console.log("complete");
                });
        } else {
            msj(
                "Carga Académico",
                "Por favor de verificar la extensión del archivo seleccionado",
                2
            );
        }
    }
}

function add_materias(f) {
    var archivoe = new FormData(f);
    var a = document.getElementById("academica");
    if (!f.checkValidity()) {
        msj("Carga de materias", "Por favor de llenar los campos", 2);
    } else {
        var file = a.value;
        console.log(a.value);
        if (file.split(".").pop() == "xlsx") {
            $.ajax({
                url: "/materias",
                type: "POST",
                headers: { "X-CSRF-TOKEN": _TOKEN },
                dataType: "json",
                data: archivoe,
                processData: false,
                contentType: false,
            })
                .done(function (json) {
                    console.log("success");
                    msj(json.estado, json.mensaje, 0);
                    listado_asignacion();
                })
                .fail(function () {
                    console.log("error");
                })
                .always(function () {
                    console.log("complete");
                });
        } else {
            msj(
                "Carga de Materia",
                "Por favor de verificar la extensión del archivo seleccionado",
                2
            );
        }
    }
}

//Muestra la consulta de una asignación
function consultar_asignacion(id) {
    mp();
    $.ajax({
        url: "/asignacionmd/" + id,
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
            op();
        });
}

//Muestra la consulta de una asignación
function consultar_instrumentaciondidacticaJ(id, jefe) {
    mp();
    res = 0;
    console.log(jefe === "jefe");
    if (jefe === "jefe") {
        res = 1;
    }
    $.ajax({
        url: "/instrumentacionDidactica/" + id,
        type: "GET",
        data: {
            tipo: res,
        },
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
            op();
        });
}

//Muestra la vista para poder modificar la asignación
function edit_asignacion(id) {
    mp();
    $.ajax({
        url: "/asignacionmd/" + id + "/edit",
        type: "GET",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "html",
    })
        .done(function (html) {
            console.log("success");
            $("#contenedor").html(html);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            op();
            console.log("complete");
        });
}

//Eliminar la materia del docente
function delete_doc(id) {
    $.ajax({
        url: "/asignacionmd/" + id,
        type: "DELETE",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "json",
    })
        .done(function (json) {
            console.log("success");
            ocultarModalConfirmacion();
            listado_asignacion();
            msj(json.estado, json.mensaje, 0);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
}

//Filtro de CargaAcademica
function filtro_cargaAca(f) {
    $.ajax({
        url: "/asignacionmd",
        type: "GET",
        dataType: "html",
        data: {
            materia: f.f_materia.value,
            docente: f.f_docente.value,
            periodo: f.f_periodo.value,
            ins: f.f_ins.value,
            ed: f.f_ed.value,
            ea: f.f_ea.value,
        },
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

// Limpia el formulario
function limpiar_cargaAca() {
    $("#form-cargaAca")[0].reset();
    listado_asignacion();
}

/*--------------------------------------------------------------------------------
                    Calendarizacion de Evaluacion
------------------------------------------------------------------------------- */
//Mostrar el formulario para registrar una nueva calendarizacion de evaluacion
function nueva_calendarizacion() {
    mp();
    $.ajax({
        url: "/calendarizaciones/create",
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
            op();
            console.log("complete");
        });
}

//Mostrar el listado de la calendarizacion de evaluacion
function listado_calendarizacion() {
    mp();
    $.ajax({
        url: "/calendarizaciones/",
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
            op();
            console.log("complete");
        });
}

//Muestra la consulta de una calendarizacion de evaluacion
function consultar_calendarizacion(id) {
    mp();
    $.ajax({
        url: "/calendarizaciones/" + id,
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
            op();
        });
}

//Muestra la vista para poder modificar la calendarizacion de evaluacion
function edit_calendarizacion(id) {
    mp();
    $.ajax({
        url: "/calendarizaciones/" + id + "/edit",
        type: "GET",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "html",
    })
        .done(function (html) {
            console.log("success");
            $("#contenedor").html(html);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            op();
            console.log("complete");
        });
}

//Guarda los datos en la BD
function add_calendarizacion(f) {
    if (!f.checkValidity()) {
        msj("Calendarizacion", "Por favor completar los campos", 2);
    } else {
        document.getElementById("a_periodo").innerHTML = "";
        document.getElementById("a_fechaIni").innerHTML = "";
        document.getElementById("a_fechaFin").innerHTML = "";
        document.getElementById("a_seguno").innerHTML = "";
        document.getElementById("a_segdos").innerHTML = "";
        document.getElementById("a_segtres").innerHTML = "";
        if (f.periodo.value.length > 0) {
            $("#a_periodo").css("display", "none");
            if (f.fecha_inicio.value.length > 0) {
                $("#a_fechaIni").css("display", "none");
                if (f.fecha_fin.value.length > 0) {
                    $("#a_fechaFin").css("display", "none");
                    if (f.fecha_inicio.value < f.fecha_fin.value) {
                        $("#a_fechaFin").css("display", "none");
                        if (f.segU.value.length > 0) {
                            $("#a_seguno").css("display", "none");
                            if (f.segD.value.length > 0) {
                                $("#a_segdos").css("display", "none");
                                if (
                                    parseInt(f.segD.value) >
                                    parseInt(f.segU.value)
                                ) {
                                    $("#a_segdos").css("display", "none");
                                    if (f.segT.value.length > 0) {
                                        $("#a_segtres").css("display", "none");
                                        if (
                                            parseInt(f.segT.value) >
                                                parseInt(f.segU.value) &&
                                            parseInt(f.segT.value) >
                                                parseInt(f.segD.value)
                                        ) {
                                            $("#a_segtres").css(
                                                "display",
                                                "none"
                                            );
                                            $.ajax({
                                                url: "/calendarizaciones",
                                                type: "POST",
                                                headers: {
                                                    "X-CSRF-TOKEN": _TOKEN,
                                                },
                                                dataType: "json",
                                                data: {
                                                    periodo: f.periodo.value,
                                                    fechaI: f.fecha_inicio
                                                        .value,
                                                    fechaF: f.fecha_fin.value,
                                                    primerS: f.segU.value,
                                                    segundoS: f.segD.value,
                                                    tercerS: f.segT.value,
                                                },
                                            })
                                                .done(function (json) {
                                                    console.log("success");
                                                    msj(
                                                        json.estado,
                                                        json.mensaje,
                                                        0
                                                    );
                                                    listado_calendarizacion();
                                                })
                                                .fail(function () {
                                                    console.log("error");
                                                })
                                                .always(function () {
                                                    console.log("complete");
                                                });
                                        } else {
                                            if (
                                                $("#a_segtres").html().trim() ==
                                                ""
                                            ) {
                                                f.segT.focus();
                                                $("#a_segtres").css(
                                                    "display",
                                                    "block"
                                                );
                                                $("#a_segtres").append(
                                                    "El tercer seguimiento no puede ser realizado antes que el primer y/o segundo seguimiento favor de verificar los seguimientos. "
                                                );
                                            }
                                        }
                                    } else {
                                        if (
                                            $("#a_segtres").html().trim() == ""
                                        ) {
                                            f.segT.focus();
                                            $("#a_segtres").css(
                                                "display",
                                                "block"
                                            );
                                            $("#a_segtres").append(
                                                "Favor de llenar la sema en la que se hara el tercer seguimiento. "
                                            );
                                        }
                                    }
                                } else {
                                    if ($("#a_segdos").html().trim() == "") {
                                        f.segD.focus();
                                        $("#a_segdos").css("display", "block");
                                        $("#a_segdos").append(
                                            "El segundo seguimiento no puede ser realizado antes que el primer seguimiento favor de verificar los seguimientos. "
                                        );
                                    }
                                }
                            } else {
                                if ($("#a_segdos").html().trim() == "") {
                                    f.segD.focus();
                                    $("#a_segdos").css("display", "block");
                                    $("#a_segdos").append(
                                        "Favor de llenar la sema en la que se hara el segundo seguimiento. "
                                    );
                                }
                            }
                        } else {
                            if ($("#a_seguno").html().trim() == "") {
                                f.segU.focus();
                                $("#a_seguno").css("display", "block");
                                $("#a_seguno").append(
                                    "Favor de llenar la sema en la que se hara el primer seguimiento. "
                                );
                            }
                        }
                    } else {
                        if ($("#a_fechaFin").html().trim() == "") {
                            f.fecha_fin.focus();
                            $("#a_fechaFin").css("display", "block");
                            $("#a_fechaFin").append(
                                "El ciclo escolar no puede terminar antes de que inicie el ciclo escolar favor de verificarlo. "
                            );
                        }
                    }
                } else {
                    if ($("#a_fechaFin").html().trim() == "") {
                        f.fecha_fin.focus();
                        $("#a_fechaFin").css("display", "block");
                        $("#a_fechaFin").append(
                            "Favor de llenar la fecha en la que se terminara el ciclo escolar. "
                        );
                    }
                }
            } else {
                if ($("#a_fechaIni").html().trim() == "") {
                    f.fecha_inicio.focus();
                    $("#a_fechaIni").css("display", "block");
                    $("#a_fechaIni").append(
                        "Favor de llenar la fecha en la que inicio el ciclo escolar. "
                    );
                }
            }
        } else {
            f.periodo.focus();
            if ($("#a_periodo").html().trim() == "") {
                $("#a_periodo").css("display", "block");
                $("#a_periodo").append("Favor de escribir el periodo");
            }
        }
    }
}

//Actualiza los datos en la BD
function update_calendarizacion(f, id) {
    if (!f.checkValidity()) {
        msj("Calendarizacion", "Por favor complets los campos", 2);
    } else {
        document.getElementById("a_periodo").innerHTML = "";
        document.getElementById("a_fechaIni").innerHTML = "";
        document.getElementById("a_fechaFin").innerHTML = "";
        document.getElementById("a_seguno").innerHTML = "";
        document.getElementById("a_segdos").innerHTML = "";
        document.getElementById("a_segtres").innerHTML = "";
        if (f.periodo.value.length > 0) {
            $("#a_periodo").css("display", "none");
            if (f.fecha_inicio.value.length > 0) {
                $("#a_fechaIni").css("display", "none");
                if (f.fecha_fin.value.length > 0) {
                    $("#a_fechaFin").css("display", "none");
                    if (f.fecha_inicio.value < f.fecha_fin.value) {
                        $("#a_fechaFin").css("display", "none");
                        if (f.segU.value.length > 0) {
                            $("#a_seguno").css("display", "none");
                            if (f.segD.value.length > 0) {
                                $("#a_segdos").css("display", "none");
                                if (
                                    parseInt(f.segD.value) >
                                    parseInt(f.segU.value)
                                ) {
                                    $("#a_segdos").css("display", "none");
                                    if (f.segT.value.length > 0) {
                                        $("#a_segtres").css("display", "none");
                                        if (
                                            parseInt(f.segT.value) >
                                                parseInt(f.segU.value) &&
                                            parseInt(f.segT.value) >
                                                parseInt(f.segD.value)
                                        ) {
                                            $("#a_segtres").css(
                                                "display",
                                                "none"
                                            );
                                            $.ajax({
                                                url: "/calendarizaciones/" + id,
                                                type: "PATCH",
                                                headers: {
                                                    "X-CSRF-TOKEN": _TOKEN,
                                                },
                                                dataType: "json",
                                                data: {
                                                    periodo: f.periodo.value,
                                                    fechaI: f.fecha_inicio
                                                        .value,
                                                    fechaF: f.fecha_fin.value,
                                                    primerS: f.segU.value,
                                                    segundoS: f.segD.value,
                                                    tercerS: f.segT.value,
                                                },
                                            })
                                                .done(function (json) {
                                                    console.log("success");
                                                    msj(
                                                        json.estado,
                                                        json.mensaje,
                                                        0
                                                    );
                                                    listado_calendarizacion();
                                                })
                                                .fail(function () {
                                                    console.log("error");
                                                })
                                                .always(function () {
                                                    console.log("complete");
                                                });
                                        } else {
                                            if (
                                                $("#a_segtres").html().trim() ==
                                                ""
                                            ) {
                                                f.segT.focus();
                                                $("#a_segtres").css(
                                                    "display",
                                                    "block"
                                                );
                                                $("#a_segtres").append(
                                                    "El tercer seguimiento no puede ser realizado antes que el primer y/o segundo seguimiento favor de verificar los seguimientos. "
                                                );
                                            }
                                        }
                                    } else {
                                        if (
                                            $("#a_segtres").html().trim() == ""
                                        ) {
                                            f.segT.focus();
                                            $("#a_segtres").css(
                                                "display",
                                                "block"
                                            );
                                            $("#a_segtres").append(
                                                "Favor de llenar la sema en la que se hara el tercer seguimiento. "
                                            );
                                        }
                                    }
                                } else {
                                    if ($("#a_segdos").html().trim() == "") {
                                        f.segD.focus();
                                        $("#a_segdos").css("display", "block");
                                        $("#a_segdos").append(
                                            "El segundo seguimiento no puede ser realizado antes que el primer seguimiento favor de verificar los seguimientos. "
                                        );
                                    }
                                }
                            } else {
                                if ($("#a_segdos").html().trim() == "") {
                                    f.segD.focus();
                                    $("#a_segdos").css("display", "block");
                                    $("#a_segdos").append(
                                        "Favor de llenar la sema en la que se hara el segundo seguimiento. "
                                    );
                                }
                            }
                        } else {
                            if ($("#a_seguno").html().trim() == "") {
                                f.segU.focus();
                                $("#a_seguno").css("display", "block");
                                $("#a_seguno").append(
                                    "Favor de llenar la sema en la que se hara el primer seguimiento. "
                                );
                            }
                        }
                    } else {
                        if ($("#a_fechaFin").html().trim() == "") {
                            f.fecha_fin.focus();
                            $("#a_fechaFin").css("display", "block");
                            $("#a_fechaFin").append(
                                "El ciclo escolar no puede terminar antes de que inicie el ciclo escolar favor de verificarlo. "
                            );
                        }
                    }
                } else {
                    if ($("#a_fechaFin").html().trim() == "") {
                        f.fecha_fin.focus();
                        $("#a_fechaFin").css("display", "block");
                        $("#a_fechaFin").append(
                            "Favor de llenar la fecha en la que se terminara el ciclo escolar. "
                        );
                    }
                }
            } else {
                if ($("#a_fechaIni").html().trim() == "") {
                    f.fecha_inicio.focus();
                    $("#a_fechaIni").css("display", "block");
                    $("#a_fechaIni").append(
                        "Favor de llenar la fecha en la que inicio el ciclo escolar. "
                    );
                }
            }
        } else {
            f.periodo.focus();
            if ($("#a_periodo").html().trim() == "") {
                $("#a_periodo").css("display", "block");
                $("#a_periodo").append("Favor de escribir el periodo");
            }
        }
    }
}

//Cambia el estatus del registro en la BD
function delete_calendarizacion(id) {
    $.ajax({
        url: "/calendarizaciones/" + id,
        type: "DELETE",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "json",
    })
        .done(function (json) {
            console.log("success");
            ocultarModalConfirmacion();
            listado_calendarizacion();
            msj(json.estado, json.mensaje, 0);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
}

//Filtro de calendarizacion
function filtro_caleneval(f) {
    $.ajax({
        url: "/calendarizaciones",
        type: "GET",
        dataType: "html",
        data: {
            periodo: f.f_periodo.value,
        },
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

// Limpia el formulario
function limpiar_caleneval() {
    $("#form-caleneval")[0].reset();
    listado_calendarizacion();
}

/*--------------------------------------------------------------------------------
                    Encabezado y Pie
------------------------------------------------------------------------------- */

//Mostrar el formulario para registrar una nueva Encabezado y pie
function nueva_encabezadopie() {
    mp();
    $.ajax({
        url: "/encabezadopie/create",
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
            op();
            console.log("complete");
        });
}

//Mostrar el listado de la Encabezado y pie
function listado_encabezadopie() {
    mp(); //0= verde 1= azul 2=error 3= amarillo
    $.ajax({
        url: "/encabezadopie/",
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
            op();
            console.log("complete");
        });
}

//Muestra la vista para poder modificar el encabezado y pie
function edit_encabezadopie(id) {
    mp();
    $.ajax({
        url: "/encabezadopie/" + id + "/edit",
        type: "GET",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "html",
    })
        .done(function (html) {
            console.log("success");
            $("#contenedor").html(html);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            op();
            console.log("complete");
        });
}

//Muestra la vista para poder consultar el encabezado y pie
function consultar_encabezadopie(id) {
    mp();
    $.ajax({
        url: "/encabezadopie/" + id,
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
            op();
            console.log("complete");
        });
}

//Cambia el estatus del registro en la BD
function delete_encabezadopie(id) {
    $.ajax({
        url: "/encabezadopie/" + id,
        type: "DELETE",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "json",
    })
        .done(function (json) {
            console.log("success");
            ocultarModalConfirmacion();
            listado_encabezadopie();
            msj(json.estado, json.mensaje, 0);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
}

//Guarda los datos en la BD
function add_encabezadopie(f) {
    var imagenes = new FormData(f);
    var enc = document.getElementById("encabezado");
    var tipo = $("#tipo").val();
    console.log(imagenes);
    if (enc.files[0] == null) {
        msj("Encabezado", "Favor de llenar el campo", 2);
    } else {
        if (tipo.length == 0) {
            msj("Encabezado", "Favor de llenar el campo", 2);
            $("tipo").focus();
        } else {
            $.ajax({
                url: "/encabezadopie",
                type: "POST",
                headers: { "X-CSRF-TOKEN": _TOKEN },
                dataType: "json",
                data: imagenes,
                processData: false,
                contentType: false,
            })
                .done(function (json) {
                    console.log("success");
                    msj(json.estado, json.mensaje, 0);
                    listado_encabezadopie();
                })
                .fail(function () {
                    console.log("error");
                })
                .always(function () {
                    console.log("complete");
                });
        }
    }
}

//Actualiza los datos en la BD
function update_encabezapie(f, id) {
    var imagenes = new FormData(f);
    var enc = document.getElementById("encabezado");
    var tipo = $("#tipo").val();
    console.log(imagenes);
    if (tipo.length == 0) {
        msj("Encabezado", "Favor de llenar el campo", 2);
        $("tipo").focus();
    } else {
        $.ajax({
            url: "/encabezadopieA/" + id,
            type: "POST",
            headers: { "X-CSRF-TOKEN": _TOKEN },
            dataType: "json",
            data: imagenes,
            processData: false,
            contentType: false,
        })
            .done(function (json) {
                console.log("success");
                msj(json.estado, json.mensaje, 0);
                listado_encabezadopie();
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                console.log("complete");
            });
    }
}

//Filtro de calendarizacion
function filtro_encabezapie(f) {
    $.ajax({
        url: "/encabezadopie",
        type: "GET",
        dataType: "html",
        data: {
            tipo: f.f_tipo.value,
        },
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

// Limpia el formulario
function limpiar_encabezapie() {
    $("#form-encabezadopie")[0].reset();
    listado_encabezadopie();
}

/*--------------------------------------------------------------------------------
                    Docente
------------------------------------------------------------------------------- */

function listado_historico() {
    mp();
    $.ajax({
        url: "/Historico/",
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
            op();
            inicializar_tooltip();
            console.log("complete");
        });
}

function filtro_historico(f) {
    $.ajax({
        url: "/Historico",
        type: "GET",
        dataType: "html",
        data: {
            mat: f.f_materia.value,
        },
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

// Limpia el formulario
function limpiar_docente() {
    $("#form-docente")[0].reset();
    listado_historico();
}

//Guardar los datos en la BD
function add_FirmarSeguimiento(f, id, seg) {
    var seguimiento = "";
    var sta = "";
    if (seg == 5) {
        seguimiento = 1;
        sta = "Seguimiento 1";
    } else {
        if (seg == 6) {
            seguimiento = 2;
            sta = "Seguimiento 2";
        } else {
            if (seg == 7) {
                seguimiento = 3;
                sta = "Seguimiento 3";
            }
        }
    }
    var r = id;
    var firma = $("#contra").val();
    console.log(r);
    if (firma.length > 0) {
        mp();
        $.ajax({
            url: "/seguimientos",
            type: "POST",
            headers: { "X-CSRF-TOKEN": _TOKEN },
            dataType: "json",
            data: {
                ind: r,
                estado: 4,
                status: sta,
                contra: firma,
                segui: seguimiento,
            },
        })
            .done(function (json) {
                $("#contra").val("");
                ocultarModalFirmar();
                console.log("success");
                if (json.cve == 1) {
                    msj(json.estado, json.mensaje, 0);
                    nueva_instrumentaciondidactica();
                } else {
                    msj(json.estado, json.mensaje, 2);
                    nueva_instrumentaciondidactica();
                }
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                op();
                console.log("complete");
            });
    } else {
        msj("Instrumentación Didactica", "Por favor complete el campo", 2);
    }
}

// ----------------------------Instrumentacion Didactica---------------------------
//Mostrar el formulario para registrar una nueva Instrumentacion Didactica
function nueva_instrumentaciondidactica() {
    console.log("Dentro");
    mp();
    $.ajax({
        url: "/instrumentacionDidactica/create",
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
            op();
            ocultarmsjpermanete();
            inicializar_tooltip();
            console.log("complete");
        });
}

//Mostrar el formulario para registrar una nueva Instrumentacion Didactica
function crear_instrumentaciondidactica(mate, doc) {
    mp();
    $.ajax({
        url: "/instrumentacionDidactica/",
        type: "GET",
        dataType: "html",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        data: {
            materia: mate,
            docente: doc,
        },
    })
        .done(function (vista) {
            console.log("success");
            $("#contenedor").html(vista);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            op();
            inicializar_tooltip();
            console.log("complete");
        });
}

//Mostrar la consulta de una Instrumentacion Didactica
function consultar_instrumentaciondidactica(id) {
    mp();
    $.ajax({
        url: "/instrumentacionDidactica/" + id,
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
            op();
            console.log("complete");
        });
}

//Mostrar la actualización de una Instrumentacion Didactica
function edit_instrumentaciondidactica(id) {
    mp();
    inicializar_tooltip();
    $.ajax({
        url: "/instrumentacionDidactica/" + id + "/edit",
        type: "GET",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "html",
    })
        .done(function (html) {
            console.log("success");
            $("#contenedor").html(html);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            op();
            console.log("complete");
        });
}

//Suma horas teoricas horas practicas
function total_horas_materias() {
    var teoricas = parseInt($("#horasT").val());
    var practicas = parseInt($("#horasP").val());
    var total = $("#totalH");
    var t = 0; //suma de los totales
    if (teoricas != "" && !isNaN(teoricas)) {
        t += teoricas;
    }

    if (practicas != "" && !isNaN(practicas)) {
        t += practicas;
    }

    total.val(t);
}

//Mostrar el listado de la Instrumentacion Didactica
function listado_instrumentaciondidactica() {
    mp();
    $.ajax({
        url: "/instrumentacionDidactica/",
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
            op();
            console.log("complete");
        });
}

//Agregar más evidencias de Aprendizaje en la vista de Instrumentacion didactica
function mas_evidenciasApren(id) {
    cont_evidencias = cont_evidencias + 3;
    var row_evidenciasA = $("#fila");
    var tamanorenglon = $("#tamRen" + id).val();
    console.log(tamanorenglon);
    tamanorenglon = parseInt(tamanorenglon);
    tamanorenglon = tamanorenglon + 1;
    $("#tamRen" + id).val(tamanorenglon);
    var id_nuevo = "rowunidad_" + cont_evidencias;
    var bandera = false;
    $.each(row_evidenciasA, function (index, elemento) {
        console.log(elemento.id);

        if (elemento.id == id_nuevo) {
            bandera = true;
        }
    });
    if (!bandera) {
        $("#contenedor_evidenciaAprendizaje" + id).append(
            "<tr class='even pointer' class='fila' id='" +
                id_nuevo +
                "_" +
                id +
                "'>" +
                "<script>total_porcentaje_fila()</script>" +
                "<td class='text-md-center' data-label='Evidencia de Aprendisaje: '>" +
                "<div>" +
                "<input type='text' id='evidenciaApre_" +
                cont_evidencias +
                "_" +
                id +
                "' name='evidenciaApre_" +
                cont_evidencias +
                "_" +
                id +
                "' required='required' class='form-control'>" +
                "</div>" +
                "</td>" +
                "<td class='text-md-center'data-label='Porcentaje: '>" +
                "<div>" +
                "<input type='text' id='porcentaje_" +
                cont_evidencias +
                "_" +
                id +
                "' name='porcentaje_" +
                cont_evidencias +
                "_" +
                id +
                "' required='required' class='form-control porcentaje' oninput='total_porcentaje_fila()'>" +
                "</div>" +
                "</td>" +
                "<td class='text-md-center'data-label='Se adapta a situaciones y contextos complejos: '>" +
                "<div>" +
                "<input type='text' id='indicadorA_" +
                cont_evidencias +
                "_" +
                id +
                "' name='indicadorA_" +
                cont_evidencias +
                "_" +
                id +
                "' required='required' class='form-control idicador_A" +
                id +
                "' oninput='total_indicador_A(" +
                id +
                ")'>" +
                "</div>" +
                "</td>" +
                "<td class='text-md-center'data-label='Hace aportaciones a las actividades académicas desarrolladas: '>" +
                "<div>" +
                "<input type='text' id='indicadorB_" +
                cont_evidencias +
                "_" +
                id +
                "' name='indicadorB_" +
                cont_evidencias +
                "_" +
                id +
                "' required='required' class='form-control idicador_B" +
                id +
                "' oninput='total_indicador_B(" +
                id +
                ")'>" +
                "</div>" +
                "</td>" +
                "<td class='text-md-center' data-label='Propone y/o explica soluciones o procedimientos no vistos en clase (creatividad): '>" +
                "<div>" +
                "<input type='text' id='indicadorC_" +
                cont_evidencias +
                "_" +
                id +
                "' name='indicadorC_" +
                cont_evidencias +
                "_" +
                id +
                "' required='required' class='form-control idicador_C" +
                id +
                "' oninput='total_indicador_C(" +
                id +
                ")'>" +
                "</div>" +
                "</td>" +
                "<td class='text-md-center' data-label='Introduce recursos y experiencias que promueven un pensamiento crítico: '>" +
                "<div>" +
                "<input type='text' id='indicadorD_" +
                cont_evidencias +
                "_" +
                id +
                "' name='indicadorD_" +
                cont_evidencias +
                "_" +
                id +
                "' required='required' class='form-control idicador_D" +
                id +
                "' oninput='total_indicador_D(" +
                id +
                ")'>" +
                "</div>" +
                "</td>" +
                "<td class='text-md-center' data-label='Incorpora conocimientos y actividades interdisciplinarias en su aprendizaje: '>" +
                "<div>" +
                "<input type='text' id='indicadorE_" +
                cont_evidencias +
                "_" +
                id +
                "' name='indicadorE_" +
                cont_evidencias +
                "_" +
                id +
                "' required='required' class='form-control idicador_E" +
                id +
                "' oninput='total_indicador_E(" +
                id +
                ")'>" +
                "</div>" +
                "</td>" +
                "<td class='text-md-center' data-label='Realiza su trabajo de manera autónoma y autorregulada: '>" +
                "<div>" +
                "<input type='text' id='indicadorF_" +
                cont_evidencias +
                "_" +
                id +
                "' name='indicadorF_" +
                cont_evidencias +
                "_" +
                id +
                "' required='required' class='form-control idicador_F" +
                id +
                "' oninput='total_indicador_F(" +
                id +
                ")'>" +
                "</div>" +
                "</td>" +
                "<td  class='text-md-center' data-label='Evaluacion formativa de la competencia: '>" +
                "<div>" +
                "<input type='text' id='evaluacionFor_" +
                cont_evidencias +
                "_" +
                id +
                "' name='evaluacionFor_" +
                cont_evidencias +
                "_" +
                id +
                "' required='required' class='form-control'>" +
                "</div>" +
                "</td>" +
                "<td>" +
                "<button type='button' class='btn btn-danger btn-block btn-xs fa fa-trash' onclick='menos_evidenciasApren(\"" +
                id_nuevo +
                "_" +
                id +
                '",' +
                id +
                ")'>" +
                "</button>" +
                "</td>" +
                "</tr>"
        );
    }
}

//Eliminar evidencias de Aprendizaje en la vista de Instrumentacion didactica
function menos_evidenciasApren(id, tam) {
    console.log(tam);
    var tamanorenglon = $("#tamRen" + tam).val();
    console.log(tamanorenglon);
    tamanorenglon = parseInt(tamanorenglon);
    tamanorenglon = tamanorenglon - 1;
    $("#tamRen" + tam).val(tamanorenglon);
    $("#" + id).remove();
    total_indicador_A();
    total_indicador_B();
    total_indicador_C();
    total_indicador_D();
    total_indicador_E();
    total_indicador_F();
}

//Suma del porcentaje de los indicadores de alcance(A, B, C, D, E y F)
function total_porcentaje_fila() {
    var row_evidenciasA = $(".porcentaje");
    var fila;
    var a, b, c, d, e, f;
    var ain = 0,
        bin = 0,
        cin = 0,
        din = 0,
        ein = 0,
        fin = 0,
        t = 0,
        ttp = 0;
    $.each(row_evidenciasA, function (index, elemento) {
        fila = elemento.id;
        fila = fila.substr(-1);
        console.log(fila);
        console.log("filas");
        (ain = 0),
            (bin = 0),
            (cin = 0),
            (din = 0),
            (ein = 0),
            (fin = 0),
            (t = 0),
            (ttp = 0);
        var total_porcentaje = $("#porcentaje_" + fila);
        total_porcentaje = total_porcentaje.val();
        if (!get_vacio(total_porcentaje)) {
            ttp = parseInt(total_porcentaje);
            //console.log(ttp);
            a = $("#indicadorA_" + fila);
            b = $("#indicadorB_" + fila);
            c = $("#indicadorC_" + fila);
            d = $("#indicadorD_" + fila);
            e = $("#indicadorE_" + fila);
            f = $("#indicadorF_" + fila);
            a = a.val();
            b = b.val();
            c = c.val();
            d = d.val();
            e = e.val();
            f = f.val();
            console.log(
                "a :" +
                    a +
                    ", b: " +
                    b +
                    ", c: " +
                    c +
                    ", d: " +
                    d +
                    ", e: " +
                    e +
                    ", f:" +
                    f
            );
            ain = parseInt(a);
            bin = parseInt(b);
            cin = parseInt(c);
            din = parseInt(d);
            ein = parseInt(e);
            fin = parseInt(f);
            //console.log(get_Entero(ain));
            //console.log(get_Entero(cin));
            t =
                get_Entero(ain) +
                get_Entero(bin) +
                get_Entero(cin) +
                get_Entero(din) +
                get_Entero(ein) +
                get_Entero(fin);
            //console.log(t);
            //console.log(ttp);
            if (t == ttp) {
                if (get_vacio(ain)) {
                    $("#indicadorA_" + fila).prop("disabled", true);
                }
                if (get_vacio(bin)) {
                    $("#indicadorB_" + fila).prop("disabled", true);
                }
                if (get_vacio(cin)) {
                    $("#indicadorC_" + fila).prop("disabled", true);
                }
                if (get_vacio(din)) {
                    $("#indicadorD_" + fila).prop("disabled", true);
                }
                if (get_vacio(ein)) {
                    $("#indicadorE_" + fila).prop("disabled", true);
                }
                if (get_vacio(fin)) {
                    $("#indicadorF_" + fila).prop("disabled", true);
                }
            } else if (t < ttp) {
                $("#indicadorA_" + fila).prop("disabled", false);
                $("#indicadorB_" + fila).prop("disabled", false);
                $("#indicadorC_" + fila).prop("disabled", false);
                $("#indicadorD_" + fila).prop("disabled", false);
                $("#indicadorE_" + fila).prop("disabled", false);
                $("#indicadorF_" + fila).prop("disabled", false);
            } else {
                msj(
                    "Indicador de alcance",
                    "Excedio los valores del indicador de alcance",
                    2
                );
            }
        } else {
            $("#indicadorA_" + fila).prop("disabled", true);
            $("#indicadorB_" + fila).prop("disabled", true);
            $("#indicadorC_" + fila).prop("disabled", true);
            $("#indicadorD_" + fila).prop("disabled", true);
            $("#indicadorE_" + fila).prop("disabled", true);
            $("#indicadorF_" + fila).prop("disabled", true);
        }
    });
}

//Suma de los indicadores A en la Instrumentacion Didactica
function total_indicador_A(id) {
    var sum = $(".idicador_A" + id);
    var totalA = $("#sumatA_" + id + "_" + id);
    var to = 0;
    var t = 0;
    var elemento = 0;
    $(sum).each(function (index, element) {
        console.log(element.value);
        elemento = parseInt(element.value);
        if (elemento != "" && !isNaN(elemento)) {
            to += elemento;
        }
    });
    totalA.val(to);
    total_porcentaje_fila();
}

//Suma de los indicadores B en la Instrumentacion Didactica
function total_indicador_B(id) {
    var sum = $(".idicador_B" + id);
    var totalB = $("#sumatB_" + id + "_" + id);
    var to = 0;
    var t = 0;
    var elemento = 0;
    $(sum).each(function (index, element) {
        console.log(element.value);
        elemento = parseInt(element.value);
        if (elemento != "" && !isNaN(elemento)) {
            to += elemento;
        }
    });
    totalB.val(to);
    total_porcentaje_fila();
}

//Suma de los indicadores C en la Instrumentacion Didactica
function total_indicador_C(id) {
    var sum = $(".idicador_C" + id);
    var totalC = $("#sumatC_" + id + "_" + id);
    var to = 0;
    var t = 0;
    var elemento = 0;
    $(sum).each(function (index, element) {
        console.log(element.value);
        elemento = parseInt(element.value);
        if (elemento != "" && !isNaN(elemento)) {
            to += elemento;
        }
    });
    totalC.val(to);
    total_porcentaje_fila();
}

//Suma de los indicadores D en la Instrumentacion Didactica
function total_indicador_D(id) {
    var sum = $(".idicador_D" + id);
    var totalD = $("#sumatD_" + id + "_" + id);
    var to = 0;
    var t = 0;
    var elemento = 0;
    $(sum).each(function (index, element) {
        console.log(element.value);
        elemento = parseInt(element.value);
        if (elemento != "" && !isNaN(elemento)) {
            to += elemento;
        }
    });
    totalD.val(to);
    total_porcentaje_fila();
}

//Suma de los indicadores E en la Instrumentacion Didactica
function total_indicador_E(id) {
    var sum = $(".idicador_E" + id);
    var totalE = $("#sumatE_" + id + "_" + id);
    var to = 0;
    var t = 0;
    var elemento = 0;
    $(sum).each(function (index, element) {
        console.log(element.value);
        elemento = parseInt(element.value);
        if (elemento != "" && !isNaN(elemento)) {
            to += elemento;
        }
    });
    totalE.val(to);
    total_porcentaje_fila();
}

//Suma de los indicadores F en la Instrumentacion Didactica
function total_indicador_F(id) {
    var sum = $(".idicador_F" + id);
    var totalF = $("#sumatF_" + id + "_" + id);
    var to = 0;
    var t = 0;
    var elemento = 0;
    $(sum).each(function (index, element) {
        console.log(element.value);
        elemento = parseInt(element.value);
        if (elemento != "" && !isNaN(elemento)) {
            to += elemento;
        }
    });
    totalF.val(to);
    total_porcentaje_fila();
}

//Guarda los datos en la BD
function add_observacionesID(f, ind, id) {
    if (f.observaciones.value.length > 0) {
        var sta = "Con Observaciones";
        $.ajax({
            url: "/observacionesID",
            type: "POST",
            headers: { "X-CSRF-TOKEN": _TOKEN },
            dataType: "json",
            data: {
                obser: f.observaciones.value,
                estado: 1,
                ind: ind,
                status: sta,
            },
        })
            .done(function (json) {
                ocultarModalObservacion();
                console.log("success");
                msj(json.estado, json.mensaje, 0);
                listado_asignacion();
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                console.log("complete");
            });
    } else {
        f.observaciones.focus();
        msj("Favor de llenar el campo", "Por favor de llenar la caja", 2);
    }
}

//Guarda los datos en la BD
function add_instrumentaciondidacticaBorrador(f) {
    var uni = $("");
    var renglonIndi = [];
    var phtp = [];
    var totalesIA = [];
    var fechasUni = [];
    //if (!f.checkValidity()) {
    //msj("Instrumentación Didactica", "Por favor complete los campos", 2);
    //} else {
    if (f.planEst.value.length > 0) {
        if (f.objetivoG.value.length > 0) {
            for (var i = 1; i <= f.tamanoU.value; i++) {
                var renglonA = $("#tamRen" + i).val();
                var d = $("#descripcion" + i).val();
                var r = $("#resultados" + i).val();
                var p = $("#p" + i).val();
                var rr = $("#r" + i).val();
                var f1 = $("#fecha_inicio" + i).val();
                var f2 = $("#fecha_fin" + i).val();
                phtp.push({
                    unidad: i,
                    desc: d,
                    res: r,
                    P: p,
                    R: rr,
                    fechaIni: f1,
                    fechaFin: f2,
                });
                for (let j = 1; j <= parseInt(renglonA); j++) {
                    var evi = $("#evidenciaApre_" + i + "_" + j).val();
                    var porcentaje = $("#porcentaje_" + i + "_" + j).val();
                    var ia = $("#indicadorA_" + i + "_" + j).val();
                    if (ia.length == 0) {
                        ia = 0;
                    }
                    var ib = $("#indicadorB_" + i + "_" + j).val();
                    if (ib.length == 0) {
                        ib = 0;
                    }
                    var ic = $("#indicadorC_" + i + "_" + j).val();
                    if (ic.length == 0) {
                        ic = 0;
                    }
                    var idd = $("#indicadorD_" + i + "_" + j).val();
                    if (idd.length == 0) {
                        idd = 0;
                    }
                    var ie = $("#indicadorE_" + i + "_" + j).val();
                    if (ie.length == 0) {
                        ie = 0;
                    }
                    var iif = $("#indicadorF_" + i + "_" + j).val();
                    if (iif.length == 0) {
                        iif = 0;
                    }
                    var eval = $("#evaluacionFor_" + i + "_" + j).val();
                    renglonIndi.push({
                        unidad: i,
                        evidencia: evi,
                        porcentaje: parseInt(porcentaje),
                        inda: parseInt(ia),
                        indb: parseInt(ib),
                        indc: parseInt(ic),
                        indd: parseInt(idd),
                        inde: parseInt(ie),
                        indf: parseInt(iif),
                        evaluacionfor: eval,
                    });
                }
                var ta = $("#sumatA_" + i + "_" + i).val();
                var tb = $("#sumatB_" + i + "_" + i).val();
                var tc = $("#sumatC_" + i + "_" + i).val();
                var td = $("#sumatD_" + i + "_" + i).val();
                var te = $("#sumatE_" + i + "_" + i).val();
                var tif = $("#sumatF_" + i + "_" + i).val();
                totalesIA.push({
                    unidad: i,
                    sumaa: ta,
                    sumab: tb,
                    sumac: tc,
                    sumad: td,
                    sumae: te,
                    sumaf: tif,
                });
            }
            phtp = JSON.stringify(phtp);
            renglonIndi = JSON.stringify(renglonIndi);
            totalesIA = JSON.stringify(totalesIA);
            var sta = "Borrador";
            mp();
            $.ajax({
                url: "/instrumentacionDidactica",
                type: "POST",
                headers: { "X-CSRF-TOKEN": _TOKEN },
                dataType: "json",
                data: {
                    docente: f.idDoc.value,
                    periodo: f.periodoi.value,
                    materia: f.mat.value,
                    grupo: f.grupo.value,
                    aula: f.aula.value,
                    plan: f.planEst.value,
                    horaT: f.horasT.value,
                    horaP: f.horasP.value,
                    total: f.totalH.value,
                    obj: f.objetivoG.value,
                    infoUni: phtp,
                    renglonIndicador: renglonIndi,
                    totalesIndicador: totalesIA,
                    observacion: f.observacionesDet.value,
                    estado: 1,
                    status: sta,
                },
            })
                .done(function (json) {
                    console.log("success");
                    msj(json.estado, json.mensaje, 0);
                    nueva_instrumentaciondidactica();
                })
                .fail(function () {
                    console.log("error");
                })
                .always(function () {
                    op();
                    console.log("complete");
                });
        } else {
            msj("Instrumentación Didactica", "Por favor complete el campo", 2);
        }
    } else {
        msj("Instrumentación Didactica", "Por favor complete el campo", 2);
    }
    //}
}

//Guarda los datos en la BD
function add_instrumentaciondidacticaEntregada(f) {
    var uni = $("");
    var renglonIndi = [];
    var phtp = [];
    var totalesIA = [];
    var fechasUni = [];
    if (f.planEst.value.length > 0) {
        if (f.objetivoG.value.length > 0) {
            for (var i = 1; i <= f.tamanoU.value; i++) {
                var renglonA = $("#tamRen" + i).val();
                var d = $("#descripcion" + i).val();
                var r = $("#resultados" + i).val();
                var p = $("#p" + i).val();
                var rr = $("#r" + i).val();
                var f1 = $("#fecha_inicio" + i).val();
                var f2 = $("#fecha_fin" + i).val();
                phtp.push({
                    unidad: i,
                    desc: d,
                    res: r,
                    P: p,
                    R: rr,
                    fechaIni: f1,
                    fechaFin: f2,
                });
                for (let j = 1; j <= parseInt(renglonA); j++) {
                    var evi = $("#evidenciaApre_" + i + "_" + j).val();
                    var porcentaje = $("#porcentaje_" + i + "_" + j).val();
                    var ia = $("#indicadorA_" + i + "_" + j).val();
                    if (ia.length == 0) {
                        ia = 0;
                    }
                    var ib = $("#indicadorB_" + i + "_" + j).val();
                    if (ib.length == 0) {
                        ib = 0;
                    }
                    var ic = $("#indicadorC_" + i + "_" + j).val();
                    if (ic.length == 0) {
                        ic = 0;
                    }
                    var idd = $("#indicadorD_" + i + "_" + j).val();
                    if (idd.length == 0) {
                        idd = 0;
                    }
                    var ie = $("#indicadorE_" + i + "_" + j).val();
                    if (ie.length == 0) {
                        ie = 0;
                    }
                    var iif = $("#indicadorF_" + i + "_" + j).val();
                    if (iif.length == 0) {
                        iif = 0;
                    }
                    var eval = $("#evaluacionFor_" + i + "_" + j).val();
                    renglonIndi.push({
                        unidad: i,
                        evidencia: evi,
                        porcentaje: parseInt(porcentaje),
                        inda: parseInt(ia),
                        indb: parseInt(ib),
                        indc: parseInt(ic),
                        indd: parseInt(idd),
                        inde: parseInt(ie),
                        indf: parseInt(iif),
                        evaluacionfor: eval,
                    });
                }
                var ta = $("#sumatA_" + i + "_" + i).val();
                var tb = $("#sumatB_" + i + "_" + i).val();
                var tc = $("#sumatC_" + i + "_" + i).val();
                var td = $("#sumatD_" + i + "_" + i).val();
                var te = $("#sumatE_" + i + "_" + i).val();
                var tif = $("#sumatF_" + i + "_" + i).val();
                totalesIA.push({
                    unidad: i,
                    sumaa: ta,
                    sumab: tb,
                    sumac: tc,
                    sumad: td,
                    sumae: te,
                    sumaf: tif,
                });
            }
            phtp = JSON.stringify(phtp);
            renglonIndi = JSON.stringify(renglonIndi);
            totalesIA = JSON.stringify(totalesIA);
            var sta = "Sin Firmar";
            mp();
            $.ajax({
                url: "/instrumentacionDidactica",
                type: "POST",
                headers: { "X-CSRF-TOKEN": _TOKEN },
                dataType: "json",
                data: {
                    docente: f.idDoc.value,
                    periodo: f.periodoi.value,
                    materia: f.mat.value,
                    grupo: f.grupo.value,
                    aula: f.aula.value,
                    plan: f.planEst.value,
                    horaT: f.horasT.value,
                    horaP: f.horasP.value,
                    total: f.totalH.value,
                    obj: f.objetivoG.value,
                    infoUni: phtp,
                    renglonIndicador: renglonIndi,
                    totalesIndicador: totalesIA,
                    observacion: f.observacionesDet.value,
                    estado: 1,
                    status: sta,
                },
            })
                .done(function (json) {
                    console.log("success");
                    msj(json.estado, json.mensaje, 0);
                    nueva_instrumentaciondidactica();
                })
                .fail(function () {
                    console.log("error");
                })
                .always(function () {
                    op();
                    console.log("complete");
                });
        } else {
            msj("Instrumentación Didactica", "Por favor complete el campo", 2);
        }
    } else {
        msj("Instrumentación Didactica", "Por favor complete el campo", 2);
    }
}

//Guardar los datos en la BD
function add_Firmainstrumentaciondidactica(f, id) {
    var r = id;
    var firma = $("#contra").val();
    console.log(r);
    if (firma.length > 0) {
        var sta = "Firmado";
        mp();
        $.ajax({
            url: "/instrumentacionDidactica",
            type: "POST",
            headers: { "X-CSRF-TOKEN": _TOKEN },
            dataType: "json",
            data: {
                ind: r,
                estado: 2,
                status: sta,
                contra: firma,
            },
        })
            .done(function (json) {
                $("#contra").val("");
                ocultarModalFirmar();
                console.log("success");
                if (json.jefe == 1) {
                    msj(json.estado, json.mensaje, 0);
                    listado_asignacion();
                } else {
                    if (json.jefe == "2") {
                        msj(json.estado, json.mensaje, 2);
                        consultar_instrumentaciondidacticaJ(json.cve, "jefe");
                    } else {
                        msj(json.estado, json.mensaje, 0);
                        nueva_instrumentaciondidactica();
                    }
                }
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                op();
                console.log("complete");
            });
    } else {
        msj("Instrumentación Didactica", "Por favor complete el campo", 2);
    }
}
//Firmar Documento docente
function add_FirmainstrumentaciondidacticaDoc(f, id) {
    var r = id;
    var firma = $("#contra").val();
    console.log(r);
    if (firma.length > 0) {
        var sta = "Entregado";
        mp();
        $.ajax({
            url: "/instrumentacionDidactica",
            type: "POST",
            headers: { "X-CSRF-TOKEN": _TOKEN },
            dataType: "json",
            data: {
                ind: r,
                estado: 3,
                status: sta,
                contra: firma,
            },
        })
            .done(function (json) {
                $("#contra").val("");
                ocultarModalFirmar();
                console.log("success");
                if (json.doc == 1) {
                    msj(json.estado, json.mensaje, 0);
                    nueva_instrumentaciondidactica();
                } else {
                    msj(json.estado, json.mensaje, 0);
                    nueva_instrumentaciondidactica();
                }
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                op();
                console.log("complete");
            });
    } else {
        msj("Instrumentación Didactica", "Por favor complete el campo", 2);
    }
}

//Guarda los datos en la BD
function update_instrumentaciondidacticaBorrador(f, id) {
    var uni = $("");
    var renglonIndi = [];
    var phtp = [];
    var totalesIA = [];
    var fechasUni = [];
    //if (!f.checkValidity()) {
    //msj("Instrumentación Didactica", "Por favor complete los campos", 2);
    //} else {
    if (f.planEst.value.length > 0) {
        if (f.objetivoG.value.length > 0) {
            for (var i = 1; i <= f.tamanoU.value; i++) {
                var renglonA = $("#tamRen" + i).val();
                var d = $("#descripcion" + i).val();
                var r = $("#resultados" + i).val();
                var p = $("#p" + i).val();
                var rr = $("#r" + i).val();
                var f1 = $("#fecha_inicio" + i).val();
                var f2 = $("#fecha_fin" + i).val();
                phtp.push({
                    unidad: i,
                    desc: d,
                    res: r,
                    P: p,
                    R: rr,
                    fechaIni: f1,
                    fechaFin: f2,
                });
                for (let j = 1; j <= parseInt(renglonA); j++) {
                    var evi = $("#evidenciaApre_" + i + "_" + j).val();
                    var porcentaje = $("#porcentaje_" + i + "_" + j).val();
                    var ia = $("#indicadorA_" + i + "_" + j).val();
                    if (ia.length == 0) {
                        ia = 0;
                    }
                    var ib = $("#indicadorB_" + i + "_" + j).val();
                    if (ib.length == 0) {
                        ib = 0;
                    }
                    var ic = $("#indicadorC_" + i + "_" + j).val();
                    if (ic.length == 0) {
                        ic = 0;
                    }
                    var idd = $("#indicadorD_" + i + "_" + j).val();
                    if (idd.length == 0) {
                        idd = 0;
                    }
                    var ie = $("#indicadorE_" + i + "_" + j).val();
                    if (ie.length == 0) {
                        ie = 0;
                    }
                    var iif = $("#indicadorF_" + i + "_" + j).val();
                    if (iif.length == 0) {
                        iif = 0;
                    }
                    var eval = $("#evaluacionFor_" + i + "_" + j).val();
                    renglonIndi.push({
                        unidad: i,
                        evidencia: evi,
                        porcentaje: parseInt(porcentaje),
                        inda: parseInt(ia),
                        indb: parseInt(ib),
                        indc: parseInt(ic),
                        indd: parseInt(idd),
                        inde: parseInt(ie),
                        indf: parseInt(iif),
                        evaluacionfor: eval,
                    });
                }
                var ta = $("#sumatA_" + i + "_" + i).val();
                var tb = $("#sumatB_" + i + "_" + i).val();
                var tc = $("#sumatC_" + i + "_" + i).val();
                var td = $("#sumatD_" + i + "_" + i).val();
                var te = $("#sumatE_" + i + "_" + i).val();
                var tif = $("#sumatF_" + i + "_" + i).val();
                totalesIA.push({
                    unidad: i,
                    sumaa: ta,
                    sumab: tb,
                    sumac: tc,
                    sumad: td,
                    sumae: te,
                    sumaf: tif,
                });
            }
            phtp = JSON.stringify(phtp);
            renglonIndi = JSON.stringify(renglonIndi);
            totalesIA = JSON.stringify(totalesIA);
            var sta = "Borrador";
            mp();
            $.ajax({
                url: "/instrumentacionDidactica/" + id,
                type: "PATCH",
                headers: { "X-CSRF-TOKEN": _TOKEN },
                dataType: "json",
                data: {
                    docente: f.idDoc.value,
                    periodo: f.periodoi.value,
                    materia: f.mat.value,
                    grupo: f.grupo.value,
                    aula: f.aula.value,
                    plan: f.planEst.value,
                    horaT: f.horasT.value,
                    horaP: f.horasP.value,
                    total: f.totalH.value,
                    obj: f.objetivoG.value,
                    infoUni: phtp,
                    renglonIndicador: renglonIndi,
                    totalesIndicador: totalesIA,
                    observacion: f.observacionesDet.value,
                    estado: 1,
                    status: sta,
                },
            })
                .done(function (json) {
                    console.log("success");
                    msj(json.estado, json.mensaje, 0);
                    nueva_instrumentaciondidactica();
                })
                .fail(function () {
                    console.log("error");
                })
                .always(function () {
                    op();
                    console.log("complete");
                });
        } else {
            msj("Instrumentación Didactica", "Por favor complete el campo", 2);
        }
    } else {
        msj("Instrumentación Didactica", "Por favor complete el campo", 2);
    }
    //}
}

//Guarda los datos en la BD
function update_instrumentaciondidacticaEntregada(f, id) {
    var uni = $("");
    var renglonIndi = [];
    var phtp = [];
    var totalesIA = [];
    var fechasUni = [];
    if (f.planEst.value.length > 0) {
        if (f.objetivoG.value.length > 0) {
            for (var i = 1; i <= f.tamanoU.value; i++) {
                var renglonA = $("#tamRen" + i).val();
                var d = $("#descripcion" + i).val();
                var r = $("#resultados" + i).val();
                var p = $("#p" + i).val();
                var rr = $("#r" + i).val();
                var f1 = $("#fecha_inicio" + i).val();
                var f2 = $("#fecha_fin" + i).val();
                phtp.push({
                    unidad: i,
                    desc: d,
                    res: r,
                    P: p,
                    R: rr,
                    fechaIni: f1,
                    fechaFin: f2,
                });
                for (let j = 1; j <= parseInt(renglonA); j++) {
                    var evi = $("#evidenciaApre_" + i + "_" + j).val();
                    var porcentaje = $("#porcentaje_" + i + "_" + j).val();
                    var ia = $("#indicadorA_" + i + "_" + j).val();
                    if (ia.length == 0) {
                        ia = 0;
                    }
                    var ib = $("#indicadorB_" + i + "_" + j).val();
                    if (ib.length == 0) {
                        ib = 0;
                    }
                    var ic = $("#indicadorC_" + i + "_" + j).val();
                    if (ic.length == 0) {
                        ic = 0;
                    }
                    var idd = $("#indicadorD_" + i + "_" + j).val();
                    if (idd.length == 0) {
                        idd = 0;
                    }
                    var ie = $("#indicadorE_" + i + "_" + j).val();
                    if (ie.length == 0) {
                        ie = 0;
                    }
                    var iif = $("#indicadorF_" + i + "_" + j).val();
                    if (iif.length == 0) {
                        iif = 0;
                    }
                    var eval = $("#evaluacionFor_" + i + "_" + j).val();
                    renglonIndi.push({
                        unidad: i,
                        evidencia: evi,
                        porcentaje: parseInt(porcentaje),
                        inda: parseInt(ia),
                        indb: parseInt(ib),
                        indc: parseInt(ic),
                        indd: parseInt(idd),
                        inde: parseInt(ie),
                        indf: parseInt(iif),
                        evaluacionfor: eval,
                    });
                }
                var ta = $("#sumatA_" + i + "_" + i).val();
                var tb = $("#sumatB_" + i + "_" + i).val();
                var tc = $("#sumatC_" + i + "_" + i).val();
                var td = $("#sumatD_" + i + "_" + i).val();
                var te = $("#sumatE_" + i + "_" + i).val();
                var tif = $("#sumatF_" + i + "_" + i).val();
                totalesIA.push({
                    unidad: i,
                    sumaa: ta,
                    sumab: tb,
                    sumac: tc,
                    sumad: td,
                    sumae: te,
                    sumaf: tif,
                });
            }
            phtp = JSON.stringify(phtp);
            renglonIndi = JSON.stringify(renglonIndi);
            totalesIA = JSON.stringify(totalesIA);
            var sta = "Sin Firmar";
            mp();
            $.ajax({
                url: "/instrumentacionDidactica/" + id,
                type: "PATCH",
                headers: { "X-CSRF-TOKEN": _TOKEN },
                dataType: "json",
                data: {
                    docente: f.idDoc.value,
                    periodo: f.periodoi.value,
                    materia: f.mat.value,
                    grupo: f.grupo.value,
                    aula: f.aula.value,
                    plan: f.planEst.value,
                    horaT: f.horasT.value,
                    horaP: f.horasP.value,
                    total: f.totalH.value,
                    obj: f.objetivoG.value,
                    infoUni: phtp,
                    renglonIndicador: renglonIndi,
                    totalesIndicador: totalesIA,
                    observacion: f.observacionesDet.value,
                    estado: 1,
                    status: sta,
                },
            })
                .done(function (json) {
                    console.log("success");
                    msj(json.estado, json.mensaje, 0);
                    nueva_instrumentaciondidactica();
                })
                .fail(function () {
                    console.log("error");
                })
                .always(function () {
                    op();
                    console.log("complete");
                });
        } else {
            msj("Instrumentación Didactica", "Por favor complete el campo", 2);
        }
    } else {
        msj("Instrumentación Didactica", "Por favor complete el campo", 2);
    }
}

//Actualiza los datos en la BD
function update_aula(f, id) {
    if (!f.checkValidity()) {
        msj("Aula", "Por favor complete los campos", 2);
    } else {
        if (f.id.value.length > 0) {
            $("#a_id").css("display", "none");
            if (f.ubicacion.value.length > 0) {
                $("#a_ubicacion").css("display", "none");
                if (f.capacidad.value.length > 0) {
                    $("#a_capacidad").css("display", "none");
                    if (is_number(f.capacidad.value)) {
                        if (f.cruce.value.length > 0) {
                            $("#a_cruce").css("display", "none");
                            if (f.tipo.value.length > 0) {
                                $("#a_tipo").css("display", "none");
                                if (f.observaciones.value.length > 0) {
                                    $("#a_observaciones").css(
                                        "display",
                                        "none"
                                    );
                                    $.ajax({
                                        url: "/aula/" + id,
                                        type: "PATCH",
                                        headers: { "X-CSRF-TOKEN": _TOKEN },
                                        dataType: "json",
                                        data: {
                                            id: f.id.value,
                                            ubicacion: f.ubicacion.value,
                                            capacidad: f.capacidad.value,
                                            cruce: f.cruce.value,
                                            tipo: f.tipo.value,
                                            observaciones:
                                                f.observaciones.value,
                                        },
                                    })
                                        .done(function (json) {
                                            console.log("success");
                                            msj(json.estado, json.mensaje, 0);
                                            listado_aula();
                                        })
                                        .fail(function () {
                                            console.log("error");
                                        })
                                        .always(function () {
                                            console.log("complete");
                                        });
                                } else {
                                    f.observaciones.focus();
                                    if (
                                        $("#a_observaciones").html().trim() ==
                                        ""
                                    ) {
                                        $("#a_observaciones").css(
                                            "display",
                                            "block"
                                        );
                                        $("#a_observaciones").append(
                                            "Favor de escribir la ubicación"
                                        );
                                    }
                                }
                            } else {
                                f.tipo.focus();
                                if ($("#a_tipo").html().trim() == "") {
                                    $("#a_tipo").css("display", "block");
                                    $("#a_tipo").append(
                                        "Favor de escribir de que tipo es la aula"
                                    );
                                }
                            }
                        } else {
                            f.cruce.focus();
                            if ($("#a_cruce").html().trim() == "") {
                                $("#a_cruce").css("display", "block");
                                $("#a_cruce").append(
                                    "Favor de seleccionar el cruce"
                                );
                            }
                        }
                    } else {
                        document.getElementById("a_capacidad").innerHTML = "";
                        document.getElementById("capacidad").value = "";
                        f.capacidad.focus();
                        if ($("#a_capacidad").html().trim() == "") {
                            $("#a_capacidad").css("display", "block");
                            $("#a_capacidad").append(
                                "La capacidad del aula debe ser representada en numeros"
                            );
                        }
                    }
                } else {
                    f.capacidad.focus();
                    if ($("#a_capacidad").html().trim() == "") {
                        $("#a_capacidad").css("display", "block");
                        $("#a_capacidad").append(
                            "Favor de escribir la capacidad del aula"
                        );
                    }
                }
            } else {
                f.ubicacion.focus();
                if ($("#a_ubicacion").html().trim() == "") {
                    $("#a_ubicacion").css("display", "block");
                    $("#a_ubicacion").append("Favor de escribir la ubicación");
                }
            }
        } else {
            f.id.focus();
            if ($("#a_id").html().trim() == "") {
                $("#a_id").css("display", "block");
                $("#a_id").append("Favor de escribir el id del aula");
            }
        }
    }
}

//Agregar Extender Seguimiento
function add_extenderSeguimiento(cve, seguimiento) {
    r = cve;
    var firma = $("#contra").val();
    console.log(r);
    var contra = $("#contra").val();
    if (contra.length > 0) {
        $.ajax({
            url: "/extenderSeguimiento",
            type: "POST",
            headers: { "X-CSRF-TOKEN": _TOKEN },
            dataType: "json",
            data: {
                cveasi: r,
                status: 1,
                seg: seguimiento,
                contra: firma,
            },
        })
            .done(function (json) {
                $("#contra").val("");
                ocultarModalExtenderSeguimiento();
                console.log("success");
                if (json.cve == 1) {
                    msj(json.estado, json.mensaje, 0);
                    listado_asignacion();
                } else {
                    msj(json.estado, json.mensaje, 2);
                    listado_asignacion();
                }
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                console.log("complete");
            });
    } else {
        contra.focus();
        msj("Ingrese una contraseña", "", 2);
    }
}

// ----------------------------Proyecto Individual---------------------------
//Mostrar el formulario para registrar un nuevo Proyecto Individual
function nueva_proyectoindivudual() {
    mp();
    $.ajax({
        url: "/proyectoindivudual/create",
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
            op();
            console.log("complete");
        });
}

//Mostrar el listado de los Proyecto Individual
function listado_proyectoindivudual() {
    mp();
    $.ajax({
        url: "/proyectoindivudual/",
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
            op();
            console.log("complete");
        });
}

//Mostrar la consulta de un Proyecto Individual
function consultar_proyectoindivudual(id) {
    mp();
    $.ajax({
        url: "/proyectoindivudual/" + id,
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
            op();
            console.log("complete");
        });
}

//Mostrar la actualización de un Proyecto Individual
function edit_proyectoindivudual(id) {
    mp();
    $.ajax({
        url: "/proyectoindivudual/" + id + "/edit",
        type: "GET",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "html",
    })
        .done(function (html) {
            console.log("success");
            $("#contenedor").html(html);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            op();
            console.log("complete");
        });
}

//Add a la BD un  Proyecto Individual
function add_proyectoindivudual(f) {
    //if (!f.checkValidity()) {
    //msj("Proyecto Individual", "Por favor complete los campos", 2);
    //} else {
    $.ajax({
        url: "/proyectoindivudual",
        type: "POST",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "json",
        data: {
            nombre: f.nombre.value,
            periodo: f.periodo.value,
            objetivo: f.objetivo.value,
            descripcion: f.descripcion.value,
            metas: f.metas.value,
            actividades: f.actividades.value,
            conclusiones: f.conclusion.value,
        },
        processData: false,
        contentType: false,
    })
        .done(function (json) {
            console.log("success");
            msj(json.estado, json.mensaje, 0);
            listado_proyectoindivudual();
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            op();
            console.log("complete");
        });
    //}
}

// ----------------------------Evaluacion Diagnostica---------------------------
//Mostrar el formulario para registrar un nuevo Evaluacion Diagnostica
function nueva_evaluaciondiagnostico(mate, doc) {
    mp();
    $.ajax({
        url: "/evaluaciondiagnostico/create",
        type: "GET",
        dataType: "html",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        data: {
            materia: mate,
            docente: doc,
        },
    })
        .done(function (vista) {
            console.log("success");
            $("#contenedor").html(vista);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            op();
            console.log("complete");
        });
}

function AgregarTemario() {
    $.ajax({
        url: "/mostrarTemario/",
        type: "GET",
        dataType: "html",
    })
        .done(function (vista) {
            console.log("success");
            $("#colocarTemario").html(vista);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            op();
            console.log("complete");
        });
}

//Mostrar el listado de los Evaluacion Diagnostica
function listado_evaluaciondiagnostico() {
    mp();
    $.ajax({
        url: "/evaluaciondiagnostico/",
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
            op();
            console.log("complete");
        });
}

//Mostrar la consulta de un Reporte Final de Evaluacion Diagnostica
function consultar_evaluaciondiagnostico(id) {
    mp();
    $.ajax({
        url: "/evaluaciondiagnostico/" + id,
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
            op();
            console.log("complete");
        });
}

//Mostrar la consulta de la Evaluacion Diagnostica
function consultar_evaluaciondiagnosticoJ(id, jefe) {
    mp();
    res = 0;
    if (jefe === "jefe") {
        res = 1;
    }
    console.log(res);
    $.ajax({
        url: "/evaluaciondiagnostico/" + id,
        type: "GET",
        dataType: "html",
        data: {
            tipo: res,
        },
    })
        .done(function (vista) {
            console.log("success");
            $("#contenedor").html(vista);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            op();
            console.log("complete");
        });
}

//Mostrar la consulta de la Evaluacion Diagnostica
function consultar_evaluaciondiagnostico(id) {
    mp();
    $.ajax({
        url: "/evaluaciondiagnostico/" + id,
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
            op();
            console.log("complete");
        });
}

//Mostrar el modificar de un Reporte Final de Evaluacion Diagnostica
function edit_evaluaciondiagnostico(id) {
    mp();
    $.ajax({
        url: "/evaluaciondiagnostico/" + id + "/edit",
        type: "GET",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "html",
    })
        .done(function (html) {
            console.log("success");
            $("#contenedor").html(html);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            op();
            console.log("complete");
        });
}

//Resultado de la evaluacion General (evaluacion diagnostica)
function resultado_evaluacion_general() {
    var promedio = parseInt($("#resultados").val());
    var res = $("#evaluacion");
    var resultado = ""; //resultado
    if (promedio != "" && !isNaN(promedio)) {
        if (promedio >= 95 && promedio <= 100) {
            resultado = "Excelente";
        } else if (promedio >= 85 && promedio <= 94) {
            resultado = "Notable";
        } else if (promedio >= 75 && promedio <= 84) {
            resultado = "Bueno";
        } else if (promedio >= 70 && promedio <= 74) {
            resultado = "Suficiente";
        } else if (promedio >= 0 && promedio <= 69) {
            resultado = "Insuficiente";
        } else {
            msj(
                "Evaluacion Diagnostica",
                "El promedio General no es correcto. Favor de verificarlo",
                2
            );
        }
    }

    res.val(resultado);
}

//Guarda los datos en la BD
function add_evaluaciondiagnosticoBorrador(f) {
    if (!f.checkValidity()) {
        msj("Evaluacion Diagnóstico", "Por favor complete los campos", 2);
    } else {
        if (f.fecha_eva.value.length > 0) {
            if (f.grupo.value.length > 0) {
                if (f.materia.value.length > 0) {
                    if (f.resultados.value.length > 0) {
                        if (f.evaluacion.value.length > 0) {
                            if (f.recomiendo.value.length > 0) {
                                var sta = "Borrador";
                                $.ajax({
                                    url: "/evaluaciondiagnostico",
                                    type: "POST",
                                    headers: { "X-CSRF-TOKEN": _TOKEN },
                                    dataType: "json",
                                    data: {
                                        fecha: f.fecha_eva.value,
                                        grupo: f.grupo.value,
                                        materia: f.mat.value,
                                        evaluacion: f.resultados.value,
                                        evaluaciont: f.evaluacion.value,
                                        recomiendo: f.recomiendo.value,
                                        estado: 0,
                                        status: sta,
                                        docente: f.docente.value,
                                    },
                                })
                                    .done(function (json) {
                                        console.log("success");
                                        msj(json.estado, json.mensaje, 0);
                                        nueva_instrumentaciondidactica();
                                    })
                                    .fail(function () {
                                        console.log("error");
                                    })
                                    .always(function () {
                                        console.log("complete");
                                    });
                            } else {
                                f.recomiendo.focus();
                                msj(
                                    "Evaluacion Diagnóstico",
                                    "Por favor de llenar la caja",
                                    2
                                );
                            }
                        } else {
                            f.evaluacion.focus();
                            msj(
                                "Evaluacion Diagnóstico",
                                "Por favor de llenar la caja",
                                2
                            );
                        }
                    } else {
                        f.resultados.focus();
                        msj(
                            "Evaluacion Diagnóstico",
                            "Por favor de llenar la caja",
                            2
                        );
                    }
                } else {
                    f.materia.focus();
                    msj(
                        "Evaluacion Diagnóstico",
                        "Por favor de llenar la caja",
                        2
                    );
                }
            } else {
                f.grupo.focus();
                msj("Evaluacion Diagnóstico", "Por favor de llenar la caja", 2);
            }
        } else {
            f.fecha.focus();
            msj("Evaluacion Diagnóstico", "Por favor de llenar la caja", 2);
        }
    }
}

//Guarda los datos en la BD
function add_observaciones(f, ed, id) {
    if (f.observaciones.value.length > 0) {
        var sta = "Con Observaciones";
        $.ajax({
            url: "/observacionesEd",
            type: "POST",
            headers: { "X-CSRF-TOKEN": _TOKEN },
            dataType: "json",
            data: {
                obser: f.observaciones.value,
                estado: 0,
                evad: ed,
                status: sta,
            },
        })
            .done(function (json) {
                ocultarModalObservacion();
                console.log("success");
                msj(json.estado, json.mensaje, 0);
                listado_asignacion();
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                console.log("complete");
            });
    } else {
        f.observaciones.focus();
        msj("Favor de llenar el campo", "Por favor de llenar la caja", 2);
    }
}

//Guarda los datos en la BD
function add_evaluaciondiagnosticoEntregada(f) {
    if (!f.checkValidity()) {
        msj("Evaluacion Diagnóstico", "Por favor complete los campos", 2);
    } else {
        if (f.fecha_eva.value.length > 0) {
            if (f.grupo.value.length > 0) {
                if (f.materia.value.length > 0) {
                    if (f.resultados.value.length > 0) {
                        if (f.evaluacion.value.length > 0) {
                            if (f.recomiendo.value.length > 0) {
                                var sta = "Sin Firmar";
                                $.ajax({
                                    url: "/evaluaciondiagnostico",
                                    type: "POST",
                                    headers: { "X-CSRF-TOKEN": _TOKEN },
                                    dataType: "json",
                                    data: {
                                        fecha: f.fecha_eva.value,
                                        grupo: f.grupo.value,
                                        materia: f.mat.value,
                                        evaluacion: f.resultados.value,
                                        evaluaciont: f.evaluacion.value,
                                        recomiendo: f.recomiendo.value,
                                        estado: 1,
                                        status: sta,
                                        docente: f.docente.value,
                                    },
                                })
                                    .done(function (json) {
                                        console.log("success");
                                        msj(json.estado, json.mensaje, 0);
                                        nueva_instrumentaciondidactica();
                                    })
                                    .fail(function () {
                                        console.log("error");
                                    })
                                    .always(function () {
                                        console.log("complete");
                                    });
                            } else {
                                f.recomiendo.focus();
                                msj(
                                    "Evaluacion Diagnóstico",
                                    "Por favor de llenar la caja",
                                    2
                                );
                            }
                        } else {
                            f.evaluacion.focus();
                            msj(
                                "Evaluacion Diagnóstico",
                                "Por favor de llenar la caja",
                                2
                            );
                        }
                    } else {
                        f.resultados.focus();
                        msj(
                            "Evaluacion Diagnóstico",
                            "Por favor de llenar la caja",
                            2
                        );
                    }
                } else {
                    f.materia.focus();
                    msj(
                        "Evaluacion Diagnóstico",
                        "Por favor de llenar la caja",
                        2
                    );
                }
            } else {
                f.grupo.focus();
                msj("Evaluacion Diagnóstico", "Por favor de llenar la caja", 2);
            }
        } else {
            f.fecha.focus();
            msj("Evaluacion Diagnóstico", "Por favor de llenar la caja", 2);
        }
    }
}

//Guarda los datos en la BD
function add_FirmarEvaluaciondiagnostico(f, id) {
    r = id;
    var firma = $("#contra").val();
    console.log(r);
    var firma = $("#contra").val();
    if (contra.length > 0) {
        var sta = "Firmado";
        $.ajax({
            url: "/evaluaciondiagnostico",
            type: "POST",
            headers: { "X-CSRF-TOKEN": _TOKEN },
            dataType: "json",
            data: {
                ed: r,
                estado: 2,
                status: sta,
                contra: firma,
            },
        })
            .done(function (json) {
                $("#contra").val("");
                ocultarModalFirmar();
                console.log("success");
                if (json.jefe == 1) {
                    msj(json.estado, json.mensaje, 0);
                    listado_asignacion();
                } else {
                    if (json.jefe == "2") {
                        msj(json.estado, json.mensaje, 2);
                        consultar_evaluaciondiagnosticoJ(json.cve, "jefe");
                    } else {
                        msj(json.estado, json.mensaje, 0);
                        nueva_instrumentaciondidactica();
                    }
                }
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                console.log("complete");
            });
    } else {
        f.recomiendo.focus();
        msj("Evaluacion Diagnóstico", "Por favor de llenar la caja", 2);
    }
}

//Guarda los datos en la BD
function add_FirmarEvaluaciondiagnosticoDoc(f, id) {
    r = id;
    var firma = $("#contra").val();
    console.log(r);
    var firma = $("#contra").val();
    if (contra.length > 0) {
        var sta = "Entregado";
        $.ajax({
            url: "/evaluaciondiagnostico",
            type: "POST",
            headers: { "X-CSRF-TOKEN": _TOKEN },
            dataType: "json",
            data: {
                ed: r,
                estado: 3,
                status: sta,
                contra: firma,
            },
        })
            .done(function (json) {
                $("#contra").val("");
                ocultarModalFirmar();
                console.log("success");
                if (json.jefe == 1) {
                    msj(json.estado, json.mensaje, 0);
                    listado_asignacion();
                } else {
                    if (json.jefe == "2") {
                        msj(json.estado, json.mensaje, 2);
                        consultar_evaluaciondiagnosticoJ(json.cve, "jefe");
                    } else {
                        msj(json.estado, json.mensaje, 0);
                        nueva_instrumentaciondidactica();
                    }
                }
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                console.log("complete");
            });
    } else {
        f.recomiendo.focus();
        msj("Evaluacion Diagnóstico", "Por favor de llenar la caja", 2);
    }
}

//Actualiza los datos en la BD
function update_evaluaciondiagnosticoBorrador(f, id) {
    if (!f.checkValidity()) {
        msj("Evaluacion Diagnóstico", "Por favor complete los campos", 2);
    } else {
        if (f.fecha_eva.value.length > 0) {
            if (f.grupo.value.length > 0) {
                if (f.materia.value.length > 0) {
                    if (f.resultados.value.length > 0) {
                        if (f.evaluacion.value.length > 0) {
                            if (f.recomiendo.value.length > 0) {
                                var sta = "Borrador";
                                $.ajax({
                                    url: "/evaluaciondiagnostico/" + id,
                                    type: "PATCH",
                                    headers: { "X-CSRF-TOKEN": _TOKEN },
                                    dataType: "json",
                                    data: {
                                        fecha: f.fecha_eva.value,
                                        grupo: f.grupo.value,
                                        materia: f.mat.value,
                                        evaluacion: f.resultados.value,
                                        evaluaciont: f.evaluacion.value,
                                        recomiendo: f.recomiendo.value,
                                        estado: 0,
                                        status: sta,
                                        docente: f.docente.value,
                                    },
                                })
                                    .done(function (json) {
                                        console.log("success");
                                        msj(json.estado, json.mensaje, 0);
                                        nueva_instrumentaciondidactica();
                                    })
                                    .fail(function () {
                                        console.log("error");
                                    })
                                    .always(function () {
                                        console.log("complete");
                                    });
                            } else {
                                f.recomiendo.focus();
                                msj(
                                    "Evaluacion Diagnóstico",
                                    "Por favor de llenar la caja",
                                    2
                                );
                            }
                        } else {
                            f.evaluacion.focus();
                            msj(
                                "Evaluacion Diagnóstico",
                                "Por favor de llenar la caja",
                                2
                            );
                        }
                    } else {
                        f.resultados.focus();
                        msj(
                            "Evaluacion Diagnóstico",
                            "Por favor de llenar la caja",
                            2
                        );
                    }
                } else {
                    f.materia.focus();
                    msj(
                        "Evaluacion Diagnóstico",
                        "Por favor de llenar la caja",
                        2
                    );
                }
            } else {
                f.grupo.focus();
                msj("Evaluacion Diagnóstico", "Por favor de llenar la caja", 2);
            }
        } else {
            f.fecha.focus();
            msj("Evaluacion Diagnóstico", "Por favor de llenar la caja", 2);
        }
    }
}

//Actualiza los datos en la BD
function update_evaluaciondiagnosticoEntregada(f, id) {
    if (!f.checkValidity()) {
        msj("Evaluacion Diagnóstico", "Por favor complete los campos", 2);
    } else {
        if (f.fecha_eva.value.length > 0) {
            if (f.grupo.value.length > 0) {
                if (f.materia.value.length > 0) {
                    if (f.resultados.value.length > 0) {
                        if (f.evaluacion.value.length > 0) {
                            if (f.recomiendo.value.length > 0) {
                                var sta = "Sin Firmar";
                                $.ajax({
                                    url: "/evaluaciondiagnostico/" + id,
                                    type: "PATCH",
                                    headers: { "X-CSRF-TOKEN": _TOKEN },
                                    dataType: "json",
                                    data: {
                                        fecha: f.fecha_eva.value,
                                        grupo: f.grupo.value,
                                        materia: f.mat.value,
                                        evaluacion: f.resultados.value,
                                        evaluaciont: f.evaluacion.value,
                                        recomiendo: f.recomiendo.value,
                                        estado: 1,
                                        status: sta,
                                        docente: f.docente.value,
                                    },
                                })
                                    .done(function (json) {
                                        console.log("success");
                                        msj(json.estado, json.mensaje, 0);
                                        nueva_instrumentaciondidactica();
                                    })
                                    .fail(function () {
                                        console.log("error");
                                    })
                                    .always(function () {
                                        console.log("complete");
                                    });
                            } else {
                                f.recomiendo.focus();
                                msj(
                                    "Evaluacion Diagnóstico",
                                    "Por favor de llenar la caja",
                                    2
                                );
                            }
                        } else {
                            f.evaluacion.focus();
                            msj(
                                "Evaluacion Diagnóstico",
                                "Por favor de llenar la caja",
                                2
                            );
                        }
                    } else {
                        f.resultados.focus();
                        msj(
                            "Evaluacion Diagnóstico",
                            "Por favor de llenar la caja",
                            2
                        );
                    }
                } else {
                    f.materia.focus();
                    msj(
                        "Evaluacion Diagnóstico",
                        "Por favor de llenar la caja",
                        2
                    );
                }
            } else {
                f.grupo.focus();
                msj("Evaluacion Diagnóstico", "Por favor de llenar la caja", 2);
            }
        } else {
            f.fecha.focus();
            msj("Evaluacion Diagnóstico", "Por favor de llenar la caja", 2);
        }
    }
}

// ----------------------------Reporte Final de Evaluacion y Acreditacion---------------------------
//Mostrar el formulario para registrar un nuevo Reporte Final de Evaluacion y Acreditacion
function nueva_evaluacionacreditacion(doc) {
    mp();
    $.ajax({
        url: "/evaluacionyacreditacion/create",
        type: "GET",
        dataType: "html",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        data: {
            docente: doc,
        },
    })
        .done(function (vista) {
            console.log("success");
            $("#contenedor").html(vista);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            op();
            console.log("complete");
        });
}

//Mostrar el listado de los Reporte Final de Evaluacion y Acreditacion
function listado_evaluacionacreditacion() {
    mp();
    $.ajax({
        url: "/evaluacionyacreditacion/",
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
            op();
            console.log("complete");
        });
}

//Mostrar la consulta de un Reporte Final de Evaluacion y Acreditación
function consultar_evaluacionacreditacion(id) {
    mp();
    $.ajax({
        url: "/evaluacionyacreditacion/" + id,
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
            op();
            console.log("complete");
        });
}

//Mostrar la consulta de un Reporte Final de Evaluacion y Acreditación
function consultar_evaluacionacreditacionJ(id, jefe) {
    mp();
    res = 0;
    if (jefe === "jefe") {
        res = 1;
    }
    $.ajax({
        url: "/evaluacionyacreditacion/" + id,
        type: "GET",
        dataType: "html",
        data: {
            tipo: res,
        },
    })
        .done(function (vista) {
            console.log("success");
            $("#contenedor").html(vista);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            op();
            console.log("complete");
        });
}

//Mostrar la consulta de un Reporte Final de Evaluacion y Acreditación
function edit_evaluacionacreditacion(id) {
    mp();
    $.ajax({
        url: "/evaluacionyacreditacion/" + id + "/edit",
        type: "GET",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "html",
    })
        .done(function (html) {
            console.log("success");
            $("#contenedor").html(html);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            op();
            console.log("complete");
        });
}

//Suma del total de estudiantes en el reporte final de evaluacion y acreditacion (A)
function total_est() {
    var sum = $(".a");
    var totalF = $("#sumaAlu");
    var to = 0;
    var elemento = 0;
    $(sum).each(function (index, element) {
        //console.log(element.value);
        elemento = parseInt(element.value);
        if (elemento != "" && !isNaN(elemento)) {
            to += elemento;
        }
    });
    total_ag_fila();
    totalF.val(to);
    console.log(to);
}

//Suma del numero de estudiantes acreditados en 1a en el reporte final de evaluacion y acreditacion (B1a)
function total_noacreUA() {
    var sum = $(".bpa");
    var totalF = $("#sumab_ua");
    var to = 0;
    var t = 0;
    var elemento = 0;
    $(sum).each(function (index, element) {
        console.log(element.value);
        elemento = parseInt(element.value);
        if (elemento != "" && !isNaN(elemento)) {
            to += elemento;
        }
    });
    totalF.val(to);
    total_ag_fila();
}

//Suma del numero de estudiantes acreditados en 2a en el reporte final de evaluacion y acreditacion (B2a)
function total_noacreSA() {
    var sum = $(".bsa");
    var totalF = $("#sumab_sa");
    var to = 0;
    var t = 0;
    var elemento = 0;
    $(sum).each(function (index, element) {
        console.log(element.value);
        elemento = parseInt(element.value);
        if (elemento != "" && !isNaN(elemento)) {
            to += elemento;
        }
    });
    totalF.val(to);
    total_ag_fila();
}

//Suma del numero de estudiantes acreditados en Esp en el reporte final de evaluacion y acreditacion (esp)
function total_noacreEspA() {
    var sum = $(".besp");
    var totalF = $("#sumab_tesp");
    var to = 0;
    var t = 0;
    var elemento = 0;
    $(sum).each(function (index, element) {
        console.log(element.value);
        elemento = parseInt(element.value);
        if (elemento != "" && !isNaN(elemento)) {
            to += elemento;
        }
    });
    totalF.val(to);

    total_ag_fila();
}

//Suma del porcentaje de estudiantes acreditados en el reporte final de evaluacion y acreditacion (C)
function total_porcentajeacre() {
    var sum = $(".c");
    var totalF = $("#sumaAcre");
    var to = 0;
    var t = 0;
    var elemento = 0;
    $(sum).each(function (index, element) {
        elemento = parseInt(element.value);
        if (elemento != "" && !isNaN(elemento)) {
            to += elemento;
        }
    });
    //console.log("Yo tengo en el valor e" + to);
    totalF.val(to);
    //total_ag_fila();
}

//Suma del numero de estudiantes no acreditados en el reporte final de evaluacion y acreditacion (D)
function total_noacre() {
    var sum = $(".d");
    var totalF = $("#sumanoAcre");
    var to = 0;
    var t = 0;
    var elemento = 0;
    $(sum).each(function (index, element) {
        console.log(element.value);
        elemento = parseInt(element.value);
        if (elemento != "" && !isNaN(elemento)) {
            to += elemento;
        }
    });
    totalF.val(to);
    porcentaje_noEstacre();
    total_ag_fila();
}

//Suma del Porcentaje estudiantes no acreditados en el reporte final de evaluacion y acreditacion (E)
function total_porcentajedeacre() {
    var sum = $(".e");
    var totalF = $("#sumanoAcrePorcentaje");
    var to = 0;
    var t = 0;
    var elemento = 0;
    $(sum).each(function (index, element) {
        console.log(element.value);
        elemento = parseInt(element.value);
        if (elemento != "" && !isNaN(elemento)) {
            to += elemento;
            console.log(to);
        }
    });
    totalF.val(to);
    //total_ag_fila();
}

//Suma del numero de estudiantes desertados en el reporte final de evaluacion y acreditacion (F)
function total_desertores() {
    var sum = $(".f");
    var totalF = $("#sumadesertores");
    var to = 0;
    var t = 0;
    var elemento = 0;
    $(sum).each(function (index, element) {
        console.log(element.value);
        elemento = parseInt(element.value);
        if (elemento != "" && !isNaN(elemento)) {
            to += elemento;
        }
    });

    totalF.val(to);
    //total_ag_fila();
    porcentaje_Estdesert();
}

//Suma del Porcentaje estudiantes no acreditados en el reporte final de evaluacion y acreditacion (G)
function total_porcentajenoacre() {
    var sum = $(".g");
    var totalF = $("#sumadeserPorcentaje");
    var to = 0;
    var t = 0;
    var elemento = 0;
    $(sum).each(function (index, element) {
        console.log(element.value);
        elemento = parseInt(element.value);
        if (elemento != "" && !isNaN(elemento)) {
            to += elemento;
        }
    });
    totalF.val(to);

    total_porcentajeacre();
    //total_ag_fila();
}

//Suma de la (A, B, C, D, E, F y G)
function total_ag_fila() {
    var row_evidenciasA = $(".fila");
    var fila;
    var bua, bda, besp, d, f;
    var ain = 0,
        bpin = 0,
        bsin = 0,
        btin = 0,
        din = 0,
        fin = 0,
        t = 0,
        ttp = 0;
    $.each(row_evidenciasA, function (index, elemento) {
        fila = elemento.id;
        fila = fila.substr(-1);
        var total_porcentaje = $("#a" + fila);
        total_porcentaje = total_porcentaje.val();

        if (!get_vacio(total_porcentaje)) {
            ttp = parseInt(total_porcentaje);
            //console.log(ttp);
            bua = $("#bpa" + fila);
            bda = $("#bsa" + fila);
            besp = $("#besp" + fila);
            d = $("#d" + fila);
            f = $("#f" + fila);
            bua = bua.val();
            bda = bda.val();
            besp = besp.val();
            d = d.val();
            f = f.val();
            bpin = parseInt(bua);
            bsin = parseInt(bda);
            btin = parseInt(besp);
            din = parseInt(d);
            fin = parseInt(f);
            t =
                get_Entero(bpin) +
                get_Entero(bsin) +
                get_Entero(btin) +
                get_Entero(din) +
                get_Entero(fin);
            if (t == ttp) {
                if (get_vacio(bpin)) {
                    if (bua == "") {
                        bua = 0;
                        $("#bpa" + fila).val("0");
                    }
                    $("#bpa" + fila).prop("disabled", true);
                }
                if (get_vacio(bsin)) {
                    if (bda == "") {
                        bda = 0;
                        $("#bsa" + fila).val("0");
                    }
                    $("#bsa" + fila).prop("disabled", true);
                }
                if (get_vacio(btin)) {
                    if (besp == "") {
                        besp = 0;
                        $("#besp" + fila).val("0");
                    }
                    $("#besp" + fila).prop("disabled", true);
                }
                if (get_vacio(din)) {
                    if (d == "") {
                        d = 0;
                        $("#d" + fila).val("0");
                        porcentaje_noEstacre();
                    }
                    $("#d" + fila).prop("disabled", true);
                }
                if (get_vacio(fin)) {
                    if (f == "") {
                        f = 0;
                        $("#f" + fila).val("0");
                        total_desertores();
                        porcentaje_Estdesert();
                        total_porcentajenoacre();
                    }
                    $("#f" + fila).prop("disabled", true);
                }
                porcentaje_Estacre();
                porcentaje_noEstacre();
                porcentaje_Estdesert();
            } else if (t < ttp) {
                $("#bpa" + fila).prop("disabled", false);
                $("#bsa" + fila).prop("disabled", false);
                $("#besp" + fila).prop("disabled", false);
                $("#d" + fila).prop("disabled", false);
                $("#f" + fila).prop("disabled", false);
            } else {
                msj(
                    "Indicador de alcance",
                    "Excedio los valores del indicador de alcance",
                    2
                );
            }
        } else {
            //total_noacre();
            $("#bpa" + fila).prop("disabled", true);
            $("#bsa" + fila).prop("disabled", true);
            $("#besp" + fila).prop("disabled", true);
            $("#d" + fila).prop("disabled", true);
            $("#f" + fila).prop("disabled", true);
        }
    });
}

//Porcentaje de estudiantes acreditados en el reporte final de evaluacion y acreditacion
function porcentaje_Estacre() {
    var filas = $(".fila");
    var fila;
    var bua, bda, besp;
    var bpin = 0,
        bsin = 0,
        btin = 0,
        t = 0,
        ttp = 0,
        res = 0;
    $.each(filas, function (index, elemento) {
        fila = elemento.id;
        fila = fila.substr(-1);
        var totalAlum = $("#a" + fila);
        var suma_total_p = $("#c" + fila);
        totalAlum = totalAlum.val();
        if (!get_vacio(totalAlum)) {
            ttp = parseInt(totalAlum);
            bua = $("#bpa" + fila);
            bda = $("#bsa" + fila);
            besp = $("#besp" + fila);
            bua = bua.val();
            bda = bda.val();
            besp = besp.val();
            bpin = parseInt(bua);
            bsin = parseInt(bda);
            btin = parseInt(besp);
            t = get_Entero(bpin) + get_Entero(bsin) + get_Entero(btin);
            res = (t * PORCIENTO) / totalAlum;
            suma_total_p.val(res);

            total_porcentajeacre();
        }
    });
}

//total del porcentaje de estudiantes acreditados en el reporte final de evalaucion y acreditacion
function sum_porcentaje_Est() {
    var filas = $(".fila");
    var fila;
    var total = 0;
    var t = $("#sumaAcre").val();
}

//Porcentaje de estudiantes no agreditados en el reporte final de evaluacion y acreditacion
function porcentaje_noEstacre() {
    var filas = $(".fila");
    var fila;
    var d;
    var din = 0,
        t = 0,
        ttp = 0,
        res = 0;
    $.each(filas, function (index, elemento) {
        fila = elemento.id;
        fila = fila.substr(-1);
        var totalAlum = $("#a" + fila);
        var suma_total_p = $("#e" + fila);
        totalAlum = totalAlum.val();
        if (!get_vacio(totalAlum)) {
            ttp = parseInt(totalAlum);
            d = $("#d" + fila);
            d = d.val();
            din = parseInt(d);
            t = get_Entero(din);
            res = (t * PORCIENTO) / totalAlum;
            total_porcentajedeacre();
            suma_total_p.val(res);
        }
    });
}

//total del porcentaje de estudiantes acreditados en el reporte final de evalaucion y acreditacion
function sum_porcentaje_noEst() {
    var total = 0;
    var t = $("#sumanoAcrePorcentaje").val();
}

//Porcentaje de estudiantes que desertaron en el reporte final de evaluacion y acreditacion
function porcentaje_Estdesert() {
    var filas = $(".fila");
    var fila;
    var f;
    var fin = 0,
        t = 0,
        ttp = 0,
        res = 0;
    $.each(filas, function (index, elemento) {
        fila = elemento.id;
        fila = fila.substr(-1);
        var totalAlum = $("#a" + fila);
        var suma_total_p = $("#g" + fila);
        totalAlum = totalAlum.val();
        if (!get_vacio(totalAlum)) {
            ttp = parseInt(totalAlum);
            f = $("#f" + fila);
            f = f.val();
            fin = parseInt(f);
            t = get_Entero(fin);
            res = (t * PORCIENTO) / totalAlum;
            //total_desertores();
            total_porcentajenoacre();
            suma_total_p.val(res);
        }
    });
}

//total del porcentaje de estudiantes acreditados en el reporte final de evalaucion y acreditacion
function sum_porcentaje_Des() {
    var total = 0;
    var t = $("#sumadeserPorcentaje").val();
}

//Guarda los datos en la BD
function add_evaluacionacreditacionBorrador(f) {
    var fila = $(".fila");
    var ffa = [];
    var tot = [];
    var a = 0;
    var ba = 0;
    var bda = 0;
    var be = 0;
    var c = 0;
    var d = 0;
    var e = 0;
    var vf = 0;
    var g = 0;
    if (f.nombredto.value.length > 0) {
        if (f.fecha_ini.value.length > 0) {
            if (f.fecha_fin.value.length > 0) {
                if (f.idoc.value.length > 0) {
                    if (f.nogropate.value.length > 0) {
                        if (f.noasigdif.value.length > 0) {
                            $.each(fila, function (index, elemento) {
                                fila1 = elemento.id;
                                fila1 = fila1.substr(-1);
                                var asig = $("#mat").val();
                                var car = $("#car").val();
                                var a = $("#a" + fila1).val();
                                var b1 = $("#bpa" + fila1).val();
                                var b2 = $("#bsa" + fila1).val();
                                var b3 = $("#besp" + fila1).val();
                                var c = $("#c" + fila1).val();
                                var d = $("#d" + fila1).val();
                                var e = $("#e" + fila1).val();
                                var ff = $("#f" + fila1).val();
                                var g = $("#g" + fila1).val();
                                ffa.push({
                                    asig: asig,
                                    car: car,
                                    a: a,
                                    bu: b1,
                                    bd: b2,
                                    be: b3,
                                    c: c,
                                    d: d,
                                    e: e,
                                    vf: ff,
                                    g: g,
                                });
                            });
                            var ta = $("#sumaAlu").val();
                            var tb1 = $("#sumab_ua").val();
                            var tb2 = $("#sumab_sa").val();
                            var tb3 = $("#sumab_tesp").val();
                            var tc = $("#sumaAcre").val();
                            var td = $("#sumanoAcre").val();
                            var te = $("#sumanoAcrePorcentaje").val();
                            var tf = $("#sumadesertores").val();
                            var tg = $("#sumadeserPorcentaje").val();
                            tot.push({
                                tota: ta,
                                totbu: tb1,
                                totbd: tb2,
                                totbesp: tb3,
                                totc: tc,
                                totd: td,
                                tote: te,
                                totf: tf,
                                totg: tg,
                            });
                            ren = JSON.stringify(ffa);
                            tt = JSON.stringify(tot);
                            var sta = "Borrador";
                            $.ajax({
                                url: "/evaluacionyacreditacion",
                                type: "POST",
                                headers: { "X-CSRF-TOKEN": _TOKEN },
                                dataType: "json",
                                data: {
                                    depto: f.depto.value,
                                    fechaIni: f.fecha_ini.value,
                                    fechaFin: f.fecha_fin.value,
                                    docente: f.idoc.value,
                                    numGrupA: f.nogropate.value,
                                    numAsigD: f.noasigdif.value,
                                    renglon: ren,
                                    totales: tt,
                                    estado: 1,
                                    status: sta,
                                },
                            })
                                .done(function (json) {
                                    console.log("success");
                                    msj(json.estado, json.mensaje, 0);
                                    nueva_instrumentaciondidactica();
                                })
                                .fail(function () {
                                    console.log("error");
                                })
                                .always(function () {
                                    console.log("complete");
                                });
                        } else {
                            f.noasigdif.focus();
                            msj(
                                "Reporte de Evaluación y Acreditación",
                                "Por favor de llenar la caja",
                                2
                            );
                        }
                    } else {
                        f.nogropate.focus();
                        msj(
                            "Reporte de Evaluación y Acreditación",
                            "Por favor de llenar la caja",
                            2
                        );
                    }
                } else {
                    f.idoc.focus();
                    msj(
                        "Reporte de Evaluación y Acreditación",
                        "Por favor de llenar la caja",
                        2
                    );
                }
            } else {
                f.fecha_fin.focus();
                msj(
                    "Reporte de Evaluación y Acreditación",
                    "Por favor de llenar la caja",
                    2
                );
            }
        } else {
            f.fecha_ini.focus();
            msj(
                "Reporte de Evaluación y Acreditación",
                "Por favor de llenar la caja",
                2
            );
        }
    } else {
        f.nombredto.focus();
        msj(
            "Reporte de Evaluación y Acreditación",
            "Por favor de llenar la caja",
            2
        );
    }
}

//Guarda los datos en la BD
function add_observacionesEA(f, ea, id) {
    if (f.observaciones.value.length > 0) {
        $.ajax({
            url: "/observacionesEA",
            type: "POST",
            headers: { "X-CSRF-TOKEN": _TOKEN },
            dataType: "json",
            data: {
                obser: f.observaciones.value,
                estado: 1,
                ea: ea,
            },
        })
            .done(function (json) {
                ocultarModalObservacion();
                console.log("success");
                msj(json.estado, json.mensaje, 0);
                listado_asignacion();
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                console.log("complete");
            });
    } else {
        f.observaciones.focus();
        msj("Favor de llenar el campo", "Por favor de llenar la caja", 2);
    }
}

//Guarda los datos en la BD
function add_evaluacionacreditacionEntregada(f) {
    var fila = $(".fila");
    var ffa = [];
    var tot = [];
    var a = 0;
    var ba = 0;
    var bda = 0;
    var be = 0;
    var c = 0;
    var d = 0;
    var e = 0;
    var vf = 0;
    var g = 0;
    if (f.nombredto.value.length > 0) {
        if (f.fecha_ini.value.length > 0) {
            if (f.fecha_fin.value.length > 0) {
                if (f.idoc.value.length > 0) {
                    if (f.nogropate.value.length > 0) {
                        if (f.noasigdif.value.length > 0) {
                            $.each(fila, function (index, elemento) {
                                fila1 = elemento.id;
                                fila1 = fila1.substr(-1);
                                var asig = $("#mat").val();
                                var car = $("#car").val();
                                var a = $("#a" + fila1).val();
                                var b1 = $("#bpa" + fila1).val();
                                var b2 = $("#bsa" + fila1).val();
                                var b3 = $("#besp" + fila1).val();
                                var c = $("#c" + fila1).val();
                                var d = $("#d" + fila1).val();
                                var e = $("#e" + fila1).val();
                                var ff = $("#f" + fila1).val();
                                var g = $("#g" + fila1).val();
                                ffa.push({
                                    asig: asig,
                                    car: car,
                                    a: a,
                                    bu: b1,
                                    bd: b2,
                                    be: b3,
                                    c: c,
                                    d: d,
                                    e: e,
                                    vf: ff,
                                    g: g,
                                });
                            });
                            var ta = $("#sumaAlu").val();
                            var tb1 = $("#sumab_ua").val();
                            var tb2 = $("#sumab_sa").val();
                            var tb3 = $("#sumab_tesp").val();
                            var tc = $("#sumaAcre").val();
                            var td = $("#sumanoAcre").val();
                            var te = $("#sumanoAcrePorcentaje").val();
                            var tf = $("#sumadesertores").val();
                            var tg = $("#sumadeserPorcentaje").val();
                            tot.push({
                                tota: ta,
                                totbu: tb1,
                                totbd: tb2,
                                totbesp: tb3,
                                totc: tc,
                                totd: td,
                                tote: te,
                                totf: tf,
                                totg: tg,
                            });
                            ren = JSON.stringify(ffa);
                            tt = JSON.stringify(tot);
                            var sta = "Sin Firmar";
                            $.ajax({
                                url: "/evaluacionyacreditacion",
                                type: "POST",
                                headers: { "X-CSRF-TOKEN": _TOKEN },
                                dataType: "json",
                                data: {
                                    depto: f.depto.value,
                                    fechaIni: f.fecha_ini.value,
                                    fechaFin: f.fecha_fin.value,
                                    docente: f.idoc.value,
                                    numGrupA: f.nogropate.value,
                                    numAsigD: f.noasigdif.value,
                                    renglon: ren,
                                    totales: tt,
                                    estado: 1,
                                    status: sta,
                                },
                            })
                                .done(function (json) {
                                    console.log("success");
                                    msj(json.estado, json.mensaje, 0);
                                    nueva_instrumentaciondidactica();
                                })
                                .fail(function () {
                                    console.log("error");
                                })
                                .always(function () {
                                    console.log("complete");
                                });
                        } else {
                            f.noasigdif.focus();
                            msj(
                                "Reporte de Evaluación y Acreditación",
                                "Por favor de llenar la caja",
                                2
                            );
                        }
                    } else {
                        f.nogropate.focus();
                        msj(
                            "Reporte de Evaluación y Acreditación",
                            "Por favor de llenar la caja",
                            2
                        );
                    }
                } else {
                    f.idoc.focus();
                    msj(
                        "Reporte de Evaluación y Acreditación",
                        "Por favor de llenar la caja",
                        2
                    );
                }
            } else {
                f.fecha_fin.focus();
                msj(
                    "Reporte de Evaluación y Acreditación",
                    "Por favor de llenar la caja",
                    2
                );
            }
        } else {
            f.fecha_ini.focus();
            msj(
                "Reporte de Evaluación y Acreditación",
                "Por favor de llenar la caja",
                2
            );
        }
    } else {
        f.nombredto.focus();
        msj(
            "Reporte de Evaluación y Acreditación",
            "Por favor de llenar la caja",
            2
        );
    }
}

//Guarda los datos en la BD
function add_Firmarevaluacionacreditacion(f, id) {
    var r = id;
    var firma = $("#contra").val();
    console.log(r);

    if (firma.length > 0) {
        var sta = "Firmado";
        $.ajax({
            url: "/evaluacionyacreditacion",
            type: "POST",
            headers: { "X-CSRF-TOKEN": _TOKEN },
            dataType: "json",
            data: {
                ea: r,
                estado: 2,
                status: sta,
                contra: firma,
            },
        })
            .done(function (json) {
                $("#contra").val("");
                ocultarModalFirmar();
                console.log("success");
                if (json.jefe == 1) {
                    msj(json.estado, json.mensaje, 0);
                    listado_asignacion();
                } else {
                    if (json.jefe == "2") {
                        msj(json.estado, json.mensaje, 2);
                        consultar_evaluacionacreditacionJ(json.cve, "jefe");
                    } else {
                        msj(json.estado, json.mensaje, 0);
                        nueva_instrumentaciondidactica();
                    }
                }
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                console.log("complete");
            });
    } else {
        f.noasigdif.focus();
        msj(
            "Reporte de Evaluación y Acreditación",
            "Por favor de ingresar contraseña",
            2
        );
    }
}

//Guarda los datos en la BD
function add_FirmarevaluacionacreditacionDoc(f, id) {
    var r = id;
    var firma = $("#contra").val();
    console.log(r);

    if (firma.length > 0) {
        var sta = "Entregado";
        $.ajax({
            url: "/evaluacionyacreditacion",
            type: "POST",
            headers: { "X-CSRF-TOKEN": _TOKEN },
            dataType: "json",
            data: {
                ea: r,
                estado: 3,
                status: sta,
                contra: firma,
            },
        })
            .done(function (json) {
                $("#contra").val("");
                ocultarModalFirmar();
                console.log("success");
                if (json.cve == 1) {
                    msj(json.estado, json.mensaje, 0);
                    listado_asignacion();
                } else {
                    msj(json.estado, json.mensaje, 2);
                    nueva_instrumentaciondidactica();
                }
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                console.log("complete");
            });
    } else {
        f.noasigdif.focus();
        msj(
            "Reporte de Evaluación y Acreditación",
            "Por favor de ingresar contraseña",
            2
        );
    }
}

//Actualiza los datos en la BD
function update_evaluacionacreditacionBorrador(f, id) {
    var fila = $(".fila");
    var ffa = [];
    var tot = [];
    var a = 0;
    var ba = 0;
    var bda = 0;
    var be = 0;
    var c = 0;
    var d = 0;
    var e = 0;
    var vf = 0;
    var g = 0;
    if (f.nombredto.value.length > 0) {
        if (f.fecha_ini.value.length > 0) {
            if (f.fecha_fin.value.length > 0) {
                if (f.idoc.value.length > 0) {
                    if (f.nogropate.value.length > 0) {
                        if (f.noasigdif.value.length > 0) {
                            $.each(fila, function (index, elemento) {
                                fila1 = elemento.id;
                                fila1 = fila1.substr(-1);
                                var asig = $("#mat").val();
                                var car = $("#car").val();
                                var a = $("#a" + fila1).val();
                                var b1 = $("#bpa" + fila1).val();
                                var b2 = $("#bsa" + fila1).val();
                                var b3 = $("#besp" + fila1).val();
                                var c = $("#c" + fila1).val();
                                var d = $("#d" + fila1).val();
                                var e = $("#e" + fila1).val();
                                var ff = $("#f" + fila1).val();
                                var g = $("#g" + fila1).val();
                                ffa.push({
                                    asig: asig,
                                    car: car,
                                    a: a,
                                    bu: b1,
                                    bd: b2,
                                    be: b3,
                                    c: c,
                                    d: d,
                                    e: e,
                                    vf: ff,
                                    g: g,
                                });
                            });
                            var ta = $("#sumaAlu").val();
                            var tb1 = $("#sumab_ua").val();
                            var tb2 = $("#sumab_sa").val();
                            var tb3 = $("#sumab_tesp").val();
                            var tc = $("#sumaAcre").val();
                            var td = $("#sumanoAcre").val();
                            var te = $("#sumanoAcrePorcentaje").val();
                            var tf = $("#sumadesertores").val();
                            var tg = $("#sumadeserPorcentaje").val();
                            tot.push({
                                tota: ta,
                                totbu: tb1,
                                totbd: tb2,
                                totbesp: tb3,
                                totc: tc,
                                totd: td,
                                tote: te,
                                totf: tf,
                                totg: tg,
                            });
                            ren = JSON.stringify(ffa);
                            tt = JSON.stringify(tot);
                            var sta = "Borrador";
                            $.ajax({
                                url: "/evaluacionyacreditacion/" + id,
                                type: "PATCH",
                                headers: { "X-CSRF-TOKEN": _TOKEN },
                                dataType: "json",
                                data: {
                                    depto: f.depto.value,
                                    fechaIni: f.fecha_ini.value,
                                    fechaFin: f.fecha_fin.value,
                                    docente: f.idoc.value,
                                    numGrupA: f.nogropate.value,
                                    numAsigD: f.noasigdif.value,
                                    renglon: ren,
                                    totales: tt,
                                    estado: 1,
                                    status: sta,
                                },
                            })
                                .done(function (json) {
                                    console.log("success");
                                    msj(json.estado, json.mensaje, 0);
                                    nueva_instrumentaciondidactica();
                                })
                                .fail(function () {
                                    console.log("error");
                                })
                                .always(function () {
                                    console.log("complete");
                                });
                        } else {
                            f.noasigdif.focus();
                            msj(
                                "Reporte de Evaluación y Acreditación",
                                "Por favor de llenar la caja",
                                2
                            );
                        }
                    } else {
                        f.nogropate.focus();
                        msj(
                            "Reporte de Evaluación y Acreditación",
                            "Por favor de llenar la caja",
                            2
                        );
                    }
                } else {
                    f.idoc.focus();
                    msj(
                        "Reporte de Evaluación y Acreditación",
                        "Por favor de llenar la caja",
                        2
                    );
                }
            } else {
                f.fecha_fin.focus();
                msj(
                    "Reporte de Evaluación y Acreditación",
                    "Por favor de llenar la caja",
                    2
                );
            }
        } else {
            f.fecha_ini.focus();
            msj(
                "Reporte de Evaluación y Acreditación",
                "Por favor de llenar la caja",
                2
            );
        }
    } else {
        f.nombredto.focus();
        msj(
            "Reporte de Evaluación y Acreditación",
            "Por favor de llenar la caja",
            2
        );
    }
}

//Actualiza los datos en la BD
function update_evaluacionacreditacionEntregada(f, id) {
    var fila = $(".fila");
    var ffa = [];
    var tot = [];
    var a = 0;
    var ba = 0;
    var bda = 0;
    var be = 0;
    var c = 0;
    var d = 0;
    var e = 0;
    var vf = 0;
    var g = 0;
    if (f.nombredto.value.length > 0) {
        if (f.fecha_ini.value.length > 0) {
            if (f.fecha_fin.value.length > 0) {
                if (f.idoc.value.length > 0) {
                    if (f.nogropate.value.length > 0) {
                        if (f.noasigdif.value.length > 0) {
                            $.each(fila, function (index, elemento) {
                                fila1 = elemento.id;
                                fila1 = fila1.substr(-1);
                                var asig = $("#mat").val();
                                var car = $("#car").val();
                                var a = $("#a" + fila1).val();
                                var b1 = $("#bpa" + fila1).val();
                                var b2 = $("#bsa" + fila1).val();
                                var b3 = $("#besp" + fila1).val();
                                var c = $("#c" + fila1).val();
                                var d = $("#d" + fila1).val();
                                var e = $("#e" + fila1).val();
                                var ff = $("#f" + fila1).val();
                                var g = $("#g" + fila1).val();
                                ffa.push({
                                    asig: asig,
                                    car: car,
                                    a: a,
                                    bu: b1,
                                    bd: b2,
                                    be: b3,
                                    c: c,
                                    d: d,
                                    e: e,
                                    vf: ff,
                                    g: g,
                                });
                            });
                            var ta = $("#sumaAlu").val();
                            var tb1 = $("#sumab_ua").val();
                            var tb2 = $("#sumab_sa").val();
                            var tb3 = $("#sumab_tesp").val();
                            var tc = $("#sumaAcre").val();
                            var td = $("#sumanoAcre").val();
                            var te = $("#sumanoAcrePorcentaje").val();
                            var tf = $("#sumadesertores").val();
                            var tg = $("#sumadeserPorcentaje").val();
                            tot.push({
                                tota: ta,
                                totbu: tb1,
                                totbd: tb2,
                                totbesp: tb3,
                                totc: tc,
                                totd: td,
                                tote: te,
                                totf: tf,
                                totg: tg,
                            });
                            ren = JSON.stringify(ffa);
                            tt = JSON.stringify(tot);
                            var sta = "Sin Firmar";
                            $.ajax({
                                url: "/evaluacionyacreditacion/" + id,
                                type: "PATCH",
                                headers: { "X-CSRF-TOKEN": _TOKEN },
                                dataType: "json",
                                data: {
                                    depto: f.depto.value,
                                    fechaIni: f.fecha_ini.value,
                                    fechaFin: f.fecha_fin.value,
                                    docente: f.idoc.value,
                                    numGrupA: f.nogropate.value,
                                    numAsigD: f.noasigdif.value,
                                    renglon: ren,
                                    totales: tt,
                                    estado: 1,
                                    status: sta,
                                },
                            })
                                .done(function (json) {
                                    console.log("success");
                                    msj(json.estado, json.mensaje, 0);
                                    nueva_instrumentaciondidactica();
                                })
                                .fail(function () {
                                    console.log("error");
                                })
                                .always(function () {
                                    console.log("complete");
                                });
                        } else {
                            f.noasigdif.focus();
                            msj(
                                "Reporte de Evaluación y Acreditación",
                                "Por favor de llenar la caja",
                                2
                            );
                        }
                    } else {
                        f.nogropate.focus();
                        msj(
                            "Reporte de Evaluación y Acreditación",
                            "Por favor de llenar la caja",
                            2
                        );
                    }
                } else {
                    f.idoc.focus();
                    msj(
                        "Reporte de Evaluación y Acreditación",
                        "Por favor de llenar la caja",
                        2
                    );
                }
            } else {
                f.fecha_fin.focus();
                msj(
                    "Reporte de Evaluación y Acreditación",
                    "Por favor de llenar la caja",
                    2
                );
            }
        } else {
            f.fecha_ini.focus();
            msj(
                "Reporte de Evaluación y Acreditación",
                "Por favor de llenar la caja",
                2
            );
        }
    } else {
        f.nombredto.focus();
        msj(
            "Reporte de Evaluación y Acreditación",
            "Por favor de llenar la caja",
            2
        );
    }
}

/*--------------------------------------------------------------------------------
                    Grupo
------------------------------------------------------------------------------- */

// Limpia el formulario
function limpiar_grupoParalelo() {
    $("#carreraP").val("");
    $("#noest").val("");
    $("#clavemat").val("");
}

//Mostrar el formulario para registrar una nueva Grupo
function nueva_grupo() {
    mp();
    $.ajax({
        url: "/grupo/create",
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
            op();
            console.log("complete");
        });
}

//Mostrar el listado de los Grupo
function listado_grupo() {
    mp();
    $.ajax({
        url: "/grupo/",
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
            op();
            console.log("complete");
        });
}

//Agrega grupo paralelo en la vista grupo
function mas_grupoParalelo() {
    var no_estP = $("#noest").val();
    var claveP = $("#clavemat").val();
    var cadena = $("#carrerad").val();
    var carreraP = $("#carrerad").find("option");
    var nombre = "";
    var reng;
    console.log("soy" + cadena);
    var row_p = $(".row_grupoP");
    var id_nuevo = "rowp_" + cadena;
    var bandera = false;
    if (cadena != "") {
        if (no_estP != "") {
            if (claveP != "") {
                $.each(row_p, function (index, elemento) {
                    if (elemento.id == id_nuevo) {
                        bandera = true;
                    }
                });

                if (!bandera) {
                    $.each(row_p, function (index, elemento) {});
                    $.each(carreraP, function (index, elemento) {
                        if (cadena == elemento.value) {
                            nombre = elemento.value;
                        }
                    });

                    if ($("#contenedor_reng").length) {
                        $("#contenedor_reng").append(
                            "<tr class='row_grupoP' id='" +
                                id_nuevo +
                                "'>" +
                                "<input type='hidden' class='paralelo_id'  value='" +
                                no_estP +
                                "' >" +
                                "<input type='hidden' class='carreraP_id'  value='" +
                                nombre +
                                "' >" +
                                "<input type='hidden' class='grupoP_id'  value='" +
                                claveP +
                                "' >" +
                                "<td data-label='No. estudiantes: '><center>" +
                                no_estP +
                                "</center></td>" +
                                "<td data-label='Carrera: '><center>" +
                                nombre +
                                "</center></td>" +
                                "<td data-label='Clave: '><center>" +
                                claveP +
                                "</center></td>" +
                                "<td data-label='Acción: '><center><button type='button' class='btn btn-danger btn-xs' onclick='menos_gruposparalelos(\"" +
                                id_nuevo +
                                "\")'><i class='fa fa-trash'></i></button></center></td>" +
                                "</tr>"
                        );
                        limpiar_grupoParalelo();
                    } else {
                        $("#contenedor_grupoParalelo").append(
                            "<label class='control-label col-md-3 col-sm-3 col-xs-12'><span class='required'></span>" +
                                "</label>" +
                                "<div class='row_p col-md-6 col-sm-12 col-xs-12' id='grupoparalelo'>" +
                                "<div class='table-responsive'>" +
                                "<table class='tabla_chi table table-striped jambo_table bulk_action'>" +
                                "<thead>" +
                                "<tr>" +
                                "<td><center>No. estudiantes</center></td>" +
                                "<td><center>Carrera</center></td>" +
                                "<td><center>Clave</center></td>" +
                                "<td class='column-title no-link last'><center><span class='nobr'>Acción</span></center></td>" +
                                "</tr>" +
                                "</thead>" +
                                "<tbody id='contenedor_reng'>" +
                                "</tbody>" +
                                "</table>" +
                                "</div>" +
                                "</div>"
                        );
                        $("#contenedor_reng").append(
                            "<tr class='row_grupoP' id='" +
                                id_nuevo +
                                "'>" +
                                "<input type='hidden' class='paralelo_id'  value='" +
                                no_estP +
                                "' >" +
                                "<input type='hidden' class='carreraP_id'  value='" +
                                nombre +
                                "' >" +
                                "<input type='hidden' class='grupoP_id'  value='" +
                                claveP +
                                "' >" +
                                "<td  class='text-md-center text-sm-center' data-label='No. estudiantes: '>" +
                                no_estP +
                                "</td>" +
                                "<td  class='text-md-center text-sm-center' data-label='Carrera: '>" +
                                nombre +
                                "</td>" +
                                "<td  class='text-md-center text-sm-center' data-label='Clave: '>" +
                                claveP +
                                "</td>" +
                                "<td data-label='Acción: ' class='py-1 text-md-center text-sm-center'><button type='button' class='btn btn-danger btn-xs' onclick='menos_gruposparalelos(\"" +
                                id_nuevo +
                                "\")'><i class='fa fa-trash'></i></button></td>" +
                                "</tr>"
                        );
                        limpiar_grupoParalelo();
                    }
                } else {
                    msj(
                        "Grupo Paralelo",
                        "La Grupo Paralelo ya ha sido agregada",
                        2
                    );
                }
            } else {
                msj("Grupo Paralelo", "Clave para el Grupo Paralelo", 2);
            }
        } else {
            msj(
                "Grupo Paralelo",
                "Numero de estudiantes para el Grupo Paralelo",
                2
            );
        }
    } else {
        msj(
            "Grupo Paralelo",
            "Seleccione la carrera para el Grupo Paralelo",
            2
        );
    }
}

//Menos grupos paralelos en la vista grupo
function menos_gruposparalelos(id) {
    $("#" + id).remove();
    if (!$(".row_grupoP").length) {
        $("#grupoparalelo").remove();
        cont = 0;
    }
}

//Mostrar la consulta de un grupo
function consultar_grupo(id) {
    mp();
    $.ajax({
        url: "/grupo/" + id,
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
            op();
            console.log("complete");
        });
}

//Mostrar la consulta de un grupo
function edit_grupo(id) {
    mp();
    $.ajax({
        url: "/grupo/" + id + "/edit",
        type: "GET",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "html",
    })
        .done(function (html) {
            console.log("success");
            $("#contenedor").html(html);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            op();
            console.log("complete");
        });
}

//Guarda los datos en la BD
function add_grupo(f) {
    var gruP = [];
    var gruposP = $(".row_grupoP");
    if (f.periodo.value.length > 0) {
        if (f.reticula.value.length > 0) {
            if (f.carrera.value.length > 0) {
                if (f.grupo.value.length > 0) {
                    if (f.campus.value.length > 0) {
                        if (f.departamento.value.length > 0) {
                            if (f.semestre.value.length > 0) {
                                if (f.materia.value.length > 0) {
                                    console.log("entre");
                                    $.each(gruposP, function (index, elemento) {
                                        var noEstu =
                                            elemento.querySelector(
                                                ".paralelo_id"
                                            ).value;
                                        var carre =
                                            elemento.querySelector(
                                                ".carreraP_id"
                                            ).value;
                                        var clave =
                                            elemento.querySelector(
                                                ".grupoP_id"
                                            ).value;
                                        gruP.push({
                                            NoE: noEstu,
                                            car: carre,
                                            cla: clave,
                                        });
                                    });
                                    gruP = JSON.stringify(gruP);
                                    $.ajax({
                                        url: "/grupo",
                                        type: "POST",
                                        headers: { "X-CSRF-TOKEN": _TOKEN },
                                        dataType: "json",
                                        data: {
                                            periodo: f.periodo.value,
                                            reticula: f.reticula.value,
                                            carrera: f.carrera.value,
                                            grupo: f.grupo.value,
                                            campus: f.campus.value,
                                            departamento: f.departamento.value,
                                            semestre: f.semestre.value,
                                            materia: f.materia.value,
                                            gruposPara: gruP,
                                            status: 1,
                                        },
                                    })
                                        .done(function (json) {
                                            console.log("success");
                                            msj(json.estado, json.mensaje, 0);
                                            listado_grupo();
                                        })
                                        .fail(function () {
                                            console.log("error");
                                        })
                                        .always(function () {
                                            console.log("complete");
                                        });
                                } else {
                                    f.materia.focus();
                                    msj(
                                        "Grupo ",
                                        "Favor de seleccionar una opción por favor",
                                        2
                                    );
                                }
                            } else {
                                f.semestre.focus();
                                msj(
                                    "Grupo ",
                                    "Favor de llenar el campo por favor",
                                    2
                                );
                            }
                        } else {
                            f.departamento.focus();
                            msj(
                                "Grupo ",
                                "Favor de seleccionar una opción por favor",
                                2
                            );
                        }
                    } else {
                        f.campus.focus();
                        msj("Grupo ", "Favor de llenar el campo por favor", 2);
                    }
                } else {
                    f.grupo.focus();
                    msj("Grupo ", "Favor de llenar el campo por favor", 2);
                }
            } else {
                f.carrera.focus();
                msj("Grupo ", "Favor de seleccionar una opción por favor", 2);
            }
        } else {
            f.reticula.focus();
            msj("Grupo ", "Favor de seleccionar una opción por favor", 2);
        }
    } else {
        f.periodo.focus();
        msj("Grupo ", "Favor de seleccionar una opción por favor", 2);
    }
}

//Actualiza los datos en la BD
function update_grupo(f, id) {
    var gruP = [];
    var gruposP = $(".row_grupoP");
    if (f.periodo.value.length > 0) {
        if (f.reticula.value.length > 0) {
            if (f.carrera.value.length > 0) {
                if (f.grupo.value.length > 0) {
                    if (f.campus.value.length > 0) {
                        if (f.departamento.value.length > 0) {
                            if (f.semestre.value.length > 0) {
                                if (f.materia.value.length > 0) {
                                    console.log("entre");
                                    $.each(gruposP, function (index, elemento) {
                                        var noEstu =
                                            elemento.querySelector(
                                                ".paralelo_id"
                                            ).value;
                                        var carre =
                                            elemento.querySelector(
                                                ".carreraP_id"
                                            ).value;
                                        var clave =
                                            elemento.querySelector(
                                                ".grupoP_id"
                                            ).value;
                                        gruP.push({
                                            NoE: noEstu,
                                            car: carre,
                                            cla: clave,
                                        });
                                    });
                                    gruP = JSON.stringify(gruP);
                                    $.ajax({
                                        url: "/grupo/" + id,
                                        type: "PATCH",
                                        headers: { "X-CSRF-TOKEN": _TOKEN },
                                        dataType: "json",
                                        data: {
                                            periodo: f.periodo.value,
                                            reticula: f.reticula.value,
                                            carrera: f.carrera.value,
                                            grupo: f.grupo.value,
                                            campus: f.campus.value,
                                            departamento: f.departamento.value,
                                            semestre: f.semestre.value,
                                            materia: f.materia.value,
                                            gruposPara: gruP,
                                            status: 1,
                                        },
                                    })
                                        .done(function (json) {
                                            console.log("success");
                                            msj(json.estado, json.mensaje, 0);
                                            listado_grupo();
                                        })
                                        .fail(function () {
                                            console.log("error");
                                        })
                                        .always(function () {
                                            console.log("complete");
                                        });
                                } else {
                                    f.materia.focus();
                                    msj(
                                        "Grupo ",
                                        "Favor de seleccionar una opción por favor",
                                        2
                                    );
                                }
                            } else {
                                f.semestre.focus();
                                msj(
                                    "Grupo ",
                                    "Favor de llenar el campo por favor",
                                    2
                                );
                            }
                        } else {
                            f.departamento.focus();
                            msj(
                                "Grupo ",
                                "Favor de seleccionar una opción por favor",
                                2
                            );
                        }
                    } else {
                        f.campus.focus();
                        msj("Grupo ", "Favor de llenar el campo por favor", 2);
                    }
                } else {
                    f.grupo.focus();
                    msj("Grupo ", "Favor de llenar el campo por favor", 2);
                }
            } else {
                f.carrera.focus();
                msj("Grupo ", "Favor de seleccionar una opción por favor", 2);
            }
        } else {
            f.reticula.focus();
            msj("Grupo ", "Favor de seleccionar una opción por favor", 2);
        }
    } else {
        f.periodo.focus();
        msj("Grupo ", "Favor de seleccionar una opción por favor", 2);
    }
}

//Cambia el estatus del registro en la BD
function delete_grupo(id) {
    $.ajax({
        url: "/grupo/" + id,
        type: "DELETE",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "json",
    })
        .done(function (json) {
            console.log("success");
            ocultarModalConfirmacion();
            listado_grupo();
            msj(json.estado, json.mensaje, 0);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
}

function filtro_grupo(f) {
    $.ajax({
        url: "/grupo",
        type: "GET",
        dataType: "html",
        data: {
            periodo: f.f_periodo.value,
            carrera: f.f_carrera.value,
            departamento: f.f_departamento.value,
            semestre: f.f_semestre.value,
        },
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
// Limpia el formulario
function limpiar_grupo() {
    $("#form-grupo")[0].reset();
    listado_grupo();
}

/*--------------------------------------------------------------------------------
                    Aula
------------------------------------------------------------------------------- */

//Mostrar el formulario para registrar una nueva Aula
function nueva_aula() {
    mp();
    $.ajax({
        url: "/aula/create",
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
            op();
            console.log("complete");
        });
}

//Mostrar el listado de los Aula
function listado_aula() {
    mp();
    $.ajax({
        url: "/aula/",
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
            op();
            console.log("complete");
        });
}

//Mostrar la consulta de una Aula
function consultar_aula(id) {
    mp();
    $.ajax({
        url: "/aula/" + id,
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
            op();
            console.log("complete");
        });
}

//Muestrar la vista para poder modificar la Aula
function edit_aula(id) {
    mp();
    $.ajax({
        url: "/aula/" + id + "/edit",
        type: "GET",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "html",
    })
        .done(function (html) {
            console.log("success");
            $("#contenedor").html(html);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            op();
            console.log("complete");
        });
}

//Guarda los datos en la BD
function add_aula(f) {
    if (!f.checkValidity()) {
        msj("Aula", "Por favor complete los campos", 2);
    } else {
        if (f.id.value.length > 0) {
            $("#a_id").css("display", "none");
            if (f.ubicacion.value.length > 0) {
                $("#a_ubicacion").css("display", "none");
                if (f.capacidad.value.length > 0) {
                    $("#a_capacidad").css("display", "none");
                    if (is_number(f.capacidad.value)) {
                        if (f.cruce.value.length > 0) {
                            $("#a_cruce").css("display", "none");
                            if (f.tipo.value.length > 0) {
                                $("#a_tipo").css("display", "none");
                                if (f.observaciones.value.length > 0) {
                                    $("#a_observaciones").css(
                                        "display",
                                        "none"
                                    );
                                    $.ajax({
                                        url: "/aula",
                                        type: "POST",
                                        headers: { "X-CSRF-TOKEN": _TOKEN },
                                        dataType: "json",
                                        data: {
                                            id: f.id.value,
                                            ubicacion: f.ubicacion.value,
                                            capacidad: f.capacidad.value,
                                            cruce: f.cruce.value,
                                            tipo: f.tipo.value,
                                            observaciones:
                                                f.observaciones.value,
                                        },
                                    })
                                        .done(function (json) {
                                            console.log("success");
                                            msj(json.estado, json.mensaje, 0);
                                            listado_aula();
                                        })
                                        .fail(function () {
                                            console.log("error");
                                        })
                                        .always(function () {
                                            console.log("complete");
                                        });
                                } else {
                                    f.observaciones.focus();
                                    if (
                                        $("#a_observaciones").html().trim() ==
                                        ""
                                    ) {
                                        $("#a_observaciones").css(
                                            "display",
                                            "block"
                                        );
                                        $("#a_observaciones").append(
                                            "Favor de escribir la ubicación"
                                        );
                                    }
                                }
                            } else {
                                f.tipo.focus();
                                if ($("#a_tipo").html().trim() == "") {
                                    $("#a_tipo").css("display", "block");
                                    $("#a_tipo").append(
                                        "Favor de escribir de que tipo es la aula"
                                    );
                                }
                            }
                        } else {
                            f.cruce.focus();
                            if ($("#a_cruce").html().trim() == "") {
                                $("#a_cruce").css("display", "block");
                                $("#a_cruce").append(
                                    "Favor de seleccionar el cruce"
                                );
                            }
                        }
                    } else {
                        document.getElementById("a_capacidad").innerHTML = "";
                        document.getElementById("capacidad").value = "";
                        f.capacidad.focus();
                        if ($("#a_capacidad").html().trim() == "") {
                            $("#a_capacidad").css("display", "block");
                            $("#a_capacidad").append(
                                "La capacidad del aula debe ser representada en numeros"
                            );
                        }
                    }
                } else {
                    f.capacidad.focus();
                    if ($("#a_capacidad").html().trim() == "") {
                        $("#a_capacidad").css("display", "block");
                        $("#a_capacidad").append(
                            "Favor de escribir la capacidad del aula"
                        );
                    }
                }
            } else {
                f.ubicacion.focus();
                if ($("#a_ubicacion").html().trim() == "") {
                    $("#a_ubicacion").css("display", "block");
                    $("#a_ubicacion").append("Favor de escribir la ubicación");
                }
            }
        } else {
            f.id.focus();
            if ($("#a_id").html().trim() == "") {
                $("#a_id").css("display", "block");
                $("#a_id").append("Favor de escribir el id del aula");
            }
        }
    }
}

//Actualiza los datos en la BD
function update_aula(f, id) {
    if (!f.checkValidity()) {
        msj("Aula", "Por favor complete los campos", 2);
    } else {
        if (f.id.value.length > 0) {
            $("#a_id").css("display", "none");
            if (f.ubicacion.value.length > 0) {
                $("#a_ubicacion").css("display", "none");
                if (f.capacidad.value.length > 0) {
                    $("#a_capacidad").css("display", "none");
                    if (is_number(f.capacidad.value)) {
                        if (f.cruce.value.length > 0) {
                            $("#a_cruce").css("display", "none");
                            if (f.tipo.value.length > 0) {
                                $("#a_tipo").css("display", "none");
                                if (f.observaciones.value.length > 0) {
                                    $("#a_observaciones").css(
                                        "display",
                                        "none"
                                    );
                                    $.ajax({
                                        url: "/aula/" + id,
                                        type: "PATCH",
                                        headers: { "X-CSRF-TOKEN": _TOKEN },
                                        dataType: "json",
                                        data: {
                                            id: f.id.value,
                                            ubicacion: f.ubicacion.value,
                                            capacidad: f.capacidad.value,
                                            cruce: f.cruce.value,
                                            tipo: f.tipo.value,
                                            observaciones:
                                                f.observaciones.value,
                                        },
                                    })
                                        .done(function (json) {
                                            console.log("success");
                                            msj(json.estado, json.mensaje, 0);
                                            listado_aula();
                                        })
                                        .fail(function () {
                                            console.log("error");
                                        })
                                        .always(function () {
                                            console.log("complete");
                                        });
                                } else {
                                    f.observaciones.focus();
                                    if (
                                        $("#a_observaciones").html().trim() ==
                                        ""
                                    ) {
                                        $("#a_observaciones").css(
                                            "display",
                                            "block"
                                        );
                                        $("#a_observaciones").append(
                                            "Favor de escribir la ubicación"
                                        );
                                    }
                                }
                            } else {
                                f.tipo.focus();
                                if ($("#a_tipo").html().trim() == "") {
                                    $("#a_tipo").css("display", "block");
                                    $("#a_tipo").append(
                                        "Favor de escribir de que tipo es la aula"
                                    );
                                }
                            }
                        } else {
                            f.cruce.focus();
                            if ($("#a_cruce").html().trim() == "") {
                                $("#a_cruce").css("display", "block");
                                $("#a_cruce").append(
                                    "Favor de seleccionar el cruce"
                                );
                            }
                        }
                    } else {
                        document.getElementById("a_capacidad").innerHTML = "";
                        document.getElementById("capacidad").value = "";
                        f.capacidad.focus();
                        if ($("#a_capacidad").html().trim() == "") {
                            $("#a_capacidad").css("display", "block");
                            $("#a_capacidad").append(
                                "La capacidad del aula debe ser representada en numeros"
                            );
                        }
                    }
                } else {
                    f.capacidad.focus();
                    if ($("#a_capacidad").html().trim() == "") {
                        $("#a_capacidad").css("display", "block");
                        $("#a_capacidad").append(
                            "Favor de escribir la capacidad del aula"
                        );
                    }
                }
            } else {
                f.ubicacion.focus();
                if ($("#a_ubicacion").html().trim() == "") {
                    $("#a_ubicacion").css("display", "block");
                    $("#a_ubicacion").append("Favor de escribir la ubicación");
                }
            }
        } else {
            f.id.focus();
            if ($("#a_id").html().trim() == "") {
                $("#a_id").css("display", "block");
                $("#a_id").append("Favor de escribir el id del aula");
            }
        }
    }
}

//Cambia el estatus del registro en la BD
function delete_aula(id) {
    $.ajax({
        url: "/aula/" + id,
        type: "DELETE",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "json",
    })
        .done(function (json) {
            console.log("success");
            ocultarModalConfirmacion();
            listado_aula();
            msj(json.estado, json.mensaje, 0);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
}

function filtro_aula(f) {
    $.ajax({
        url: "/aula",
        type: "GET",
        dataType: "html",
        data: {
            id: f.f_id.value,
            ubicacion: f.f_ubicacion.value,
            capacidad: f.f_capacidad.value,
            tipo: f.f_tipo.value,
        },
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
// Limpia el formulario
function limpiar_aula() {
    $("#form-aula")[0].reset();
    listado_aula();
}

/*--------------------------------------------------------------------------------
                    Reticula
------------------------------------------------------------------------------- */

//Mostrar el formulario para registrar una nueva Reticula
function nueva_reticula() {
    mp();
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
            op();
            console.log("complete");
        });
}

//Mostrar el listado de los Reticula
function listado_reticula() {
    mp();
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
            op();
            console.log("complete");
        });
}

//Mostrar el consultar de la Reticula
function consultar_reticula(id) {
    mp();
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
            op();
            console.log("complete");
        });
}

//Muestrar la vista para poder modificar la Reticula
function edit_reticula(id) {
    mp();
    $.ajax({
        url: "/reticula/" + id + "/edit",
        type: "GET",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "html",
    })
        .done(function (html) {
            console.log("success");
            $("#contenedor").html(html);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            op();
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
                "<div class='mb-1 row row_cadena' id='" +
                    id_nuevo +
                    "'>" +
                    "<input type='hidden' class='cadena_id'  value='" +
                    cadena +
                    "' >" +
                    "<div class='col-form-label col-md-3 col-sm-3 col-xs-12 text-left text-md-right'>" +
                    "<label class='text-sm-left' for='cadena'> <span class='required'></span>" +
                    "</label>" +
                    "</div>" +
                    "<div class='col-md-5 col-sm-6 col-xs-12'>" +
                    "<label for=''>" +
                    nombre +
                    "</label>" +
                    "</div>" +
                    "<div class='col-md-1 col-sm-2 col-xs-12'>" +
                    "<button type='button' class='btn btn-danger btn-block btn-sm' onclick='menos_elementos(\"" +
                    id_nuevo +
                    "\")'><i class='fa fa-trash'></i>" +
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
function generar_reticula(f, claver) {
    if (f.no_sem.value == "" && f.no_matmax == "") {
        msj("Reticula", "Por favor completar los campos", 2);
    } else {
        var cabecera = "";
        var contenido = "";
        $("#no_sem").prop("disabled", true);
        $("#no_matmax").prop("disabled", true);
        var semestre = parseInt($("#no_sem").val());
        var maxmat = parseInt($("#no_matmax").val());
        for (let i = 0; i < semestre; i++) {
            if (i == semestre - 1) {
                cabecera +=
                    "<td class='text-center'><div class='col-md-10 col-sm-10'>Semestre " +
                    (i + 1) +
                    "</div><div class='col-md-2 col-sm-2'><button type='button' class='btn btn-sm close' data-toggle='tooltip' data-placement='top' title='' data-original-title='Eliminar Semestre' data-dismiss='alert' aria-label='Close' onclick='modalConfirm('¿Está seguro(a) qué deseas eliminar el semestre?','quitar_columnas();');'><span aria-hidden='true'>×</span></button></div></td>";
            } else {
                cabecera +=
                    "<td class='text-center'><div class='col-md-10 col-sm-10'>Semestre " +
                    (i + 1) +
                    "</div><div class='col-md-2 col-sm-2 sem" +
                    (i + 1) +
                    "' style='display:none'><button type='button' class='btn btn-sm close' data-toggle='tooltip' data-placement='top' title='' data-original-title='Eliminar Semestre' data-dismiss='alert' aria-label='Close' onclick='modalConfirm('¿Está seguro(a) qué deseas eliminar el semestre?','quitar_columnas();');'><span aria-hidden='true'>×</span></button></div></td>";
            }
        }

        for (let j = 0; j < maxmat; j++) {
            contenido += "<tr id='col_" + j + "'>";
            for (let k = 0; k < semestre; k++) {
                contenido +=
                    "<td class='td'><button type='button' class='btn btn-info btn-block btn-sm' title='Materia' onclick='addMateriaSem(" +
                    j +
                    "," +
                    k +
                    "," +
                    claver +
                    "," +
                    maxmat +
                    ")' form='form-nueva-r'><i class='fa fa-plus'></i></button></td>";
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
                "<div class='col-md-3 col-sm-12'></div>" +
                "<div class='col-md-6 col-sm-12'>" +
                "<div class='row'>" +
                "<div class='col'>" +
                "<button class='btn btn-secondary btn-block' type='button' onclick='generar_mas_filas()'>Agregar fila</button>" +
                "</div>" +
                "<div class='col'>" +
                "<button class='btn btn-secondary btn-block' type='button' onclick='generar_mas_columnas()'>Agregar columna</button>" +
                "</div>" +
                "<div class='col'>" +
                "<button class='btn btn-danger btn-block' type='button' onclick='quitar_filas()'>Eliminar fila</button>" +
                "</div>" +
                "<div class='col'>" +
                "<button class='btn btn-danger btn-block' type='button' onclick='quitar_columnas()'>Eliminar columna</button>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "<div class='col-md-3 col-sm-12'></div>" +
                "</div>"
        );
    }
    $("#cveRet").val(claver);
    responsive_table();
}

//BTN Agregar la tabla en la vista reticula una ves que se registren materias
function generar_botonesMAS(f, claver) {
    var cabecera = "";
    var contenido = "";
    var semestre = parseInt($("#no_sem").val());
    var maxmat = 8;
    var tds = document.querySelectorAll(".td");
    var dts = $(".td");
    $.each(tds, function (index, elemento) {
        var ps = tds[index].id;
        var p = ps.split("-");
        var x = p[0];
        var y = p[1];
        //console.log(elemento);
        var existe = true;
        $.each($(elemento).find("div"), function (index, element) {
            existe = false;
        });
        if (existe) {
            document.getElementById(elemento.id).innerHTML =
                "<button type='button' class='btn btn-info btn-block btn-sm' title='Materia' onclick='addMateriaSem(" +
                x +
                "," +
                y +
                "," +
                claver +
                "," +
                maxmat +
                ")' form='form-nueva-r'><i class='fa fa-plus'></i></button>";
        }
    });
    $("#cveRet").val(claver);
}

//Regresar a la reticula
function regresar_reticula(cve, tam) {
    mp();
    $.ajax({
        url: "/reticula/create",
        type: "GET",
        dataType: "html",
        data: {
            ret: cve,
            maxmat: tam,
        },
    })
        .done(function (vista) {
            console.log("success");
            $("#contenedor").html(vista);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            op();
            console.log("complete");
        });
}

//Agrega a la tabla de la reticula un nuevo renglon en semestre
function generar_mas_filas() {
    claver = $("#cveRet").val();
    sem = parseInt($("#no_sem").val());
    mat = parseInt($("#no_matmax").val());
    console.log("entre");
    contenido = "";
    for (let k = 0; k < sem; k++) {
        contenido +=
            "<td><buttontype='button' class='btn btn-info btn-block btn-sm' title='Materia'onclick='addMateriaSem(" +
            mat +
            "," +
            k +
            "," +
            claver +
            "," +
            (mat + 1) +
            ")' form='form-nueva-r'><i class='fa fa-plus'></i></button></td>";
    }
    console.log(mat);
    $("#contenedor_columna").append(
        "<tr id='col_" + mat + "'>" + contenido + "</tr>"
    );
    var maxmat = parseInt($("#no_matmax").val());
    maxmat = maxmat + 1;
    $("#no_matmax").val(maxmat);
    add_maxRet(claver, maxmat);
    responsive_table();
}

//Agregar a la tabla de la reticula una nueva columna en semestre
function generar_mas_columnas() {
    claver = $("#cveRet").val();
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
    for (let i = 0; i <= mat; i++) {
        var nuevo = no_sem + 1;
        sn =
            "<td> <buttontype='button' class='btn btn-info btn-block btn-sm' title='Materia'onclick='addMateriaSem(" +
            i +
            "," +
            nuevo +
            "," +
            claver +
            "," +
            mat +
            ")' form='form-nueva-r'><i class='fa fa-plus'></i></button></td>";
        no_sem = no_sem + 1;
        $("#col_" + i).append(sn);
    }

    add_semRet(claver, no_sem);
    $("#no_sem").val(no_sem);
}

//Eliminar a la tabla de reticula una columna en semestre
function quitar_filas() {
    claver = $("#cveRet").val();
    sem = parseInt($("#no_sem").val());
    mat = parseInt($("#no_matmax").val());
    console.log("entre");
    contenido = "";
    document.getElementsByTagName("tr")[mat].remove();

    var maxmat = parseInt($("#no_matmax").val());
    maxmat = maxmat - 1;
    console.log(maxmat);
    $("#no_matmax").val(maxmat);
    update_maxRet(claver, maxmat);
    responsive_table();
}

//Eliminar a la tabla de reticula una columna en semestre
function quitar_columnas() {
    claver = $("#cveRet").val();
    no_sem = parseInt($("#no_sem").val());
    mat = parseInt($("#no_matmax").val());
    var t = document.getElementById("myTable");
    var row = t.rows;
    var i = -1;
    for (let j = 0; j < row.length; j++) {
        row[j].deleteCell(i);
    }
    var se = parseInt($("#no_sem").val());
    se = se - 1;
    console.log("Lo que hay es " + se);
    $("no_sem").val(se);
    update_semRet(claver, no_sem);
}

//Agregar semestre a reticula
function add_semRet(claver, nosem) {
    $.ajax({
        url: "/semestre",
        type: "POST",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "json",
        data: {
            reticula: claver,
            sem: nosem,
        },
    })
        .done(function (json) {
            console.log("success");
            msj(json.estado, json.mensaje, 0);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
}

//Agregar limite de materias a reticula
function add_maxRet(claver, nosem) {
    $.ajax({
        url: "/semestre",
        type: "POST",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "json",
        data: {
            reticula: claver,
            max: nosem,
        },
    })
        .done(function (json) {
            console.log("success");
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
}

//Eliminar semestre a reticula
function update_semRet(claver, nosem) {
    $.ajax({
        url: "/semestre/" + claver,
        type: "PATCH",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "json",
        data: {
            reticula: claver,
            sem: nosem,
        },
    })
        .done(function (json) {
            console.log("success");
            msj(json.estado, json.mensaje, 0);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
}

//Eliminar limite de materias a reticula
function update_maxRet(claver, nosem) {
    $.ajax({
        url: "/semestre/" + claver,
        type: "PATCH",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "json",
        data: {
            reticula: claver,
            max: nosem,
        },
    })
        .done(function (json) {
            console.log("success");
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
}

//Hacer la tabla de reticula responsive
function responsive_table() {
    no_sem = parseInt($("#no_sem").val());
    console.log("tengo" + no_sem);
    if (screen.width <= 1300) {
        $("#myTable").css("display:none");
        $("#myTable").show();
        console.log("Entre y desapareci");
    }
}

//Guarda los datos en la BD
function add_reticula(f) {
    //if (!f.checkValidity()) {
    //msj("Reticula", "Por favor complete los campos", 2);
    //} else {
    if (f.nombre.value.length > 0) {
        $("#a_nombre").css("display", "none");
        if (f.clave.value.length > 0) {
            $("#a_clave").css("display", "none");
            if (f.planest.value.length > 0) {
                $("#a_planest").css("display", "none");
                if (f.no_sem.value.length > 0) {
                    $("#a_nosem").css("display", "none");
                    if (f.no_matmax.value.length > 0) {
                        $("#a_matmax").css("display", "none");
                        if (f.carrera.value.length > 0) {
                            if (f.especialidad.value.length > 0) {
                                $.ajax({
                                    url: "/reticula",
                                    type: "POST",
                                    headers: { "X-CSRF-TOKEN": _TOKEN },
                                    dataType: "json",
                                    data: {
                                        nombre: f.nombre.value,
                                        clave: f.clave.value,
                                        planest: f.planest.value,
                                        especialidad: f.especialidad.value,
                                        carrera: f.carrera.value,
                                        no_sem: f.no_sem.value,
                                        no_mat: f.no_matmax.value,
                                    },
                                })
                                    .done(function (json) {
                                        console.log("success");
                                        msj(json.estado, json.mensaje, 0);
                                        f.nombre.disabled = true;
                                        f.clave.disabled = true;
                                        f.planest.disabled = true;
                                        f.carrera.disabled = true;
                                        f.especialidad.disabled = true;
                                        generar_reticula(f, json.cve);
                                    })
                                    .fail(function () {
                                        console.log("error");
                                    })
                                    .always(function () {
                                        console.log("complete");
                                    });
                            } else {
                                f.especialidad.focus();
                            }
                        } else {
                            f.carrera.focus();
                        }
                    } else {
                        f.no_matmax.focus();
                        if ($("#a_matmax").html().trim() == "") {
                            $("#a_matmax").css("display", "block");
                            $("#a_matmax").append("Favor de llenar el campo");
                        }
                    }
                } else {
                    f.no_sem.focus();
                    if ($("#a_nosem").html().trim() == "") {
                        $("#a_nosem").css("display", "block");
                        $("#a_nosem").append("Favor de llenar el campo");
                    }
                }
            } else {
                f.planest.focus();
                if ($("#a_planest").html().trim() == "") {
                    $("#a_planest").css("display", "block");
                    $("#a_planest").append("Favor de seleccionar una opción");
                }
            }
        } else {
            f.clave.focus();
            if ($("#a_clave").html().trim() == "") {
                $("#a_clave").css("display", "block");
                $("#a_clave").append("Favor de llenar el campo");
            }
        }
    } else {
        f.nombre.focus();
        if ($("#a_nombre").html().trim() == "") {
            $("#a_nombre").css("display", "block");
            $("#a_nombre").append("Favor de llenar el campo");
        }
    }
    //}
}

//Actualiza los datos en la BD
function update_reticula(f, id) {
    if (f.nombre.value.length > 0) {
        $("#a_nombre").css("display", "none");
        if (f.clave.value.length > 0) {
            $("#a_clave").css("display", "none");
            if (f.planest.value.length > 0) {
                $.ajax({
                    url: "/reticula/" + id,
                    type: "PATCH",
                    headers: { "X-CSRF-TOKEN": _TOKEN },
                    dataType: "json",
                    data: {
                        nombre: f.nombre.value,
                        clave: f.clave.value,
                        carrera: f.carrera.value,
                        planest: f.planest.value,
                        especialidad: f.especialidad.value,
                        carrera: f.carrera.value,
                    },
                })
                    .done(function (json) {
                        console.log("success");
                        msj(json.estado, json.mensaje, 0);
                        listado_reticula();
                    })
                    .fail(function () {
                        console.log("error");
                    })
                    .always(function () {
                        console.log("complete");
                    });
            } else {
                f.planest.focus();
                if ($("#a_planest").html().trim() == "") {
                    $("#a_planest").css("display", "block");
                    $("#a_planest").append("Favor de seleccionar una opción");
                }
            }
        } else {
            f.clave.focus();
            if ($("#a_clave").html().trim() == "") {
                $("#a_clave").css("display", "block");
                $("#a_clave").append("Favor de llenar el campo");
            }
        }
    } else {
        f.nombre.focus();
        if ($("#a_nombre").html().trim() == "") {
            $("#a_nombre").css("display", "block");
            $("#a_nombre").append("Favor de llenar el campo");
        }
    }
}

//Cambia el estatus del registro en la BD
function delete_reticula(id) {
    $.ajax({
        url: "/reticula/" + id,
        type: "DELETE",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "json",
    })
        .done(function (json) {
            console.log("success");
            ocultarModalConfirmacion();
            listado_reticula();
            msj(json.estado, json.mensaje, 0);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
}

function filtro_reticula(f) {
    $.ajax({
        url: "/reticula",
        type: "GET",
        dataType: "html",
        data: {
            nombre: f.f_nombre.value,
            clave: f.f_clave.value,
            planest: f.f_planest.value,
        },
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

//Agregar materia al semenstre
function addMateriaSem(posicionX, posicionY, clave, maxm) {
    mp();
    $.ajax({
        url: "/detallemateria/create",
        type: "GET",
        dataType: "html",
        data: {
            px: posicionX,
            py: posicionY,
            reticula: clave,
            noMaxm: maxm,
        },
    })
        .done(function (vista) {
            console.log("success");
            $("#contenedor").html(vista);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            op();
            console.log("complete");
        });
}

//guardar los datos BD Detalle materia
function add_materiareticula(f, cve) {
    var caden = [];
    var cadenas = $(".row_cadena");
    var corq = [];
    var correquisitos = $(".row_correquisito");
    var preq = [];
    var prerrequisito = $(".row_prerrequisito");
    if (
        f.materia.value.length == 0 &&
        f.depto.value.length == 0 &&
        f.matesp.value.length == 0
    ) {
        msj("Materia", "Favor de llenar los campos", 2);
    } else {
        if (f.materia.value.length > 0) {
            if (f.depto.value.length > 0) {
                if (f.matesp.value.length > 0) {
                    $.each(cadenas, function (index, elemento) {
                        var idCadena =
                            elemento.querySelector(".cadena_id").value;
                        caden.push({ id: idCadena });
                    });
                    $.each(correquisitos, function (index, elemento) {
                        var idCorrequi =
                            elemento.querySelector(".correquisito_id").value;
                        corq.push({ id: idCorrequi });
                    });
                    $.each(prerrequisito, function (index, elemento) {
                        var idPrerre =
                            elemento.querySelector(".prerrequisito_id").value;
                        preq.push({ id: idPrerre });
                    });
                    caden = JSON.stringify(caden);
                    corq = JSON.stringify(corq);
                    preq = JSON.stringify(preq);
                    $.ajax({
                        url: "/detallemateria",
                        type: "POST",
                        headers: { "X-CSRF-TOKEN": _TOKEN },
                        dataType: "json",
                        data: {
                            materia: f.materia.value,
                            departamento: f.depto.value,
                            materiaEsp: f.matesp.value,
                            cadena: caden,
                            correq: corq,
                            prerr: preq,
                            ret: cve,
                            x: f.ejex.value,
                            y: f.ejey.value,
                        },
                    })
                        .done(function (json) {
                            console.log("success");
                            msj(json.estado, json.mensaje, 0);
                            regresar_reticula(cve, json.tam);
                        })
                        .fail(function () {
                            console.log("error");
                        })
                        .always(function () {
                            console.log("complete");
                        });
                } else {
                    f.matesp.focus();
                    msj("Materia", "Favor de llenar el campo", 2);
                }
            } else {
                f.depto.focus();
                msj("Materia", "Favor de llenar el campo", 2);
            }
        } else {
            f.materia.focus();
            msj("Materia", "Favor de llenar el campo", 2);
        }
    }
}

//actualizar los datos BD Detalle materia
function update_materiareticula(f, id) {
    var caden = [];
    var cadenas = $(".row_cadena");
    var corq = [];
    var correquisitos = $(".row_correquisito");
    var preq = [];
    var prerrequisito = $(".row_prerrequisito");
    if (
        f.materia.value.length == 0 &&
        f.depto.value.length == 0 &&
        f.matesp.value.length == 0
    ) {
        msj("Materia", "Favor de llenar los campos", 2);
    } else {
        if (f.materia.value.length > 0) {
            if (f.depto.value.length > 0) {
                if (f.matesp.value.length > 0) {
                    $.each(cadenas, function (index, elemento) {
                        var idCadena =
                            elemento.querySelector(".cadena_id").value;
                        caden.push({ id: idCadena });
                    });
                    $.each(correquisitos, function (index, elemento) {
                        var idCorrequi =
                            elemento.querySelector(".correquisito_id").value;
                        corq.push({ id: idCorrequi });
                    });
                    $.each(prerrequisito, function (index, elemento) {
                        var idPrerre =
                            elemento.querySelector(".prerrequisito_id").value;
                        preq.push({ id: idPrerre });
                    });
                    caden = JSON.stringify(caden);
                    corq = JSON.stringify(corq);
                    preq = JSON.stringify(preq);
                    $.ajax({
                        url: "/detallemateria/" + id,
                        type: "PATCH",
                        headers: { "X-CSRF-TOKEN": _TOKEN },
                        dataType: "json",
                        data: {
                            materia: f.materia.value,
                            departamento: f.depto.value,
                            materiaEsp: f.matesp.value,
                            cadena: caden,
                            correq: corq,
                            prerr: preq,
                            x: f.ejex.value,
                            y: f.ejey.value,
                        },
                    })
                        .done(function (json) {
                            console.log("success");
                            msj(json.estado, json.mensaje, 0);
                            edit_reticula(json.cve);
                        })
                        .fail(function () {
                            console.log("error");
                        })
                        .always(function () {
                            console.log("complete");
                        });
                } else {
                    f.matesp.focus();
                    msj("Materia", "Favor de llenar el campo", 2);
                }
            } else {
                f.depto.focus();
                msj("Materia", "Favor de llenar el campo", 2);
            }
        } else {
            f.materia.focus();
            msj("Materia", "Favor de llenar el campo", 2);
        }
    }
}

//Eliminar materia de la reticula
function delete_materiareticula(id) {
    $.ajax({
        url: "/detallemateria/" + id,
        type: "DELETE",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "json",
    })
        .done(function (json) {
            console.log("success");
            ocultarModalConfirmacion();
            msj(json.estado, json.mensaje, 0);
            edit_reticula(json.cve);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
}

//Mostrar el edit del Materia reticula
function edit_materiareticula(id) {
    mp();
    $.ajax({
        url: "/detallemateria/" + id + "/edit",
        type: "GET",
        headers: { "X-CSRF-TOKEN": _TOKEN },
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
            op();
            console.log("complete");
        });
}

//Actualizar los datos BD Detalle materia
function update_materiareticula(f, cve) {
    var caden = [];
    var cadenas = $(".row_cadena");
    var corq = [];
    var correquisitos = $(".row_correquisito");
    var preq = [];
    var prerrequisito = $(".row_prerrequisito");
    if (
        f.materia.value.length == 0 &&
        f.depto.value.length == 0 &&
        f.matesp.value.length == 0
    ) {
        msj("Materia", "Favor de llenar los campos", 2);
    } else {
        if (f.materia.value.length > 0) {
            if (f.depto.value.length > 0) {
                if (f.matesp.value.length > 0) {
                    $.each(cadenas, function (index, elemento) {
                        var idCadena =
                            elemento.querySelector(".cadena_id").value;
                        caden.push({ id: idCadena });
                    });
                    $.each(correquisitos, function (index, elemento) {
                        var idCorrequi =
                            elemento.querySelector(".correquisito_id").value;
                        corq.push({ id: idCorrequi });
                    });
                    $.each(prerrequisito, function (index, elemento) {
                        var idPrerre =
                            elemento.querySelector(".prerrequisito_id").value;
                        preq.push({ id: idPrerre });
                    });
                    caden = JSON.stringify(caden);
                    corq = JSON.stringify(corq);
                    preq = JSON.stringify(preq);
                    $.ajax({
                        url: "/detallemateria",
                        type: "UPDATE",
                        headers: { "X-CSRF-TOKEN": _TOKEN },
                        dataType: "json",
                        data: {
                            materia: f.materia.value,
                            departamento: f.depto.value,
                            materiaEsp: f.matesp.value,
                            cadena: caden,
                            correq: corq,
                            prerr: preq,
                            ret: cve,
                            x: f.ejex.value,
                            y: f.ejey.value,
                        },
                    })
                        .done(function (json) {
                            console.log("success");
                            msj(json.estado, json.mensaje, 0);
                            regresar_reticula(cve, json.tam);
                        })
                        .fail(function () {
                            console.log("error");
                        })
                        .always(function () {
                            console.log("complete");
                        });
                } else {
                    f.matesp.focus();
                    msj("Materia", "Favor de llenar el campo", 2);
                }
            } else {
                f.depto.focus();
                msj("Materia", "Favor de llenar el campo", 2);
            }
        } else {
            f.materia.focus();
            msj("Materia", "Favor de llenar el campo", 2);
        }
    }
}

// Limpia el formulario
function limpiar_reticula() {
    $("#form-reticula")[0].reset();
    listado_reticula();
}

//generar NUMEROS Y LETRAS ALEATORIAS
function generarLetra() {
    var letras = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
    ];
    var numero = (Math.random() * 15).toFixed(0);
    return letras[numero];
}

//generar colores Aleatorios
function colorHEX() {
    var coolor = "";
    for (var i = 0; i < 6; i++) {
        coolor = coolor + generarLetra();
    }
    return "#" + coolor;
}
/*--------------------------------------------------------------------------------
                    Temario
------------------------------------------------------------------------------- */

//Mostrar el formulario para registrar una nueva Temario
function nueva_temario() {
    mp();
    $.ajax({
        url: "/temario/create",
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
            op();
            console.log("complete");
        });
}

//Mostrar el listado de los Temario
function listado_temario() {
    mp();
    $.ajax({
        url: "/temario/",
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
            op();
            console.log("complete");
        });
}

//Mostrar la consulta del un Temario
function consultar_temario(id) {
    mp();
    $.ajax({
        url: "/temario/" + id,
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
            op();
            console.log("complete");
        });
}

//Mostrar el edit del Temario
function edit_temario(id) {
    mp();
    $.ajax({
        url: "/temario/" + id + "/edit",
        type: "GET",
        headers: { "X-CSRF-TOKEN": _TOKEN },
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
            op();
            console.log("complete");
        });
}

//Acomodar subtemas
function ajustarSub(texto) {
    var cadTex = "";
    var banderaPunto = false;
    var banderaEspacio = false;
    for (let i = 0; i < texto.length; i++) {
        if (texto.charCodeAt(i) == "46") {
            banderaPunto = true;
        } else {
            if (texto.charCodeAt(i) == "32" && banderaPunto) {
                banderaEspacio = true;
            } else {
                console.log("Falso" + texto.charAt(i));
                if (!isNaN(parseInt("" + texto.charAt(i))) && banderaEspacio) {
                    cadTex += "<br>";
                    banderaEspacio = false;
                    banderaPunto = false;
                } else {
                    banderaEspacio = false;
                    banderaPunto = false;
                }
            }
        }
        cadTex += texto.charAt(i);
    }
    return cadTex;
}
//Remplazar el carracter raro
function quitar_caracter(texto) {
    var cad = "";
    cad = texto.replace(/\/g, "");
    return cad;
}
//Remplazar el caracter en la caracterizacion
function quitarCaracterCarac(cadena) {
    var cad = "";
    cad = cadena.replace(/\/g, "\n-");
    return cad;
}

//Acomodador competencias
function ajustarCompetencias(texto) {
    var cadtexto = "";
    var banderaP = false;
    var banderaEsp = false;
    texto = quitar_caracter(texto);
    for (let i = 0; i < texto.length; i++) {
        if (texto.charCodeAt(i) == "46") {
            banderaP = true;
        } else {
            if (texto.charCodeAt(i) == "32" && banderaP) {
                banderaEsp = true;
            } else {
                if (banderaEsp) {
                    cadtexto += "<br>";
                    banderaP = false;
                    banderaEsp = false;
                } else {
                    baderaP = false;
                    banderaEsp = false;
                }
            }
        }
        cadtexto += texto.charAt(i);
    }
    return cadtexto;
}

//Acomodar la intencion
function ajustarIntencion(texto) {
    var Cad = "";
    Cad = texto.replace(". ", ".\n");
    return Cad;
}

//Acomodar caracterizacion
function ajustarCaracterizacion(texto) {
    var cadena = "";
    cadena = texto.replace(".  ", ".\n");
    cadena = quitarCaracterCarac(cadena);
    return cadena;
}

//Acomodar practica
function ajustarPractica(text) {
    var cad = "";
    cad = text.replace(/\/g, "\n");
    return cad;
}

//Acomodar proyecto
function ajustarProyect(text) {
    var c = "";
    c = text.replace(/\/g, "\n");
    return c;
}

//Acomodar evaluación
function ajustarEval(text) {
    var c = "";
    c = text.replace(". ", ".\n");
    return c;
}

//Acomodar las fuentes
function ajustarFuentes(text) {
    var c = "";
    c = text.replace(": ", "\n");
    c = c.replace(/\d{1}/g + ".", "\n");
    return c;
}

//Mostar act apren
function mostarAApren() {
    $("#act_apren").append(
        "<div class='x_title'>" +
            "<h2>Actividades de aprendizaje</h2>" +
            "<div class='clearfix'></div>" +
            "</div>" +
            "<div class='mb-1 row'>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "</div>" +
            "<div class='col-form-label col-md-8 col-sm-10 col-xs-12 text-left'>" +
            "<label class='text-sm-left' for='nouni'>No.Unidad" +
            "<span class='required'>*</span>" +
            "</label>" +
            "</div>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "</div>" +
            "</div>" +
            "<div class='mb-1 row'>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "</div>" +
            "<div class='col-form-label col-md-8 col-sm-10 col-xs-12 text-left'>" +
            "<select id='nouni' name='nouni' required='required' class='form-control'>" +
            "<option value=''>--Seleccione--</option>" +
            "</select>" +
            "</div>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "</div>" +
            "</div>" +
            "<div class='mb-1 row'>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "</div>" +
            "<div class='col-md-8 col-sm-10 col-xs-12'>" +
            "<div class='alert alert-danger' role='alert' id='a_nouni' style='display: none'>" +
            "</div>" +
            "</div>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "</div>" +
            "</div>" +
            "<div class='mb-1 row'>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "</div>" +
            "<div class='col-form-label col-md-8 col-sm-10 col-xs-12 text-left'>" +
            "<label class='text-sm-left' for='competenciaesp'>Competencia especifica <span class='required'>*</span></label>" +
            "</div>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "</div>" +
            "</div>" +
            "<div class='mb-1 row'>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "</div>" +
            "<div class='col-form-label col-md-8 col-sm-10 col-xs-12 text-left'>" +
            "<textarea class='form-control form-control-sm' id='competenciaesp' name='competenciaesp' rows='3' style='resize: none'></textarea>" +
            "</div>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "</div>" +
            "</div>" +
            "<div class='mb-1 row'>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "</div>" +
            "<div class='col-md-8 col-sm-10 col-xs-12'>" +
            "<div class='alert alert-danger' role='alert' id='a_comesp' style='display: none'>" +
            "</div>" +
            "</div>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "</div>" +
            "</div>" +
            "<div class='mb-1 row'>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "</div>" +
            "<div class='col-form-label col-md-8 col-sm-10 col-xs-12 text-left'>" +
            " <label class='text-sm-left' for='competenciagen'>Competencia genérica <span class='required'>*</span></label>" +
            "</div>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "</div>" +
            "</div>" +
            "<div class='mb-1 row'>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "</div>" +
            "<div class='col-form-label col-md-8 col-sm-10 col-xs-12 text-left'>" +
            " <textarea class='form-control form-control-sm' id='competenciagen' name='competenciagen' rows='3' style='resize: none'></textarea>" +
            "</div>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "</div>" +
            "</div>" +
            "<div class='mb-1 row'>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "</div>" +
            "<div class='col-md-8 col-sm-10 col-xs-12'>" +
            "<div class='alert alert-danger' role='alert' id='a_compet' style='display: none'>" +
            "</div>" +
            "</div>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "</div>" +
            "</div>" +
            "<div class='mb-1 row'>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "</div>" +
            "<div class='col-form-label col-md-8 col-sm-10 col-xs-12 text-left'>" +
            "<label class='text-sm-left' for='actapre'>Actividades de aprendizaje <span class='required'>*</span></label>" +
            "</div>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "</div>" +
            "</div>" +
            "<div class='mb-1 row'>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "</div>" +
            "<div class='col-form-label col-md-8 col-sm-10 col-xs-12 text-left'>" +
            "<textarea class='form-control form-control-sm' id='actapre' name='actapre' rows='3' style='resize: none'></textarea>" +
            "</div>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "<button type='button' class='btn btn-secondary ' onclick='mas_competencias()'><i class='fa fa-plus'></i></button>" +
            "</div>" +
            "</div>" +
            "<div class='mb-1 row'>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "</div>" +
            "<div class='col-md-8 col-sm-10 col-xs-12'>" +
            "<div class='alert alert-danger' role='alert' id='a_compet' style='display: none'>" +
            "</div>" +
            "</div>" +
            "<div class='col-form-label col-md-2 col-sm-1 d-none d-sm-block'>" +
            "</div>" +
            "</div>"
    );
}
var b = 0;
function modificar_uni() {
    var unidad = $("#numero").val();
    var tema = $("#tema").val();
    var subtema = $("#subtema").val();
    var idbtndele = "btn_" + unidad;
    var dele = unidad;
    var row_unidades = $("#rowunidad_" + unidad);
    var id_nuevo = "rowunidad_" + unidad;
    var bandera = false;
    if (unidad != "") {
        if (tema != "") {
            $.each(row_unidades, function (index, elemento) {
                console.log(elemento.id);
                bandera = true;
            });

            if (!bandera) {
                $.each(row_unidades, function (index, elemento) {
                    console.log(elemento.id);
                });
                console.log(!!document.getElementById("tabla"));
                if (!!document.getElementById("tabla")) {
                    $("#contenedor_reng").append(
                        "<tr class='row_unidades' id='" +
                            id_nuevo +
                            "'>" +
                            "<input type='hidden' class='numero_id' id='numero_" +
                            unidad +
                            "'  value='" +
                            unidad +
                            "' >" +
                            "<input type='hidden' class='tema_id' id='tema_" +
                            unidad +
                            "'  value='" +
                            tema +
                            "' >" +
                            "<input type='hidden' class='subtema_id' id='subtema_" +
                            unidad +
                            "' value='" +
                            subtema +
                            "'>" +
                            "<td data-label='No. Unidad: ' class='u'>" +
                            unidad +
                            "</td>" +
                            "<td data-label='Tema' class='t'>" +
                            tema +
                            "</td>" +
                            "<td data-label='Subtema' class='s'><ol class='row_subtemas' id=subT_'" +
                            id_nuevo +
                            "'>" +
                            ajustarSub(subtema) +
                            "</ol></td>" +
                            "<td data-label='Acción' class='text-center'><button id='" +
                            idbtndele +
                            "' type='button' class='btn btn-danger btn-sm' onclick='menos_unidades(\"" +
                            id_nuevo +
                            '","' +
                            dele +
                            "\")'><i class='fa fa-trash'></i></button></td>" +
                            "</tr>"
                    );
                } else {
                    cont = 1;
                    $("#contenedor_unidades").append(
                        "<div class='form-group' id='temario'>" +
                            "<div class=''>" +
                            "<table id='tabla' class='table table-striped jambo_table bulk_action'>" +
                            "<thead>" +
                            "<tr>" +
                            "<td><center>No. Unidad</center></td>" +
                            "<td><center>Tema</center></td>" +
                            "<td><center>Subtema</center></td>" +
                            "<td class='column-title no-link last'><center>Acción</center></td>" +
                            "</tr>" +
                            "</thead>" +
                            "<tbody id='contenedor_reng'>" +
                            "</tbody>" +
                            "</table>" +
                            "</div>" +
                            "</div>"
                    );

                    $("#contenedor_reng").append(
                        "<tr class='row_unidades' id='" +
                            id_nuevo +
                            "'>" +
                            "<input type='hidden' class='numero_id' id='numero_" +
                            unidad +
                            "' value='" +
                            unidad +
                            "' >" +
                            "<input type='hidden' class='tema_id' id='tema_" +
                            unidad +
                            "' value='" +
                            tema +
                            "' >" +
                            "<input type='hidden' class='subtema_id' id='subtema_" +
                            unidad +
                            "' value='" +
                            subtema +
                            "'>" +
                            "<td data-label='No. Unidad: ' class='u'>" +
                            unidad +
                            "</td>" +
                            "<td data-label='Tema' class='t'>" +
                            tema +
                            "</td>" +
                            "<td data-label='Subtema: ' class='s'><ol class='row_subtemas' id=subT_'" +
                            id_nuevo +
                            "'>" +
                            ajustarSub(subtema) +
                            "</ol></td>" +
                            "<td data-label='Acción: ' class='text-center'><button id='" +
                            idbtndele +
                            "' type='button' class='btn btn-danger btn-sm' onclick='menos_unidades(\"" +
                            id_nuevo +
                            '","' +
                            dele +
                            "\")'><i class='fa fa-trash'></i></button></td>" +
                            "</tr>"
                    );
                }
                if ($("#act_apren").html().trim() == "") {
                    $("#act_apren").css("display", "block");
                    mostarAApren();
                    console.log("Entre");
                } else {
                    $("#act_apren").css("display", "block");
                    console.log("no Entre");
                }

                disp_uni(unidad);
                limpiar_unidad();
            } else {
                msj("Unidad", "Esta unidad ya existe", 2);
            }
        } else {
            msj("Unidad", "Escriba el tema ", 2);
        }
    } else {
        msj("Unidad", "Escriba la unidad ", 2);
    }
}
//Agregar No.unidad,tema por unidad en la vista de Temario
function mas_unidades() {
    var unidad = $("#numero").val();
    var tema = $("#tema").val();
    var subtema = $("#subtema").val();
    var idbtndele = "btn_" + unidad;
    var dele = unidad;
    var row_unidades = $("#rowunidad_" + unidad);
    var id_nuevo = "rowunidad_" + unidad;
    var bandera = false;
    if (unidad != "") {
        if (tema != "") {
            $.each(row_unidades, function (index, elemento) {
                console.log(elemento.id);
                bandera = true;
            });

            if (!bandera) {
                $.each(row_unidades, function (index, elemento) {
                    console.log(elemento.id);
                });
                console.log(!!document.getElementById("tabla"));
                if (!!document.getElementById("tabla")) {
                    $("#contenedor_reng").append(
                        "<tr class='row_unidades' id='" +
                            id_nuevo +
                            "'>" +
                            "<input type='hidden' class='numero_id' id='numero_" +
                            unidad +
                            "'  value='" +
                            unidad +
                            "' >" +
                            "<input type='hidden' class='tema_id' id='tema_" +
                            unidad +
                            "'  value='" +
                            tema +
                            "' >" +
                            "<input type='hidden' class='subtema_id' id='subtema_" +
                            unidad +
                            "' value='" +
                            subtema +
                            "'>" +
                            "<td data-label='No. Unidad: ' class='u'>" +
                            unidad +
                            "</td>" +
                            "<td data-label='Tema' class='t'>" +
                            tema +
                            "</td>" +
                            "<td data-label='Subtema' class='s'><ol class='row_subtemas' id=subT_'" +
                            id_nuevo +
                            "'>" +
                            ajustarSub(subtema) +
                            "</ol></td>" +
                            "<td data-label='Acción' class='text-center'><button id='" +
                            idbtndele +
                            "' type='button' class='btn btn-danger btn-sm' onclick='menos_unidades(\"" +
                            id_nuevo +
                            '","' +
                            dele +
                            "\")'><i class='fa fa-trash'></i></button></td>" +
                            "</tr>"
                    );
                } else {
                    cont = 1;
                    $("#contenedor_unidades").append(
                        "<div class='form-group' id='temario'>" +
                            "<div class=''>" +
                            "<table id='tabla' class='table table-striped jambo_table bulk_action'>" +
                            "<thead>" +
                            "<tr>" +
                            "<td><center>No. Unidad</center></td>" +
                            "<td><center>Tema</center></td>" +
                            "<td><center>Subtema</center></td>" +
                            "<td class='column-title no-link last'><center>Acción</center></td>" +
                            "</tr>" +
                            "</thead>" +
                            "<tbody id='contenedor_reng'>" +
                            "</tbody>" +
                            "</table>" +
                            "</div>" +
                            "</div>"
                    );

                    $("#contenedor_reng").append(
                        "<tr class='row_unidades' id='" +
                            id_nuevo +
                            "'>" +
                            "<input type='hidden' class='numero_id' id='numero_" +
                            unidad +
                            "' value='" +
                            unidad +
                            "' >" +
                            "<input type='hidden' class='tema_id' id='tema_" +
                            unidad +
                            "' value='" +
                            tema +
                            "' >" +
                            "<input type='hidden' class='subtema_id' id='subtema_" +
                            unidad +
                            "' value='" +
                            subtema +
                            "'>" +
                            "<td data-label='No. Unidad: ' class='u'>" +
                            unidad +
                            "</td>" +
                            "<td data-label='Tema' class='t'>" +
                            tema +
                            "</td>" +
                            "<td data-label='Subtema: ' class='s'><ol class='row_subtemas' id=subT_'" +
                            id_nuevo +
                            "'>" +
                            ajustarSub(subtema) +
                            "</ol></td>" +
                            "<td data-label='Acción: ' class='text-center'><button id='" +
                            idbtndele +
                            "' type='button' class='btn btn-danger btn-sm' onclick='menos_unidades(\"" +
                            id_nuevo +
                            '","' +
                            dele +
                            "\")'><i class='fa fa-trash'></i></button></td>" +
                            "</tr>"
                    );
                    if ($("#act_apren").html().trim() == "") {
                        $("#act_apren").css("display", "block");
                        mostarAApren();
                        console.log("Entre");
                    } else {
                        $("#act_apren").css("display", "block");
                        console.log("no Entre");
                    }
                }
                disp_uni(unidad);
                limpiar_unidad();
            } else {
                msj("Unidad", "Esta unidad ya existe", 2);
            }
        } else {
            msj("Unidad", "Escriba el tema ", 2);
        }
    } else {
        msj("Unidad", "Escriba la unidad ", 2);
    }
}

//Agregar no.unidades disponibles para actividades de aprendisaje
function disp_uni(no) {
    console.log("Entre" + no);
    $("#nouni").append("<option value=" + no + ">" + no + "</option>");
}

//Eliminar la unidad en la vista PLAN DE ESTUDIOS
function menos_unidades(id, eliminarop) {
    console.log("Eliminar " + eliminarop);
    $("#nouni option[value='" + eliminarop + "']").each(function () {
        $(this).remove();
    });
    $("#" + id).remove();
    u = $(".u").val();
    t = $(".t").val();
    opt = "Unidad" + u + " -" + t;
    console.log(opt);
    if (!$(".row_unidades").length) {
        $("#temario").remove();
        cont = 0;
        if ($("#act_apren").html().trim() != "") {
            $("#act_apren").css("display", "none");
        }
        var opt_u = document.getElementById("nouni");
        opt_u.remove(no_uni.selectedIndex);
    }
}

function menos_competencias(id, activar) {
    console.log("SOY:" + activar);
    $("#" + activar).css("display", "block");
    $("#" + id).remove();
    u = $(".u").val();
    t = $(".t").val();
    opt = "Unidad" + u + " -" + t;
    console.log(opt);
    if (!$(".row_competencias").length) {
        $("#competencia").remove();
        contador = 0;
    }
}
var contador = 0;
//Limpia las cajas para poder ingresar otra unidad
function limpiar_unidad() {
    $("#numero").val("");
    $("#tema").val("");
    $("#subtema").val("");
}

//Limpia las cajas para poder ingresar mas actividades de aprendizaje
function limpiar_actapre() {
    $("#nouni").val("");
    $("#competenciaesp").val("");
    $("#competenciagen").val("");
    $("#actapre").val("");
}

//Agregar competencias genericas y especificas por unidad en la vista de PLAN DE ESTUDIOS
function mas_competencias() {
    var numeroU = $("#nouni").val();
    var no_uni = $("#nouni").find("option");
    var nombre = "";
    var row_competencias = $(".row_competencias");
    var id_nunidad = "row_" + numeroU;
    var competencia = $("#competenciaesp").val();
    var competenciage = $("#competenciagen").val();
    var actapre = $("#actapre").val();
    var n = $("#nouni").val();
    var nombre = "";
    var row_competencias = $(".row_competencia");
    var id_nuevo = "rowcompetencias_" + numeroU;
    var btn_Act = "btn_" + numeroU;
    var bandera = false;
    var banderaT = false;
    if (numeroU != "") {
        $.each(row_competencias, function (index, elemento) {
            if (elemento.id == id_nunidad) {
                banderaT = true;
            }
        });
        if (!banderaT) {
            $.each(no_uni, function (index, elemento) {
                if (numeroU == elemento.value) {
                    nombre = elemento.innerText;
                }
            });

            if (competencia != "") {
                $.each(row_competencias, function (index, elemento) {
                    if (elemento.id == id_nuevo) {
                        bandera = true;
                    }
                });
                if (!!document.getElementById("tabla2")) {
                    $("#contenedor_rengcom").append(
                        "<tr class='row_competencias' id='" +
                            id_nunidad +
                            "'>" +
                            "<td data-label='No. Unidad: ' class='u'>" +
                            n +
                            "</td>" +
                            "<td data-label='Competencia especifica: ' class='t'>" +
                            ajustarCompetencias(competencia) +
                            "</td>" +
                            "<td data-label='Competencia genérica: ' class='t'>" +
                            ajustarCompetencias(competenciage) +
                            "</td>" +
                            "<td data-label='Actividades de aprendizaje: ' class=''>" +
                            ajustarCompetencias(actapre) +
                            "</td>" +
                            "<td data-label='Acción: 'class='text-center'>" +
                            "<button type='button' class='btn btn-danger btn-sm' onclick='menos_competencias(\"" +
                            id_nunidad +
                            '","' +
                            btn_Act +
                            "\")'><i class='fa fa-trash'></i></button>" +
                            "</td>" +
                            "<input type='hidden' class='unidad_id' id='unidad_" +
                            numeroU +
                            "'  value='" +
                            numeroU +
                            "' >" +
                            "<input type='hidden' class='competenciaesp_id' id='competenciaesp_" +
                            ajustarCompetencias(competencia) +
                            "'  value='" +
                            ajustarCompetencias(competencia) +
                            "' >" +
                            "<input type='hidden' class='competenciage_id' id='competenciage_" +
                            ajustarCompetencias(competenciage) +
                            "'  value='" +
                            ajustarCompetencias(competenciage) +
                            "' >" +
                            "<input type='hidden' class='actapre_id' id='actapre_" +
                            ajustarCompetencias(actapre) +
                            "'  value='" +
                            ajustarCompetencias(actapre) +
                            "' >" +
                            "</tr>"
                    );

                    $("#btn_" + numeroU).css("display", "none");
                } else {
                    $("#contenedor_competencias").append(
                        "<div class='form-group' id='competencia'>" +
                            "<div class=''>" +
                            "<table id='tabla2' class='table table-striped jambo_table bulk_action'>" +
                            "<thead>" +
                            "<tr>" +
                            "<td><center>No. Unidad</center></td>" +
                            "<td><center>Competencias Especificas</center></td>" +
                            "<td><center>Competecias Genérica</center></td>" +
                            "<td><center>Actividades de Aprendizaje</center></td>" +
                            "<td class='column-title no-link last'><center>Acción</center></td>" +
                            "</tr>" +
                            "</thead>" +
                            "<tbody id='contenedor_rengcom'>" +
                            "</tbody>" +
                            "</table>" +
                            "</div>" +
                            "</div>"
                    );
                    $("#contenedor_rengcom").append(
                        "<tr class='row_competencias' id='" +
                            id_nunidad +
                            "'>" +
                            "<td data-label='No. Unidad: ' class='u'>" +
                            nombre +
                            "</td>" +
                            "<td data-label='Competencia especifica: ' class='t'>" +
                            ajustarCompetencias(competencia) +
                            "</td>" +
                            "<td data-label='Competencia genérica: ' class='t'>" +
                            ajustarCompetencias(competenciage) +
                            "</td>" +
                            "<td data-label='Actividades de aprendizaje: ' class=''>" +
                            ajustarCompetencias(actapre) +
                            "</td>" +
                            "<td data-label='Acción: 'class='text-center'>" +
                            "<button type='button' class='btn btn-danger btn-sm' onclick='menos_competencias(\"" +
                            id_nunidad +
                            '","' +
                            btn_Act +
                            "\")'><i class='fa fa-trash'></i></button>" +
                            "</td>" +
                            "<input type='hidden' class='unidad_id' id='unidad_" +
                            numeroU +
                            "'  value='" +
                            numeroU +
                            "' >" +
                            "<input type='hidden' class='competenciaesp_id' id='competenciaesp_" +
                            ajustarCompetencias(competencia) +
                            "'  value='" +
                            ajustarCompetencias(competencia) +
                            "' >" +
                            "<input type='hidden' class='competenciage_id' id='competenciage_" +
                            ajustarCompetencias(competenciage) +
                            "'  value='" +
                            ajustarCompetencias(competenciage) +
                            "' >" +
                            "<input type='hidden' class='actapre_id' id='actapre_" +
                            ajustarCompetencias(actapre) +
                            "'  value='" +
                            ajustarCompetencias(actapre) +
                            "' >" +
                            "</tr>"
                    );
                    $("#btn_" + numeroU).css("display", "none");
                    contador = contador + 1;
                }
                limpiar_actapre();
            } else {
                msj("Competencias", "Llene las cajas de Competencias", 2);
            }
        } else {
            msj("Competencias", "La unidad ya tiene competencias agregadas", 2);
        }
    } else {
        msj("Competencias", "seleccione la unidad porfavor", 2);
    }
}

//Guarda los datos en la BD Unidad
function add_unidad(f) {
    var u = [];
    var com = [];
    var unidades = $(".row_unidades");
    var competencias = $(".row_competencias");
    var cara, intent, prac, proyec, eval;
    if (f.materia.value.length > 0) {
        if (f.horasT.value.length > 0) {
            if (f.horasP.value.length > 0) {
                if (f.caracterasig.value.length > 0) {
                    cara = ajustarCaracterizacion(f.caracterasig.value);
                    if (f.intencion.value.length > 0) {
                        intent = ajustarIntencion(f.intencion.value);
                        if (f.competenciasdesa.value.length > 0) {
                            if (f.competenciaspre.value.length > 0) {
                                if (!!document.getElementById("temario")) {
                                    if (
                                        !!document.getElementById("competencia")
                                    ) {
                                        $.each(
                                            unidades,
                                            function (index, elemento) {
                                                var idNumero =
                                                    elemento.querySelector(
                                                        ".numero_id"
                                                    ).value;
                                                var idTema =
                                                    elemento.querySelector(
                                                        ".tema_id"
                                                    ).value;
                                                var idSubtema =
                                                    elemento.querySelector(
                                                        ".subtema_id"
                                                    ).value;
                                                u.push({
                                                    id: idNumero,
                                                    tema: idTema,
                                                    subtema: idSubtema,
                                                });
                                            }
                                        );

                                        $.each(
                                            competencias,
                                            function (index, elemento) {
                                                var idUnidad =
                                                    elemento.querySelector(
                                                        ".unidad_id"
                                                    ).value;
                                                var idcomesp =
                                                    elemento.querySelector(
                                                        ".competenciaesp_id"
                                                    ).value;
                                                var idcomgen =
                                                    elemento.querySelector(
                                                        ".competenciage_id"
                                                    ).value;
                                                var actapre =
                                                    elemento.querySelector(
                                                        ".actapre_id"
                                                    ).value;
                                                com.push({
                                                    id: idUnidad,
                                                    competenciaE: idcomesp,
                                                    competenciaG: idcomgen,
                                                    actividadA: actapre,
                                                });
                                            }
                                        );
                                        u = JSON.stringify(u);
                                        com = JSON.stringify(com);
                                        console.log("Soy com" + com);
                                        if (f.practica.value.length > 0) {
                                            prac = ajustarPractica(
                                                f.practica.value
                                            );
                                            if (f.proyecasig.value.length > 0) {
                                                proyec = ajustarProyect(
                                                    f.proyecasig.value
                                                );
                                                if (
                                                    f.evalcom.value.length > 0
                                                ) {
                                                    eval = ajustarEval(
                                                        f.evalcom.value
                                                    );
                                                    if (
                                                        f.fuenteinf.value
                                                            .length > 0
                                                    ) {
                                                        $.ajax({
                                                            url: "/temario",
                                                            type: "POST",
                                                            headers: {
                                                                "X-CSRF-TOKEN":
                                                                    _TOKEN,
                                                            },
                                                            dataType: "json",
                                                            data: {
                                                                materia:
                                                                    f.materia
                                                                        .value,
                                                                horasT: f.horasT
                                                                    .value,
                                                                horasP: f.horasP
                                                                    .value,
                                                                totalH: f.totalH
                                                                    .value,
                                                                caracterAsig:
                                                                    cara,
                                                                intencion:
                                                                    intent,
                                                                competenciasD:
                                                                    f
                                                                        .competenciasdesa
                                                                        .value,
                                                                competenciasP:
                                                                    f
                                                                        .competenciaspre
                                                                        .value,
                                                                unidad: u,
                                                                competencias:
                                                                    com,
                                                                practica: prac,
                                                                proyecasig:
                                                                    proyec,
                                                                evalcom: eval,
                                                                fuentesinfo:
                                                                    f.fuenteinf
                                                                        .value,
                                                            },
                                                        })
                                                            .done(function (
                                                                json
                                                            ) {
                                                                console.log(
                                                                    "success"
                                                                );
                                                                if (
                                                                    json.cve ==
                                                                    1
                                                                ) {
                                                                    msj(
                                                                        json.estado,
                                                                        json.mensaje,
                                                                        0
                                                                    );
                                                                    listado_temario();
                                                                } else {
                                                                    msj(
                                                                        json.estado,
                                                                        json.mensaje,
                                                                        2
                                                                    );
                                                                    listado_temario();
                                                                }
                                                            })
                                                            .fail(function () {
                                                                console.log(
                                                                    "error"
                                                                );
                                                            })
                                                            .always(
                                                                function () {
                                                                    console.log(
                                                                        "complete"
                                                                    );
                                                                }
                                                            );
                                                    } else {
                                                        f.fuenteinf.focus();
                                                        msj(
                                                            "Materia",
                                                            "Favor de llenar la caja",
                                                            2
                                                        );
                                                    }
                                                } else {
                                                    f.evalcom.focus();
                                                    msj(
                                                        "Materia",
                                                        "Favor de llenar la caja",
                                                        2
                                                    );
                                                }
                                            } else {
                                                f.proyecasig.focus();
                                                msj(
                                                    "Materia",
                                                    "Favor de llenar la caja",
                                                    2
                                                );
                                            }
                                        } else {
                                            f.practica.focus();
                                            msj(
                                                "Materia",
                                                "Favor de llenar la caja",
                                                2
                                            );
                                        }
                                    } else {
                                        f.nouni.focus();
                                        msj(
                                            "Materia",
                                            "Favor de ingresar minimo las actividades de aprendizaje por unidad",
                                            2
                                        );
                                    }
                                } else {
                                    f.numero.focus();
                                    msj(
                                        "Materia",
                                        "Favor de ingresar minimo una unidad",
                                        2
                                    );
                                }
                            } else {
                                f.competenciaspre.focus();
                                msj("Materia", "Favor de llenar la caja", 2);
                            }
                        } else {
                            f.competenciasdesa.focus();
                            msj("Materia", "Favor de llenar la caja", 2);
                        }
                    } else {
                        f.intencion.focus();
                        msj("Materia", "Favor de llenar la caja", 2);
                    }
                } else {
                    f.caracterasig.focus();
                    msj("Materia", "Favor de llenar la caja", 2);
                }
            } else {
                f.horasP.focus();
                msj("Materia", "Favor de llenar la caja", 2);
            }
        } else {
            f.horasT.focus();
            msj("Materia", "Favor de llenar la caja", 2);
        }
    } else {
        f.materia.focus();
        msj("Materia", "Favor de llenar la caja", 2);
    }
}

//Actualizar una unidad
function update_unaUnidad(f, id, re) {
    var numero = $("#nu").val();
    var tema = $("#te").val();
    var subtema = $("#su").val();
    subtema = quitar_caracter(subtema);
    subtema = ajustarSub(subtema);
    console.log(subtema);
    if (numero.length > 0) {
        if (tema.length > 0) {
            if (subtema.length > 0) {
                $.ajax({
                    url: "/unidad/" + id,
                    type: "POST",
                    headers: { "X-CSRF-TOKEN": _TOKEN },
                    dataType: "json",
                    data: {
                        n: numero,
                        t: tema,
                        s: subtema,
                    },
                })
                    .done(function (json) {
                        console.log("success");
                        msj(json.estado, json.mensaje, 0);
                        edit_temario(re);
                    })
                    .fail(function () {
                        console.log("error");
                    })
                    .always(function () {
                        ocultarModalUnidad();
                        console.log("complete");
                    });
            } else {
            }
        } else {
        }
    } else {
    }
}

//Actualizar actividad de aprendisaje
function update_unaActividad(id, re) {
    var numero = $("#nu").val();
    var actAp = $("#actapre").val();
    var comEs = $("#comes").val();
    var comGe = $("#comge").val();
    if (numero.length > 0) {
        if (actAp.length > 0) {
            if (comEs.length > 0) {
                if (comGe.length > 0) {
                    $.ajax({
                        url: "/actividad/" + id,
                        type: "POST",
                        headers: { "X-CSRF-TOKEN": _TOKEN },
                        dataType: "json",
                        data: {
                            n: numero,
                            acta: actAp,
                            come: comEs,
                            comg: comGe,
                        },
                    })
                        .done(function (json) {
                            console.log("success");
                            msj(json.estado, json.mensaje, 0);
                            edit_temario(re);
                        })
                        .fail(function () {
                            console.log("error");
                        })
                        .always(function () {
                            ocultarModalAct();
                            console.log("complete");
                        });
                } else {
                }
            } else {
            }
        } else {
        }
    } else {
    }
}

//Actualiza los datos en la BD
function update_temario(f, id) {
    var u = [];
    var com = [];
    var unidades = $(".row_unidades");
    var competencias = $(".row_competencias");
    var cara, intent, prac, proyec, eval;
    if (f.materia.value.length > 0) {
        if (f.horasT.value.length > 0) {
            if (f.horasP.value.length > 0) {
                if (f.caracterasig.value.length > 0) {
                    cara = ajustarCaracterizacion(f.caracterasig.value);
                    if (f.intencion.value.length > 0) {
                        intent = ajustarIntencion(f.intencion.value);
                        if (f.competenciasdesa.value.length > 0) {
                            if (f.competenciaspre.value.length > 0) {
                                if (!!document.getElementById("temario")) {
                                    if (
                                        !!document.getElementById("competencia")
                                    ) {
                                        $.each(
                                            unidades,
                                            function (index, elemento) {
                                                var idNumero =
                                                    elemento.querySelector(
                                                        ".numero_id"
                                                    ).value;
                                                var idTema =
                                                    elemento.querySelector(
                                                        ".tema_id"
                                                    ).value;
                                                var idSubtema =
                                                    elemento.querySelector(
                                                        ".subtema_id"
                                                    ).value;
                                                u.push({
                                                    id: idNumero,
                                                    tema: idTema,
                                                    subtema: idSubtema,
                                                });
                                            }
                                        );

                                        $.each(
                                            competencias,
                                            function (index, elemento) {
                                                var idUnidad =
                                                    elemento.querySelector(
                                                        ".unidad_id"
                                                    ).value;
                                                var idcomesp =
                                                    elemento.querySelector(
                                                        ".competenciaesp_id"
                                                    ).value;
                                                var idcomgen =
                                                    elemento.querySelector(
                                                        ".competenciage_id"
                                                    ).value;
                                                var actapre =
                                                    elemento.querySelector(
                                                        ".actapre_id"
                                                    ).value;
                                                com.push({
                                                    id: idUnidad,
                                                    competenciaE: idcomesp,
                                                    competenciaG: idcomgen,
                                                    actividadA: actapre,
                                                });
                                            }
                                        );
                                        u = JSON.stringify(u);
                                        com = JSON.stringify(com);
                                        console.log("Soy com" + com);
                                        if (f.practica.value.length > 0) {
                                            prac = ajustarPractica(
                                                f.practica.value
                                            );
                                            if (f.proyecasig.value.length > 0) {
                                                proyec = ajustarProyect(
                                                    f.proyecasig.value
                                                );
                                                if (
                                                    f.evalcom.value.length > 0
                                                ) {
                                                    eval = ajustarEval(
                                                        f.evalcom.value
                                                    );
                                                    if (
                                                        f.fuenteinf.value
                                                            .length > 0
                                                    ) {
                                                        $.ajax({
                                                            url:
                                                                "/temario/" +
                                                                id,
                                                            type: "PATCH",
                                                            headers: {
                                                                "X-CSRF-TOKEN":
                                                                    _TOKEN,
                                                            },
                                                            dataType: "json",
                                                            data: {
                                                                materia:
                                                                    f.materia
                                                                        .value,
                                                                horasT: f.horasT
                                                                    .value,
                                                                horasP: f.horasP
                                                                    .value,
                                                                totalH: f.totalH
                                                                    .value,
                                                                caracterAsig:
                                                                    cara,
                                                                intencion:
                                                                    intent,
                                                                competenciasD:
                                                                    f
                                                                        .competenciasdesa
                                                                        .value,
                                                                competenciasP:
                                                                    f
                                                                        .competenciaspre
                                                                        .value,
                                                                unidad: u,
                                                                competencias:
                                                                    com,
                                                                practica: prac,
                                                                proyecasig:
                                                                    proyec,
                                                                evalcom: eval,
                                                                fuentesinfo:
                                                                    f.fuenteinf
                                                                        .value,
                                                            },
                                                        })
                                                            .done(function (
                                                                json
                                                            ) {
                                                                console.log(
                                                                    "success"
                                                                );
                                                                msj(
                                                                    json.estado,
                                                                    json.mensaje,
                                                                    0
                                                                );
                                                                listado_temario();
                                                            })
                                                            .fail(function () {
                                                                console.log(
                                                                    "error"
                                                                );
                                                            })
                                                            .always(
                                                                function () {
                                                                    console.log(
                                                                        "complete"
                                                                    );
                                                                }
                                                            );
                                                    } else {
                                                        f.fuenteinf.focus();
                                                        msj(
                                                            "Materia",
                                                            "Favor de llenar la caja",
                                                            2
                                                        );
                                                    }
                                                } else {
                                                    f.evalcom.focus();
                                                    msj(
                                                        "Materia",
                                                        "Favor de llenar la caja",
                                                        2
                                                    );
                                                }
                                            } else {
                                                f.proyecasig.focus();
                                                msj(
                                                    "Materia",
                                                    "Favor de llenar la caja",
                                                    2
                                                );
                                            }
                                        } else {
                                            f.practica.focus();
                                            msj(
                                                "Materia",
                                                "Favor de llenar la caja",
                                                2
                                            );
                                        }
                                    } else {
                                        f.nouni.focus();
                                        msj(
                                            "Materia",
                                            "Favor de ingresar minimo las actividades de aprendizaje por unidad",
                                            2
                                        );
                                    }
                                } else {
                                    f.numero.focus();
                                    msj(
                                        "Materia",
                                        "Favor de ingresar minimo una unidad",
                                        2
                                    );
                                }
                            } else {
                                f.competenciaspre.focus();
                                msj("Materia", "Favor de llenar la caja", 2);
                            }
                        } else {
                            f.competenciasdesa.focus();
                            msj("Materia", "Favor de llenar la caja", 2);
                        }
                    } else {
                        f.intencion.focus();
                        msj("Materia", "Favor de llenar la caja", 2);
                    }
                } else {
                    f.caracterasig.focus();
                    msj("Materia", "Favor de llenar la caja", 2);
                }
            } else {
                f.horasP.focus();
                msj("Materia", "Favor de llenar la caja", 2);
            }
        } else {
            f.horasT.focus();
            msj("Materia", "Favor de llenar la caja", 2);
        }
    } else {
        f.materia.focus();
        msj("Materia", "Favor de llenar la caja", 2);
    }
}

//Cambia el estatus del registro en la BD
function delete_temario(id) {
    $.ajax({
        url: "/temario/" + id,
        type: "DELETE",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "json",
    })
        .done(function (json) {
            console.log("success");
            ocultarModalConfirmacion();
            listado_temario();
            msj(json.estado, json.mensaje, 0);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
}

//Eliminar Actividad en temario
function delete_actividad(id, re) {
    $.ajax({
        url: "/actividad/" + id,
        type: "DELETE",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "json",
    })
        .done(function (json) {
            console.log("success");
            ocultarModalConfirmacion();
            edit_temario(re);
            msj(json.estado, json.mensaje, 0);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
}

//Filtro de temario
function filtro_temario(f) {
    $.ajax({
        url: "/temario",
        type: "GET",
        dataType: "html",
        data: { materia: f.f_materia.value, clave: f.f_clave.value },
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

// Limpia el formulario
function limpiar_temario() {
    $("#form-temario")[0].reset();
    listado_temario();
}

/*--------------------------------------------------------------------------------
                    Plan de Estudios
------------------------------------------------------------------------------- */

//Mostrar el formulario para registrar una nueva Plan de Estudios
function nueva_planestudios() {
    mp();
    $.ajax({
        url: "/planestudios/create",
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
            op();
            console.log("complete");
        });
}

//Mostrar el listado de los Plan de Estudios
function listado_planestudios() {
    mp();
    $.ajax({
        url: "/planestudios/",
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
            op();
            console.log("complete");
        });
}

//Mostrar la consulta del un Plan de Estudios
function consultar_planestudios(id) {
    mp();
    $.ajax({
        url: "/planestudios/" + id,
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
            op();
            console.log("complete");
        });
}

//Mostrar el edit del Plan de Estudios
function edit_planestudios(id) {
    mp();
    $.ajax({
        url: "/planestudios/" + id + "/edit",
        type: "GET",
        headers: { "X-CSRF-TOKEN": _TOKEN },
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
            op();
            console.log("complete");
        });
}

//Guarda los datos en la BD
function add_planestudios(f) {
    if (!f.checkValidity()) {
        msj("Plan de Estudios", "Por favor complete los campos", 2);
    } else {
        if (f.claveof.value.length > 0) {
            if (f.iduni.value.length > 0) {
                if (f.nombre.value.length > 0) {
                    if (f.carrera.value.length > 0) {
                        if (f.reticula.value.length > 0) {
                            if (f.nivesc.value.length > 0) {
                                if (f.modalidad.value.length > 0) {
                                    $.ajax({
                                        url: "/planestudios",
                                        type: "POST",
                                        headers: { "X-CSRF-TOKEN": _TOKEN },
                                        dataType: "json",
                                        data: {
                                            claveO: f.claveof.value,
                                            iduni: f.iduni.value,
                                            nom: f.nombre.value,
                                            car: f.carrera.value,
                                            reticula: f.reticula.value,
                                            nivEsc: f.nivesc.value,
                                            modalidad: f.modalidad.value,
                                        },
                                    })
                                        .done(function (json) {
                                            console.log("success");
                                            msj(json.estado, json.mensaje, 0);
                                            listado_planestudios();
                                        })
                                        .fail(function () {
                                            console.log("error");
                                        })
                                        .always(function () {
                                            console.log("complete");
                                        });
                                } else {
                                    f.modalidad.focus();
                                    msj(
                                        "Plan de Estudios",
                                        "Favor de llenar la caja",
                                        2
                                    );
                                }
                            } else {
                                f.nivesc.focus();
                                msj(
                                    "Plan de Estudios",
                                    "Favor de seleccionar una nivel escolar",
                                    2
                                );
                            }
                        } else {
                            f.reticula.focus();
                            msj(
                                "Plan de Estudios",
                                "Favor de llenar la caja",
                                2
                            );
                        }
                    } else {
                        f.carrera.focus();
                        msj(
                            "Plan de Estudios",
                            "Favor de seleccionar una carrrera",
                            2
                        );
                    }
                } else {
                    f.nombre.focus();
                    msj("Plan de Estudios", "Favor de llenar la caja", 2);
                }
            } else {
                f.iduni.focus();
                msj("Plan de Estudios", "Favor de llenar la caja", 2);
            }
        } else {
            f.claveof.focus();
            msj("Plan de Estudios", "Favor de llenar la caja", 2);
        }
    }
}

//Actualiza los datos en la BD
function update_planestudios(f, id) {
    if (!f.checkValidity()) {
        msj("Plan de estudios", "Por favor complete los campos", 2);
    } else {
        if (f.claveof.value.length > 0) {
            if (f.iduni.value.length > 0) {
                if (f.nombre.value.length > 0) {
                    if (f.carrera.value.length > 0) {
                        if (f.reticula.value.length > 0) {
                            if (f.nivesc.value.length > 0) {
                                if (f.modalidad.value.length > 0) {
                                    $.ajax({
                                        url: "/planestudios/" + id,
                                        type: "PATCH",
                                        headers: { "X-CSRF-TOKEN": _TOKEN },
                                        dataType: "json",
                                        data: {
                                            claveO: f.claveof.value,
                                            iduni: f.iduni.value,
                                            nom: f.nombre.value,
                                            car: f.carrera.value,
                                            reticula: f.reticula.value,
                                            nivEsc: f.nivesc.value,
                                            modalidad: f.modalidad.value,
                                        },
                                    })
                                        .done(function (json) {
                                            console.log("success");
                                            msj(json.estado, json.mensaje, 0);
                                            listado_planestudios();
                                        })
                                        .fail(function () {
                                            console.log("error");
                                        })
                                        .always(function () {
                                            console.log("complete");
                                        });
                                } else {
                                    f.modalidad.focus();
                                    msj(
                                        "Plan de Estudios",
                                        "Favor de llenar la caja",
                                        2
                                    );
                                }
                            } else {
                                f.nivesc.focus();
                                msj(
                                    "Plan de Estudios",
                                    "Favor de seleccionar una nivel escolar",
                                    2
                                );
                            }
                        } else {
                            f.reticula.focus();
                            msj(
                                "Plan de Estudios",
                                "Favor de llenar la caja",
                                2
                            );
                        }
                    } else {
                        f.carrera.focus();
                        msj(
                            "Plan de Estudios",
                            "Favor de seleccionar una carrrera",
                            2
                        );
                    }
                } else {
                    f.nombre.focus();
                    msj("Plan de Estudios", "Favor de llenar la caja", 2);
                }
            } else {
                f.iduni.focus();
                msj("Plan de Estudios", "Favor de llenar la caja", 2);
            }
        } else {
            f.claveof.focus();
            msj("Plan de Estudios", "Favor de llenar la caja", 2);
        }
    }
}

//Cambia el estatus del registro en la BD
function delete_planestudios(id) {
    $.ajax({
        url: "/planestudios/" + id,
        type: "DELETE",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "json",
    })
        .done(function (json) {
            console.log("success");
            ocultarModalConfirmacion();
            listado_planestudios();
            msj(json.estado, json.mensaje, 0);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
}

function filtro_planestudios(f) {
    $.ajax({
        url: "/planestudios",
        type: "GET",
        dataType: "html",
        data: {
            claveOfi: f.f_claveOfi.value,
            nombre: f.f_nombre.value,
            reticula: f.f_reticula.value,
            nivEsc: f.f_nivEsc.value,
        },
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
// Limpia el formulario
function limpiar_planestudios() {
    $("#form-planEst")[0].reset();
    listado_planestudios();
}

/*--------------------------------------------------------------------------------
                    Especialidad
------------------------------------------------------------------------------- */

//Mostrar el formulario para registrar una nueva Especialidad
function nueva_especialidad() {
    mp();
    $.ajax({
        url: "/especialidad/create",
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
            op();
            console.log("complete");
        });
}

//Mostrar el listado de los Especialidad
function listado_especialidad() {
    mp();
    $.ajax({
        url: "/especialidad/",
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
            op();
            console.log("complete");
        });
}

//Muestra la consulta de una especialidad
function consultar_especialidad(id) {
    mp();
    $.ajax({
        url: "/especialidad/" + id,
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
            op();
            console.log("complete");
        });
}

//Muestra la vista de especialidad para modificar
function edit_especialidad(id) {
    mp();
    $.ajax({
        url: "/especialidad/" + id + "/edit",
        type: "GET",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "html",
    })
        .done(function (html) {
            console.log("success");
            $("#contenedor").html(html);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            op();
            console.log("complete");
        });
}

//Guarda los datos en la BD Unidad
function add_especialidad(f) {
    if (!f.checkValidity()) {
        msj("Especialidad", "Por favor complete los campos", 2);
    } else {
        if (f.nombre.value.length > 0) {
            $("#a_nom").css("display", "none");
            if (f.clave.value.length > 0) {
                $("#a_clave").css("display", "none");
                if (f.planestudios.value.length > 0) {
                    $("#a_planest").css("display", "none");
                    if (f.fecha_inicio.value.length > 0) {
                        $("#a_fechaIni").css("display", "none");
                        if (f.fecha_fin.value.length > 0) {
                            $("#a_fechaFin").css("display", "none");
                            if (f.fecha_inicio.value < f.fecha_fin.value) {
                                $("#a_fechaFin").css("display", "none");
                                $.ajax({
                                    url: "/especialidad",
                                    type: "POST",
                                    headers: { "X-CSRF-TOKEN": _TOKEN },
                                    dataType: "json",
                                    data: {
                                        nombre: f.nombre.value,
                                        clave: f.clave.value,
                                        planE: f.planestudios.value,
                                        fecha_inicio: f.fecha_inicio.value,
                                        fecha_fin: f.fecha_fin.value,
                                    },
                                })
                                    .done(function (json) {
                                        console.log("success");
                                        msj(json.estado, json.mensaje, 0);
                                        listado_especialidad();
                                    })
                                    .fail(function () {
                                        console.log("error");
                                    })
                                    .always(function () {
                                        console.log("complete");
                                    });
                            } else {
                                document.getElementById(
                                    "a_fechaFin"
                                ).innerHTML = "";
                                if ($("#a_fechaFin").html().trim() == "") {
                                    $("#a_fechaFin").css("display", "block");
                                    $("#a_fechaFin").append(
                                        "Favor de verificar las fecha de terminación ya que no puede terminar antes de iniciar"
                                    );
                                }
                            }
                        } else {
                            if ($("#a_fechaFin").html().trim() == "") {
                                f.fecha_fin.focus();
                                $("#a_fechaFin").css("display", "block");
                                $("#a_fechaFin").append(
                                    "Favor de ingresar la fecha de terminación"
                                );
                            }
                        }
                    } else {
                        if ($("#a_fechaIni").html().trim() == "") {
                            f.fecha_inicio.focus();
                            $("#a_fechaIni").css("display", "block");
                            $("#a_fechaIni").append(
                                "Favor de ingresar la fecha de apertura"
                            );
                        }
                    }
                } else {
                    if ($("#a_planest").html().trim() == "") {
                        f.planestudios.focus();
                        $("#a_planest").css("display", "block");
                        $("#a_planest").append("Favor de llenar el campo");
                    }
                }
            } else {
                if ($("#a_clave").html().trim() == "") {
                    f.clave.focus();
                    $("#a_clave").css("display", "block");
                    $("#a_clave").append("Favor de llenar el campo");
                }
            }
        } else {
            if ($("#a_nom").html().trim() == "") {
                f.nombre.focus();
                $("#a_nom").css("display", "block");
                $("#a_nom").append("Favor de llenar el campo");
            }
        }
    }
}

//Actualiza los datos en la BD
function update_especialidad(f, id) {
    if (!f.checkValidity()) {
        msj("Especialidad", "Por favor complete los campos", 2);
    } else {
        if (f.nombre.value.length > 0) {
            $("#a_nom").css("display", "none");
            if (f.clave.value.length > 0) {
                $("#a_clave").css("display", "none");
                if (f.planestudios.value.length > 0) {
                    $("#a_planest").css("display", "none");
                    if (f.fecha_inicio.value.length > 0) {
                        $("#a_fechaIni").css("display", "none");
                        if (f.fecha_fin.value.length > 0) {
                            $("#a_fechaFin").css("display", "none");
                            if (f.fecha_inicio.value < f.fecha_fin.value) {
                                $("#a_fechaFin").css("display", "none");
                                $.ajax({
                                    url: "/especialidad/" + id,
                                    type: "PATCH",
                                    headers: { "X-CSRF-TOKEN": _TOKEN },
                                    dataType: "json",
                                    data: {
                                        nombre: f.nombre.value,
                                        clave: f.clave.value,
                                        planE: f.planestudios.value,
                                        fecha_inicio: f.fecha_inicio.value,
                                        fecha_fin: f.fecha_fin.value,
                                    },
                                })
                                    .done(function (json) {
                                        console.log("success");
                                        msj(json.estado, json.mensaje, 0);
                                        listado_especialidad();
                                    })
                                    .fail(function () {
                                        console.log("error");
                                    })
                                    .always(function () {
                                        console.log("complete");
                                    });
                            } else {
                                msj(
                                    "Especialidad",
                                    "Favor de verificar la fecha de terminación ya que no puede terminar antes de iniciar",
                                    2
                                );
                                f.fecha_fin.focus();
                            }
                        } else {
                            msj(
                                "Especialidad",
                                "Favor de ingresar la fecha de terminación",
                                2
                            );
                            f.fecha_fin.focus();
                        }
                    } else {
                        msj(
                            "Especialidad",
                            "Favor de ingresar la fecha de apertura",
                            2
                        );
                        f.fecha_inicio.focus();
                    }
                } else {
                    msj("Especialidad", "Favor de llenar el campo", 2);
                    f.planestudios.focus();
                }
            } else {
                msj("Especialidad", "Favor de llenar el campo", 2);
                f.clave.focus();
            }
        } else {
            msj("Especialidad", "Favor de llenar el campo", 2);
            f.nombre.focus();
        }
    }
}

//Cambia el estatus del registro en la BD
function delete_especialidad(id) {
    $.ajax({
        url: "/especialidad/" + id,
        type: "DELETE",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "json",
    })
        .done(function (json) {
            console.log("success");
            ocultarModalConfirmacion();
            listado_especialidad();
            msj(json.estado, json.mensaje, 0);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
}

//Filtro de especialidad
function filtro_especialidad(f) {
    $.ajax({
        url: "/especialidad",
        type: "GET",
        dataType: "html",
        data: {
            nombre: f.f_nombre.value,
            clave: f.f_clave.value,
            planest: f.f_planest.value,
        },
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

// Limpia el formulario
function limpiar_especialidad() {
    $("#form-especialidad")[0].reset();
    listado_especialidad();
}

/*--------------------------------------------------------------------------------
                    Carrera
------------------------------------------------------------------------------- */

//Mostrar el formulario para registrar una nueva Carrera
function nueva_carrera() {
    mp();
    $.ajax({
        url: "/carrera/create",
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
            op();
            console.log("complete");
        });
}

//Mostrar el listado de los Carrera
function listado_carrera() {
    mp();
    $.ajax({
        url: "/carrera/",
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
            op();
            console.log("complete");
        });
}

//Muestra la consulta de una carrera
function consultar_carrera(id) {
    mp();
    $.ajax({
        url: "/carrera/" + id,
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
            op();
            console.log("complete");
        });
}

//Muestra la vista de carrera para modificar
function edit_carrera(id) {
    mp();
    $.ajax({
        url: "/carrera/" + id + "/edit",
        type: "GET",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "html",
    })
        .done(function (html) {
            console.log("success");
            $("#contenedor").html(html);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            op();
            console.log("complete");
        });
}

//Guarda los datos en la BD
function add_carrera(f) {
    var fo = new FormData(f);
    if (f.nombre.value.length > 0) {
        $("#a_nom").css("display", "none");
        if (f.abre.value.length > 0) {
            $("#a_abre").css("display", "none");
            if (f.tipo.value != "") {
                $("#a_tipo").css("display", "none");
                $.ajax({
                    url: "/carrera",
                    type: "POST",
                    headers: { "X-CSRF-TOKEN": _TOKEN },
                    dataType: "json",
                    data: fo,
                    processData: false,
                    contentType: false,
                })
                    .done(function (json) {
                        console.log("success");
                        add_carreraE(
                            json.nombre,
                            json.abreviatura,
                            json.tipo,
                            json.logo
                        );
                    })
                    .fail(function () {
                        console.log("error");
                    })
                    .always(function () {
                        console.log("complete");
                    });
            } else {
                f.tipo.focus();
                msj("Carrera", "Favor de llenar el campo", 2);
            }
        } else {
            f.abre.focus();
            msj("Carrera", "Favor de llenar el campo", 2);
        }
    } else {
        msj("Carrera", "Favor de llenar el campo", 2);
        f.nombre.focus();
    }
}

//Guarda los datos en la BD de la escuela
function add_carreraE(nom, abr, tip, nomlog) {
    $.ajax({
        url: "https://poa.zitacuaro.tecnm.mx/carrera/create",
        type: "POST",
        headers: {
            "X-CSRF-TOKEN": _TOKEN,
        },
        dataType: "json",
        data: {
            nombre: nom,
            abre: abr,
            tipo: tip,
            nombre_logo: nomlog,
        },
    })
        .done(function (json) {
            console.log("success");
            msj(json.estado, json.mensaje, 0);
            listado_carrera();
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
}

//Actualiza los datos en la BD
function update_carrera(f, id) {
    var form = new FormData(f);
    if (f.nombre.value.length > 0) {
        $("#a_nom").css("display", "none");
        if (f.abre.value.length > 0) {
            $("#a_abre").css("display", "none");
            if (f.tipo.value != "") {
                $("#a_tipo").css("display", "none");
                $.ajax({
                    url: "/carreras/" + id,
                    type: "POST",
                    headers: { "X-CSRF-TOKEN": _TOKEN },
                    dataType: "json",
                    data: form,
                    processData: false,
                    contentType: false,
                })
                    .done(function (json) {
                        console.log("success");
                        msj(json.estado, json.mensaje, 0);
                        listado_carrera();
                    })
                    .fail(function () {
                        console.log("error");
                    })
                    .always(function () {
                        console.log("complete");
                    });
            } else {
                f.tipo.focus();
                msj("Carrera", "Favor de llenar el campo", 2);
            }
        } else {
            f.abre.focus();
            msj("Carrera", "Favor de llenar el campo", 2);
        }
    } else {
        f.nombre.focus();
        msj("Carrera", "Favor de llenar el campo", 2);
    }
}

//Cambia el estatus del registro en la BD
function delete_carrera(id) {
    $.ajax({
        url: "/carrera/" + id,
        type: "DELETE",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "json",
    })
        .done(function (json) {
            console.log("success");
            ocultarModalConfirmacion();
            listado_carrera();
            msj(json.estado, json.mensaje, 0);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
}
//Filtro de carrera
function filtro_carrera(f) {
    $.ajax({
        url: "/carrera",
        type: "GET",
        dataType: "html",
        data: {
            nombre: f.f_nombre.value,
            tipo: f.f_tipo.value,
            fechaA: f.f_fechaA.value,
        },
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

// Limpia el formulario
function limpiar_carrera() {
    $("#form-carrera")[0].reset();
    listado_carrera();
}

/*--------------------------------------------------------------------------------
                    Materia
------------------------------------------------------------------------------- */

//Mostrar el formulario para registrar una nueva Materia
function nueva_materia() {
    mp();
    $.ajax({
        url: "/materia/create",
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
            op();
            console.log("complete");
        });
}

//Mostrar el listado de los Materia
function listado_materia() {
    mp();
    $.ajax({
        url: "/materia/",
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
            op();
            console.log("complete");
        });
}

//Muestra la consulta de una materia
function consultar_materia(id) {
    mp();
    $.ajax({
        url: "/materia/" + id,
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
            op();
            console.log("complete");
        });
}

//Muestra la vista de materia para modificar
function edit_materia(id) {
    mp();
    $.ajax({
        url: "/materia/" + id + "/edit",
        type: "GET",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "html",
    })
        .done(function (html) {
            console.log("success");
            $("#contenedor").html(html);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            op();
            console.log("complete");
        });
}

//Agregar Carrera en la vista de materia
function mas_carreras() {
    var carrera = $("#carrera").val();
    var opt = $("#carrera").find("option");
    var nombre = "";
    var row_carreras = $(".row_carrera");
    var id_nuevo = "row_" + carrera;
    var bandera = false;
    if (carrera != "") {
        $.each(row_carreras, function (index, elemento) {
            console.log(elemento.id);

            if (elemento.id == id_nuevo) {
                bandera = true;
            }
        });
        if (!bandera) {
            $.each(opt, function (index, elemento) {
                if (carrera == elemento.value) {
                    nombre = elemento.innerText;
                    console.log(nombre);
                }
            });
            $("#contenedor_carreras").append(
                "<div class='item form-group row_carrera mb-1 row' id='" +
                    id_nuevo +
                    "'>" +
                    "<input type='hidden' class='carrera_id'  value='" +
                    carrera +
                    "' >" +
                    "<div class='control-form-label col-md-4 col-sm-4 col-xs-12 text-left text-md-right'>" +
                    "<label class='quitar_pq control-form-label col-md-4 col-sm-2 col-xs-2 label-align' for='carrera'>" +
                    "</label>" +
                    "</div>" +
                    "<div class='col-md-4 col-sm-4 col-xs-12'>" +
                    "<label for=' label-align'>" +
                    nombre +
                    "</label>" +
                    "</div>" +
                    "<div class='col-md-1 col-sm-2 col-xs-12 m-1'>" +
                    "<button type='button' class='btn btn-danger btn-sm btn-block' onclick='menos_elementos(\"" +
                    id_nuevo +
                    "\")'><i class='fa fa-trash'></i>" +
                    "</button>" +
                    "</div>" +
                    "</div>"
            );
        } else {
            msj("Carrera", "La carrera ya ha sido agregada", 2);
        }
    } else {
        msj("Carrera", "Seleccione una carrera", 2);
    }
}

//Eliminar materia en actualizar
function menos_carreras(id) {
    var ant = $("#" + id + " .carrera_id").val();
    $("#contenedor_anterior").append(
        "<div class='item form-group row_anterior' id='" +
            ant +
            "'>" +
            "<input type='hidden' class='anterior_id'  value='" +
            ant +
            "' >" +
            "' </div>"
    );
    $("#" + id).remove();
}

//Agregar correquisitos en la vista materia
function mas_correquisitos() {
    var correquisito = $("#correquisito").val();
    var opt = $("#correquisito").find("option");
    var nombre = "";
    var row_correquisitos = $(".row_correquisito");
    var id_nuevo = "row_requisito_" + correquisito;
    var bandera = false;
    if (correquisito != "") {
        $.each(row_correquisitos, function (index, elemento) {
            console.log(elemento.id);

            if (elemento.id == id_nuevo) {
                bandera = true;
            }
        });
        if (!bandera) {
            $.each(opt, function (index, elemento) {
                if (correquisito == elemento.value) {
                    nombre = elemento.innerText;
                    console.log(nombre);
                }
            });
            $("#contenedor_correquisitos").append(
                "<div class='mb-1 row row_correquisito' id='" +
                    id_nuevo +
                    "'>" +
                    "<input type='hidden' class='correquisito_id'  value='" +
                    correquisito +
                    "' >" +
                    "<div class='col-form-label col-md-3 col-sm-3 col-xs-12 text-left text-md-right'>" +
                    "<label class='quitar_pq control-form-label col-md-4 col-sm-4 col-xs-12 label-align' for='correquisito'> <span class='required'></span>" +
                    "</label>" +
                    "</div>" +
                    "<div class='col-md-5 col-sm-6 col-xs-12'>" +
                    "<label for=''>" +
                    nombre +
                    "</label>" +
                    "</div>" +
                    "<div class='col-md-1 col-sm-2 col-xs-12'>" +
                    "<button type='button' class='btn btn-danger btn-block btn-sm' onclick='menos_elementos(\"" +
                    id_nuevo +
                    "\")'><i class='fa fa-trash'></i>" +
                    "</button>" +
                    "</div>" +
                    "</div>"
            );
        } else {
            msj("Correquisito", "La Correquisito ya ha sido agregada", 2);
        }
    } else {
        msj("Correquisito", "Seleccione una Correquisito", 2);
    }
}

//Agregar Prerrequisitos en la vista materia
function mas_prerrequisitos() {
    var prerrequisito = $("#prerrequisito").val();
    var opt = $("#prerrequisito").find("option");
    var nombre = "";
    var row_prerrequisitos = $(".row_prerrequisito");
    var id_nuevo = "row_prerrequisito" + prerrequisito;
    var bandera = false;
    if (prerrequisito != "") {
        $.each(row_prerrequisitos, function (index, elemento) {
            console.log(elemento.id);

            if (elemento.id == id_nuevo) {
                bandera = true;
            }
        });
        if (!bandera) {
            $.each(opt, function (index, elemento) {
                if (prerrequisito == elemento.value) {
                    nombre = elemento.innerText;
                    console.log(nombre);
                }
            });
            $("#contenedor_prerrequisitos").append(
                "<div class='mb-1 row row_prerrequisito' id='" +
                    id_nuevo +
                    "'>" +
                    "<input type='hidden' class='prerrequisito_id'  value='" +
                    prerrequisito +
                    "' >" +
                    "<div class='col-form-label col-md-3 col-sm-3 col-xs-12 text-left text-md-right'>" +
                    "<label class='quitar_pq' for='prerrequisito'> <span class='required'></span>" +
                    "</label>" +
                    "</div>" +
                    "<div class='col-md-5 col-sm-6 col-xs-12'>" +
                    "<label for=''>" +
                    nombre +
                    "</label>" +
                    "</div>" +
                    "<div class='col-md-1 col-sm-2 col-xs-12'>" +
                    "<button type='button' class='btn btn-danger btn-block btn-sm' onclick='menos_elementos(\"" +
                    id_nuevo +
                    "\")'><i class='fa fa-trash'></i>" +
                    "</button>" +
                    "</div>" +
                    "</div>"
            );
        } else {
            msj("Prerrequisito", "La Prerrequisito ya ha sido agregada", 2);
        }
    } else {
        msj("Prerrequisito", "Seleccione una Prerrequisito", 2);
    }
}

//Guarda los datos en la BD
function add_materia(f) {
    var c = [];
    var carreras = $(".row_carrera");
    if (!f.checkValidity()) {
        msj("Materia", "Por favor complete los campos", 2);
    } else {
        if (f.nombre.value.length > 0) {
            $("#a_nombre").css("display", "none");
            if (f.clave.value.length > 0) {
                $("#a_clave").css("display", "none");
                if (f.carrera.value.length > 0) {
                    $("#a_carrera").css("display", "none");
                    if (f.planestudios.value.length > 0) {
                        $("#a_planest").css("display", "none");
                        $.each(carreras, function (index, elemento) {
                            var idCarrera =
                                elemento.querySelector(".carrera_id").value;
                            c.push({ id: idCarrera });
                        });

                        c = JSON.stringify(c);
                        console.log("Soy C" + c);
                        $.ajax({
                            url: "/materia",
                            type: "POST",
                            headers: { "X-CSRF-TOKEN": _TOKEN },
                            dataType: "json",
                            data: {
                                nombre: f.nombre.value,
                                clave: f.clave.value,
                                planE: f.planestudios.value,
                                carrera: c,
                            },
                        })
                            .done(function (json) {
                                console.log("success");
                                msj(json.estado, json.mensaje, 0);
                                listado_materia();
                            })
                            .fail(function () {
                                console.log("error");
                            })
                            .always(function () {
                                console.log("complete");
                            });
                    } else {
                        if ($("#a_planest").html().trim() == "") {
                            f.planestudios.focus();
                            $("#a_planest").css("display", "block");
                            $("#a_planest").append("Favor de llenar el campo");
                        }
                    }
                } else {
                    if ($("#a_carrera").html().trim() == "") {
                        f.carrera.focus();
                        $("#a_carrera").css("display", "block");
                        $("#a_carrera").append("Favor de llenar el campo");
                    }
                }
            } else {
                if ($("#a_clave").html().trim() == "") {
                    f.clave.focus();
                    $("#a_clave").css("display", "block");
                    $("#a_clave").append("Favor de llenar el campo");
                }
            }
        } else {
            if ($("#a_nombre").html().trim() == "") {
                f.nombre.focus();
                $("#a_nombre").css("display", "block");
                $("#a_nombre").append("Favor de llenar el campo");
            }
        }
    }
}

//Actualiza los datos en la BD
function update_materia(f, id) {
    var c = [],
        anterior = [];
    var carreras = $(".row_carrera");
    var anteriores = $(".row_anterior");
    if (!f.checkValidity()) {
        msj("Carrera", "Por favor complete los campos", 2);
    } else {
        if (f.nombre.value.length > 0) {
            $("#a_nombre").css("display", "none");
            if (f.clave.value.length > 0) {
                $("#a_clave").css("display", "none");

                if (f.planestudios.value.length > 0) {
                    $("#a_planest").css("display", "none");
                    $.each(carreras, function (index, elemento) {
                        var idCarrera =
                            elemento.querySelector(".carrera_id").value;
                        c.push({ id: idCarrera });
                    });
                    $.each(anteriores, function (index, elemento) {
                        var idAnterior =
                            elemento.querySelector(".anterior_id").value;
                        anterior.push({ id_ant: idAnterior });
                    });
                    c = JSON.stringify(c);
                    anterior = JSON.stringify(anterior);
                    console.log("Soy C" + anterior);
                    $.ajax({
                        url: "/materia/" + id,
                        type: "PATCH",
                        headers: { "X-CSRF-TOKEN": _TOKEN },
                        dataType: "json",
                        data: {
                            nombre: f.nombre.value,
                            clave: f.clave.value,
                            planE: f.planestudios.value,
                            carrera: c,
                            ante: anterior,
                        },
                    })
                        .done(function (json) {
                            console.log("success");
                            msj(json.estado, json.mensaje, 0);
                            listado_materia();
                        })
                        .fail(function () {
                            console.log("error");
                        })
                        .always(function () {
                            console.log("complete");
                        });
                } else {
                    if ($("#a_planest").html().trim() == "") {
                        f.planestudios.focus();
                        $("#a_planest").css("display", "block");
                        $("#a_planest").append("Favor de llenar el campo");
                    }
                }
            } else {
                if ($("#a_clave").html().trim() == "") {
                    f.clave.focus();
                    $("#a_clave").css("display", "block");
                    $("#a_clave").append("Favor de llenar el campo");
                }
            }
        } else {
            if ($("#a_nombre").html().trim() == "") {
                f.nombre.focus();
                $("#a_nombre").css("display", "block");
                $("#a_nombre").append("Favor de llenar el campo");
            }
        }
    }
}

//Cambia el estatus del registro en la BD
function delete_materia(id) {
    $.ajax({
        url: "/materia/" + id,
        type: "DELETE",
        headers: { "X-CSRF-TOKEN": _TOKEN },
        dataType: "json",
    })
        .done(function (json) {
            console.log("success");
            ocultarModalConfirmacion();
            listado_materia();
            msj(json.estado, json.mensaje, 0);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
}

//Filtro de materia
function filtro_materia(f) {
    $.ajax({
        url: "/materia",
        type: "GET",
        dataType: "html",
        data: {
            nombre: f.f_nombre.value,
            clave: f.f_clave.value,
            planest: f.f_planest.value,
        },
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

// Limpia el formulario
function limpiar_materia() {
    $("#form-materia")[0].reset();
    listado_materia();
}
