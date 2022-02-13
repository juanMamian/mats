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
        }
    },
    template:'<div class="recuadro" :class="{datoPrevio, datoNuevo}"> <img class="iconoRecuadro" src="./resources/iconos/bombillo.png" /> <div class="textoRecuadro"> <slot></slot> </div> </div>',    
}