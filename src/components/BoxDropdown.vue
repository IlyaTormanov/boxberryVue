<template>
    <div id="package_container" v-if="this.state">
        <div class="nav_menu"><span class="nav_title_bolder_text">Выберите упаковку</span><span>X</span></div>
        <div class="package_content">
            <div class="choiced_scroll_menu">
                <IconItem v-for="item in box" :name="item.name" :size="item.size" v-bind:key="item.id"
                          :on-click="()=>setBoxImage(item.path)"/>

            </div>
            <div class="box_img_block"><img class="box_img" :src="this.current" :onerror="this.current"></div>
        </div>
        <div class="package_choiced_panel">
            <div class="package_choiced_text">
                <img src="../assets/Vector.png"/>
                <span>
         <p>В эту упаковку поместится: </p>
        <p>Ювелирное изделие,небольшой сувенир или косметика</p>
      </span>

            </div>
            <Button text="Выбрать" :on-click="closeDropdown"/>
        </div>
    </div>
</template>

<script>
    import Vector from '../assets/S.png'
    import IconItem from "@/components/utilsComponents/IconItem";
    import iconL from '../assets/L.png'
    import iconS from '../assets/S.png'
    import iconM from '../assets/M.png'
    import iconXS from '../assets/XS.png'
    import Button from "@/components/utilsComponents/Button";

    export default {

        name: "BoxDropdown",
        components: {Button, IconItem},
        data() {
            return {
                state: true,
                current: Vector,
                box: [
                    {
                        id: 0,
                        name: "Короб L",
                        size: '(40x40x30см)',
                        path: iconL
                    },
                    {
                        id: 1,
                        name: "Короб L",
                        size: '(40x40x30см)',
                        path: iconS
                    },
                    {
                        id: 2,
                        name: "Короб L",
                        size: '(40x40x30см)',
                        path: iconM
                    },
                    {
                        id: 3,
                        name: "Короб L",
                        size: '(40x40x30см)',
                        path: iconXS
                    },
                    {
                        id: 4,
                        name: "Короб L",
                        size: '(40x40x30см)',
                        path: iconM
                    },
                    {
                        id: 5,
                        name: "Короб L",
                        size: '(40x40x30см)',
                        path: iconS
                    },
                    {
                        id: 6,
                        name: "Короб L",
                        size: '(40x40x30см)',
                        path: iconL
                    }
                ]
            }
        },
        methods: {
            setBoxImage: function (path) {
                this.current = path

            },
            closeDropdown: function () {
                this.state = !this.state
            }

        }
    }
</script>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

    @media screen and(max-width: 500px) {
        #package_container {
            width: 90% !important;
            height: max-content !important;
            margin-left: 5% !important;
            padding: 20px 0 !important;
            margin-top: 5% !important;

            .nav_menu {
                justify-content: space-around !important;
            }

            .package_content {
                padding-top: 30px;
                margin: 0 !important;
                flex-direction: column;
                align-items: center;
                height: auto !important;

                .choiced_scroll_menu {
                    padding-top: 15px !important;
                    order: 2 !important;
                    padding-right: 0 !important;
                    width: auto !important;
                }

                .box_img_block {
                    order: 1 !important;
                }
            }

            .package_choiced_panel {
                display: flex;
                padding-top: 40px;
                flex-direction: row;
                justify-content: space-between;

                .package_choiced_text {
                    display: none !important;
                }

                button {
                    background: #ED1651;
                    border-radius: 4px;
                    font-family: Open Sans;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    cursor: pointer;
                    line-height: 22px;
                    /* identical to box height, or 137% */
                    border: none !important;;
                    padding: 15px 20px;
                    color: #FFFFFF;
                }

            }
        }
    }

    #package_container {
    position:absolute;
            left:250px;
        top:100px;
        font-family: 'Open Sans', sans-serif;
        width: 750px;
        height: 440px;
        background: #ffffff;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        padding: 30px;
        z-index: 30;
        box-sizing: border-box;

        .nav_menu {
            display: flex;
            justify-content: space-between;

            .nav_title_bolder_text {
                font-family: Open Sans;
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 25px;
                /* identical to box height */


                color: #333333;
            }
        }

        .package_content {

            ::-webkit-scrollbar {
                width: 12px;
            }

            ::-webkit-scrollbar-track {
                background: #F4F4F4;
                border-radius: 5px;
            }

            ::-webkit-scrollbar-thumb {
                background: #F4F4F4;
                border-radius: 5px;
            }

            margin-top: 50px;
            height: 220px;
            display: flex;
            justify-content: space-between;

            .choiced_scroll_menu {

                padding: 0 5px 0 0;
                display: flex;
                box-sizing: border-box;
                flex-direction: column;
                overflow: auto;
                width: 330px;

            }
        }

        .package_choiced_panel {

            display: flex;
            padding-top: 40px;
            flex-direction: row;
            justify-content: space-between;

            .package_choiced_text {
                display: flex;
                align-content: center;
                align-items: center;

                img {
                    width: 24px;
                    height: 24px;
                }

                span {
                    padding-left: 20px;

                    p:first-child {
                        font-family: Open Sans;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 19px;
                        /* identical to box height */

                        text-align: initial;


                        color: #333333;
                    }

                    p:last-child {
                        font-family: Open Sans;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 19px;
                        /* identical to box height */


                        color: #333333;
                    }
                }
            }

            button {
                background: #ED1651;
                border-radius: 4px;
                font-family: Open Sans;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                cursor: pointer;
                line-height: 22px;
                /* identical to box height, or 137% */
                border: none !important;;
                padding: 15px 20px;
                color: #FFFFFF;
            }
        }
    }
</style>