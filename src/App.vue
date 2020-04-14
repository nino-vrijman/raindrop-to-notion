<template>
  <div
    id="app"
    class="drop-zone"
    @dragover.stop.prevent="onDragover"
    @drop.stop.prevent="onFileUpload($event.dataTransfer.files)"
  >
    <input
      type="file"
      name="file-upload"
      accept=".html"
      @change="onFileUpload($event.target.files)"
    />
    Drop a file anywhere in the window
  </div>
</template>

<script>
import cleanRaindropExport from './lib/clean-raindrop-export';
import parseRaindropExport from './lib/parse-raindrop-export';

export default {
  name: 'App',
  computed: {
    cleanedRaindropExport() {
      return cleanRaindropExport(this.fileContent);
    },
    parsedRaindropExport() {
      return parseRaindropExport(this.cleanedRaindropExport);
    }
  },
  data() {
    return {
      fileContent: ''
    };
  },
  methods: {
    onDragover(event) {
      event.dataTransfer.dropEffect = 'copy';
    },
    onFileUpload(files) {
      // Source: https://www.html5rocks.com/en/tutorials/file/dndfiles/
      const [file] = files;

      if (!file.type.match('text/html')) {
        console.log('Expecting HTML file, returning...');
        return;
      }

      const reader = new FileReader();
      reader.onload = event => {
        this.fileContent = event.target.result;
      };
      reader.readAsText(file);
    }
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
</style>
