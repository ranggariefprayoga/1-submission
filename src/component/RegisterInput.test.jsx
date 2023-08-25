/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */

/* eslint-disable linebreak-style */

/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */

/* eslint-disable linebreak-style */
import React from "react";
import { describe, expect, it, afterEach, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as matchers from "@testing-library/jest-dom/matchers";
import RegisterInput from "./RegisterInput";

/**
  Scenario unit test RegisterInput component :
 * - should handle name typing correctly
 * - should handle email typing correctly
 * - should handle password typing correctly
 * - should call register function when register button is clicked
 */

expect.extend(matchers);

describe("RegisterInput component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should handle name typing correctly", async () => {
    render(<RegisterInput register={() => {}} />);
    const nameInput = await screen.getByPlaceholderText("Name");

    await userEvent.type(nameInput, "nametest");

    expect(nameInput).toHaveValue("nametest");
  });

  it("should handle email typing correctly", async () => {
    render(<RegisterInput register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText("Email");

    await userEvent.type(emailInput, "emailtest");

    expect(emailInput).toHaveValue("emailtest");
  });

  it("should handle password typing correctly", async () => {
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText("Password");

    await userEvent.type(passwordInput, "passwordtest");

    expect(passwordInput).toHaveValue("passwordtest");
  });

  it("should call register function when register button is clicked", async () => {
    const mockLogin = vi.fn();
    render(<RegisterInput register={mockLogin} />);
    const nameInput = await screen.getByPlaceholderText("Name");
    await userEvent.type(nameInput, "nametest");
    const emailInput = await screen.getByPlaceholderText("Email");
    await userEvent.type(emailInput, "emailtest");
    const passwordInput = await screen.getByPlaceholderText("Password");
    await userEvent.type(passwordInput, "passwordtest");
    const button = await screen.getByRole("button");

    await userEvent.click(button);

    expect(mockLogin).toBeCalledWith({
      name: "nametest",
      email: "emailtest",
      password: "passwordtest",
    });
  });
});
