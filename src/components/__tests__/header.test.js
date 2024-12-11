import Header from "../Header"; //testing Header component
import { render } from "@testing-library/react"; //since we need to render to jsdom
import { Provider } from "react-redux"; //since we used redux
import appStore from "../../redux/appStore"; //since we used redux
import { BrowserRouter } from "react-router-dom"; //Since we used Link comp which is from react-router-dom
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom"; //toBeInTheDocument comes from here

test("Should load header component and have login button in it", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginbutton = screen.getByRole("button");
  expect(loginbutton).toBeInTheDocument();
});
