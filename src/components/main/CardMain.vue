<script>

export default {
    props: {
        img: String,
        archetype: {
            type: String,
            default: "Unknown"
        }, name: String
    },

};

</script>

<template>
    <div class="card"><img :src="img" :alt="name">
        <h5>{{ name }}</h5>
        <div>{{ archetype }}</div>
    </div>
</template>

<style lang="scss">
@use '../../assets/styles/variables' as *;

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 5 - 20px);
    background-color: $bg-primary;
    gap: 20px;

    h5 {
        color: #fff;
        font-size: 16px;
        text-align: center;
        text-transform: uppercase;
        padding: 5px;
    }



    img {
        width: 100%;
        display: block;
    }

}
</style>
