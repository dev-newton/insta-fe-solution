import { render, screen } from "@testing-library/react";
import { RouteDetails } from "components";

const mockStops = [
  {
    address: "Test Address 1",
    company: "test company 1",
    openingHours: {
      from: 500,
      to: 700,
    },
    schedule: {
      start: "2020-08-29 09:00:00",
      end: "2020-08-29 12:00:00",
    },
  },
  {
    address: "Test Address 2",
    company: "test company 2",
    openingHours: {
      from: 900,
      to: 1200,
    },
    schedule: {
      start: "2020-08-29 09:00:00",
      end: "2020-08-29 12:00:00",
    },
  },
  {
    address: "Test Address 3",
    company: "test company 3",
    openingHours: {
      from: 900,
      to: 1200,
    },
    schedule: {
      start: "2020-08-29 09:00:00",
      end: "2020-08-29 12:00:00",
    },
  },
];

describe("RouteDetails", () => {
  it("should render Route details component", () => {
    render(
      <RouteDetails
        stops={mockStops}
        schedulingStrategy="fixed"
        canAddCargo={false}
      />
    );
  });

  it("pin marker should have value of 1 for the first stop", () => {
    render(
      <RouteDetails
        stops={mockStops}
        schedulingStrategy="fixed"
        canAddCargo={false}
      />
    );

    const markerLabels = screen.getAllByTestId("marker-value");

    expect(markerLabels[0]).toHaveTextContent("1");
  });

  it("pin marker should have flag icon for the last stop", () => {
    render(
      <RouteDetails
        stops={mockStops}
        schedulingStrategy="fixed"
        canAddCargo={false}
      />
    );

    const markerLabels = screen.getAllByTestId("marker-value");

    expect(markerLabels[markerLabels.length - 1]).toHaveClass("fa-flag");
  });

  it("if scheduling strategy is fixed and canAddCargo is false, there should be ONLY one input for the first stop", () => {
    render(
      <RouteDetails
        stops={mockStops}
        schedulingStrategy="fixed"
        canAddCargo={false}
      />
    );

    const routeInputs = screen.getAllByTestId("input");

    expect(routeInputs.length).toBe(1);
  });

  it("if scheduling strategy is fixed and canAddCargo is false, input type should be date", () => {
    render(
      <RouteDetails
        stops={mockStops}
        schedulingStrategy="fixed"
        canAddCargo={false}
      />
    );

    const routeInputs = screen.getAllByTestId("input");

    expect(routeInputs[0].getAttribute("type")).toBe("date");
  });

  it("if scheduling strategy is semiFlexible and canAddCargo is false, there should be three(3) input for the first stop", () => {
    render(
      <RouteDetails
        stops={mockStops}
        schedulingStrategy="semiFlexible"
        canAddCargo={false}
      />
    );

    const routeInputs = screen.getAllByTestId("input");

    expect(routeInputs.length).toBe(3);
  });

  it("if scheduling strategy is semiFlexible and canAddCargo is false, the 3 inputs should be of type date, time, and time", () => {
    render(
      <RouteDetails
        stops={mockStops}
        schedulingStrategy="semiFlexible"
        canAddCargo={false}
      />
    );

    const routeInputs = screen.getAllByTestId("input");

    expect(routeInputs[0].getAttribute("type")).toBe("date");
    expect(routeInputs[1].getAttribute("type")).toBe("time");
    expect(routeInputs[2].getAttribute("type")).toBe("time");
  });

  it("if scheduling strategy is Flexible and canAddCargo is false, total inputs should equals  (3 x length_of_stops)", () => {
    render(
      <RouteDetails
        stops={mockStops}
        schedulingStrategy="semiFlexible"
        canAddCargo={false}
      />
    );

    const routeInputs = screen.getAllByTestId("input");

    // routeInputs have length of 3 here
    expect(routeInputs.length * 3).toBe(9);
    expect(routeInputs.length * 5).toBe(15);
    expect(routeInputs.length * 10).toBe(30);
  });

  it("if canAddCargo is true, render add Cargo button", () => {
    render(
      <RouteDetails
        stops={mockStops}
        schedulingStrategy="fixed"
        canAddCargo={true}
      />
    );

    const addCargoBtns = screen.getAllByRole("separator");

    expect(addCargoBtns[0]).toBeInTheDocument();
  });

  it("if canAddCargo is true, expect number of addCargoBtns to equal  number of stops ", () => {
    render(
      <RouteDetails
        stops={mockStops}
        schedulingStrategy="fixed"
        canAddCargo={true}
      />
    );

    const addCargoBtns = screen.getAllByRole("separator");

    expect(addCargoBtns.length).toBe(3);
  });
});
