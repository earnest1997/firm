<template>
    <svg class="x-icon" @click="$emit('click',$event)" :style="{fill:`${color}`,fontSize: fontWidth}" :class="{loading:loading}">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
    import '../../../../src/svg.js'
    import {isString,isNumber} from "../../../../src/utils/type-of"

    export default {
        name: "x-icon",
        props: {
            name,
            fontSize:{
              type:Number|String,
              default: '1em '
            },
            color: {
                type: String
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        computed:{
            fontWidth(){
                if(isString(this.fontSize))return this.fontSize
                if(isNumber(this.fontWidth))return this.fontSize +'px'
                return new Error('fontSize must be Number or String')
            }
        }
    }
</script>

<style scoped lang="scss">
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .x-icon {
        width: 1em;
        height: 1em;

        &.loading {
            animation: spin 1s infinite linear;
        }
    }
</style>
