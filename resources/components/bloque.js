const bloqueComponent={    
    props:{
        tipo:String,
        textocabecera:String,
        textoboton:{
            type: String,
            default: "Mostrar"
        }
    },
    data(){
        return{
            desplegado: false,
        }
    },
    computed:{
        ejemplo(){
            return this.tipo==='ejemplo'
        },
        herramientaInteractiva(){
            return this.tipo==='herramientaInteractiva'
        },
        spoiler(){
            return this.tipo==='spoiler'
        },
        cuento(){
            return this.tipo==='cuento'
        },
        evaluacion(){
            return this.tipo==='evaluacion'
        },
        iconoSrc(){
            if(this.ejemplo){
                return "./resources/iconos/iconoEjemplo.svg"
            }
            else if(this.herramientaInteractiva){
                return "./resources/iconos/iconoHerramientaInteractiva.svg"
            }
            else if(this.cuento){
                return "./resources/iconos/iconoCuento.svg"
            }
            else if(this.spoiler){
                return "./resources/iconos/iconoSpoiler.svg"
            }
            else if(this.evaluacion){
                return "./resources/iconos/iconoEvaluacion.svg"
            }
            return "./resources/iconos/puzzlePiece.svg"
        },
        textoCerrarBoton(){
            if(this.textoboton==='Iniciar' || this.textoboton==='Intentar'){
                return "Cerrar"
            }
            return "Ocultar"

        },
        slotFilled(){           
            return this.$slots.default;
        }
    },
    template:'<div class="bloque-component" :class="{ejemplo, herramientaInteractiva, spoiler, cuento}"><div id="zonaCabecera" :class="{ejemplo, herramientaInteractiva, spoiler, cuento}"><img class="iconoBloque" :src="iconoSrc" /><div v-if="spoiler" id="textoSpoiler">¡Spoiler alert!</div><div class="textoCabecera">{{textocabecera}}</div></div><div class="boton" v-if="slotFilled" v-on:click="desplegado=!desplegado">{{desplegado?textoCerrarBoton:textoboton}}</div><div id="desplegable" v-show="desplegado"><slot></slot></div></div>',    
}