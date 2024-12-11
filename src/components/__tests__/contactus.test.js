import { render, screen } from "@testing-library/react";
import Contact from "../Contact"; //since we need to render to jsdom
import "@testing-library/jest-dom"; //toBeInTheDocument comes from here

test("Is the contact us page loaded in application", () => {
  render(<Contact />);
  //Quering
  const heading = screen.getByRole("heading", { name: "Contact Us" });
  // const heading = screen.getByRole("heading", { name: /contact us/i });      // To ignore case
  //Assertion
  expect(heading).toBeInTheDocument();
});

test("Is the submit button present in comp Contact", () => {
  render(<Contact />);
  //Quering
  const button = screen.getByText("Submit");
  //Assertion
  expect(button).toBeInTheDocument();
});

test("Do we have multiple heading tags", () => {
  render(<Contact />);
  //Quering
  const headings = screen.getAllByRole("heading");
  //Assertion
  expect(headings.length).toBe(2);
  headings.forEach((heading) => {
    expect(heading).toBeInTheDocument();
  });
});
