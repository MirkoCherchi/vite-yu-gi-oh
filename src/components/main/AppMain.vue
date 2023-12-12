<script>
import MainSelectVue from './MainSelect.vue';
import MainCards from './MainCards.vue';
import { store } from '../../store';

export default {
    components: {
        MainSelectVue,
        MainCards

    },
    data() {
        return {
            store
        }
    },
};


</script>

<template>
    <main>
        <MainSelectVue />
        <MainCards />
    </main>
</template>

<style lang="scss">
main {
    max-width: 1250px;
    margin: 0 auto;
}
</style>
