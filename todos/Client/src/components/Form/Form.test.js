import { Form } from "./Form";
import { render, screen } from "@testing-library/react";

describe("renderiza",()=>{
  it("deberia renderizar",()=>{
    const { getByText } = render(<Form />);
    console.log(getByText(/Tipo de Nota/i));
    expect(getByText(/Tipo de Nota/i)).toBeTruthy()
  })
})