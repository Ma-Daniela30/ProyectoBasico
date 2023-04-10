$(document).ready(function(){
    $("#nueva_carrera").click(function (e) {
        nueva_carrera();
    });
});

$(document).ready(function(){
    $("#nuevo_qr").click(function (e) {
        nueva_qr();
    });
});

var _TOKEN=document.getElementsByName("csrf-token")[0].content;

//Mostrar el formulario para registrar una  nueva carrera
function nueva_carrera() {
    msj("Carrera","Nueva Carrera","success");
    $.ajax({
        url:'/carreras/create',
        type:'GET',
        dataType:'html',
    }).done(function (vista) {
        console.log("success");
        $("#contenedor").html(vista);
    }).fail(function () {
        console.log("error");
    }).always(function () {
        console.log("complete");
    });
}

$(document).ready(function(){
    $("#nueva_materia").click(function (e) {
        nueva_materia();
    });
});

//Guarda la inf. de una carrera
function add_carrera(f) {
    //if ( !f.checkValidity ) {
      //  msj('Carrera',"Por favor complets los campos","error");
    //}else{
        $.ajax({
            url:'/carreras',
            type:'POST',
            headers:{'X-CSRF-TOKEN':_TOKEN},
            dataType:'json',
            data:{nombre: f.nombre.value, abreviatura:f.abreviatura.value, tipo:f.tipo.value},
        }).done(function (json) {
            console.log("success");
            alert(json.mensaje);
        }).fail(function () {
            console.log("error");
        }).always(function () {
            console.log("complete");
        });
    //}
}

$(document).ready(function(){
    $("#listado_carrera").click(function (e) {
        listar_carreras();
    });
});

//Mostrar listado de las Carreras
function listar_carreras() {
    msj("Carrera","Listar Carreras","success");
    $.ajax({
        url:'/carreras/',
        type:'GET',
        dataType:'html',
    }).done(function (vista) {
        console.log("success");
        $("#contenedor").html(vista);

    }).fail(function () {
        console.log("error");
    }).always(function () {
        console.log("complete");
    });
}

//filtrado
function filtro_carrera(f) {
    $.ajax({
        url:'/carreras',
        type:'GET',
        dataType:'html',
        data:{ nombre:f.f_nombre.value, tipo:f.f_tipo.value}
    }).done(function (vista) {
        console.log("success");
        $("#contenedor").html(vista);

    }).fail(function () {
        console.log("error");
    }).always(function () {
        console.log("complete");
    });
}

//filtrado descarga
function filtro_descarga(f) {
    $.ajax({
        url:'/descargarC',
        type:'POST',
        headers:{'X-CSRF-TOKEN':_TOKEN},
        dataType:'json',
        data:{ nombre:f.f_nombre.value, tipo:f.f_tipo.value}
    }).done(function () {
        console.log("success");

    }).fail(function () {
        console.log("error");
    }).always(function () {
        console.log("complete");
    });
}

//Mostrar consultar Carrera
function consultar_carreras(id) {
    msj("Carrera"," Consultar Carreras","success");
    $.ajax({
        url:'/carreras/'+id,
        type:'GET',
        dataType:'html',
    }).done(function (vista) {
        console.log("success");
        $("#contenedor").html(vista);

    }).fail(function () {
        console.log("error");
    }).always(function () {
        console.log("complete");
    });
}

//Mostrar Vista mostrar Actualizar Carrera
function edit_carrera(id) {

    $.ajax({
        url:'/carreras/'+id+'/edit',
        type:'GET',
        headers:{'X-CSRF-TOKEN':_TOKEN},
        dataType:'html',
    }).done(function (html) {
        console.log("success");
        $("#contenedor").html(html);
    }).fail(function () {
        console.log("error");
    }).always(function () {
        console.log("complete");
    });
}

//Actualizar la inf. de una carrera
function update_carrera(f,id) {
    if ( !f.checkValidity ) {
        msj("Carrera","Por favor complets los campos","Error");
    }else{
        $.ajax({
            url:'/carreras/'+id,
            type:'PATCH',
            headers:{'X-CSRF-TOKEN':_TOKEN},
            dataType:'json',
            data:{nombre: f.nombre.value, abreviatura:f.abreviatura.value, tipo:f.tipo.value},
        }).done(function (json) {
            console.log("success");
            msj("Carrera",json.mensaje,"success");
        }).fail(function () {
            console.log("error");
        }).always(function () {
            console.log("complete");
        });
    }
}

//Actualizar la inf. de una carrera
function delete_carrera(id) {
    console.log("Entre");
    $.ajax({
        url:'/carreras/'+id,
        type:'DELETE',
        headers:{'X-CSRF-TOKEN':_TOKEN},
        dataType:'json',
        }).done(function (json) {
            console.log("success");
            msj('Exito',json.mensaje,'success');
            listar_carreras();
        }).fail(function () {
            console.log("error");
        }).always(function () {
            console.log("complete");
        });

}

//Mostrar el formulario para registrar una  nueva materia
function nueva_materia() {
    msj("Materia","Nueva Materia",'success');
    $.ajax({
        url:'/materias/create',
        type:'GET',
        dataType:'html',
    }).done(function (vista) {
        console.log("success");
        $("#contenedor").html(vista);

    }).fail(function () {
        console.log("error");
    }).always(function () {
        console.log("complete");
    });
}

var total=0;

function suma(valor) {

    valor= parseInt(valor);
    total = (parseInt(total) + parseInt(valor));

    document.getElementById('Thoras').innerHTML = total;
}

//Guardar Materia
//Guarda la inf. de una materia
function add_materia(fo) {
    var carreras=$(".row_carrera");
    var c=[];
    if ( !fo.checkValidity ) {
        msj("Materia","Por favor complets los campos","Error");
    }else{
        if (carreras.length==0) {
            msj('Materias','Por favor selecciona una carrera','error');

        }else{
            $.each(carreras, function (index, elemento) {
                var idCarrera=elemento.querySelector('.carrera_id').value;
                c.push({'id': idCarrera});
            });
            c=JSON.stringify(c);
            console.log(c);

            $.ajax({
                url:'/materias',
                type:'POST',
                headers:{'X-CSRF-TOKEN':_TOKEN},
                dataType:'json',
                data:{nombre: fo.nombre.value, clave:fo.clave.value, horasT:fo.horasT.value, horasP:fo.horasP.value, Thoras:fo.Thoras.value, carreras:c, },
            }).done(function (json) {
                console.log("success");
                msj('Materia', json.mensaje,'error');
            }).fail(function () {
                console.log("error");
            }).always(function () {
                console.log("complete");
            });
        }
    }
}

$(document).ready(function(){
    $("#listado_materia").click(function (e) {
        listar_materias();
    });
});

//Mostrar listado de las Materias
function listar_materias() {
    msj("Materia"," Listar Materias","success");
    $.ajax({
        url:'/materias/',
        type:'GET',
        dataType:'html',
    }).done(function (vista) {
        console.log("success");
        $("#contenedor").html(vista);

    }).fail(function () {
        console.log("error");
    }).always(function () {
        console.log("complete");
    });
}

//Suma horas teoricas horas practicas
function total_horas_materias() {
    var teoricas=parseInt( $("#horasT").val() );
    var practicas=parseInt( $("#horasP").val() );
    var total=$("#Thoras")
    var t=0;//suma de los totales
    if (teoricas!="" && !(isNaN(teoricas))) {
        t+=teoricas;
    }

    if (practicas !="" && !(isNaN(practicas))) {
        t+=practicas;
    }

    total.val(t);
}

//Agrega el nombre de una carrera en la vista de materia
function mas_carreras() {
    var carrera=$('#carrera').val();
    var opt=$('#carrera').find('option');
    var nombre="";
    var row_carreras=$('.row_carrera');
    var id_nuevo='row_'+carrera;
    var bandera=false;
    if (carrera!="") {

        $.each(row_carreras, function (index, elemento) {
            console.log(elemento.id);

            if (elemento.id==id_nuevo) {
                bandera=true;
            }

        });
        if (!bandera) {
            $.each(opt, function (index, elemento) {
                if (carrera== elemento.value) {
                    nombre=elemento.innerText;
                    console.log(nombre);
                }
            });
            $("#contenedor_carreras").append(
                "<div class='form-group row_carrera' id='"+id_nuevo+"'>"+
                "<input type='hidden' class='carrera_id'  value='"+carrera+"' >"+
                  "<label class='control-label col-md-3 col-sm-3 col-xs-12' for='carrera'> <span class='required'></span>"+
                  "</label>"+
                  "<div class='col-md-6 col-sm-6 col-xs-12'>"+
                    "<label for=''>"+nombre+"</label>"+
                  "</div>"+
                  "<div class='col-md-1 col-sm-1 col-xs-12'>"+
                    "<button type='button' class='btn btn-danger btn-block btn-xs' onclick='menos_carrera(\""+id_nuevo+"\")'><span class='fa fa-trash'></span>"+
                    "</button>"+
                  "</div>"+
                "</div>"
            );
        }else{
            msj('Carrera',"La carrera ya ha sido agregada",'error');
        }
    }else{
        msj('Carrera','Seleccione una carrera','error');

    }
}

//elimina el nombre de la carrera en la vista de materia
function menos_carrera(id) {
    $("#"+id).remove();
}

//
function msj(titulo, texto, tipo) {
    new PNotify({
        title: titulo,
        text: texto,
        type: tipo,
        styling: 'bootstrap3'
    });
}

//Mostrar consultar materia
function consultar_materia(id) {
    msj("Materia","Consultar materia","success");
    $.ajax({
        url:'/materias/'+id,
        type:'GET',
        dataType:'html',
    }).done(function (vista) {
        console.log("success");
        $("#contenedor").html(vista);

    }).fail(function () {
        console.log("error");
    }).always(function () {
        console.log("complete");
    });
}

//Mostrar Vista mostrar Actualizar materia
function edit_materia(id) {
    msj("Materia","Modificar materia","success");
    $.ajax({
        url:'/materias/'+id+'/edit',
        type:'GET',
        headers:{'X-CSRF-TOKEN':_TOKEN},
        dataType:'html',
    }).done(function (html) {
        console.log("success");
        $("#contenedor").html(html);
    }).fail(function () {
        console.log("error");
    }).always(function () {
        console.log("complete");
    });
}

//Actualizar la inf. de una materia
function update_materia(fo) {
    var carreras=$(".row_carrera");
    var c=[];
    var unidades=$(".row_unidad");
    var u=[];
    if ( !fo.checkValidity ) {
        msj('Materias',"Por favor complets los campos",'error');
    }else{
        if (carreras.length==0) {
            msj('Materias','Por favor selecciona una carrera','error');

        }else{
            if (unidades.length==0) {
                msj('Unidades','Por favor añada una unidad','error');

            }else{
                $.each(carreras, function (index, elemento) {
                    var idCarrera=elemento.querySelector('.carrera_id').value;
                    c.push({'id': idCarrera});
                });
                c=JSON.stringify(c);
                console.log(c);

                $.each(unidades, function (index, elemento) {
                    var idUnidades=elemento.querySelector('.unidad_id').value;
                    var numero=elemento.querySelector('.numerou').value;
                    var tema=elemento.querySelector('.temau').value;
                    var subtema=elemento.querySelector('.subtemau').value;
                    u.push({'id': idUnidades, 'numero': numero, 'tema': tema, 'subtema': subtema});
                });
                u=JSON.stringify(u);
                console.log(u);

                $.ajax({
                    url:'/materias/'+fo.idMateria.value,
                    type:'PATCH',
                    headers:{'X-CSRF-TOKEN':_TOKEN},
                    dataType:'json',
                    data:{nombre: fo.nombre.value, clave:fo.clave.value, horasT:fo.horasT.value, horasP:fo.horasP.value, Thoras:fo.Thoras.value, carreras:c, unidades:u},
                }).done(function (json) {
                    console.log("success");
                    msj('Materia', json.mensaje,'success');
                }).fail(function () {
                    console.log("error");
                }).always(function () {
                    console.log("complete");
                });
            }
        }
    }
}

//Actualizar la inf. de una carrera
function delete_materia(id) {
    console.log("Entre");
    $.ajax({
        url:'/materias/'+id,
        type:'DELETE',
        headers:{'X-CSRF-TOKEN':_TOKEN},
        dataType:'json',
        }).done(function (json) {
            console.log("success");
            msj('Exito',json.mensaje,'success');
            listar_materias();
        }).fail(function () {
            console.log("error");
        }).always(function () {
            console.log("complete");
        });

}

//filtrado
function filtro_materia(f) {
    $.ajax({
        url:'/materias',
        type:'GET',
        dataType:'html',
        data:{ nombre:f.f_nombre.value, clave:f.f_clave.value, carrera:f.f_carrera.value}
    }).done(function (vista) {
        console.log("success");
        $("#contenedor").html(vista);

    }).fail(function () {
        console.log("error");
    }).always(function () {
        console.log("complete");
    });
}


//Guardar Unidad
//Guarda la inf. de una unidades
function add_unidad(fo) {
    var unidades=$(".row_unidad");
    var c=[];
    if ( !fo.checkValidity ) {
        msj("Unidades","Por favor llene los campos","Error");
    }else{
        if (unidades.length==0) {
            msj('Unidades','Por favor añada una unidad','error');

        }else{
            $.each(unidades, function (index, elemento) {
                var idUnidades=elemento.querySelector('.unidad_id').value;
                var tema=elemento.querySelector('.temau').value;
                var subtema=elemento.querySelector('.subtemau').value;
                c.push({'numero': idUnidades,'tema': tema, 'subtema': subtema});
            });
            c=JSON.stringify(c);
            console.log(c);

            $.ajax({
                url:'/unidades',
                type:'POST',
                headers:{'X-CSRF-TOKEN':_TOKEN},
                dataType:'json',
                data:{id: fo.clave.value, unidades:c,},
            }).done(function (json) {
                console.log("success");
                msj('Unidades', json.mensaje,'success');
            }).fail(function () {
                console.log("error");
            }).always(function () {
                console.log("complete");
            });
        }
    }
}
//Mas unidades para esa materia
function mas_unidades() {
    var unidad=$('#numero').val();
    var opt=$('#numero').find('value');
    var tema=$('#tema').val();
    var subtema=$('#subtema').val();
    var numero=$('#numero').val();
    var id_nuevo='row_'+unidad;
    var row_unidades=$('.row_unidad');
    var banderaU=false;
    var banderaT=false;
    var banderaS=false;

    if (unidad!="") {

        if (tema!="") {
            if (subtema!="") {
                $.each(row_unidades, function (index, elemento) {
                    console.log(elemento.id);

                    if (elemento.id==id_nuevo) {
                        banderaU=true;
                    }

                });
                if (!banderaU) {
                    $.each(opt, function (index, elemento) {
                        if (unidad== elemento.value) {
                            nombre=elemento.innerText;
                            console.log(nombre);
                        }
                    });
                    $("#contenedor_temario").append(
                        "<div class='form-group row_unidad' id='"+id_nuevo+"'>"+
                        "<input type='hidden' class='unidad_id'  value='"+unidad+"' >"+
                        "<input type='hidden' class='numerou'  value='"+numero+"' >"+
                        "<input type='hidden' class='temau'  value='"+tema+"' >"+
                        "<input type='hidden' class='subtemau'  value='"+subtema+"' >"+
                        "<label class='control-label col-md-3 col-sm-3 col-xs-12' for='subtema'>"+unidad+" <span class='required'>*</span>"+
                        "</label>"+
                        "<label class='control-label col-md-3 col-sm-3 col-xs-12' for='subtema'>"+tema+"<span class='required'>*</span>"+
                        "</label>"+
                        "<label class='control-label col-md-3 col-sm-3 col-xs-12' for='subtema'>"+subtema+"<span class='required'>*</span>"+
                        "</label>"+
                        "<div class='col-md-1 col-sm-1 col-xs-12'>"+
                        "<button type='button' class='btn btn-danger btn-block btn-xs' onclick='menos_unidad(\""+id_nuevo+"\")'><span class='fa fa-trash'></span></button>"+
                        "</div>"+
                        "</div>"
                    );
                }else{
                    msj('Unidad',"La unidad ya ha sido agregada",'error');
                }

            } else {
                msj('Unidad','Llene el campo del subtema','error');
            }
        } else {
            msj('Unidad','Llene el campo del nombre de la unidad','error');
        }

    }else{
        msj('Unidad','Llene el No. de la Unidad','error');

    }
}

//Mostrar el formulario para registrar una  nueva materia
function nueva_unidad(id) {
    msj("Unidad","Nueva Unidad",'success');
    $.ajax({
        url:'/unidades/create',
        type:'GET',
        dataType:'html',
        headers:{'X-CSRF-TOKEN':_TOKEN},
        data:{id:id}
    }).done(function (vista) {
        console.log("success");
        $("#contenedor").html(vista);

    }).fail(function () {
        console.log("error");
    }).always(function () {
        console.log("complete");
    });
}

//elimina la unidad
function menos_unidad(id) {
    $("#"+id).remove();
}

//Vista edit
function modificar_unidad(id,idm) {
    msj("Unidad","Modificar Unidad","success");
    $.ajax({
        url:'/unidades/'+id+'/edit',
        type:'GET',
        headers:{'X-CSRF-TOKEN':_TOKEN},
        data:{id: idm},
        dataType:'html',
    }).done(function (html) {
        console.log("success");
        $("#contenedor").html(html);
    }).fail(function () {
        console.log("error");
    }).always(function () {
        console.log("complete");
    });
}

//Actualizar la inf. de una materia
function update_unidades(fo) {
    var carreras=$(".row_carrera");
    var c=[];
    if ( !fo.checkValidity ) {
        msj('Unidad',"Por favor complete los campos",'error');
    }else{
        $.ajax({
            url:'/unidades/'+fo.id.value,
            type:'PATCH',
            headers:{'X-CSRF-TOKEN':_TOKEN},
            dataType:'json',
            data:{ numero:fo.numero.value,  tema:fo.tema.value, subtema: fo.subtema.value },
        }).done(function (json) {
            console.log("success");
            msj('Materia', json.mensaje,'success');
            edit_materia(fo.clave.value);
        }).fail(function () {
            console.log("error");
        }).always(function () {
            console.log("complete");
        });
    }
}

$(document).ready(function(){
    $("#listado_unidad").click(function (e) {
        listar_unidades();
    });
});

//Mostrar listado de las Materias
function listar_unidades() {
    msj("Unidades"," Listar Unidades","success");
    $.ajax({
        url:'/unidades/',
        type:'GET',
        dataType:'html',
    }).done(function (vista) {
        console.log("success");
        $("#contenedor").html(vista);

    }).fail(function () {
        console.log("error");
    }).always(function () {
        console.log("complete");
    });
}

function consultar_unidad(id) {
    msj("Unidad","Consultar Unidad","success");
    $.ajax({
        url:'/unidades/'+id,
        type:'GET',
        dataType:'html',
    }).done(function (vista) {
        console.log("success");
        $("#contenedor").html(vista);

    }).fail(function () {
        console.log("error");
    }).always(function () {
        console.log("complete");
    });
}


$(document).ready(function(){
    $("#nueva_imagen").click(function (e) {
        nueva_imagen();
    });
});

//Mostrar el formulario para registrar una  nueva materia
function nueva_qr() {
    msj("QR","Nueva QR",'success');
    $.ajax({
        url:'/qr/create',
        type:'GET',
        dataType:'html',
    }).done(function (vista) {
        console.log("success");
        $("#contenedor").html(vista);

    }).fail(function () {
        console.log("error");
    }).always(function () {
        console.log("complete");
    });
}

function consultar_qr(fo) {
    id=fo.codigo.value;
    if ( id=="" ) {
        msj("Codigo QR","Por favor llene el campo","error");
    }else{
        msj("Codigo QR","Consultar Codigo QR","success");
        $.ajax({
            url:'/qr/'+id,
            type:'GET',
            dataType:'html',
        }).done(function (vista) {
            console.log("success");
            $("#contenedor").html(vista);

        }).fail(function () {
            console.log("error");
        }).always(function () {
            console.log("complete");
        });
    }

}

// Limpia el formulario
function limpiar_general() {
    $('#form-nueva')[0].reset();
}

//Mostrar el formulario para registrar una  nueva carrera
/*
function nueva_imagen() {
    msj("Imagen","Cargar Imagen","success");
    $.ajax({
        url:'/imagenes/create',
        type:'GET',
        dataType:'html',
    }).done(function (vista) {
        console.log("success");
        $("#contenedor").html(vista);
    }).fail(function () {
        console.log("error");
    }).always(function () {
        console.log("complete");
    });
}*/
//Guardar Unidad
//Guarda la inf. de una unidades
/*
function add_imagen(fo) {
    if ( !fo.checkValidity ) {
        msj("Imagen","Por favor llenar el campo","Error");
    }else{
            $.ajax({
                url:'/imagenes',
                type:'POST',
                headers:{'X-CSRF-TOKEN':_TOKEN},
                dataType:'json',
                cache:false,
                data:new FormData($('#form-nuevo')[0]),
                processData:false,
                contentType:false
            }).done(function (json) {
                console.log("success");
                msj('Imagen', json.mensaje,'success');
            }).fail(function () {
                console.log("error");
            }).always(function () {
                console.log("complete");
            });

    }
}*/
