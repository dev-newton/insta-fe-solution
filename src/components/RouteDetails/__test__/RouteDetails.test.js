import { render, screen, fireEvent } from "@testing-library/react";
import { RouteDetails } from "components";

// const mockedSetTodo = jest.fn();

describe("AddInput", () => {
  it("should render input element", () => {
    render(
      <RouteDetails
      // stops={stops}
      // schedulingStrategy={schedulingStrategy}
      // canAddCargo={false}
      />
    );
    // const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    // expect(inputElement).toBeInTheDocument();
  });
});
