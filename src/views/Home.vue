<template>
  <v-container fluid>
    <v-form>
      <v-file-input multiple chips v-model="files"></v-file-input>
    </v-form>
    <div class="pills">
      <Pill v-for="word in groupedWords" :key="word.name" :amount="word.amount" :name="word.name"></Pill>
    </div>
  </v-container>
</template>

<script>
import Pill from "../components/Pill";

export default {
  components: {
    Pill
  },
  data: function() {
    return {
      files: [],
      groupedWords: [
        { name: "you", amount: 900 },
        { name: "he", amount: 200 },
        { name: "she", amount: 300 },
        { name: "that", amount: 200 },
        { name: "try", amount: 180 },
        { name: "not", amount: 120 },
        { name: "all", amount: 321 },
        { name: "yes", amount: 81 },
        { name: "why", amount: 16 }
      ]
    };
  }
};
</script>

<style scoped>
.pills {
  display: flex;
  flex-wrap: wrap;
}
</style>
