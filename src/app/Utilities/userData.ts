export interface UserData {
    id: string;
    movieId: string;
    name: string;
    movieName: string;
    seat: number;
    isEdit: boolean;
    seatArray: any;
    timingArray: any;
  }
  
  export const UserColumns = [
    {
      key: 'name',
      type: 'text',
      label: 'Full Name',
    },
    {
      key: 'movieName',
      type: 'text',
      label: 'Movie Name',
    },
    {
      key: 'seat',
      type: 'number',
      label: 'Seats',
    },
    {
      key: 'isEdit',
      type: 'isEdit',
      label: '',
    },
  ];