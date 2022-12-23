<template>
  <div>
    <v-button
      @click="$emit('copyButtonClick')"
      v-tooltip="'copy-to-clipboard'"
      secondary
      x-small
      icon
    >
      <v-icon name="content_copy"/>
    </v-button>
  </div>
</template>
