import React from "react";
import { RiSearchLine, RiNotification2Line } from "react-icons/ri";
import "./Header.css";

export const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-dark navbar-expand-md bg-dark justify-content-center fixed-top">
        <div class="container">
          <a href="/" class="navbar-brand d-flex w-50 me-auto">
            Movied
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsingNavbar3"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
            <ul class="navbar-nav w-100 justify-content-between">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  MOVIES
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  TV SHOWS
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PAGES
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-left dropdown-menu-dark"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Privacy-Policy
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Pricing
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item"></li>
            </ul>
            <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <RiSearchLine />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <RiNotification2Line />
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
                    className="avatar-icon"
                    alt=""
                  />
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-left dropdown-menu-dark"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Manage Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Pricing Plan
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
