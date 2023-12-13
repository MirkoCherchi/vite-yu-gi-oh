<script>
import MainSelectVue from "./MainSelect.vue";
import MainCards from "./MainCards.vue";

export default {
    props: [],
    components: {
        MainSelectVue,
        MainCards,
    },
    data() {
        return {};
    },
};
</script>

<template>
    <main>
        <MainSelectVue @searchArch="$emit('search')" />
        <MainCards />
    </main>
</template>

<style lang="scss">
main {
    max-width: 1250px;
    margin: 0 auto;
}
</style>
