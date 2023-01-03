# Directus file link interface

This extension displays the public link of a file on 
its detail page.
This is useful if you want to share a file stored on directus.

![Screenshot](./screenshot.png)

## Installation
1. Install the extension via `npm install directus-extension-file-link-interface` (⚠️ coming soon!)
2. Restart Directus
3. Copy [this Migration](./src/20221222FILELINK-add-file-link-field.js) to the `extensions/migrations` 
folder of your project and run it with `npx directus migrate:latest`. 
Alternatively, a field can be created manually using the `Public File Link` interface on the `directus-files` collection.
