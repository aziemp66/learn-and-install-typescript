type StringOrNum = string | number;
type UserType = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string): void => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: UserType): void => {
  console.log(`${user.name} says hello`);
};
