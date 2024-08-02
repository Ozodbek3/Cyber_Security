import HomePage from "./HomePage/HomePage";


const tester = () => [
  ...HomePage(),
];

const Routes = () => [...tester()];

export default Routes;
