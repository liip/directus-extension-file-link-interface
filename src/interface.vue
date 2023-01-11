<template>
  <div>
    <div class="container">
      <p class="force-select">{{ fileLink }}</p>
      <v-button
        @click="copyToClipboard(fileLink)"
        v-tooltip="t('copy_to_clipboard')"
        secondary
        x-small
        icon
      >
        <v-icon name="content_copy"/>
      </v-button>
    </div>
    <v-notice>
      {{ t('file_link_notice') }}
    </v-notice>
  </div>
</template>
<script setup lang="ts">
import { inject, ref } from 'vue';
import { getPublicURL } from './utils';
import { useI18n } from 'vue-i18n';

const baseUrl: string = getPublicURL();
const fileData = inject('values', ref<Record<string, any>>({}));
const fileLink: string = `${baseUrl}assets/${fileData.value?.id}/${fileData.value?.filename_download}`

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
}

const { t } = useI18n({
  messages: {
    'de-DE': {
      'file_link_notice': 'Der öffentliche Dateilink kann verwendet werden, um eine Datei freizugeben. Dies funktioniert nur, wenn die Datei öffentlich ist.',
      'copy_to_clipboard' : 'In Zwischenablage kopieren'
    },
    'en-US': {
      'file_link_notice': 'The public file link can be used to share a file with everyone. This only works if the file is public.',
      'copy_to_clipboard' : 'copy to clipboard'

    }
  }
})
</script>
<style>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
}

.force-select {
  user-select: all;
}
</style>
