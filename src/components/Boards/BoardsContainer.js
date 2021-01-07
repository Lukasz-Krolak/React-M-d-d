import { connect } from 'react-redux';
import Boards from './Boards';
import { contactsFetched } from '../../Redux/boardsRedux';

const mapStateToProps = (state) => {
  return {
    title: state.title,
    items: state.items,
  };
};
const mapDispatchToProps = { contactsFetched };

export default connect (mapStateToProps, mapDispatchToProps)(Boards);




// import { contactsFetched } from "./actions";

// const mapStateToProps = (state) => {
//   return {
//     contacts: state.contacts // (1)
//   }
// };
// const mapDispatchToProps = { contactsFetched }; // (2)

// export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);