import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import UserDetails from "./UserDetails";
import { storage } from "@/utils/localStorage";
import { MOCK_USER } from "@/test-utils/mockData";

jest.mock("@/utils/localStorage");

describe("UserDetails Integration Tests", () => {
  test("POS-01: Renders all user sections when valid ID is provided", () => {
    (storage.getAllUsers as jest.Mock).mockReturnValue([MOCK_USER]);

    render(
      <MemoryRouter initialEntries={["/dashboard/users/1"]}>
        <Routes>
          <Route path="/dashboard/users/:id" element={<UserDetails />} />
        </Routes>
      </MemoryRouter>,
    );

    // Assert key sections are present
    expect(screen.getByText(/Personal Information/i)).toBeInTheDocument();
    expect(screen.getByText(/Education and Employment/i)).toBeInTheDocument();
    expect(
      screen.getByText(MOCK_USER.personalInfo.fullName),
    ).toBeInTheDocument();
  });

  test("NEG-01: Shows error state when user is missing from LocalStorage", () => {
    (storage.getAllUsers as jest.Mock).mockReturnValue([]);

    render(
      <MemoryRouter initialEntries={["/dashboard/users/999"]}>
        <Routes>
          <Route path="/dashboard/users/:id" element={<UserDetails />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText(/user not found/i)).toBeInTheDocument();
  });
});
