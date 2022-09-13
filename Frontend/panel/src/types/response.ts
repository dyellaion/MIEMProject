export interface Script {
  id: number;
  scriptName: string;
  path: string;
  lang: string;
}

export interface History {
  id: number;
  scriptID: number;
  scriptName: string;
  dateTime: string;
}
