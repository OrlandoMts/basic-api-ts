import { Visibility, Weather } from "./enums";
import { newDiaryEntry } from "./types";

const parseComment = (commentFromReq: any): string => {
	if (!isString(commentFromReq)) {
		throw new Error("Mensaje incorrecto");
	}
	return commentFromReq;
};

const parseDate = (dateFromReq: any): string => {
	if (!isDate(dateFromReq) || !isString(dateFromReq)) {
		throw new Error("Fecha incorrecto");
	}
	return dateFromReq;
};

const parseWeather = (weatherFromReq: any): Weather => {
	if (!isString(weatherFromReq) || !isWeather(weatherFromReq)) {
		throw new Error("Clima incorrecto");
	}
	return weatherFromReq;
};

const parseVisibility = (visibilityFromReq: any): Visibility => {
	if (!isString(visibilityFromReq) || !isVisibility(visibilityFromReq)) {
		throw new Error("Vibilidad incorrecta");
	}
	return visibilityFromReq;
};

// const isString = (value: any) => {
// 	return typeof value === "string" || value instanceof String;
// };

const isString = (value: string): boolean => {
	return typeof value === "string";
};

const isDate = (value: string): boolean => {
	return Boolean(Date.parse(value));
};

const isWeather = (value: any): boolean => {
	return Object.values(Weather).includes(value.toLowerCase());
};

const isVisibility = (value: any): boolean => {
	return Object.values(Visibility).includes(value);
};

const toNewDiaryEntry = (dataIn: any): newDiaryEntry => {
	const newEntry: newDiaryEntry = {
		// TODO:
		date: parseDate(dataIn.date),
		weather: parseWeather(dataIn.weather),
		visibility: parseVisibility(dataIn.visibility),
		comment: parseComment(dataIn.comment),
	};

	return newEntry;
};

export default toNewDiaryEntry;
