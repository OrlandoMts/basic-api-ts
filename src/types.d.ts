export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
export type Visibility = "clear" | "poor" | "good" | "ok";

export interface DiaryEntry {
	id: number;
	date: string;
	weather: Weather;
	visibility: Visibility;
	comment: string;
}
// Tipos de utilidades de ts
// export type DiaryEntryNoComm = Pick<DiaryEntry, "id" | "weather">;
export type DiaryEntryNoComm = Omit<DiaryEntry, "comment">;
// export interface DiaryEntryNoComm extends DiaryEntry {}
