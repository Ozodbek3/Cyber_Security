import HomeContainer from "./HomeContainer"
import BaseLayout from "../../components/Layout/BaseLayout"
import * as ROUTES from "../../constants/routes"

export default () => [
    {
        path: ROUTES.HOME_PAGE,
        layout: BaseLayout,
        component: HomeContainer
    }
]