export interface FileResponse {
	data: {
		data: FileData[];
	};
}

export interface FileData {
	id: string;
	title?: string;
	description?: string;
	type?: string;
	filename_download?: string;
}
