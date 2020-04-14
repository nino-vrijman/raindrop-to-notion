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
export default {
  name: 'App',
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
      reader.onload = function(event) {
        const fileContent = event.target.result;
        console.log('Do we have filecontents?', !!fileContent);
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
