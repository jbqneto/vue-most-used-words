<template>
  <v-container fluid>
    <v-form>
      <v-file-input
        prepend-icon="mdi-message-text"
        label="Select your subtitles"
        append-icon="mdi-send"
        multiple
        chips
        @click:append="processSubtitles"
        v-model="files"
      ></v-file-input>
    </v-form>
    <div class="info">
      <p>
        Subtitles:
        <span>{{files.length}}</span>
      </p>
      <p>
        Words:
        <span>{{groupedWords.length}}</span>
      </p>
    </div>
    <div class="pills">
      <Pill v-for="(word, i) in groupedWords" :key="i" :amount="word.amount" :name="word.name"></Pill>
    </div>
  </v-container>
</template>

<script>
import { ipcRenderer } from "electron";

import Pill from "../components/Pill";

export default {
  components: {
    Pill
  },
  data: function() {
    return {
      files: [],
      groupedWords: []
    };
  },
  methods: {
    processSubtitles() {
      const paths = this.files.map(file => file.path);
      ipcRenderer.send("process-subtitles", paths);
      ipcRenderer.on("process-subtitles", (event, resp) => {
        this.groupedWords = resp;
      });
    }
  }
};
</script>

<style scoped>
.pills {
  display: flex;
  flex-wrap: wrap;
}
</style>
