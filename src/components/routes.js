import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./Not Found/Not_Found";

const RoutesContainer = ({ routes }) => {
  return (
    <Routes>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component>
                </route.component>
              </route.layout>
            }
          />
        );
      })}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RoutesContainer;
