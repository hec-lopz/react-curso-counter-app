import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en <CounterApp/>", () => {
  const initialValue = 10;

  test("Debe hacer match con el snapshot", () => {
    render(<CounterApp value={initialValue} />);

    expect(screen).toMatchSnapshot();
  });

  test("Debe mostrar el valor inicial de 100", () => {
    render(<CounterApp value={100} />);

    const counter = screen.getByRole("heading", { level: 2 });

    expect(counter.innerHTML).toContain("100");
  });

  test("Debe incrementar con el boton +1", () => {
    render(<CounterApp value={initialValue} />);

    const btn = screen.getByRole("button", { name: "btn-add" });
    fireEvent.click(btn);

    expect(screen.getByText(`${initialValue + 1}`)).toBeTruthy();
  });
  test("Debe decrementar con el boton -1", () => {
    render(<CounterApp value={initialValue} />);

    const btn = screen.getByRole("button", { name: "btn-subtract" });
    fireEvent.click(btn);

    expect(screen.getByText(`${initialValue - 1}`)).toBeTruthy();
  });

  test("Debe funcionar el boton reset", () => {
    render(<CounterApp value={initialValue} />);

    const resetBtn = screen.getByRole("button", { name: "btn-reset" });
    const addBtn = screen.getByRole("button", { name: "btn-add" });
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);

    fireEvent.click(resetBtn);

    expect(screen.getByText(`${initialValue}`)).toBeTruthy();
  });
});
