import { DiaryEntry, DiaryEntryNoComm, Visibility, Weather } from "../types";
import diaryData from "./diaries.json";

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = (): DiaryEntry[] => diaries;

export const getEntriesNoComments = (): DiaryEntryNoComm[] => {
	return diaries.map(({ id, date, weather, visibility }) => ({
		id,
		date,
		weather,
		visibility,
	}));
	// return diaries;
};

export const getEntryById = (id: number): DiaryEntry | undefined => {
	const entry = diaries.find((item) => item.id === id);
	return entry;
};

export const getEntryByIdNOComm = (
	id: number
): DiaryEntryNoComm | undefined => {
	const entry = diaries.find((item) => item.id === id);
	if (entry) {
		const { comment, ...rest } = entry;
		return rest;
	}
	return undefined;
};

export const addDiary = (
	date: string,
	weather: Weather,
	visibility: Visibility,
	comment: string
): DiaryEntry => {
	const newDiaryEntry = {
		id: Math.max(...diaries.map((e) => e.id)) + 1,
		date,
		weather,
		visibility,
		comment,
	};
	diaries.push(newDiaryEntry);
	return newDiaryEntry;
};
