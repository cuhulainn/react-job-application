import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders sign up form", () => {
  render(<App />);
  const formHeader = screen.getByText(/set up your account/i);
  expect(formHeader).toBeInTheDocument();
});
