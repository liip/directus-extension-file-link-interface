<template>
  <p>{{ fileLink }}</p>
</template>
<script setup lang="ts">
import { useApi } from '@directus/extensions-sdk';
import { ref, watch, watchEffect } from 'vue';
import { getPublicURL } from './utils';
import { FileData, FileResponse } from './types';

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

</script>
