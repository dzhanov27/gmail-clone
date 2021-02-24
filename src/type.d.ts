export interface Mail {
  _id: string;
  sender: string;
  subject: string;
  description: string;
  date: string;
  __v: number;
}

export interface MailsState {
  data: Mail[];
}

export interface State {
  mails: MailsState;
}
