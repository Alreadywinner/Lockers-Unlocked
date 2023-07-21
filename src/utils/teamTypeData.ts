type TeamValues = {
  id: number;
  name: string;
};
type TeamDataTypes = Array<TeamValues>;

const TeamTypeData: TeamDataTypes = [
  {
    id: 1,
    name: 'NFL',
  },
  {
    id: 2,
    name: 'NBA',
  },
  {
    id: 3,
    name: 'MLB',
  },
  {
    id: 4,
    name: 'College Teams',
  },
  {
    id: 5,
    name: 'D1 Sports',
  },
];

export default TeamTypeData;
