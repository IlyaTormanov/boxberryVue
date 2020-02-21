<template>
    <div id="boxViewContainer">
        <div class="column">
            <div class="characters_block">
                <p class="characters">
                    Короб XS(15x15x15см)
                </p>
                <p class="characters">
                    Короб XS(15x15x15см)
                </p>
                <p class="characters">
                    Короб XS(15x15x15см)
                </p>
                <p class="characters">
                    Короб XS(15x15x15см)
                </p>
                <p class="characters">
                    Короб XS(15x15x15см)
                </p>
                <p class="characters">
                    Короб XS(15x15x15см)
                </p>
            </div>
            <div class="img_choiced_block">
                <img src="../assets/XS.png"/>
                <img src="../assets/S.png"/>
                <img src="../assets/M.png"/>
                <img src="../assets/L.png"/>
                <img src="../assets/Screenshot_9.png"/>
                <img src="../assets/Screenshot_10.png"/>
            </div>
        </div>
        <div class="column">
            <div class="characters_block">
                <p class="characters">
                    Пакет с клапаном XS Boxberry (24x24)
                </p>
                <p class="characters">
                    Пакет с клапаном XS Boxberry (24x24)
                </p>
                <p class="characters">
                    Пакет с клапаном XS Boxberry (24x24)
                </p>
                <p class="characters">
                    Пакет с клапаном XS Boxberry (24x24)
                </p>
                <p class="characters">
                    Пакет с клапаном XS Boxberry (24x24)
                </p>
                <p class="characters">
                    Пакет с клапаном XS Boxberry (24x24)
                </p>
            </div>
            <div class="img_choiced_block">
                <img src="../assets/Screenshot_13.png"/>
                <img src="../assets/Screenshot_14.png"/>
                <img src="../assets/Screenshot_15.png"/>
                <img src="../assets/Screenshot_16.png"/>
                <img src="../assets/Screenshot_17.png"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StaticMaket"
    }
</script>

<style scoped lang="scss">
    #boxViewContainer{
        background: #ffffff;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        font-family: Open Sans;
        display:grid;
        padding:60px 0;
        width:1700px !important;
        grid-row-gap:40px;
            img{
                width:200px;
            }
        .column{
            align-items: center;
            display:grid;
            grid-template-columns: 25% 70%;
            .characters_block{
                p{
                    padding-left:60px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    text-align: initial;
                    font-size: 14px;
                    line-height: 160%;
                    /* or 19px */
                    color: #000000;
                }
            }
            .img_choiced_block{
                display: flex;
                align-items: center;
            }
        }
    }
</style>