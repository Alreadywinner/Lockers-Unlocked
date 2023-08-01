type UserTypeValues = {
  id: number;
  name: string;
};
type UserTypes = Array<UserTypeValues>;

const UserTypeData: UserTypes = [
  {
    id: 1,
    name: 'Seller',
  },
  {
    id: 2,
    name: 'Buyer',
  },
];

export default UserTypeData;
