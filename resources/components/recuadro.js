const recuadroComponent={
    
    props:{
        tipo:String,        
    },
    computed:{
        datoPrevio(){
            return this.tipo==='datoPrevio'
        },
        datoNuevo(){
            return this.tipo==='datoNuevo'
        },
        descubrimiento(){
            return this.tipo==='descubrimiento'
        },
        instruccionClick(){
            return this.tipo==='instruccionClick'
        },
        instruccionTeclado(){
            return this.tipo==='instruccionTeclado'
        },
        srcIcono(){
            if(this.descubrimiento){
                return "https://gitcdn.link/cdn/juanMamian/mats/master/resources/iconos/circle-exclamation-solid.svg";
            }
            else if(this.instruccionClick){
                return "https://gitcdn.link/cdn/juanMamian/mats/master/resources/iconos/iconoInstruccionPointer.svg";
            }
            else if(this.instruccionTeclado){
                return "https://gitcdn.link/cdn/juanMamian/mats/master/resources/iconos/iconoInstruccionTeclado.svg";
            }
            return "https://gitcdn.link/cdn/juanMamian/mats/master/resources/iconos/bombillo.png";

        }
    },
    template:'<div class="recuadro" :class="{datoPrevio, datoNuevo, descubrimiento, instruccionClick, instruccionTeclado}"> <img class="iconoRecuadro" :src="srcIcono" /> <div class="textoRecuadro"> <slot></slot> </div> </div>',    
}