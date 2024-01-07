import { render, screen } from "@testing-library/react";
import App from "./App";
import ListItem from "./ListItem";
import ListAdd from "./ListAdd"

test("renders shopping list", () => {
  render(<App />);
  const linkElement = screen.getByText(/shopping list/i);
  expect(linkElement).toBeInTheDocument();
});

test("listItems", () => {
  render(<ListItem />);

  const linkElement = screen.getByText((content, element) => {
    return element.tagName.toLowerCase() === "h4" && content.includes("Total:");
  });
  expect(linkElement).toBeInTheDocument();
});

test("listAdd", () => {
  render(<ListAdd />);
  const linkElement = screen.getByText("Add", { selector: "button" });
  expect(linkElement).toBeInTheDocument();
});

test("renders ListItem component without crashing", () => {
  const { container } = render(<ListItem />);
  expect(container).toBeDefined();
});

test("renders ListAdd component without crashing", () => {
  const { container } = render(<ListAdd />);
  expect(container).toBeDefined();
});

test("renders App component without crashing", () => {
  const { container } = render(<App />);
  expect(container).toBeDefined();
});