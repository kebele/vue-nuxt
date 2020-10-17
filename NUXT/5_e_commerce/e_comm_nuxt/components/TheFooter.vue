<template>
    <div class="footerContainer">
        <div class="footerContent">
            <div class="infoArea">
                <div class="rowOne">
                    <span class="brandHeader">kebele</span>
                    <p class="infoText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dignissimos!</p>
                    <span class="phoneText">phone : +90 555 555 5555</span>
                    <br>
                    <span>info@kebele.com</span>
                    <br>
                    <img class="imgInstagram" src="https://www.transparentpng.com/thumb/logo-instagram/YfpFOL-logo-instagram-free-transparent.png" alt="Logo Instagram Free Transparent @transparentpng.com">
                    <img class="imgInstagram" src="https://www.transparentpng.com/thumb/logo-instagram/YfpFOL-logo-instagram-free-transparent.png" alt="Logo Instagram Free Transparent @transparentpng.com">
                    <img class="imgInstagram" src="https://www.transparentpng.com/thumb/logo-instagram/YfpFOL-logo-instagram-free-transparent.png" alt="Logo Instagram Free Transparent @transparentpng.com">
                </div>
                <div class="rowTwo">
                    <h3>useful links</h3>
                    <ul>
                        <li>link</li>
                        <li>link</li>
                        <li>link</li>
                        <li>link</li>
                        <li>link</li>
                    </ul>
                </div>
                <div class="rowThree">
                    <h3>help</h3>
                    <div>
                        <h3>payment</h3>
                    </div>
                </div>
            </div>
            <div class="bottomArea">
                <div>
                    <span class="bottomAreaText">terms and conditions</span>
                    <span class="bottomAreaText">price policy</span>
                </div>
                <span class="copyrightText">2020 All Rights Reserved</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .footerContainer{
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        /* position: fixed; */
        left: 0;
        bottom: 0;
        width: 100%;
        /* height: 300px; */
        height: auto;
        background-color: #333c35;
        color: whitesmoke;
    }
    .footerContent{
        width: 80%;
    }
    .infoArea{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 80%;
    }
    .rowOne{
        width: 30%;
        padding: 20px;
        font-family: Arial, Helvetica, sans-serif;
    }
    .brandHeader{
        font-size: 22px;
        font-weight: 700;
    }
    .imgInstagram{
        width: 60px;height: 60px;
    }
    .rowTwo{
        padding: 20px;
        width: 40%;
    }
    .rowThree{
        padding: 20px;
        width: 30%;
    }
    .bottomArea{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .bottomAreaText{
        padding: 30px;
    }
    .copyrightText{
        margin-top: 15px;
    }

</style>