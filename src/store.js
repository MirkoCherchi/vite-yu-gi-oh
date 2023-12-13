import { reactive } from "vue";

export const store = reactive({
  searchArchetypeURL: "https://db.ygoprodeck.com/api/v7/archetypes.php",
  selectArchetype: "",
  archetypesList: [],
  cards: [],
  apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
});
