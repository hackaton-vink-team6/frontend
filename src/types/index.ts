export enum Pages {
  'root',
  'chat',
  'whatsapp',
  'telegram',
  'form',
  'settings',
}


export type User = {
  name: string,
  email: string,
  phone?: string
}
