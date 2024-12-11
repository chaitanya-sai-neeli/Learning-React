import { screen, render } from "@testing-library/react";
import RestoCard from "../RestoCard";
import MOCK_DAta from "../mocks/restaurantMockDataTest.json"; //for using the mockdata json
import "@testing-library/jest-dom";
import { WithPromotedLabel } from "../RestoCard";

// it("Should check for a restaurant name when app loads", () => {
//   render(<RestoCard restData={MOCK_DAta} />);
//   //   console.log(MOCK_DAta);
//   const restaurantName = screen.getByText("Krimmy Thickshakes");
//   expect(restaurantName).toBeInTheDocument();
// });

it("Should check for a restaurant name when app loads", () => {
  const RestWithPromotedLabel = WithPromotedLabel(RestoCard);
  render(<RestWithPromotedLabel restData={MOCK_DAta} />);
  //   console.log(MOCK_DAta);
  const restaurantName = screen.getByText("Cake Zone Patisserie");
  expect(restaurantName).toBeInTheDocument();
});
