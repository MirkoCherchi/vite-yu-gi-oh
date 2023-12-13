<script>
import axios from "axios";
import { store } from "../../store";
import MainCards from "./MainCards.vue";

export default {
    props: [],
    components: {
        MainCards,
    },
    data() {
        return {
            store,
        };
    },

    created() {
        axios.get(store.searchArchetypeURL).then((response) => {
            console.log("Select Archetype:", this.store.selectArchetype);
            store.archetypesList = response.data;
        });
    },
};
</script>

<template>
    <select name="Selector" id="main-selector" v-model="store.selectArchetype" @change="$emit('searchArch')">
        <option value="">All</option>
        <option v-for="archetype in store.archetypesList" :value="archetype.archetype_name">
            {{ archetype.archetype_name }}
        </option>
    </select>
</template>

<style lang="scss">
select {
    margin: 25px 15px;
    padding: 15px 110px 15px 10px;
    border-radius: 5px;
    border: 1px solid #ced4da;
}
</style>
