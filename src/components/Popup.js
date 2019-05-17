import { deletePost, hideModal } from '../actions'

const DeletePostModal = ({ post, dispatch }) => (
  <div>
    <p>Delete post {post.name}?</p>
    <button onClick={() => {
      dispatch(deletePost(post.id)).then(() => {
        dispatch(hideModal())
      })
    }}>
      Yes
    </button>
    <button onClick={() => dispatch(hideModal())}>
      Nope
    </button>
  </div>
)
export default connect(
    (state, ownProps) => ({
      visible: selectors.getPopupVisibility(state, ownProps.name),
    }),
    actions
  )(Popup)
  
const createActionDispatchers = (...actionCreatorGroups) => dispatch =>
  // Iterate over actionCreatorsArray, which is an array of arrays of action
  // creators
  actionCreatorGroups.reduce((actionDispatchers, actionCreators) => {
    // Add an action dispatcher for each action creator in actionCreators
    Object.keys(actionCreators)
      .filter((name) => (typeof actionCreators[name] === 'function'))
      .forEach((name) => {
        actionDispatchers[name] = function(...actionCreatorArgs) {
          return dispatch(actionCreators[name].apply(this, actionCreatorArgs));
        };
      });
    return actionDispatchers;
  }, {});

module.exports = createActionDispatchers;