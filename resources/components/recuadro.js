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
            return this.tipo==='datoNuevo'
        },
        srcIcono(){
            if(this.descubrimiento){
                return "https://gitcdn.link/cdn/juanMamian/mats/master/resources/iconos/iconoDescubrimiento.svg";
            }
            return "https://gitcdn.link/cdn/juanMamian/mats/master/resources/iconos/bombillo.png";

        }
    },
    template:'<div class="recuadro" :class="{datoPrevio, datoNuevo}"> <img class="iconoRecuadro" :src="srcIcono" /> <div class="textoRecuadro"> <slot></slot> </div> </div>',    
}