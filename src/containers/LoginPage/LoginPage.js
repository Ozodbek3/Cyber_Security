import LoginContainer from "./containers/LoginContainer"
import BaseLayout from "../../components/Layout/BaseLayout"
import * as ROUTES from "../../constants/routes"

export default () => [
    {
        path: ROUTES.LOGIN_PAGE,
        layout: BaseLayout,
        component: LoginContainer
    }
]