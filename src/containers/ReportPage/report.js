import ReportContainer from "./ReportPage"
import BaseLayout from "../../components/Layout/BaseLayout"
import * as ROUTES from "../../constants/routes"

export default () => [
    {
        path: ROUTES.REPORT_PAGE,
        layout: BaseLayout,
        component: ReportContainer
    }
]