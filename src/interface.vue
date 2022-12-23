<template>
  <div>
    <div class="container">
      <p class="force-select">{{ fileLink }}</p>
      <CopyButton @copy-button-click="copyToClipboard(fileLink)" />
    </div>
    <v-notice>
      The public file link can be used to share a file with everyone.
      This only works if the file is public.
    </v-notice>
  </div>
</template>
<script setup lang="ts">
import { useApi } from '@directus/extensions-sdk';
import { ref, watch, watchEffect } from 'vue';
import { getPublicURL } from './utils';
import { FileData, FileResponse } from './types';
import CopyButton from './CopyButton.vue'

const props = defineProps({
  collection: {
    type: String,
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
  primaryKey: {
    type: Number
  }
});

const api = useApi();
const fileData= ref<FileData | null>(null);
const fileLink = ref<string>('');
const baseUrl: string = getPublicURL();

watchEffect(async () => {
  const response: FileResponse = await api.get(`/files/?filter[id][_eq]=${props.primaryKey}`);
  const data: FileData = response.data.data[0];
  fileData.value = data;
});

watch([fileData], () => {
  fileLink.value = `${baseUrl}assets/${fileData.value?.id}/${fileData.value?.filename_download}`
});

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
}
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
