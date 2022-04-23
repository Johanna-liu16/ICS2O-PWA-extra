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
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  document.getElementById("hello-world").innerHTML = "<p>Hello, World!</p>"
}

/**
 * This function converts fahrenheit.
 */
function calculate() {
  // input
  const F = parseInt(document.getElementById("fahrenheit-degrees").value)

  // process
  const celsius = ((F - 32) * 5) / 9

  // output
  document.getElementById("answers").innerHTML =
    "The degrees in celsius is: " + celsius.toFixed(2) + " °C"
}
