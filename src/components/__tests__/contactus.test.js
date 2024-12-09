import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Is the contact us page loaded in application", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading", { name: /contact us/i });
  expect(heading).toBeInTheDocument();
});

test("Is the submit button present in comp Contact", () => {
  render(<Contact />);
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});

test("Do we have multiple heading tags", () => {
  render(<Contact />);
  const headings = screen.getAllByRole("heading");
  expect(headings.length).toBe(2);
  headings.forEach((heading) => {
    expect(heading).toBeInTheDocument();
  });
});
