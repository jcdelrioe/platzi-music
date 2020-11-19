<template lang="pug">
  .content(v-if="track && track.album")
    p
      img(v-bind:src="track.album.images[0].url")
    p
      strong {{ track.name }}
    p
      small {{ track.duration_ms  | ms-to-mm }}
    p
      audio(controls v-bind:src="track.preview_url")
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['track'])
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 124px;
    border-radius: 50%;
  }
</style>
