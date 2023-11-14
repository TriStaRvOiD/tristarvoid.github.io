/*
 * Copyright (C) Aditya 2023 <github.com/TriStaRvOiD>
 * This file is part of the code for tristarvoid.github.io
 * The code for tristarvoid.github.io is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 *
 * The code for tristarvoid.github.io is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with the code for tristarvoid.github.io. If not, see <https://www.gnu.org/licenses/>.
 */

const darkMode = document.querySelector(".dark-theme");
const container = document.querySelector(".container");
const imgElement = document.querySelector(".logo");

document.addEventListener('click', function(event) {
  if ( event.target.closest(".logo")
    || event.target.closest("h1") 
    || event.target.closest("#github-logo") 
    || event.target.closest("#reddit-logo") 
    || event.target.closest("#mastodon-logo")
  ) return
  
  container.style.left = event.clientX + 'px';
  container.style.top = event.clientY + 'px';
  darkMode.classList.toggle("active");
}, true);
