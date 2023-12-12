<script>

export default {
};


</script>

<template>
    <nav class="navbar"><img src="../../../public/pngegg (4).png" alt="Logo">
        <h1>Yu-Gi-Oh Api</h1>
    </nav>
</template>

<style lang="scss">
@use '../../assets/styles/variables' as *;

.navbar {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #fff;
    padding: 15px 25px;

    img {
        width: 4%;
    }

    h1 {
        font-size: 60px;
        color: $bg-secondary;

    }
}
</style>
