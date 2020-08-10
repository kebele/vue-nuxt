<template>
    <div>
        <h2>Cart</h2>    
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    ul{
        list-style: none;
    }
    li{
        display: flex;
        max-width: 700px;
        margin: auto;
        margin-top: 10px;
    }
    .item-name{
        text-align: left;
        font-size: 18px;
        flex: 2;
    }
    .item-count{
        font-size: 25px;
        margin-left: 10px;
        flex: 2;
    }
    .item-amount{
        text-align: left;
        flex : 1
    }
    .total-amount{
        border-top : 2px solid black;
        border-bottom: 2px solid black;
        padding: 10px 20% 10px 10px;
        margin: 10px;
        font-size: 29px;
        text-align: right;
    }
    button{
        border: none;
        cursor: pointer;
        padding : 5px 10px;
    }
</style>