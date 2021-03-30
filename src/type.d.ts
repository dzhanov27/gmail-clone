export interface Mail {
  _id: string;
  senderEmail: string;
  recipientEmail: string;
  recipientName: string;
  senderName: string;
  starred: boolean;
  category: string;
  sender: string;
  subject: string;
  description: string;
  date: string;
  __v: number;
}

export interface MailsState {
  data: Mail[];
}

export interface MailState {
  data: Mail;
}

export interface MailsSliceState {
  mails: MailsState;
}

export interface MailSliceState {
  mail: MailState;
}
