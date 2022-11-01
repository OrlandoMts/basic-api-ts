import { DiaryEntry, DiaryEntryNoComm } from "../types";
import diaryData from "./diaries.json";

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = (): DiaryEntry[] => diaries;

export const getEntriesNoComments = (): DiaryEntryNoComm[] => diaries;

export const addEntry = (): null => null;
