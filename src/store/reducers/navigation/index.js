import { AppNavigator }  from '../../../navigators/AppNavigator';

const router = AppNavigator.router;
const mainNavAction = router.getActionForPathAndParams('Auth');
const initialNavState = router.getStateForAction(mainNavAction);

const nav = (state = initialNavState, action) => {
    return router.getStateForAction(action, state);
};

export default nav;