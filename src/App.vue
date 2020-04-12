<template>
  <div
    id="app"
    class="drop-zone"
    @dragover.stop.prevent="onDragover"
    @drop.stop.prevent="onDrop"
  >
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
    onDrop(event) {
      // Source: https://www.html5rocks.com/en/tutorials/file/dndfiles/
      const [file] = event.dataTransfer.files;

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
