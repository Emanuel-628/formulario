
var cont = 0;
//var cad_aux = "";
var cont_aux = 0;

function validarRuc (key) { //funcion que valida la entrada del teclado
      
    if ((key >= '0' && key <= '9') || ['-','Backspace'].includes(key)) { //se verifica que lo introducido solo sean numeros, el guion y para poder borrar      
        //cad_aux = key + cad_aux;
        if (key == '-' && cont == 0) { //si encuentra un guion aumenta para validar
            cont++;
            //cad_aux = cad_aux + key;
            return true;
        }
        else if (cont > 0) {  //si ya existe un guion, verifica que solo se puedan ingresar numeros
            if (key == 'Backspace' && cont_aux == 0) { //si se borro un guion deja volver a poner
                cont = 0;
            }
            if ((key >= '0' && key <= '9') && cont_aux == 0) { //se pone un contador para saber que se ingreso un numero, y luego ya no entre
                //cad_aux = cad_aux + key;
                cont_aux= cont_aux+1;
                /*if (key == 'Backspace') {
                    cont_aux = 0;
                } */ 
                return true;               
            }
            if (key == 'Backspace' && cont_aux == 1) { //si se borra un numero despues del guion permite que pueda volver a poner un numero
                cont_aux = 0; 
            }
            else {
                return false;
            } 
                        
        }   
    }
    else {
        return false;
    }    
}        
