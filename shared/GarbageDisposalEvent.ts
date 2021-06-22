export interface GarbageDisposalEvent {
  type: 'misc' | 'organic' | 'paper' | 'packaging';
  date: string;
}
