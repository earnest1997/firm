<template>
    <div @mouseleave="hoverLeave" @mouseenter="hoverEnter" class="card-group-item">
        <div class="card-group-item-title">
            <svg fill="white" t="1573044622552" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1944" width="20" height="20">
                <path d="M717.664 612.195c-52.734 47.461-121.289 79.102-200.391 79.102s-147.656-31.641-205.664-79.102c-131.836 68.555-221.484 158.203-221.484 321.68l843.75 0c0-163.477-89.648-247.852-216.211-321.68zM512 628.016c131.836 0 237.305-110.742 237.305-242.578s-105.469-242.578-237.305-242.578-237.305 110.742-237.305 242.578c0 137.109 110.742 242.578 237.305 242.578z"
                      p-id="1945"></path>
            </svg>
            <svg fill="white" t="1573044622552" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1944" width="20" height="20">
                <path d="M717.664 612.195c-52.734 47.461-121.289 79.102-200.391 79.102s-147.656-31.641-205.664-79.102c-131.836 68.555-221.484 158.203-221.484 321.68l843.75 0c0-163.477-89.648-247.852-216.211-321.68zM512 628.016c131.836 0 237.305-110.742 237.305-242.578s-105.469-242.578-237.305-242.578-237.305 110.742-237.305 242.578c0 137.109 110.742 242.578 237.305 242.578z"
                      p-id="1945"></path>
            </svg>
            <span v-show="dotShow" class="anime-dot"></span>
        </div>
        <div class="card-group-item-content">
            <div class="card-group-item-content-header">
                交流
            </div>
            <div class="card-group-item-content-main">
                个人项目玩具，希望与更多vue开发者交流UI组件的开发和日常使用
            </div>
            <div class="card-group-item-content-more">
                更多
                <x-icon color="white" name="right"></x-icon>
            </div>
        </div>
        <div class="card-group-item-content-more">
            更多
            <x-icon color="white" name="right"></x-icon>
        </div>
    </div>
</template>

<script>
    import anime from 'animejs'

    export default {
        name: "card-concat",
        data() {
            return {
                compass: {},
                dotShow:false,
            }
        },
        mounted() {
            this.componentsInit()
        },
        methods: {
            componentsInit() {
                this.compass = anime({
                    targets: '.anime-dot',
                    translateX: 53,
                    direction: 'alternate',
                    loop: true,
                    rotate: () => anime.random(0, 180),
                    easing: 'cubicBezier(.5, .05, .1, .5)'
                })
                this.compass.pause()
            },
            hoverEnter() {
                this.dotShow = true
                this.compass.play()
            },
            hoverLeave() {
                this.dotShow = false
                this.compass.pause()
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "public";

    .anime-dot {
        position: absolute;
        top: 56px;
        left: 120px;
        width: 9px;
        height: 9px;
        background-color: white;
        transition: .25s opacity;
    }

    .icon {
        width: 50px;
        height: 50px;

        &:first-child {
            margin-right: 30px;
        }

        &:nth-child(2) {
            margin-left: 30px;
        }
    }
</style>
