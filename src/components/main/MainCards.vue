<script>
import { store } from "../../store";
import axios from "axios";
import CardMain from "./CardMain.vue";

export default {
    components: {
        CardMain,
    },

    data() {
        return {
            cards: [],
        };
    },
    created() {
        axios
            .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0")
            .then((response) => {
                this.cards = response.data.data;
            });
    },
};
</script>

<template>
    <div class="container-cards">
        <div class="cards-count">
            <h4>Found {{ cards.length }} cards</h4>
        </div>
        <div class="list">
            <CardMain v-for="card in cards" :img="card.card_images[0].image_url" :name="card.name" :type="card.type" />
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
