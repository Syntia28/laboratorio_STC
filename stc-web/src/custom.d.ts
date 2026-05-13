declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.pdf';

declare module 'pdfjs-dist' {
  export const getDocument: any;
  export const GlobalWorkerOptions: any;
}
