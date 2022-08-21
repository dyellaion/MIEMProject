export interface Script {
  id: number;
  scriptName: string;
  path: string;
  lang: string;
}

export interface History {
  id: number;
  scriptName: string;
  date: string;
}