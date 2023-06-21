/*
 * Copyright (C) Aditya 2023 <github.com/TriStaRvOiD>
 * This file is part of the code for tristarvoid.github.io
 * The code for tristarvoid.github.io is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 *
 * The code for tristarvoid.github.io is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with the code for tristarvoid.github.io. If not, see <https://www.gnu.org/licenses/>.
 */

let themeToggle = document.querySelector(".theme-toggle");
let darkMode = document.querySelector(".dark-theme");

themeToggle.addEventListener("click", () => {
  darkMode.classList.toggle("active");
  themeToggle.classList.toggle("active");
});
