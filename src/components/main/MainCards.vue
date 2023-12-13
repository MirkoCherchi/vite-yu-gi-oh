<script>
import CardMain from "./CardMain.vue";
import { store } from "../../store";
import axios from "axios";

export default {
    props: [],
    components: {
        CardMain,
    },

    data() {
        return {
            store,
        };
    },

    created() {
        axios.get(store.apiURL).then((response) => {
            store.cards = response.data.data;
        });
    },
};
</script>

<template>
    <div class="container-cards">
        <div class="cards-count">
            <h4>Found {{ store.cards.length }} cards</h4>
        </div>
        <div class="list">
            <CardMain v-for="card in store.cards" :img="card.card_images[0].image_url_small" :name="card.name"
                :archetype="card.archetype" />
        </div>
    </div>
</template>

<style lang="scss">
@use "../../assets/styles/variables" as *;

.container-cards {
    background-color: #fff;
    padding: 50px;

    .cards-count {
        background-color: $bg-secondary;

        h4 {
            color: #fff;
            padding: 20px 15px;
        }
    }

    .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 20px;
    }
}
</style>
