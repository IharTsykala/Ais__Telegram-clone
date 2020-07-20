export interface MessageInterface {
  id: number;
  text: string;
  additional: {
    video: string,
    audio: string,
    link: string,
    quotedText: string,
  };
  idDialog: number;
  idOwner: number;
  createDate: string;
}
