// Copyright (c) 2022 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-extra/sw.js", {
    scope: "/ICS2O-PWA-extra/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  document.getElementById("hello-world").innerHTML = "<p>Hello, World!</p>"
}

/**
 * This function calculates volume of a sphere.
 */
function calculate() {
  // input
  const radius = parseInt(document.getElementById("radius-of-pyramid").value)

  // process
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)

  // output
  document.getElementById("answers").innerHTML =
    "Volume is: " + volume.toFixed(2) + " cm³"
}
