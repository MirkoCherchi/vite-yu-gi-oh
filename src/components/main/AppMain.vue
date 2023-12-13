<script>
import { store } from "../../store";
import MainSelectVue from "./MainSelect.vue";
import MainCards from "./MainCards.vue";
import axios from "axios";

export default {
    props: [],
    components: {
        MainSelectVue,
        MainCards,
    },
    data() {
        return {
            store,
        };
    },
    created() {
        this.fetchCard();
    },
    methods: {
        fetchCard() {
            let apiFinalUrl = "";
            if (this.store.selectArchetype === "") {
                apiFinalUrl = this.store.apiURL;
            } else {
                // https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes
                apiFinalUrl = `${this.store.apiURL}&archetype=${this.store.selectArchetype}`;
            }
            axios.get(apiFinalUrl).then((response) => {
                this.store.cards = response.data.data;
            });
        },
    },
};
</script>

<template>
    <main>
        <MainSelectVue @searchArch="fetchCard" />
        <MainCards />
    </main>
</template>

<style lang="scss">
main {
    max-width: 1250px;
    margin: 0 auto;
}
</style>
